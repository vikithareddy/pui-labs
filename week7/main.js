//object constructors for the animals
function Lion(name, age) {
    this.name = name;
    this.age = age;
    this.image = "lion.jpg";
    this.image_alt = "Fierce lion chilling in the zoo";
}

function Tiger(name, age) {
    this.name = name;
    this.age = age;
    this.image = "tiger.jpg";
    this.image_alt = "Tiger in water";
}

function Cheetah(name, age) {
    this.name = name;
    this.age = age;
    this.image = "cheetah.jpg";
    this.image_alt = "Cheetah looking for preys";
}

//global variables 
let animals = [new Lion(), new Tiger(), new Cheetah)];
let names = ["Timon", "Sneek", "Pumba", "Leo", "Doug", "Poppy", "Bella", "Han"];

//FUNCTIONS
//get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
    let randomIdx = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];
  
    if (randomAnimal instanceof Cat) 
    {
      return new Lion(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Dog) 
    {
      return new Tiger(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Bird) 
    {
      return new Cheetah(generateRandomName(), generateRandomAge());
    }
  }


// generate a random name from list of names
function generateRandomName() {
    let randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
    return getRandomIndex(5);
}

//Load the document
function onLoad() {

    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
}