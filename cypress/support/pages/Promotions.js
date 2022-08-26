const locator = require('../locator/PromotionsLocator');

class Promotions {
    async visit(path){
        cy.visit(path)
        return cy.url().should('eq', 'https://www.fairprice.com.sg/promotions')
    }

    async verify_tag(tag){
        return cy.get(locator.datatestid.tag_list +'> li > button > span').should(
            $list => {         
                const list = [];
                for (let i = 0; i < $list.length; i++) {
                    list.push($list.eq(i).text());
                }
                
                tag.forEach(item => {
                    expect(list.includes(item)).to.eq(true);
                });
            }
        )
    }
    
    async pwp_product(){
        cy.get(locator.datatestid.all_tag + '> button').click()
        return cy.get(locator.datatestid.pwp_tag + '> button').click();
    } 

    async pwp_lable(){
        return cy.get('.sc-1plwklf-19 > span').should(
            $list => {
                for (let i = 0; i < $list.length; i++) {
                    expect($list.eq(i).text()).to.eq('PWP');
                }
            }
        );
    }

    async offer_lable(){
        return cy.get('.sc-1plwklf-19 > span').should(
            $list => {
                for (let i = 0; i < $list.length; i++) {
                    expect($list.eq(i).text()).to.eq('Offer');
                }
            }
        );
    }
}

module.exports = Promotions;