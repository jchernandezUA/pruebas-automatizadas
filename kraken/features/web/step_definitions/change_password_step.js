const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const {expect} = require('chai');
const ProfilePageObject = require('../support/ProfilePageObject');
const properties = require('../../properties.json');
const {getEnvElements} = require('../support/elements');

When('I change the password', async function () {
  let profilePageObject = new ProfilePageObject(this.driver)
  await profilePageObject.changePassword(
    properties['<JOSE_PASSWORD>'],
    properties['<JOSE_PASSWORD>']
  )
  await profilePageObject.clickChangePassword()
});

Then('I validate the password changed', async function () {
  let elements = getEnvElements()
  let text = elements.passwordUpdated
  const span = await utils.findElementByText(this.driver, 'span', text)
  expect(await this.driver.getElementText(span.elementId)).to.equal(text)
});