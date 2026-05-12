const service = require('../services/pokenea.service');

function getPokeneaJson(req, res) {
  const pokenea = service.getRandom();

  const response = {
    id: pokenea.getId(),
    name: pokenea.getName(),
    height: pokenea.getHeight(),
    ability: pokenea.getAbility(),
    containerId: process.env.HOSTNAME
  };

  res.json(response);
}

function getPokeneaHtml(req, res) {
  const pokenea = service.getRandom();

  res.render('pokenea', {
    name: pokenea.getName(),
    image: pokenea.getImage(),
    phrase: pokenea.getPhrase(),
    containerId: process.env.HOSTNAME
  });
}

module.exports = { getPokeneaJson, getPokeneaHtml };
