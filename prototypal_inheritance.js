class Fish {
  constructor() {
    this.eatsFish = false;
    this.eatsPlankton = true;
  }
}

class Predator extends Fish {
  constructor() {
    super();
    this.eatsFish = true;
  }
}

class Nemo extends Fish {
  constructor() {
    super();
  }
}

const fish1 = new Predator();
const fish2 = new Nemo();

console.log('fish1', fish1.eatsFish);
console.log('fish2', fish2.eatsFish);

/* REDIS, AWS, Docker, JWT, CI/CD, SPA vs server side rendering.... */
