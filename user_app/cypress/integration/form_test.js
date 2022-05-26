describe("User App", ()=> {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    const firstNameInput = () => cy.get("input[name=first_name]");
    const lastNameInput = () => cy.get("input[name=last_name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const termsCheckbox = () => cy.get(`[type="checkbox"]`);
    const submitBtn = () => cy.get(`button[id='submitBtn']`);

    it("sanity check to make sure tests are working", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({})
    })

    it("The proper elements are showing", () => {
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsCheckbox().should("exist");
        submitBtn().should("exist");
    })

    describe("Filling out inputs", () => {
        it("Can type into inputs", ()=> {
            firstNameInput()
                .should("have.value", "")
                .type("Aaron")
                .should("have.value", "Aaron");
            lastNameInput()
                .should("have.value", "")
                .type("Ingalls")
                .should("have.value", "Ingalls");
            emailInput()
                .should("have.value", "")
                .type("abc@abc.com")
                .should("have.value", "abc@abc.com")
            passwordInput()
                .should("have.value", "")
                .type("123456789")
                .should("have.value", "123456789");
        })
        it("checkbox can be checked and unchecked", ()=> {
            termsCheckbox()
                .check()
                .uncheck()
        })
    })

    describe("The form can be submitted", ()=> {
        it("submit button enables when form is filled out", ()=> {
            submitBtn().should("be.disabled")
            firstNameInput().type("Aaron");
            lastNameInput().type("Ingalls");
            emailInput().type("ai@ai.com");
            passwordInput().type("123456789");
            termsCheckbox().check();
            submitBtn().should("not.be.disabled")
        })
        it("form can be submitted", ()=> {
            firstNameInput().type("Aaron");
            lastNameInput().type("Ingalls");
            emailInput().type("ai@ai.com");
            passwordInput().type("123456789");
            termsCheckbox().check();
            submitBtn().click();

            cy.contains("Aaron Ingalls")
        })
        it("form validation minimum of 3 characters", ()=> {
            firstNameInput().type("aa");

            cy.contains("Minimum of 3")
        })
    })



})
