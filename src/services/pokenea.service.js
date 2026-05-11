const { pokeneas } = require('../data/pokeneas');
const { Pokenea } = require('../models/pokenea.model');

function getRandom() {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokeneaData = pokeneas[randomIndex];
  return new Pokenea(pokeneaData);
}

module.exports = {
  getRandom
};
