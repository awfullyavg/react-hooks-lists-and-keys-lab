import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const atags = links.map((link) => (
    <a key={link}  href={`#${link}`}>{link}</a>
  ) )

  return <nav>{atags}</nav>;
}

export default NavBar;
