const {Given, When, Then} = require('@cucumber/cucumber');
const properties = require('../../properties.json')
const LoginPageObject = require('../support/LoginPageObject')


Given('I login as admin in Ghost {string} {string}', async function (scenario, step) {
  let pageObject = new LoginPageObject(this.driver)
  await pageObject.goToSignIn()
  await pageObject.setEmail(properties['<GHOST_MAIL>'])
  await pageObject.setPassword(properties['<GHOST_PASSWORD>'])
  await pageObject.signIn()
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}.png`)
})

Given('I login as admin in ghost', async function () {
  let pageObject = new LoginPageObject(this.driver)
  await pageObject.goToSignIn()
  await pageObject.setEmail(properties['<GHOST_MAIL>'])
  await pageObject.setPassword(properties['<GHOST_PASSWORD>'])
  await pageObject.signIn()
})