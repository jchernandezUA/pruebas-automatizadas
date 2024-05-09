const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter identification publish {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password publish {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click next publish", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When("I select the post filter {string}", async function (filterName) {
  let dropdown = await this.driver.$(
    ".gh-contentfilter-menu .ember-basic-dropdown-trigger"
  );
  await dropdown.click();

  await this.driver.waitUntil(
    async () => {
      const isVisible = await this.driver
        .$(".ember-power-select-options")
        .isDisplayed();
      return isVisible;
    },
    {
      timeout: 5000,
      timeoutMsg: "Filter options did not appear in time",
    }
  );

  let filterOptions = await this.driver.$$(".ember-power-select-option");
  let optionFound = false;
  for (let option of filterOptions) {
    let text = await option.getText();
    if (text.trim() === filterName) {
      await option.click();
      optionFound = true;
      break;
    }
  }
  if (!optionFound) {
    throw new Error(`Filter option with name "${filterName}" not found`);
  }
});


Then('I should see posts filtered by {string}', async function (filterName) {
  
    let dropdown = await this.driver.$(".gh-contentfilter-menu .ember-basic-dropdown-trigger");
    let text = await dropdown.getText();    
   
    if (!text.includes(filterName)) {
        throw new Error(`Posts are not filtered by ${filterName}`);
    }
});

