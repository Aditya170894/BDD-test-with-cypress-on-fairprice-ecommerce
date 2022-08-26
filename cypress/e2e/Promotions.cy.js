const Promotions = require('../support/pages/Promotions');
let promotions = new Promotions;
const PromotionsData = require('../support/datatest/PromotionsData');

describe('Validation tags and PWP lable', ()=>{
    it('visit promotional page', () => {
        promotions.visit('/promotions')
    });
    
    it('tags validation', () => {
        promotions.verify_tag(PromotionsData.tagTest.tag)
    });

    it('PWP product', () => {
        promotions.pwp_product()
    });
    it('Product with Lable PWP', () => {
        promotions.pwp_lable()
    });
})

describe('Validation tags and PWP lable', ()=>{
    it('visit promotional page', () => {
        promotions.visit('/promotions')
    });
    
    it('tags validation', () => {
        promotions.verify_tag(PromotionsData.tagTest.tag)
    });

    it('PWP product', () => {
        promotions.pwp_product()
    });
    it('Product with non lable PWP', () => {
        promotions.offer_lable()
    });
})