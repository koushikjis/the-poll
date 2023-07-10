import React from "react";
import { CandidateCard } from "../Types/types";

const CandidateCard = ({candidate, onVote}: CandidateCard) => {
    return (
        <div key={candidate.id} className="col-md-4 my-4">
              <div className="card">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{candidate.name}</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => onVote(candidate.id)}
                  >
                    Vote
                  </button>
                  <p className="card-text">Votes: {candidate.votes}</p>
                </div>
              </div>
            </div>
    )
}