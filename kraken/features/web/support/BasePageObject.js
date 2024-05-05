const {getEnvElements} = require('./elements')

class BasePageObject {


  constructor(driver) {
    this.driver = driver;
    this.elementsSearch = getEnvElements()
  }
}

module.exports = BasePageObject;