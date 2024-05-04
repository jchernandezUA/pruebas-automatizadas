const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPageObject = require('../support/DashboardPageObject');
const PagePostPageObject = require('../support/PagePostPageObject');

When('I add a new post with title {string}', async function(title) {

    let dashboardPO = new DashboardPageObject(this.driver)

    await dashboardPO.startNewPost()
    
    let postPO = new PagePostPageObject(this.driver)

    await postPO.createNewPost(title)
    await postPO.pubishPost()
})