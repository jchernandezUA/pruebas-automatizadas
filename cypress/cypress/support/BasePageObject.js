import { getEnvElements } from "./elements_locations";
const properties = require('../fixtures/properties.json')

class BasePageObject {

  constructor() {
    this.elements = getEnvElements()
    this.properties = properties
  }
}

module.exports = BasePageObject;