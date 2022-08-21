import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  const logoPixel = 30;

  const logoStyle = {
    position: "absolute",
    zIndex: "500",
    top: "32px",
    left: `calc(50% - ${logoPixel}px)`,
  }

  return (
    <Link to={'/'}>
      <img src={"logo"} alt={'Troaco'} style={logoStyle} />
    </Link>
  )
}
