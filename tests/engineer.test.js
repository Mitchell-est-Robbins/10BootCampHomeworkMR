const Engineer  = require("../profiles/Engineer.js")

//taken from section 10 activity 15 then modified ======================
describe('engineer', () => {
    describe('engineerobj', () => {
        // Positive test
        it("Should return an object ", () => {

            const newEngineer = new Engineer;



            // Assert
            //thanks for helping here Chuck
            expect(typeof (newEngineer)).toEqual("object");
        })

    })
})