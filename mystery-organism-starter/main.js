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

      while (x = true) {
        let randBase = returnRandBase();
        let rand = Math.floor(Math.random() * 15) - 1;
        let basePick = this.dna[rand];

        if (randBase != basePick) {
          // console.log(this.dna);
          this.dna[rand] = randBase;
          x = false;
          return this.dna;

        }
      }
    },

    // compare yourself Dna with another .... how many bases in same location are identical? console log how many % are identical

    compareDna(pAenquor) {
      // increment number with for
      let numberOfSameBases = 0;
      for (i = 0; i < pAenquor.dna.length; i++) {
        if (pAenquor.dna[i] === this.dna[i]) {
          numberOfSameBases++;
        }
      }
      /*console.log("owndna", this.dna);
      console.log("otherdna", pAenquor.dna);
      console.log("sameBases", numberOfSameBases)*/
      console.log(`specimen Nr. ${this.specimenNum} and specimen Nr. ${pAenquor.specimenNum} have ${numberOfSameBases / 15 * 100}% of DNA in common `)
    },

    willLikelySurvive() {
      let sumOfCG = 0;
      console.log("its dna", this.dna);
      this.dna.forEach(element => {
        switch (element) {
          case "C":
            sumOfCG++;
            break;
          case "G":
            sumOfCG++;
            break;
        }
      });

      console.log(sumOfCG);
      console.log(sumOfCG / 15 * 100);
      if (sumOfCG / 15 * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    }

  }
}



// testing
//console.log("randBase", returnRandBase());
//console.log("strand", mockUpStrand());
creature = pAquorFactory(1, mockUpStrand());
creature2 = pAquorFactory(2, mockUpStrand());
console.log(creature.willLikelySurvive());

//creature.compareDna(creature2);
//console.log("mutate", creature.mutate());





