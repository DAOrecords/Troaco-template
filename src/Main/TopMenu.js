import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';
import hamburger from '../assets/hamburger.svg';


/** Top Menu for Troaco */
export default function TopMenu({mobileView, setShowWallet, showWallet, setGuestBook}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function hamburgerClicked() {
    setMenuOpen(!menuOpen);
    setShowWallet(false);
  } 

  return (
    <nav aria-label='Site Navigation' id="troacoTopNav">      
      {mobileView ? (
        <button onClick={hamburgerClicked} className="hamburgerIcon">
          <img src={hamburger} alt='Menu'></img>
        </button>
      ) : (
        <>
          <button onClick={() => setGuestBook(true)} className="controlsButton troacoMenuButton" >GUESTBOOK</button>
          <Link to={'/mynfts'} className="controlsButton troacoMenuButton">MY NFTS</Link>
        </>
      )}
      <Wallet 
        setShowWallet={setShowWallet}
        showWallet={showWallet}
      />

      {menuOpen && (
        <div id="dropdownContainer" className="mobileDropdownContainer">
            <Link to={'/my-nfts'} className="hamburgerElement">MY NFTS</Link>
            {/** List of the drops, we will append this as we go */}
            <Link to={'/weekone'} className="controlsButton hamburgerElement">Week One</Link>
            <Link to={'/weektwo'} className="controlsButton hamburgerElement">Week Two</Link>
            <Link to={'/weekthree'} className="controlsButton hamburgerElement">Week Three</Link>

            <Link to={'/weekten'} className="controlsButton hamburgerElement">Week Ten</Link>
            <Link to={'/weekeleven'} className="controlsButton hamburgerElement">Week Eleven</Link>
        </div>
      )}
    </nav>
  )
}