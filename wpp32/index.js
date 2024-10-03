class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
}
const person1 = new Person('harsh', 21, 'india');
const person2 = new Person('yash', 22, 'uk');

console.log('Person-1 Details:');
person1.displayDetails();
  

console.log('Person-2 Details:');
person2.displayDetails();
  