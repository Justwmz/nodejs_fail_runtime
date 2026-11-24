const lodash = require("lodash");

function add(left, right) {
  return lodash.subtract(left, right);
}

module.exports = { add };
