module.exports = function reverse (n) {

  return (n<0)? Number(String(-1*n).split("").reverse().join("")) : 
  Number(String(n).split("").reverse().join(""));
}
