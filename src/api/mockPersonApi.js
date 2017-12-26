import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const persons = [
  {
    id: 'vinod-Upputuri',
    firstName: 'Vinod',
    lastName: 'Upputuri'
  },
  {
    id: 'anusha-gorantla',
    firstName: 'Anusha',
    lastName: 'Gorantla'
  },
  {
    id: 'sudeeksha-upputuri',
    firstName: 'Sudeeksha',
    lastName: 'Upputuri'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (person) => {
  return person.firstName.toLowerCase() + '-' + person.lastName.toLowerCase();
};

class PersonApi {
  static getAllPersons() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], persons));
      }, delay);
    });
  }

  static savePerson(person) {
    person = Object.assign({}, person); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Person"+person);
        // Simulate server-side validation
        const minPersonNameLength = 3;
        if (person.firstName.length < minPersonNameLength) {
          reject(`First Name must be at least ${minPersonNameLength} characters.`);
        }

        if (person.lastName.length < minPersonNameLength) {
          reject(`Last Name must be at least ${minPersonNameLength} characters.`);
        }

        if (person.id) {
          const existingAuthorIndex = person.findIndex(a => a.id == person.id);
          persons.splice(existingAuthorIndex, 1, person);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          person.id = generateId(person);
          persons.push(person);
        }

        resolve(person);
      }, delay);
    });
  }

  static deletePerson(personId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPersonToDelete = persons.findIndex(person => {
          person.id == person;
        });
        persons.splice(indexOfPersonToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PersonApi;
