import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import AudioPlayerNftStorage from "../Common/AudioPlayerNftStorage";
import { getAllFromRoot, getContractName, getNftDetails, transferNft, verify_sha256 } from '../utils';
import artistLists from '../artistLists.json';


export default function TransferModal({newAction}) {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  const [receiver, setReceiver] = useState("");
  const [transferInputOpen, setTransferInputOpen] = useState(false);
  const [selected, setSelected] = useState("info");
  const [all, setAll] = useState([]);                                     // All NFTs that belong to same root. Including root.
  const [vault, setVaultName] = useState("");  
  const [token, setToken] = useState(null);
  const [extra, setExtra] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const artistList = artistLists[getArtistIndex(params.tokenId)];
  

  function close(e) {
    if (e.key === 'Escape') navigate('/my-nfts')
  }
  
  useEffect(async () => {
    const urlParams = window.location.search;
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: "errorCode",
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      newAction({
        successMsg: "NFT transfered!", successMsgDesc: "You successfully transfered the NFT!",
      });
    }
  }, []);

  useEffect(async () => {
    setToken(null);
    setExtra(null);

    const vaultName = await getContractName();
    setVaultName(vaultName);
    
    const fetchedToken = await getNftDetails(params.tokenId);
    setToken(fetchedToken);
    setExtra(JSON.parse(fetchedToken.metadata.extra));
    setIsOwner(fetchedToken.owner_id === window.accountId);
    
    const FonoRootRegEx = /fono-root-[0-9]{1,9}/;
    const root = fetchedToken.token_id.match(FonoRootRegEx)[0];
    const fetchResult = await getAllFromRoot(root);
    setAll(fetchResult);

    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [location])
  

  async function handleInputChange(accountName) {
    setReceiver(accountName);
  }

  async function transfer() {
    await fetch(`https://nearblocks.io/api/account/balance?address=${receiver}`)                        // Test if account exists or not (by account balance)
      .then((res) => res.json())
      .then((json) => {
        if (json.balance) {                                                                             // Initiate the transfer if the balance field exists (otherwise we would have a message field instead)
          const transferPromise = new Promise(async (resolve, reject) => {
            const transferResult = await transferNft(token.token_id, receiver);
            if (transferResult) {
              resolve("success(transfer)");
            } else {
              reject("reject(transfer)");
            }
          })
          newAction({
            thePromise: transferPromise, 
            pendingPromiseTitle: "Prepairing transaction...", pendingPromiseDesc: "plase wait",
            successPromiseTitle: "Redirecting to transaction", successPromiseDesc: "Please sign the transaction in the next screen!",
            errorPromiseTitle: "Redirecting to transaction", errorPromiseDesc: "Please sign the transaction in the next screen!"
          });
        }
        else newAction({                                                                                // Toast message if it does not exist
          errorMsg: "This address does not exist. Please check the receiver address!", errorMsgDesc: "",
        });
      })
      .catch((err) => {                                                                                 // Toast message if there was an error with the API request
        console.error("There was an error while testing if user exists or not. ", err);
        newAction({
          errorMsg: "There was an error while testing the address. Please try again!", errorMsgDesc: "",
        });
        return;
      });
  }


  if (!token || !extra) return <p>Loading...</p>;

  return (    
    <div className="nftDetailsModal" key={token.id}>
      <div id="nftDetailsModalPicture">
        <img src={`https://daorecords.io:8443/fetch?cid=${token.metadata.media}`} alt={token.metadata.title}></img>
      </div>
      <div id="nftDetailsModalRightSide">
        <button id="nftDetailsModalClose" onClick={() => navigate('/my-nfts')}><CloseButton /></button>
        <div id="nftDetailsModalTitleAndGen">
          <p>{token.metadata.title}</p>
          <p>#{extra.generation}</p>
        </div>
        <ul id="nftDetailsModalArtistList">
          {artistList.map((artist, i) => (
            <li key={"artist-" + i}>
              {artist.name}
            </li>
          ))}
        </ul>
        <div className="nftDetailsModalMenuLine">
          <button 
            onClick={() => setSelected("info")} 
            className={"nftDetailsModalMenuButton " + (selected === "info" ? "nftDetailsModalMenuSelected" : null)}
          >
            INFO
          </button>
          <button 
            onClick={() => setSelected("owners")} 
            className={"nftDetailsModalMenuButton " + (selected === "owners" ? "nftDetailsModalMenuSelected" : null)}
          >
            OWNERS
          </button>
          <button 
            onClick={() => setSelected("history")}
            className={"nftDetailsModalMenuButton " + (selected === "history" ? "nftDetailsModalMenuSelected" : null)}
          >
            HISTORY
          </button>
        </div>
        <div className={"nftDetailsModalSwitchableBox " + (selected !== "info" ? "scroll" : null)}>
          {(selected === "info") && (
            <>
              {token.metadata.description}
            </>
          )}

          {(selected === "owners") && (
            <>
              {all.map((nft) => (
                <div className="nftDetailsModalRightOwnerDiv">
                  {nft.owner_id === vault ? 
                    <p className="nftDetailsModalRightAccount">Vault</p>
                  : 
                    <p className="nftDetailsModalRightAccount">{nft.owner_id}</p>
                  }
                  <p className="nftDetailsModalRightGen">GEN: {extra.generation}</p>
                </div>
              ))}
            </>
          )}

          {(selected === "history") && (
            <>
              <p></p>
            </>
          )}
        </div>
        <div id="nftDetailsModalOwnerBox">
          <p>OWNER</p>
          <p>{token.owner_id}</p>
        </div>
        <div id="nftDetailsModalAudio">
          {true ? 
            <AudioPlayerNftStorage 
              nftStorageLink={`https://daorecords.io:8443/fetch?cid=${extra.music_cid}`}
              color={"#121212"}
              dark={true}
            />
            :
            <p className="loadingLabel">loading music...</p>
          }
        </div>
        {isOwner && 
          <div id="nftDetailsModalButtons">
            <button onClick={() => setTransferInputOpen(true)}>Transfer</button>
          </div>
        }
      </div>

      {transferInputOpen && (<div id="transferPopupWrapper" onClick={() => setTransferInputOpen(false)}>
        <div id="transferPopup" onClick={e => e.stopPropagation()} >
          <p className="transferPopupTitle">Confirm Transfer</p>
          <div>
            <p className="transferPopupNormalText transferPopupInline">{"You are about to send "}
            <p className="transferPopupBoldText transferPopupInline">
              {token.metadata.title} #{extra.generation}</p>
            </p>
            <p className="transferPopupNormalText transferPopupInline">{" to:"}</p>
          </div>
          <label className="visually-hidden">Receiver</label>
          <input 
            type={"text"} 
            value={receiver} 
            onChange={(e) => handleInputChange(e.target.value)} 
            className="transferPopupInput" 
          />
          <p className="transferPopupNormalText">You will be redirected to NEAR Web Wallet to confirm your transaction.</p>
          <button className="transferPopupButton" onClick={transfer}>Transfer</button>
        </div>
      </div>)}
    </div>
  );
}


