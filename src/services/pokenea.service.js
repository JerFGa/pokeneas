const { pokeneas } = require('../data/pokeneas');
const { Pokenea } = require('../models/pokenea.model');

function getAll() {
  return pokeneas.map(function (pokeneaData) {
    return new Pokenea(pokeneaData);
  });
}

function getRandom() {
  return new Pokenea(pokeneas[Math.floor(Math.random() * pokeneas.length)]);
}

module.exports = {
  getAll,
  getRandom
};
