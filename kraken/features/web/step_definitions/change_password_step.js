const {Given, When, Then} = require('@cucumber/cucumber');
const utils = require('../support/utils')
const ProfilePageObject = require('../support/ProfilePageObject');
const properties = require('../../properties.json');
const {getEnvElements} = require('../support/elements');

When('I change the password', async function () {
  let profilePageObject = new ProfilePageObject(this.driver)
  await profilePageObject.changePassword(
    properties['<GHOST_PASSWORD>'],
    properties['<GHOST_PASSWORD>']
  )
  await profilePageObject.clickChangePassword()
});

Then('I validate the password changed', async function () {
  const expect = (await import('expect-webdriverio')).expect;
  let elements = getEnvElements()
  let text = elements.passwordUpdated
  const span = await utils.findElementByText(this.driver, 'span', text)
  await expect(span).toHaveText(text)
});