function CloseButton() {
  return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 9.0625H15.625V19.375H4.375V9.0625H7.5" stroke="#121212" strokeMiterlimit="10"/>
      <path d="M13.4375 5L10 0.9375L6.5625 5M10 13.75V0.9375V13.75Z" stroke="#121212" strokeMiterlimit="10"/>
    </svg>
  )
}

function getArtistIndex(tokenId) {
  console.log("tokenId inside getArtistIndex: ", tokenId);

  /** We will manually need to update this list throughout the SoundSplash */
  if (tokenId.includes('fono-root-0-') || tokenId === 'fono-root-0') return 2;
  if (tokenId.includes('fono-root-2-') || tokenId === 'fono-root-2') return 0;
  if (tokenId.includes('fono-root-3-') || tokenId === 'fono-root-3') return 1;
  if (tokenId.includes('fono-root-4-') || tokenId === 'fono-root-4') return 3;
  if (tokenId.includes('fono-root-5-') || tokenId === 'fono-root-5') return 4;
  if (tokenId.includes('fono-root-6-') || tokenId === 'fono-root-6') return 5;
  if (tokenId.includes('fono-root-7-') || tokenId === 'fono-root-7') return 6;
  if (tokenId.includes('fono-root-8-') || tokenId === 'fono-root-8') return 7;
  if (tokenId.includes('fono-root-9-') || tokenId === 'fono-root-9') return 8;
  if (tokenId.includes('fono-root-10-') || tokenId === 'fono-root-10') return 9;
  if (tokenId.includes('fono-root-11-') || tokenId === 'fono-root-11') return 11;
  if (tokenId.includes('fono-root-12-') || tokenId === 'fono-root-11') return 12;
  if (tokenId.includes('fono-root-13-') || tokenId === 'fono-root-11') return 13;
  return 10;
}