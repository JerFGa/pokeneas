/**
 * Representa un Pokenea, una criatura urbana con características únicas.
 */
class Pokenea {
  constructor({ id, name, height, ability, image, phrase }) {
    this._id = id;
    this._name = name;
    this._height = height;
    this._ability = ability;
    this._image = image;
    this._phrase = phrase;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getHeight() {
    return this._height;
  }

  getAbility() {
    return this._ability;
  }

  getImage() {
    return this._image;
  }

  getPhrase() {
    return this._phrase;
  }

  setId(newId) {
    this._id = newId;
  }

  setName(newName) {
    this._name = newName;
  }

  setHeight(newHeight) {
    this._height = newHeight;
  }

  setAbility(newAbility) {
    this._ability = newAbility;
  }

  setImage(newImage) {
    this._image = newImage;
  }

  setPhrase(newPhrase) {
    this._phrase = newPhrase;
  }
}

module.exports = { Pokenea };
