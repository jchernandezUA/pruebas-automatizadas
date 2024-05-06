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

When("I select the post filter publish", async function () {
    let dropdown = await this.driver.$(
      ".gh-contentfilter-menu .ember-basic-dropdown-trigger"
    );
    await dropdown.click();
    let filterOptions = await this.driver.$$(".ember-power-select-option");
    for (let option of filterOptions) {
      let text = await option.getText();
      if (text.trim() === "Published posts") {
        await option.click();
        break;
      }
    }
  });

  Then("I should see posts filtered by publish", async function () {
    let dropdown = await this.driver.$(".gh-contentfilter-menu .ember-basic-dropdown-trigger");
    let text = await dropdown.getText();
    if (!text.includes("Published")) {
        throw new Error("Posts are not filtered by publish");
    }
});