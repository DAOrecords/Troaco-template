import React from 'react';


export default function AudioPlayer({music, cid}) {
  /** We are not using `music` anymore, because we are inserting the URL inside src instead.
   * This way, the admin page music player probably wont work */
  const playerRef = React.useRef();
  const timeoutId = setTimeout(timeoutFunc, 500);
  const [time, setTime] = React.useState("0");
  const [playing, setPlaying] = React.useState(false);
  
  function timeoutFunc() {
    setTime(playerRef.current.currentTime);
  }
  
  React.useEffect(async () => {
    playerRef.current.volume = 0.75;
    return () => {
      clearTimeout(timeoutId)
    };
  }, [playing]);

  function playClicked() {
    setPlaying(true);
    playerRef.current.play();
  }

  function pauseClicked() {
    setPlaying(false);
    playerRef.current.pause();
  }

  function decreaseVolume() {
    if (playerRef.current.volume === 0) return;
    playerRef.current.volume = (playerRef.current.volume -0.10).toFixed(2);
    console.log("volume: ", playerRef.current.volume);
  }

  function addVolume() {
    if (playerRef.current.volume === 1) return;
    playerRef.current.volume = (playerRef.current.volume +0.10).toFixed(2);
    console.log("volume: ", playerRef.current.volume);
  }

  return (
    <>
      {music ? (
          <audio style={{ display: "block" }} src={music} ref={playerRef} />
        ) : (
          <audio style={{ display: "block" }} src={"https://ipfs.io/ipfs/" + cid} ref={playerRef} />
      )}
      {playing? 
        <button className="musicControlsButton" onClick={pauseClicked}><PauseIcon /></button>
      : 
        <button className="musicControlsButton" onClick={playClicked}><PlayIcon /></button>
      }
      {playerRef.current && 
        <input 
          className="musicControlsSlider"
          type={"range"}
          min={"0"}
          max={playerRef.current.duration}
          value={time}
          onChange={(e) => {
            playerRef.current.currentTime = e.target.value;
            setTime(playerRef.current.currentTime);
          }}
        />
      }
      
    </>
  );
}


/** 
 * We used to have a problem with SVG loading
 * The path for the image asset became something like `https://ipfs.io/ipfs/volume.72f0adf8.svg` instead of something like 
 * `https://ipfs.io/ipfs/QmaFoGKANeVtwoYbdW3E7NB2wgLnmjXVJCoN7Xen4tJiYG/volume.72f0adf8.svg`. We don't have this problem in the footer.
 * After renaming `pause.svg` to `Pause.svg`, all of the problems got solved in an unexplainable way, but we do it with inline SVG for safety reasons.
 */
function PlayIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.25 18.75L42.75 30L23.25 41.25V18.75Z" fill="#121212"/>
      <circle cx="30" cy="30" r="29.5" stroke="#121212"/>
    </svg>
  );
}

function PauseIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" ule="evenodd" d="M10 4H5V20H10V4ZM19 4H14V20H19V4Z" fill="#FFFFFF"/>
    </svg>
  );
}

function VolumeEmpty() {
  return(
    <svg width="20" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0H10V20H8V18H6V16H8V4H6V2H8V0ZM4 6V4H6V6H4ZM2 8H4V6H2H0V8V12V14H2H4V16H6V14H4V12H2V8Z" fill="#FFFFFF"/>
    </svg>
  );
}

function VolumeMinus() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="2" fill="#FFFFFF"/>
    </svg>
  );
}

function VolumePlus() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5V8H5V5H8V3H5V0H3V3H0V5H3Z" fill="#FFFFFF"/>
    </svg>
  );
}
