// Insert code here
class Aquarium {
  constructor(fishesTab, algaesTab){ //ici on peut initialiser les tableaux si le dev ne le fait pas avec ce code ==> fishesTab = [], algaesTab = []
    this.fishes = fishesTab;
    this.algaes = algaesTab;
  }
  addFish(fishObject){
    this.fishes.push(fishObject);
  }
  addAlgae(algaeObject){
    this.algaes.push(algaeObject);
  }
  endTurn(){
    this.fishes.forEach((oneFish, index) => {
      if (oneFish.vegan) {
        //vegan => eat algae if exists
        if (this.algaes.length > 0) {
          this.algaes.pop();
        }
      } else {
        //carnivor => eat fish if exists
        if (this.fishes.length > 0) {
          if (index === this.fishes.length - 1) {
            this.fishes.shift();
          } else {
            this.fishes.pop();
          }
        }
      }
    });
  }
  status(turn){
    console.log(`current state: ${turn}`);
    console.log(this.fishes);
    console.log(this.algaes);
    console.log("-------------------------------");
  }
}

class Fish {
  constructor(name, sex, carnivor){
    this.name = name;
    this.sex = this.setSex(sex);
    this.vegan = this.setCarnivor(carnivor);
  }
  checkSex(sex){
    return ["M","F"].includes(sex) ? sex : "M";
  }
  setSex(sex){
    return this.checkSex(sex);
  }
  checkCarnivor(carnivor){
    return [0,1].includes(carnivor) ? carnivor : 0;
  }
  setCarnivor(carnivor){
    return this.checkCarnivor(carnivor);
  }
}

class Algae {
  constructor(size){
    this.size = this.setSize(size);
  }
  checkSize(size){
    if (isNaN(size)) {
      return parseInt(size, 10);
    } else {
      return size;
    }
  }
  setSize(size){
    return this.checkSize(size);
  }
}

//init
const myAquarium = new Aquarium([], []);
//tour 0
let newFish = new Fish("vegan", "M", 1);
let newAlgae = new Algae(122);
myAquarium.addFish(newFish);
myAquarium.addAlgae(newAlgae);
myAquarium.status("add#0");
//tour 1
newFish = new Fish("john", "Male", "carnivor");
newAlgae = new Algae(10);
myAquarium.addFish(newFish);
// myAquarium.addAlgae(newAlgae);
myAquarium.status("add#1");
//tour 2
newFish = new Fish("doe", "F", 1);
newAlgae = new Algae(69);
myAquarium.addFish(newFish);
myAquarium.addAlgae(newAlgae);
myAquarium.status("add#2");
//tour 3
newFish = new Fish("alice", "M", 1);
newAlgae = new Algae("22 cm");
myAquarium.addFish(newFish);
myAquarium.addAlgae(newAlgae);
myAquarium.status("add#3");
//endTurn
myAquarium.endTurn();
myAquarium.status("endTurn #1");
myAquarium.endTurn();
myAquarium.status("endTurn #2");


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
