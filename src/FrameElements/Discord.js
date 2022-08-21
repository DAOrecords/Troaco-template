import React from 'react';
import icon from '../assets/discord.svg';

/** Admin is using these */
export default function Discord() {
  return (
    <>
      <div className="controls">
        <button className="controlsButton">
          <a href={"https://discord.com"}  target={"_blank"}>
            <img src={icon}></img>
          </a>
        </button>
      </div>
    </>
  ); 
}
