Feature: Fairprice Promotions Page

    I want to validation specific tags and PWP product with lable PWP

    @Promotions
    Scenario: I want to validation specific tags and PWP product with lable PWP
        Given I open Fairprice Promotions Page
         When I validation tags: PWP, Weekly Deals, Digital Club Exclusive
          And I choose promotions with PWP tag
         Then I validation product with lable PWP