import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <nav>
          <FontAwesomeIcon icon={faEarthAmerica} className="navbar--icon" />
          <h3 className="navbar--title">my travel journal.</h3>
        </nav>
    )
}