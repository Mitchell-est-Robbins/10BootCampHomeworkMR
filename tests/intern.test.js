const Intern = require("../profiles/Intern.js")

//taken from section 10 activity 15 then modified ======================
describe('intern', () => {
    describe('internobj', () => {
        // Positive test
        it("Should return an object ", () => {

            const newIntern = new Intern;



            // Assert
            //thanks for helping here Chuck
            expect(typeof (newIntern)).toEqual("object");
        })

    })
})