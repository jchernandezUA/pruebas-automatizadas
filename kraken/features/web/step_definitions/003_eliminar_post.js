const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter identification delete {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter password delete {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click next delete", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When(
  "I select and delete the post with title {string}",
  async function (title) {
    const titleSelector = `a.gh-list-data.gh-post-list-title h3.gh-content-entry-title`;

    await this.driver.waitUntil(
      async () => {
        const elements = await this.driver.$$(titleSelector);
        return elements.length > 0;
      },
      {
        timeout: 5000,
        timeoutMsg: "Expected post title to be visible after 5 seconds",
      }
    );

    const elements = await this.driver.$$(titleSelector);

    let postFound = false;
    for (let element of elements) {
      const elementTitle = await element.getText();
      if (elementTitle.trim() === title) {
        postFound = true;
        await element.click();

        // Esperar y hacer clic en el botón de configuración
        const settingsButton = await this.driver.$(".settings-menu-toggle");
        await settingsButton.waitForDisplayed({ timeout: 5000 });
        await settingsButton.click();

        const deleteButton = await this.driver.$(".gh-btn-fullwidth");
        await deleteButton.waitForDisplayed({ timeout: 5000 });
        await deleteButton.click();

        const confirmDeleteButton = await this.driver.$(".gh-btn-red");
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

Then(
  "I should see that the post with title {string} is deleted",
  async function (title) {
    const titleSelector = `.gh-post-list-title h3`;
    const elements = await this.driver.$$(titleSelector);
    for (let element of elements) {
      const elementTitle = await element.getText();
      if (elementTitle.trim() === title.trim()) {
        throw new Error(`Post with title "${title}" was not deleted`);
      }
    }   

    console.log(`Post with title "${title}" has been successfully deleted.`);
  }
);
