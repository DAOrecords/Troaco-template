import React from 'react';
import { Link } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';


/** Top Menu for Troaco */
export default function TopMenu({setShowWallet, showWallet, setGuestBook}) {
  return (
    <nav aria-label='Site Navigation' id="troacoTopNav">      
      <button onClick={() => setGuestBook(true)} className="controlsButton troacoMenuButton" >GUESTBOOK</button>
      <Link to={'/mynfts'} className="controlsButton troacoMenuButton">MY NFTS</Link>
      <Wallet 
        setShowWallet={setShowWallet}
        showWallet={showWallet}
      />
    </nav>
  )
}