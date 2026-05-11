const view = require('../views/pokenea.view');
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
  const html = view.renderPokenea(pokenea, process.env.HOSTNAME);

  res.send(html);
}

module.exports = { getPokeneaJson, getPokeneaHtml };
