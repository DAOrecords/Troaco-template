import React, { useState } from 'react';
import Draggable from 'react-draggable';


export default function SongNavigation({nftList, selected, setSelected, mobileMenuClickHandler, mobileView}) {
  const [startX, setStartX] = useState(null);

  
  if (mobileView) {
    return (
      <Draggable axis={"x"} >
        <nav aria-label='Song Navigation' id='troacoBottomNav'>
          <ul id="troacoSongMenu">
            {nftList.map((nft, i) => (
              <li 
                key={nft.token_id} 
                onTouchStart={(e) => setStartX(e.touches[0].clientX) }
                onTouchEnd={(e) => mobileMenuClickHandler((e.changedTouches[0].clientX - startX), i)}
                className={i === selected ? "troacoSongSelected" : null}
              >
                  {nft.metadata.title}
              </li>
            ))}
          </ul>
        </nav>
      </Draggable>
    )
  } else {
    return (
      <nav aria-label='Song Navigation' id='troacoBottomNav'>
        <ul id="troacoSongMenu">
          {nftList.map((nft, i) => (
            <li 
              key={nft.token_id} 
              onClick={() => setSelected(i)}
              className={i === selected ? "troacoSongSelected" : null}
            >
                {nft.metadata.title}
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
