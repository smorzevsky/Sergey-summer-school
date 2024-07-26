class City {
  constructor(name, location, age, size, isBeautiful) {
    this.name = name;
    this.location = location;
    this.age = age;
    this.size = size;
    this.isBeautiful = isBeautiful;
  }

  beautiful() {
    return (this.isBeautiful = true);
  }

  calcAge() {
    return 2024 - this.age;
  }

  introduce() {
    console.log(`name of this city is ${this.name}`);
  }

  location1() {
    console.log(`it is located in  ${this.location}. `);
  }

  citySize() {
    console.log(`it is ${this.size}`);
  }
}

module.exports = City;

new City("Barcelona", "Spain", "old", "big", true).location1();
new City("Barcelona", "Spain", "old", "big", true).citySize();
