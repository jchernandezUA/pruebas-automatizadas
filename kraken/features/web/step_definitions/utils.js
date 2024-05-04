async function findElementByText(driver, selector, text) {
    let spans = await driver.$$(selector);
    for (const item of spans) {
        let textContent = await driver.getElementText(item.elementId)
        console.log(textContent)
        if (textContent == text) {
            return item
        }
    }
    return null
}
const defaultTimeOut = {
    timeout: 2000,
    timeoutMsg: 'El elemento no se hizo visible después de esperar'
}
async function waitForElementsDisplayed (driver, selector) {
    var elements;
    await driver.waitUntil(async ()=> {
        elements = await driver.$$(selector);
        return elements.length > 0 && await elements[0].isDisplayed();
    }, defaultTimeOut);    
    console.log(elements.length)
    return elements
}

async function waitForElementDisplayed (driver, selector) {
    const items = await waitForElementsDisplayed(driver, selector)
    return items[0]
}


module.exports = {
    findElementByText, waitForElementsDisplayed, waitForElementDisplayed
};