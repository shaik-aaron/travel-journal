import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
      return (
        <div id="header">
          <FontAwesomeIcon icon={faEarthAmericas} id="globe"/>
          <h2>my travel journal.</h2>
        </div>
      );
}