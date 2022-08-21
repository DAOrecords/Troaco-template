import React, { useState, useEffect } from 'react';
import { utils } from 'near-api-js';
import { buyNFTfromVault, verify_sha256 } from '../../utils';
import SlimAudioPlayer from '../../Common/SlimAudioPlayer';
import closeIcon from '../../assets/close.svg';


export default function TokenModal({id, metadata, newAction, setOpenModal}) {
  const extra = JSON.parse(metadata.extra);

  function buyNFT() {
    const buyPromise = new Promise(async (resolve, reject) => {
      const buyResult = await buyNFTfromVault(id, extra.original_price);
      if (buyResult) {
        resolve("Buying the NFT was successul (message from promise)");
      } else {
        reject("Buying the NFT was not successul (message from promise)");
      }
    });
    newAction({
      thePromise: buyPromise, 
      pendingPromiseTitle: "Prepairing transaction...", pendingPromiseDesc: "plase wait",
      successPromiseTitle: "Redirecting to transaction", successPromiseDesc: "Please sign the transaction in the next screen!",
      errorPromiseTitle: "Redirecting to transaction", errorPromiseDesc: "Please sign the transaction in the next screen!"
    });
  }

  function close(e) {
    if (e.key === 'Escape') setOpenModal(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [])
  
  
  return (
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
            <div className="troacoModalRightSideContent">
              {metadata.description}
            </div>
            <div className="troacoModalBigText">
              {utils.format.formatNearAmount(JSON.parse(metadata.extra).original_price)} NEAR
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
            <button onClick={buyNFT} id="nftBuyButton"></button>
          </div>

          <button id="troacoModalClose" onClick={() => setOpenModal(false)}>
            <img src={closeIcon} alt={'X'}></img>
          </button>
        </div>
      </div>
    </div>
  );
}