
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function() {
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function() {
      return firstAndLast.split(' ')[1];
    };
    this.setFullName = function(fullName) {
      firstAndLast = fullName;
    };
    this.setFirstName = function(firstName) {
      firstAndLast = firstName + " " + this.getLastName();
    };
    this.setLastName = function(lastName) {
      firstAndLast = this.getFirstName() + " " + lastName;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
//bob.setFirstName('Haskell');
bob.getFirstName();
