import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav style={{textAlign:"center"}}>{links.map(link => 
    <a key={link} href={"#" + link} >{link.toUpperCase()}</a>
  )}</nav>;
}

export default NavBar;
