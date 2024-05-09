const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter identification edit {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password edit {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click next edit", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});


When("I select the post with title for edit {string}", async function (title) {
    let elements = await this.driver.$$(".gh-post-list-title h3");
  
    let postFound = false;
  
    for (let element of elements) {
      let elementTitle = await element.getText();
      if (elementTitle.trim() === title.trim()) {
        postFound = true;
        await element.click();
        await this.driver.pause(2000);
        break;
      }
    }
  
    if (!postFound) {
      throw new Error(`Post with title "${title}" not found`);
    }
  });

  When("I click post edit", async function () {
    let element = await this.driver.$(".gh-publish-trigger");
    return await element.click();
  });

  When("I edit post title edit{string}", async function (title) {

    const titleField = await this.driver.$(".gh-editor-title"); // Cambia el selector si es necesario
    await titleField.waitForDisplayed();
    await titleField.clearValue();
    await titleField.setValue(title);
   
  });
  

  Then("I should see post title edited to {string}", async function (title) {
    let element = await this.driver.$(".gh-editor-title");
    let value = await element.getValue();
    if (value !== title) {
        throw new Error(`Expected post title to be ${title} but got ${value}`);
    }
});
