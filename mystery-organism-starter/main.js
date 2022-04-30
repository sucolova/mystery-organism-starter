// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// returns an Object 

function pAquorFactory(num, strand) {
  return {
    specimenNum: num,
    dna: strand,
    // random select one base from the dna strand and change it randomly, then return dna strnad
    mutate() {
      let randBase = returnRandBase();
      let randBasePick = strand[Math.floor(Math.random() * 15) - 1];
      console.log(randBasePick);
      console.log(randBase);
    }

  }
}

// testing
//console.log("randBase", returnRandBase());
console.log("strand", mockUpStrand());
creature = pAquorFactory(1, mockUpStrand());
console.log("mutate", creature.mutate());





