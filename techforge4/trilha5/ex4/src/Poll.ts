class Poll extends VoteSystem {
    private votes: Record<string, number> = {};
  
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate] += 1;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): object {
      return Object.entries(this.votes)
        .sort((a, b) => b[1] - a[1])  // Ordena do mais votado para o menos votado
        .reduce((sortedVotes, [candidate, voteCount]) => {
          sortedVotes[candidate] = voteCount;
          return sortedVotes;
        }, {});
    }
}