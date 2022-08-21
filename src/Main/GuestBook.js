import React, { useEffect, useState } from 'react';
import { getGuestBookEntries, sendGuestBookEntry } from '../../utils';
const moment = require("moment");
import closeIcon from '../../assets/close.svg';


export default function GuestBook({newAction, setOpenModal}) {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");
  
  useEffect(async () => {
    const fetchedEntries = await getGuestBookEntries();
    //setEntries(fetchedEntries);
    setEntries(mockEntries);
  }, [])
  
  function inputHandler(newText) {
    if ((new TextEncoder().encode(newText)).length < 160) {
      setText(newText);
    }
  }

  function sendEntry() {
    let href = window.location.href;
    href = href.slice(0, href.indexOf("?")+1);
    history.pushState(null, "Guestbook", href + "?guestbook=1");

    const sendPromise = new Promise(async (resolve, reject) => {
      const sendResult = await sendGuestBookEntry(text);
      if (sendResult) {
        resolve("Creating new guestbook entry was successfull (message from promise)");
      } else {
        reject("Creating new guestbook entry was not successull (message from promise)");
      }
    });
    newAction({
      thePromise: sendPromise, 
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
  }, []);

 
  return (
    <>
    <div id="transferPopupWrapper" onClick={() => setOpenModal(false)}>
      <div className="troacoModal" onClick={(e) => e.stopPropagation()}>
        <div id="troacoModalContent">
          
          <div id="guestbookMessages">
            {entries.map((entry) => (
              <div className="guestbookMessage">
                <p className="guestbookMessageSender">{entry.sender}</p>
                <p className="guestbookMessageTime">{moment(new Date(entry.date)).format('h:mm a MMMM Do YYYY')}</p>
                <p className="guestbookMessageMessage">{entry.message}</p>
              </div>
            ))}
          </div>

          <div id="troacoModalRightSide" className="troacoModalGuestbookRightSide">
            <div id="troacoModalGuestbookCurrentAccount">
              {window.accountId}
            </div>
            <textarea onChange={(e) => inputHandler(e.target.value)} placeholder={"Type here..."} value={text} id="guestbookInput" >
            </textarea>
          </div>

          <div id="troacoModalAudio"></div>
          <div id="troacoModalButtons">
            <button onClick={sendEntry} id="guestbookSendButton"></button>
          </div>
          
          <button id="troacoModalClose" onClick={() => setOpenModal(false)}>
            <img src={closeIcon} alt={'X'}></img>
          </button>
          
        </div>
      </div>
    </div>
    </>
  );
}


const mockEntries = [
  {
    sender: "lelen.near",
    date: new Date(2022, 5, 22, 5, 42).toDateString(),
    message: "Hi"
  },
  {
    sender: "optr.near",
    date: new Date(2022, 6, 22, 6, 38).toDateString(),
    message: "Szia"
  },
  {
    sender: "vandal.near",
    date: new Date(2022, 5, 24, 2, 55).toDateString(),
    message: "Hello"
  },  
  {
    sender: "lelen.near",
    date: new Date(2022, 5, 22, 5, 42).toDateString(),
    message: "Hi"
  },
  {
    sender: "optr.near",
    date: new Date(2022, 6, 22, 6, 38).toDateString(),
    message: "Szia"
  },
  {
    sender: "vandal.near",
    date: new Date(2022, 5, 24, 2, 55).toDateString(),
    message: "Hello"
  }
]