function Dojo(sensei) {
  this.sensei = Object.assign({}, sensei);
}

Dojo.prototype.toJSON = function(sensei) {
  return JSON.stringify(this.sensei);
};

export default Dojo;