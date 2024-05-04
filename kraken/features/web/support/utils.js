const {getEnvElements} = require('./elements')


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
function defaultTimeOut(selector) {
    return {
        timeout: 10000,
        timeoutMsg: `El elemento ${selector} no se hizo visible después de esperar`
    }
}
async function waitForElementsDisplayed (driver, selector) {
    await driver.waitUntil(async ()=> {
        elements = await driver.$$(selector);
        return elements.length > 0 && await elements[0].isDisplayed();
    }, defaultTimeOut(selector));    
    console.log(elements.length)
    return elements
}

async function waitForElementDisplayed (driver, selector) {
    const items = await waitForElementsDisplayed(driver, selector)
    return items[0]
}

async function getPostMetadata(driver) {
    let elements = getEnvElements();
    const postList = await waitForElementsDisplayed(
        driver,
        elements.postList
    )
    const anchorElements = await postList[0].$$('a')
    const metaEntry = await anchorElements[0].$(elements.contentEntryMeta)
    const pMeta = await metaEntry.$$('span')
    return pMeta
}


module.exports = {
    findElementByText, 
    waitForElementsDisplayed, 
    waitForElementDisplayed,
    getPostMetadata
};