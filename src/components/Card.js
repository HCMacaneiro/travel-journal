import React from "react"
import fjord from "../images/fjord.jpg"
import MountFuji from "../images/mount-fuji.jpg"
import SydneyOperaHouse from "../images/sydney-opera-house.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    let picture 
    if (props.imageUrl === "fjord") {
        picture = fjord;
    } else if (props.imageUrl === "MountFuji") {
        picture = MountFuji;
    } else if (props.imageUrl === "SydneyOperaHouse") {
        picture = SydneyOperaHouse
    }

    return (
        <div className="card">
            <img src={picture} className="card--picture" />
            <div className="card--info">
                <FontAwesomeIcon icon={faLocationDot} className="card--info-icon"/><span className="card--info-name">{props.location}</span>
                <a href={props.googleUrl} className="card--info-link" target="_blank">View on Google Maps</a>
                <h1 className="card--info-title">{props.title}</h1>
                <h4 className="card--info-date">{props.startDate} - {props.endDate}</h4>
                <p className="card--info-description">{props.description}</p>
            </div>

        </div>
    )
}