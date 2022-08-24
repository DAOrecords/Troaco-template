import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, verify_sha256 } from '../utils';
import 'regenerator-runtime/runtime';
import TopMenu from './TopMenu';
import Landing from './Landing';
import Logo from './Logo';
import BottomMenu from './BottomMenu';
import MyNFTs from './MyNFTs';
import globeBg from '../assets/globe_bg.jpg';
import GuestBook from './GuestBook';


export default function Troaco({newAction, openGuestBook, setGuestBook, setShowWallet, showWallet, isMyNfts}) {
  const [selected, setSelected] = useState(0);

  const bgStyle = {
    backgroundImage: `url(${globeBg})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-x",
  }

  
  const screenWidth = window.innerWidth;
  const [nftList, setNftList] = React.useState([]);  

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: URLSearchParams.get('errorCode'),
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      newAction({
        successMsg: "Success!", successMsgDesc: "You bought a new NFT!",
      });
    }

    const buyable = await getBuyableTokens();
    const orderedBuyable = buyable.sort(function(a, b) {
      const firstNum = a.token_id.slice(10, a.token_id.lastIndexOf("-"));
      const secondNum = b.token_id.slice(10, b.token_id.lastIndexOf("-"));
      return firstNum - secondNum;
    })
  
    setNftList(orderedBuyable);
  }, [])

  if (nftList.length === 0) return <p>Loading...</p>

  
  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
        <TopMenu setShowWallet={setShowWallet} showWallet={showWallet} setGuestBook={setGuestBook} />
        <Logo />

        <main style={bgStyle}>
          {isMyNfts ? 
            <MyNFTs newAction={newAction} nftList={nftList} selected={selected} setSelected={setSelected} />
          : 
            <Landing newAction={newAction} nftList={nftList} selected={selected} setSelected={setSelected} />
          }
        </main>

        {(openGuestBook && <GuestBook 
          newAction={newAction}
          setOpenModal={setGuestBook}
        />)}

        <BottomMenu />
    </>
  )
}