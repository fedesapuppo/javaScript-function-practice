 const ftoc = function(gf) {

  return Math.round((gf - 32) * 5 /  9 * 10) / 10;

};

const ctof = function(gc) {

  return Math.round(((gc * 9 / 5) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};