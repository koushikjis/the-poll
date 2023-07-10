import React from "react";
import {Candidate} from '../Types/types'

interface MyPollPageProps {
  candidates: Candidate[];
  onVote: (candidateId: string) => void;
}

const MyPollPage: React.FC<MyPollPageProps> = ({ candidates, onVote }) => {
  return (
    <div className="container mt-4">
      <h2>My Poll</h2>
      <div className="col  border border-secondary rounded">
        <div className="row m-3">
          {candidates.map((candidate) => (
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
          ))}
        </div>
        <div className="row m-3">
          <div key={"publish"} className="col-md-2 my-4">
            <button className="btn btn-primary">Publish now</button>
          </div>
          <div key={"no-publish"} className="col-md-2 my-4">
            <button className="btn btn-primary">Publish later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPollPage;
