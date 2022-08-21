import React from 'react';
import arrowLeft from '../../assets/arrow_left.svg';
import arrowRight from '../../assets/arrow_right.svg';


export default function Arrows({selected, setSelected, max}) {
  function leftClicked(e) {
    e.stopPropagation();
    if (selected > 0) {
      setSelected(selected-1);
    } else {
      setSelected(0);
    }
  }

  function rightClicked(e) {
    e.stopPropagation();
    if (selected < max) {
      setSelected(selected+1);
    } else {
      setSelected(max);
    }
  }

  const leftStyle = {
    position: "absolute",
    zIndex: "5",
    background: "transparent",
    border: "none",
    top: "25%",
    left: "3vw"
  }

  const rightStyle = {
    position: "absolute",
    zIndex: "5",
    background: "transparent",
    border: "none",
    top: "25%",
    right: "3vw"
  }


  return (
    <>
      <button onClick={(e) => leftClicked(e)} style={leftStyle}>
        <img src={arrowLeft} alt={'<-'} />
      </button>
      
      <button onClick={(e) => rightClicked(e)} style={rightStyle}>
        <img src={arrowRight} alt={'->'}/>
      </button>
    </>
  )
}
