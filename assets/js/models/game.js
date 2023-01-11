class Game {
    constructor () {
    this.player = new Player();
    this.div = document.getElementById("div-h1");
    this.h6 = this.div.querySelector("h6");
    this.randomIndex = 0;
    this.defend = {};
}
    start() {
        this.randomIndex = Math.floor(Math.random() * this.player.defends.length);
        this.defend = this.player.defends[this.randomIndex];
        this.h6.innerHTML = this.defend.name;
        this.proceduralButtons();
        // this.initListeners();
        this.interval = setInterval(() => {
            // this.clear();
            this.draw();
        }, 1000/60)
    }
    proceduralButtons() {
        for (let i = 0; i < this.player.defends.length; i++) {
            const button = document.createElement("button");
            button.classList.add("button");
            button.id = `btn-${i}`;
          
            const p = document.createElement("p");
            p.innerHTML = this.player.defends[i].conjure;
          
            button.appendChild(p);
            document.getElementById("div-btn").appendChild(button);
          
            button.addEventListener("click", () => {
              if (this.h6.innerHTML === this.player.defends[i].name) {
                  //call the action you want to occur
                  console.log(`you clicked ${this.player.defends[i].name}`)
              }
            });
          }
    }
    draw() {

    }
}