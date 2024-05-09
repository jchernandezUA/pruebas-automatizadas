const { Given, When, Then } = require("@cucumber/cucumber");

When("I select the post with title for edit {string} {string} {string}", async function (title , scenario, step) {
    let elements = await this.driver.$$(".gh-post-list-title h3");
  
    let postFound = false;
  
    for (let element of elements) {
      let elementTitle = await element.getText();
      if (elementTitle.trim() === title.trim()) {
        postFound = true;
        await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`);  
        await element.click();
        await this.driver.pause(2000);
        break;
      }
    }
  
    if (!postFound) {
      throw new Error(`Post with title "${title}" not found`);
    }
  });

  When("I click post edit {string} {string}", async function (scenario, step) {
    let element = await this.driver.$(".gh-publish-trigger");
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`);  
    return await element.click();
  });

  When("I edit post title edit{string} {string} {string}", async function (title, scenario, step) {

    const titleField = await this.driver.$(".gh-editor-title"); 
    await titleField.waitForDisplayed();
    await titleField.clearValue();
    await titleField.setValue(title);
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`);  

   
  });
  

  Then("I should see post title edited to {string} {string} {string}", async function (title, scenario, step) {
    let element = await this.driver.$(".gh-editor-title");
    let value = await element.getValue();
    await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_04.png`);  
    if (value !== title) {
        throw new Error(`Expected post title to be ${title} but got ${value}`);
    }
});
