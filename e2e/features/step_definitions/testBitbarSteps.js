/* eslint-disable node/no-unpublished-require */
const {Given, When, Then} = require('cucumber');
/* eslint-enable node/no-unpublished-require */

/* eslint new-cap: off, no-undef: off */
Given(/^I have launched the app$/, async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
});

When(/^I click the instructions to change text$/, async () => {
    const text = 'Instructions have been updated';

    await element(by.id('instructions')).tap();
    await expect(element(by.id('instructions'))).toHaveText(text);
});

When(/^I reload react native$/, async () => {
    await device.reloadReactNative();
});

Then(/^I should see some text$/, async () => {
    await expect(element(by.id('getStarted'))).toBeVisible();
});
