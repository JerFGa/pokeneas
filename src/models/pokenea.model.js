class Pokenea {
  id;
  name;
  height;
  ability;
  image;
  phrase;

  constructor({ id, name, height, ability, image, phrase }) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.ability = ability;
    this.image = image;
    this.phrase = phrase;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getAbility() {
    return this.ability;
  }

  getImage() {
    return this.image;
  }

  getPhrase() {
    return this.phrase;
  }

  setId(newId) {
    this.id = newId;
  }

  setName(newName) {
    this.name = newName;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }

  setAbility(newAbility) {
    this.ability = newAbility;
  }

  setImage(newImage) {
    this.image = newImage;
  }

  setPhrase(newPhrase) {
    this.phrase = newPhrase;
  }
}

module.exports = { Pokenea };
