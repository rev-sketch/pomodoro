import React from "react";
import "./styles.css";
import heart from "./assets/heart.gif";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <p>
          <img height={25} width={25} src={heart} alt={heart} />
          Made by Revanth Induru
          <img height={25} width={25} src={heart} alt={heart} />
        </p>
      </footer>
    </div>
  );
}

export default Footer;
