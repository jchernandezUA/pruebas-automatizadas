const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter identification {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click next", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When(
    "I select and delete the post with title {string}",
    async function (title) {
      let elements = await this.driver.$$(".gh-post-list-title h3");
  
      let postFound = false;
  
      for (let element of elements) {
        let elementTitle = await element.getText();
        if (elementTitle.trim() === title.trim()) {
          postFound = true;
          await element.click();
  
          let settingsButton = await this.driver.$(".settings-menu-toggle");
          await settingsButton.waitForDisplayed({ timeout: 5000 });
          await settingsButton.click();
  
          let deleteButton = await this.driver.$(".gh-btn-fullwidth");
          await deleteButton.waitForDisplayed({ timeout: 5000 });
          await deleteButton.click();
  
          let confirmDeleteButton = await this.driver.$(".gh-btn-red");
          await confirmDeleteButton.waitForDisplayed({ timeout: 5000 });
          await confirmDeleteButton.click();
  
          await this.driver.pause(2000);
          break;
        }
      }
  
      if (!postFound) {
        throw new Error(`Post with title "${title}" not found`);
      }
    }
  );

  Then("I should see post with title {string} deleted", async function (title) {
    let elements = await this.driver.$$(".gh-post-list-title h3");
    for (let element of elements) {
        let elementTitle = await element.getText();
        if (elementTitle.trim() === title.trim()) {
            throw new Error(`Post with title "${title}" was not deleted`);
        }
    }
});