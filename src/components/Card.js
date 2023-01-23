import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
      return (
        <>
          <div className="travel--card">
            <img
              src={props.item.imageUrl}
              alt={props.item.title}
            />
            <div className="travel--desc">
                  <span>
                        <FontAwesomeIcon icon={faLocationDot} className="location--dot"/>
                        <p className="location">{(props.item.location).toUpperCase()}</p>
                        <a href={props.item.googleMapsUrl} className="googleMapsUrl">View on Google Maps</a>
                  </span>
                  <p className="title"><b>{props.item.title}</b></p>
                  <p className="travel--dates"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                  <p className="description">{props.item.description}</p>
            </div>
          </div>
        </>
      );
}