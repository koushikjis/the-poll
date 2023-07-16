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

  export interface AppState {
    pollCount: number
    user: {
      name:string
      loginTime:Date|undefined
    }
  }

  export interface Logout {
    logout?: boolean
  }