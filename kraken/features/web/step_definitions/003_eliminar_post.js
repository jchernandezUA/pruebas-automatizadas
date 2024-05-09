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

When("I select and delete the post with title {string} {string} {string}", async function (title , scenario, step) {
  // Navegar a la página para crear un nuevo post
  await this.driver.url('http://localhost:2368/ghost/#/editor/post');
  
  // Esperar a que el editor esté listo  
  let titleInput = await this.driver.$(".gh-editor-title");
  await titleInput.waitForDisplayed({ timeout: 5000 });
  
  // Introducir el título y contenido del post
  await titleInput.setValue(title);
  let contentInput = await this.driver.$(".kg-prose");
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_01.png`)

  await contentInput.click();
  await contentInput.keys('Este es el contenido del post');

  // Guardar el post
  let publishMenuButton = await this.driver.$(".gh-publish-trigger");
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_02.png`)
  await publishMenuButton.click();
  let publishButton = await this.driver.$('.gh-btn-large');
  await publishButton.waitForDisplayed({ timeout: 5000 });
  await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_03.png`)
  await publishButton.click();

  // Esperar a que el post se guarde correctamente
  await this.driver.pause(5000);

  // Navegar a la lista de posts
  await this.driver.url('http://localhost:2368/ghost/#/posts');

  // Encontrar y eliminar el post
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
  for (let element of elements) {
    const elementTitle = await element.getText();
    if (elementTitle.trim() === title) {
      await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_04.png`)
      await element.click();
      const settingsButton = await this.driver.$(".settings-menu-toggle");
      await settingsButton.waitForDisplayed({ timeout: 5000 });
      await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_05.png`)
      await settingsButton.click();

      const deleteButton = await this.driver.$(".gh-btn-fullwidth");
      await deleteButton.waitForDisplayed({ timeout: 5000 });
      await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_06.png`)
      await deleteButton.click();

      const confirmDeleteButton = await this.driver.$(".gh-btn-red");
      await confirmDeleteButton.waitForDisplayed({ timeout: 5000 });
      await this.driver.saveScreenshot(`./screenshots/ss_${scenario}_${step}_07.png`)
      await confirmDeleteButton.click();

      await this.driver.pause(2000);
      break;
    }
  }
});

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
