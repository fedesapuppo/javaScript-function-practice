const findTheOldest = function(people) {
  let CurrentYear = new Date().getFullYear();
  
  let completed = people.forEach(person => {
    if (typeof(person.yearOfDeath) === 'undefined'){
      person.yearOfDeath = CurrentYear;
    }
  });

 


  let sorted = 
        people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
      });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
