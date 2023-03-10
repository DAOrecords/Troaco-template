import React from 'react';


export default function AudioPlayer({music, cid, color, dark}) {
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
  
  function PlayIcon() {
    return (
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 16H2.43757V15.2H3.65827V14.4H4.87702V13.6H6.09577V12.8H7.31459V12H8.53334V11.2H9.75014V10.4H10.9689V9.6H12.1896V8.8H13.0021V7.2H12.1896V6.4H10.9689V5.6H9.75014V4.8H8.53334V4H7.31459V3.2H6.09577V2.4H4.87702V1.6H3.65827V0.8H2.43757V0H0V16Z" fill={color}/>
      </svg>
    );
  }
  
  function PauseIcon() {
    return(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" ule="evenodd" d="M10 4H5V20H10V4ZM19 4H14V20H19V4Z" fill={color}/>
      </svg>
    );
  }

  return (
    <>
      {music ? (
          <audio style={{ display: "block" }} src={music} ref={playerRef} />
        ) : (
          <audio style={{ display: "block" }} src={"https://daorecords.io:8443/fetch?cid=" + cid} ref={playerRef} />
      )}
      {playing? 
        <button className="musicControlsButton" onClick={pauseClicked}><PauseIcon /></button>
      : 
        <button className="musicControlsButton" onClick={playClicked}><PlayIcon /></button>
      }
      {playerRef.current && 
        <input 
          className={dark? "musicControlsSlider" :  "musicControlsSlider musicControlsSliderWhite"}
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
