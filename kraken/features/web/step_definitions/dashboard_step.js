const { Given, When, Then } = require('@cucumber/cucumber');
const ProfilePageObject = require('../support/ProfilePageObject');
const DashboardPageObject = require('../support/DashboardPageObject');
const properties = require('../../properties.json')


When('I open profile', async function() {
    let profilePO = new ProfilePageObject(this.driver)
    await profilePO.clickOnAvatar()
    return await profilePO.openProfile()
});


When('I click avatar icon', async function() {
    let profilePO = new ProfilePageObject(this.driver)
    return await profilePO.clickOnAvatar()
})

When('I open pages', async function() {
    let dashboardPO = new DashboardPageObject(this.driver)
    await dashboardPO.openPages()
    await this.driver.pause(2000)
    await dashboardPO.startNewPage()
})



When('I return to dashboard', async function() {
    await this.driver.url(properties['<URL>'])
})


