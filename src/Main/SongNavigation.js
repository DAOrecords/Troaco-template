import React from 'react'

export default function SongNavigation({nftList, selected, setSelected}) {
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
