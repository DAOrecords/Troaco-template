import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import Wallet from './Wallet';
import hamburger from '../assets/hamburger.svg';


/** Top Menu for Troaco */
export default function TopMenu({mobileView, setShowWallet, showWallet, setGuestBook}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function hamburgerClicked() {
    setMenuOpen(!menuOpen);
    setShowWallet(false);
  }

  function guestbookClicked() {
    setGuestBook(true);
    setMenuOpen(false);
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
            {(location.pathname === '/') ? 
              <Link to={'/mynfts'} className="hamburgerElement" onClick={() => setMenuOpen(false)}>MY NFTS</Link>
            : 
              <Link to={'/'} className="controlsButton hamburgerElement" onClick={() => setMenuOpen(false)}>Home</Link>
            }
            <a onClick={guestbookClicked} className="controlsButton hamburgerElement">Guest Book</a>
            <a href={'https://twitter.com/DAOrecords_/status/1561524713309933568?t=L4WD9KAsgmqY5ON_tWN-wA&s=19'} className="controlsButton hamburgerElement">
              Twitter
            </a>
            <a href={'https://instagram.com/arturo_sandoval_arocha?igshid=YmMyMTA2M2Y='} className="controlsButton hamburgerElement">
              Instagram
            </a>
        </div>
      )}
    </nav>
  )
}