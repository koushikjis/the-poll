export interface Candidate {
    id: string;
    photo: string;
    name: string;
    votes: number;
  }

  export interface CandidateCard {
    candidate: Candidate,
    onVote: (candidateId: string) => void;
  }