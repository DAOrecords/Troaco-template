import React, { useEffect, useState } from "react";
import { debounce } from "debounce";
import { checkIfAccountExists, transferNft } from '../utils'


export default function TransferModal({token, newAction}) {
  const [receiver, setReceiver] = useState("");
  const [accountExists, setAccountExists] = useState(false);
  
  
  const title = token.metadata.title;
  const description = token.metadata.description;
  const imageCID = token.metadata.media;
  const imageHash = token.metadata.media_hash;
  const extra = JSON.parse(token.metadata.extra);
  const musicCID = extra.music_cid;
  const musicHash = extra.music_hash;

  async function handleInputChange(accountName) {
    console.log(await checkIfAccountExists());
    /*debounce(() => {
      console.log(checkIfAccountExists());
      setAccountExists(x);
    }, 200)*/
    setReceiver(accountName);
  }

  function transfer() {
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


  return (
    <div className="nftDetailsModal">
      Modal
      <p>ID: {token.token_id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Image CID: {imageCID}</p>
      <p>Image Hash: {imageHash}</p>
      <p>Music CID: {musicCID}</p>
      <p>Music Hash: {musicHash}</p>
      <p>Parent: {extra.parent}</p>
      <p>Generation: {extra.generation}</p>
      <label>Receiver: </label>
      <input type={"text"} value={receiver} onChange={(e) => handleInputChange(e.target.value)} />
      <button onClick={transfer}>SEND</button>
    </div>
  );
}