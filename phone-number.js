function PhoneNumber(phoneNumber) {
  this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.number = function() {
  if (this.phoneNumber.length > 10 && parseInt(this.phoneNumber[0]) === 1) {
    return this.phoneNumber.match( /\d+/g ).join("").slice(-10);
  } else if (this.phoneNumber.match( /\d+/g ).join("").length != 10) {
    return '0000000000';
  } else {
    return this.phoneNumber.match( /\d+/g ).join("");
  }
}

PhoneNumber.prototype.areaCode = function() {
  return this.phoneNumber.slice(0, 3)
}

PhoneNumber.prototype.toString = function() {
  return `(${this.phoneNumber.slice(0, 3)}) ${this.phoneNumber.slice(3, 6)}-${this.phoneNumber.slice(6, 10)}`
}

module.exports = PhoneNumber;
