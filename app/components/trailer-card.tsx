import React from 'react';
import { Trailer } from "../interfaces/trailer.interface";
import Link from "next/link";

interface TrailerCardProps {
  trailer: Trailer
}

const TrailerCard = ( { trailer }: TrailerCardProps) => {
  return (
    <div className="card column is-3">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={`http://localhost:8052/assets/${trailer.image}`} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{trailer.title}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          {trailer.synopsis.substring(0, 100)}...
        </div>

        <Link href={`trailers/${trailer.id}`} className="button is-primary">Voir la fiche</Link>
      </div>
    </div>
  );
};

export default TrailerCard;
