import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ArturoLogo.png';


export default function Logo() {
  const logoStyle = {
    position: "absolute",
    zIndex: "500",
    top: "33px",
    left: "67px",
  }

  return (
    <Link to={'/'}>
      <img src={logo} alt={'Troaco'} style={logoStyle} />
    </Link>
  )
}
