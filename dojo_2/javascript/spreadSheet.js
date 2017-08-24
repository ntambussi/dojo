function SpreadSheet() {
  this._cells = [];
}

SpreadSheet.prototype.setValue = function(cellAddressStr, value){
  var cell = this.findCell(cellAddressStr);
  return cell && !isNan(Number(value)) ? cell.value = value : Boolean(this._cells.push(new Cell(cellAddressStr, value)));
};

SpreadSheet.prototype.get = function(cellAddressStr){
  var cell = this.findCell(cellAddressStr);
  return cell ? cell.value : false;
};

SpreadSheet.prototype.findCell = function(cellAddressStr){
  var cell = this._cells.find(function _findCell(cell){
    return cell.isAddressedBy(cellAddressStr);
  });
  return cell ? cell : false;
};


function Cell(cellAddressStr, value){
  this._address = {
    col: this.parseCol(cellAddressStr),
    row: this.parseRow(cellAddressStr)
  };
  this.value = value;
}

Cell.prototype.parseRow = function(cellAddressStr){
  return cellAddressStr.match(/\d/)[0];
};

Cell.prototype.parseCol = function(cellAddressStr){
  return cellAddressStr.match(/\D/)[0];
};


Cell.prototype.isAddressedBy = function(cellAddressStr){
  return this._address.col === this.parseCol(cellAddressStr) && this._address.row === this.parseRow(cellAddressStr);
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.SpreadSheet = SpreadSheet;
} else {
  module.exports = SpreadSheet;
}
