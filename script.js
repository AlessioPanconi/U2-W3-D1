class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }
  /*
ageDiff(differentPerson) {
  if (this.age > differentPerson.age) {
    return `${this.firstName} è più vecchio di ${differentPerson.firstName}.`;
  } else if (this.age < differentPerson.age) {
    return `${this.firstName} è più giovane di ${differentPerson.firstName}.`;
  } else {
    return `${this.firstName} ha la stessa età di ${differentPerson.firstName}.`;
  }

*/

  static ageDiff(instance1, instance2) {
    if (instance1.age > instance2._age) {
      return `${instance1.firstName} è più vecchio di ${instance2.firstName}.`;
    } else if (instance1.age < instance2._age) {
      return `${instance2.firstName} è più vecchio di ${instance1.firstName}.`;
    } else {
      return `${instance1.firstName} ha la stessa età di ${instance2.firstName}.`;
    }
  }
}

const alessio = new User("Alessio", "Panconi", "21", "Bargecchia");
const giuseppe = new User("Giuseppe", "Rossi", "40", "Lucca");
const luca = new User("Luca", "Batini", "21", "Milano");

/*
console.log(alessio.ageDiff(giuseppe));
console.log(giuseppe.ageDiff(alessio));
console.log(alessio.ageDiff(luca));
*/

User.ageDiff(alessio, giuseppe);
User.ageDiff(alessio, luca);
User.ageDiff(luca, giuseppe);

class Pet {
  constructor(_animalName, _ownerName, _species, _breed) {
    this.animalName = _animalName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  static sameOwner(instance1, instance2) {
    if (instance1.ownerName.toLowerCase() === instance2.ownerName.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}

const animalsArray = [];
const animalForm = document.getElementById("animalForm");
const animalsList = document.getElementById("aniamlsList");

animalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const animalName = document.getElementById("animalName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(animalName, ownerName, species, breed);

  animalsArray.push(newPet);

  const div = document.createElement("div");
  const h5 = document.createElement("h5");
  const animal = document.createElement("p");
  const proprietario = document.createElement("p");
  const specie = document.createElement("p");
  const razza = document.createElement("p");

  h5.textContent = `Scheda Animale`;
  animal.textContent = `Il nome dell'animale è ${animalName} `;
  proprietario.textContent = `Il nome del proprietario è ${ownerName} `;
  specie.textContent = `è un${species} `;
  razza.textContent = `di tipo${breed} `;

  div.appendChild(h5);
  div.appendChild(animal);
  div.appendChild(proprietario);
  div.appendChild(specie);
  div.appendChild(razza);

  animalsList.appendChild(div);

  animalForm.reset();
});

/*

function displayAniamlsList() {
  animalsList.innerHTML = "";

  animalsArray.forEach((pet) => {
    const li = document.createElement("li");

    li.textContent = `L'animale si chiama ${pet.animalName} il suo padrone si chiama ${pet.ownerName} è un ${pet.species} di razza ${pet.breed}`;
    animalsList.appendChild(li);
  });
}


 */
