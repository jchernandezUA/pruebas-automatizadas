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

  When("I edit post title {string}", async function (title) {
    let element = await this.driver.$(".gh-editor-title");
    return await element.setValue(title);
  });
  