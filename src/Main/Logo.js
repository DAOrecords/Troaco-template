import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/troacoLogo.png';


export default function Logo() {
  const logoPixel = 300;

  const logoStyle = {
    position: "absolute",
    zIndex: "500",
    width: `${logoPixel}px`,
    top: "32px",
    left: "53px",
  }

  return (
    <Link to={'/'}>
      <img src={logo} alt={'Troaco'} style={logoStyle} />
    </Link>
  )
}
