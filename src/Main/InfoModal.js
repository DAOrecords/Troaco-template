import React, { useState, useEffect } from 'react';
import { utils } from 'near-api-js';
import { getAllFromRoot, transferNft } from '../../utils';
import SlimAudioPlayer from '../../Common/SlimAudioPlayer';
import nearLogo from '../../assets/near_white.svg';
import closeIcon from '../../assets/close.svg';


export default function InfoModal({id, metadata, newAction, setOpenModal}) {
  const extra = JSON.parse(metadata.extra);
  const [receiver, setReceiver] = useState("");
  const [transferInputOpen, setTransferInputOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("info");
  const [nftTree, setNftTree] = useState([]);
  const [events, setEvents] = useState(mockEvents);                   // NFT events, like buy or transfer
  

  function close(e) {
    if (e.key === 'Escape') setOpenModal(false);
  }

  async function handleInputChange(accountName) {
    setReceiver(accountName);
  }

  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

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

    const FonoRootRegEx = /fono-root-[0-9]{1,9}/;
    const root = id.match(FonoRootRegEx)[0];
    const fetchResult = await getAllFromRoot(root);
    setNftTree(fetchResult);
    console.log("tree: ", fetchResult)
  }, []);

  function secondaryMarketBuy(id) {
    window.alert(`This is not implemented. The ID of the clicked NFT is ${id}`);
  }

  async function transfer() {
    await fetch(`https://nearblocks.io/api/account/balance?address=${receiver}`)                        // Test if account exists or not (by account balance)
      .then((res) => res.json())
      .then((json) => {
        if (json.balance) {                                                                             // Initiate the transfer if the balance field exists (otherwise we would have a message field instead)
          const transferPromise = new Promise(async (resolve, reject) => {
            const transferResult = await transferNft(id, receiver);
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
  
  
  return (
    <>
      <div id="transferPopupWrapper" onClick={() => setOpenModal(false)}>
        <div className="troacoModal" onClick={(e) => e.stopPropagation()}>
          <div id="troacoModalContent">
            <div id="troacoModalPicture">
              <img src={`https://daorecords.io:8443/fetch?cid=${metadata.media}`} alt={metadata.title}></img>
            </div>
            <div id="troacoModalRightSide">
              <div id="troacoModalTitleLine">
                <h2 className="troacoModalBigText">{metadata.title} </h2>
                <h2 className="troacoModalBigText troacoModalLeftSpacer">#{extra.generation}</h2>
              </div>
              
              {selectedView === "info" && (
                <div className="troacoModalRightSideContent">
                  {metadata.description}
                </div>
              )}

              {selectedView === "owners" && (
                <div className="troacoModalRightSideContent">
                  <ul id="troacoModalListContainer">
                    {nftTree.map((nft, i) => {
                      const extra = JSON.parse(nft.metadata.extra);
                      if (nft.owner_id !== "nft.soundsplash.near") return (
                        <li className="troacoModalSmallGlass" key={i}>
                          <div className="toacoModalSmallGlassUpperLine">
                            <p className="troacoModalSmallGlassElement troacoModalStrongText">{nft.owner_id}</p>
                            <p className="troacoModalSmallGlassElement troacoModalStrongText troacoModalSmallGlassGenMargin"># {extra.generation}</p>
                          </div>
                          <div className="troacoModalSmallGlassBottomLine">
                            {(i%2) ?
                            <>
                              <p className="troacoModalSmallGlassElement troacoModalWeakText">For sale for {"{{NOT IMPLEMENTED}} "} 
                              <img className="troacoModalSmallGlassPriceMargin" src={nearLogo}></img></p>
                              <button 
                                className="troacoModalSmallGlassElement troacoSmallBuy"
                                onClick={() => secondaryMarketBuy(nft.token_id)} >
                              </button>
                            </>
                            :
                            <p className="troacoModalSmallGlassElement troacoModalWeakText">Not for sale</p>
                            }
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {selectedView === "history" && (
                <div className="troacoModalRightSideContent">
                  <ul id="troacoModalListContainer">
                  {events.map((event, i) => { console.log("event: ",event);return (
                    <li className="troacoModalSmallGlass" key={i}>
                      <div className="toacoModalSmallGlassUpperLine">
                        {(event.type === "buy") && 
                          <>
                            <p className="troacoModalSmallGlassElement troacoModalStrongText">{event.receiver}</p>
                            <p className="troacoModalSmallGlassElement troacoModalWeakText">&nbsp;bought this NFT from&nbsp;</p>
                            <p className="troacoModalSmallGlassElement troacoModalStrongText">{event.sender}</p>
                            <p className="troacoModalSmallGlassElement troacoModalWeakText">&nbsp;for {event.price}</p>
                            <img className="troacoModalSmallGlassPriceMargin" src={nearLogo}></img>
                          </>
                        }
                        {(event.type === "something_else") && <p className="troacoModalSmallGlassElement troacoModalStrongText">Something else</p>}
                      </div>
                      <div className="troacoModalSmallGlassBottomLine">
                        <p className="troacoModalSmallGlassElement troacoModalWeakText">{"{Should calculate date here}"}</p>
                      </div>
                    </li>
                  )})}
                  </ul>
                </div>
              )}


              <div id="troacoModalSwitchBox">
                <button 
                  className={selectedView === "info" ? "troacoModalMenuKnob troacoModalMenuSelected" : "troacoModalMenuKnob"}
                  onClick={() => setSelectedView("info")}
                >
                  Info
                </button>
                <button 
                  className={selectedView === "owners" ? "troacoModalMenuKnob troacoModalMenuSelected" : "troacoModalMenuKnob"}
                  onClick={() => setSelectedView("owners")}
                >
                  Owners
                </button>
                <button 
                  className={selectedView === "history" ? "troacoModalMenuKnob troacoModalMenuSelected" : "troacoModalMenuKnob"}
                  onClick={() => setSelectedView("history")}
                >
                  History
                </button>
              </div>
            </div>
            <div id="troacoModalAudio">
              {true ? 
                <SlimAudioPlayer cid={extra.music_cid}  color={"#FFFFFF"} dark={false} />
              :
                <p className="loadingLabel">loading music... </p>
              }
            </div>
            <div id="troacoModalButtons">
              <button onClick={() => setTransferInputOpen(true)} id="transferButton"></button>
            </div>

            <button id="troacoModalClose" onClick={() => setOpenModal(false)}>
              <img src={closeIcon} alt={'X'}></img>
            </button>
          </div>
        </div>
      </div>

      {transferInputOpen && (<div id="transferPopupWrapper" onClick={() => setTransferInputOpen(false)}>
        <div id="transferPopup" onClick={e => e.stopPropagation()} >
          <p className="transferPopupTitle">Confirm Transfer</p>
          <div>
            <p className="transferPopupNormalText transferPopupInline">{"You are about to send "}
            <p className="transferPopupBoldText transferPopupInline">
              {metadata.title} #{extra.generation}</p>
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
    </>
  );
}



const mockEvents = [
  {
    sender: "optr.near",
    receiver: "lelen.near",
    type: "buy",
    price: 25
  },{
    sender: "vandal.near",
    receiver: "lelen.near",
    type: "buy",
    price: 2
  },{
    sender: "vaibhav.near",
    receiver: "crans.near",
    type: "buy",
    price: 5
  }
]