class Enemy extends Player {
    constructor(ctx) {
      super(ctx);
      this.attacks = [
        {
          name: `The Pitonise of "The Great Academy of Conjurers"`,
          damage: 45,
          explanation: `"You can be wild but no so wild that we can't tame you,`
        },
        {
          name: `A higher rank Conjurer, whose judgment will determine your future academic plans`,          
          damage: 45,
          explanation: `"You don't need to be in the Academy,`
        },
        {
          name: `bgbgbg`,
          damage: 45,
          explanation: `"A swift knee attack that deals 14 points of damage.`
        },
        {
          name: `333`,
          damage: 45,
          explanation: `"A sharp elbow attack that deals 8 points of damage.`
        }
      ];
    }
    draw() {
    }
  }
  