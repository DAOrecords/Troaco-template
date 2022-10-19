import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, getListForAccount } from '../utils';
import 'regenerator-runtime/runtime';
import TopMenu from './TopMenu';
import Landing from './Landing';
import Logo from './Logo';
import BottomMenu from './BottomMenu';
import MyNFTs from './MyNFTs';
import globeVideo from '../assets/globeVideo.mp4';
import GuestBook from './GuestBook';
import { useNavigate } from 'react-router-dom';


export default function Troaco({newAction, openGuestBook, setGuestBook, setShowWallet, showWallet, isMyNfts}) {
  const [selected, setSelected] = useState(0);
  const [nftList, setNftList] = React.useState([]); 
  const [myNftList, setMyNftList] = React.useState(null);
  const mobileView = window.innerWidth < 1200;
  const navigate = useNavigate();

  const bgStyle = {
    //backgroundImage: `url(${globeBg})`,
    background: "black",
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-x",
  }

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    window.history.pushState({}, document.title, "/" + "");
    if (urlParams.includes('errorCode')) {
      const urlObj = new URLSearchParams(document.location.search);
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: urlObj.get('errorCode'),
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      navigate('/mynfts');
      newAction({
        successMsg: "Success!", successMsgDesc: "You bought a new NFT!",
      });
    }

    const buyable = (await getBuyableTokens()).slice(0,13);       // We filter out the BeatDAO NFTs that are only here  by accident
    const orderedBuyable = buyable.sort(function(a, b) {
      const firstNum = a.token_id.slice(10, a.token_id.lastIndexOf("-"));
      const secondNum = b.token_id.slice(10, b.token_id.lastIndexOf("-"));
      return firstNum - secondNum;
    });

    const listForLoggedInUser = await getListForAccount();
  
    setNftList(orderedBuyable);
    setMyNftList(listForLoggedInUser);
  }, [])

  
  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
      <TopMenu mobileView={mobileView} setShowWallet={setShowWallet} showWallet={showWallet} setGuestBook={setGuestBook} />
        {!mobileView && <Logo />}

        <video id="bgVideo" autoPlay loop muted>
          <source src={globeVideo} type="video/mp4" />  
        </video>
        
        <main style={bgStyle}>
          
          {isMyNfts ? 
            <MyNFTs newAction={newAction} nftList={myNftList} mobileView={mobileView} selected={selected} setSelected={setSelected} />
          : 
            <Landing newAction={newAction} nftList={nftList} mobileView={mobileView} selected={selected} setSelected={setSelected} />
          }
        </main>

        {(openGuestBook && <GuestBook 
          newAction={newAction}
          setOpenModal={setGuestBook}
        />)}

      {!mobileView && <BottomMenu />}
    </>
  )
}
