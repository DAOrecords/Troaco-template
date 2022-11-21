import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ArturoLogo.png';
import award from '../assets/arturoAward.jpg';


export default function Logo() {
  const logoStyle = {
    position: "absolute",
    zIndex: "500",
    top: "33px",
    left: "167px",
  }

  const awardStyle = {
    position: "absolute",
    zIndex: "500",
    top: "33px",
    left: "67px",
    width: "100px"
  }

  return (
    <Link to={'/'}>
      <img src={logo} alt={'Arturo Sandoval'} style={logoStyle} />
      <img src={award} alt={'Award'} style={awardStyle} />
    </Link>
  )
}
