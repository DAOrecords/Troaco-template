import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Arrows from './Arrows';
import BuyModal from './BuyModal';
import SongNavigation from './SongNavigation';


export default function Landing({selected, setSelected, mobileView, nftList, newAction}) {
  const listElementWidth = mobileView ? ( window.innerWidth / 3 ) : ( window.innerWidth / 7 );
  const multiplier = mobileView ? ( 1 ) : ( 3 );
  const bigMargin = mobileView ? ( 40 ) : ( 110 );
  const magicNumber = 0.19140936538680642;
  
  const [pos, setPos] = useState({x: (multiplier*listElementWidth) -bigMargin, y: 0});
  const [candidate, setCandidate] = useState(null);       // This might be the next centered element
  const [startPos, setStartPos] = useState(null);         // The starting X position of mouse when the dragging is started
  const [isBeingMoved, setIsBeingMoved] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  

  useEffect(() => {
    setSelected(0);
  }, []);

  const containerStyleTemp = {
    height: "100%",
  }

  const ulStyleTemp = {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    height: mobileView ? ( "80vh" ) : ( "100vh" ),
    width: "max-content",
    margin: "0",
    padding: "0",
  }
  
  const transitionStyleTemp = {
    transition: "transform 0.3s",             // centering animation
  }
  
  const liStyleTemp = {
    width: listElementWidth,
    height: listElementWidth,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "24px",
    color: "white",
  }

  const liStyleSelectedTemp = {
    marginLeft: mobileView ? ( `${bigMargin*1.5}px` ) : ( `${bigMargin}px` ),
    marginRight: `${bigMargin}px`,
    marginTop: `${-listElementWidth/2}px`,
    transition: "margin 0.3s ease-in",       // create space for the bubble animation
  }
  
  const bubbleStyleTemp = {
    margin: "25px",
    background: "rgba(217, 217, 217, 0.2)",
    fontFamily: 'VCR',
    fontStyle: "normal",
    textTransform: "uppercase",
    caretColor: "transparent",
    color: "#E0E0E0",
    fontWeight: 400,
    fontSize: mobileView ? ( "8px" ) : ( "12px" ),
    lineHeight: "14px",
    borderRadius: "500px",
    height: "80%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    textAlign: "center",
    transition: "width 0.3s, height 0.3s, transform 0.3s",         // bubble grow back animation
  }

  const bubbleStyleSelectedTemp = {
    color: "#FFFFFF",
    fontSize: mobileView ? ( "16px" ) : ( "22px" ),
    lineHeight: "21px",
    width: "160%",
    height: "160%",
    margin: 0,
    marginLeft: `${-(listElementWidth*1.6*magicNumber)}px`,
    transition: "width 0.3s, height 0.3s, margin 0.3s, font ease-out 0.0s",     // bubble grow animation
  }

  useEffect(() => {
    setPos(() => ({
      x: (multiplier*listElementWidth) - (selected*listElementWidth) - bigMargin, 
      y: 0
    }));
  
    return () => {
      setPos(({x: (multiplier*listElementWidth) -bigMargin, y: 0}));
    }
  }, [selected]);
  

  function eventHandler(e) {
    if (e.type === "mousedown" || e.type === "touchstart") {
      setIsBeingMoved(false);
      if (e.type === "mousedown") setStartPos(e.clientX);
      else setStartPos(e.touches[0].clientX);
      return;
    }

    if (e.type === "touchmove") {
      setLastTouch(e.touches[0].clientX);
    }

    if (e.type === "mouseup" || e.type === "touchend") {
      setIsBeingMoved(true);
      const threshold = 0.10;
      const lastItem = 11;
      let deltaX = 0;
      if (e.type === "mouseup") {
        deltaX = e.clientX - startPos;
      } else {
        deltaX = lastTouch - startPos;
      }
      console.log("e.touches", e.touches);
      console.log(`${e.clientX} - ${startPos}`)
      console.log("deltaX: ", deltaX);

      if ((Math.abs(deltaX)/listElementWidth) < threshold) {                                  // If below threshold (it was clicked, not dragged)
        console.log("event handler click case: ", candidate);
        setPos(() => ({
            x: (multiplier*listElementWidth) - (candidate*listElementWidth) - bigMargin, 
            y: 0
          }));
        setSelected(candidate);
      } else {                                                                                // If it was dragged
        let shiftAmount = Math.abs(deltaX/(listElementWidth+bigMargin));
        console.log(`${deltaX}/${listElementWidth}+${bigMargin} = ${(deltaX/(listElementWidth+bigMargin))}`);
        if (shiftAmount % 1 > 0.3) {                                                          // 0.3 is the threshold 
          shiftAmount = Math.ceil(shiftAmount);
          console.log(shiftAmount)
        } else {
          shiftAmount = Math.floor(shiftAmount);                                              // which decides whether we go to the next element or not
          console.log(shiftAmount)
        }
        if (deltaX < 0) shiftAmount = shiftAmount * -1;                                       // left or right swipe (minus is left)
        let newSelected = selected - shiftAmount;
        if (newSelected < 0) newSelected = 0;                                                 // edge
        if (newSelected > lastItem) newSelected = lastItem;
        setSelected(newSelected);
      }
      return;
    }
  }


  function bubbleClickHandler(index) {
    if (index === selected) setOpenModal(true);
    setCandidate(index);
  }

  return (
    <div style={containerStyleTemp}> 
      {(nftList.length === 0) ? (
        <h1 className="troacoModalBigText" style={{marginTop: "50vh"}}>Loading NFTs ...</h1>
      ) : (
        <Draggable axis={"x"} defaultPosition={{x: 500, y: 0}} position={pos}
          onStart={eventHandler} onDrag={eventHandler} onStop={eventHandler} cancel=".cancel"  >
            <ul style={isBeingMoved ? {...ulStyleTemp, ...transitionStyleTemp} : ulStyleTemp}>
              {nftList.map((nft, i) => {
                return (
                  <li style={i === selected ? {...liStyleTemp, ...liStyleSelectedTemp} : liStyleTemp} 
                      onMouseDown={() => bubbleClickHandler(i)} 
                      onTouchStart={() => bubbleClickHandler(i)}
                      key={i} prop 
                      className={i === selected ? "cancel" : null}
                  >
                    <div style={i === selected ? {...bubbleStyleTemp, ...bubbleStyleSelectedTemp} : bubbleStyleTemp}>
                      {nft.metadata.title}
                    </div>
                  </li>
                )
              })}
            </ul>
        </Draggable>
      )}

      <Arrows selected={selected} setSelected={setSelected} mobileView={mobileView} max={nftList.length-1} />

      <SongNavigation nftList={nftList} selected={selected} setSelected={setSelected} />

      {(openModal && <BuyModal 
          key={selected}
          id={nftList[selected].token_id}
          metadata={nftList[selected].metadata}
          image={null}
          newAction={newAction}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  )
}