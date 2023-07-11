import React from "react";
import { Candidate } from "../Types/types";
import PageHeader from "./PageHeader";

interface MyPollPageProps {
  candidates: Candidate[];
  onVote: (candidateId: string) => void;
}

const MyPollPage: React.FC<MyPollPageProps> = ({ candidates, onVote }) => {
  return (
    <div className="container mt-4">
      <PageHeader header='My Poll' />
      <div className="col border border-secondary rounded mt-3">
        <div className="row m-3">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="col-md-4 my-4">
              <div className="card text-dark bg-light mb-3">
              <div className="card-header">{candidate.name}</div>
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="card-img-top img-thumbnail"
                />
                <div className="card-body">
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
