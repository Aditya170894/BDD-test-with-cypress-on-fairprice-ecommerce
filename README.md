# Tugas-week-5-cypress-using-BDD

Automatioan test with Cypress using BDD method
How to make:
1. Make test cases to validation specific tags and PWP product to have lable PWP,
   with step:
   - Visit Promotion tab
   - Validation 3 label promotion mandatory : PWP , Weekly Deals, dan Digital Club Exclusive
   - Choose promotion with PWP tag
   - Validation all PWP product to have PWP label

2. install cypress and cucumber tools to using BDD method on vscode

3. Make sintaks how to get the test case requirement

4. Make bdd sintaks and implement it

How to running:
   npx cypress open -> e2e -> choose browser -> choose Promotions.feature 
   or
   //using report cucumber
   using npx cypress run -e TAGS=@Promotions 
