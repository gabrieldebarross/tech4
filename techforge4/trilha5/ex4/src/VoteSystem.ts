abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): Record<string, number>;
  }