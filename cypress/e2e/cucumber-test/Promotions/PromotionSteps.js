import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"

const Promotions = require('../../../support/pages/Promotions')
let promotions = new Promotions();

Given(/^I open Fairprice Promotions Page$/, () => {
    promotions.visit('/promotions')
})
When(/^I validation tags: (.+)$/, (tagString) => {
    const tag = tagString.split(',').map((i) => i.trim());
    promotions.verify_tag(tag)
})
And(/^I choose promotions with (\w+) tag$/, () => {
    promotions.pwp_product()
})
Then(/^I validation product with lable PWP$/, () => {
    promotions.pwp_lable()
})