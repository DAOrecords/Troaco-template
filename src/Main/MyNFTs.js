import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable';
import Arrows from './Arrows';
import InfoModal from './InfoModal';
import SongNavigation from './SongNavigation';


export default function Landing({selected, setSelected, nftList, newAction}) {
  const listElementWidth = window.innerWidth / 7;
  const bigMargin = 110;
  const magicNumber = 0.19140936538680642;
  
  const [pos, setPos] = useState({x: (3*listElementWidth) -bigMargin, y: 0});
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
    height: "100vh",
    width: "max-content",
    margin: "0",
    padding: "0",
  }
  
  const transitionStyleTemp = {
    transition: "transform 2.3s",
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
    marginLeft: `${bigMargin}px`,
    marginRight: `${bigMargin}px`,
    marginTop: `${-listElementWidth/2}px`,
    transition: "margin 1.3s ease-in",
  }
  
  const bubbleStyleTemp = {
    margin: "25px",
    background: "rgba(217, 217, 217, 0.2)",
    fontFamily: 'VCR',
    fontStyle: "normal",
    textTransform: "uppercase",
    color: "#E0E0E0",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "14px",
    borderRadius: "500px",
    height: "80%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    transition: "width 1s, height 1s, transform 1s",
  }

  const bubbleStyleSelectedTemp = {
    color: "#FFFFFF",
    fontSize: "22px",
    lineHeight: "21px",
    width: "160%",
    height: "160%",
    margin: 0,
    marginLeft: `${-(listElementWidth*1.6*magicNumber)}px`,
    transition: "width 2.3s, height 2.3s, margin 2.3s, font ease-out 0.0s",
  }

  useEffect(() => {
    setPos(() => ({
      x: (3*listElementWidth) - (selected*listElementWidth) - bigMargin, 
      y: 0
    }));
    setOpenModal(false);
  
    return () => {
      setPos(({x: (3*listElementWidth) -bigMargin, y: 0}));
    }
  }, [selected]);
  

  function eventHandler(e) {
    if (e.type === "mousedown") {
      setIsBeingMoved(false);
      setStartPos(e.clientX);
      return;
    }

    if (e.type === "mouseup") {
      setIsBeingMoved(true);
      const threshold = 0.10;
      const lastItem = nftList.length-1;
      console.log("lastItem: ", lastItem);
      let deltaX = e.clientX - startPos;

      if ((Math.abs(deltaX)/listElementWidth) < threshold) {                                  // If below threshold (it was clicked, not dragged)
        setPos(() => ({
            x: (3*listElementWidth) - (candidate*listElementWidth) - bigMargin, 
            y: 0
          }));
        setSelected(candidate);
      } else {                                                                                // If it was dragged
        let shiftAmount = Math.abs(deltaX/(listElementWidth+bigMargin));
        if (shiftAmount % 1 > 0.3) {                                                          // 0.3 is the threshold 
          shiftAmount = Math.ceil(shiftAmount);
        } else {
          shiftAmount = Math.floor(shiftAmount);                                              // which decides whether we go to the next element or not
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
      {(nftList.length > 0) ? 
        <Draggable axis={"x"} defaultPosition={{x: 500, y: 0}} position={pos}
          onStart={eventHandler} onDrag={eventHandler} onStop={eventHandler} >
          <ul style={isBeingMoved ? {...ulStyleTemp, ...transitionStyleTemp} : ulStyleTemp}>
            {nftList.map((nft, i) => {
              return (
                <li style={i === selected ? {...liStyleTemp, ...liStyleSelectedTemp} : liStyleTemp} onMouseDown={() => bubbleClickHandler(i)} key={i} prop>
                  <div style={i === selected ? {...bubbleStyleTemp, ...bubbleStyleSelectedTemp} : bubbleStyleTemp}>
                    {nft.metadata.title}
                  </div>
                </li>
              )
            })}
          </ul>
        </Draggable>
      :
        <h1 className="troacoModalBigText" style={{marginTop: "20vh"}}>You don't have any NFTs yet.</h1>
      }

      <Arrows selected={selected} setSelected={setSelected} max={nftList.length-1} />

      <SongNavigation nftList={nftList} selected={selected} setSelected={setSelected} />

      {(openModal && <InfoModal
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

