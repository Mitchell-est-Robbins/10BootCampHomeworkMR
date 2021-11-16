const Manager = require("../profiles/Manager.js")

//taken from section 10 activity 15 then modified ======================
describe('manager', () => {
    describe('managerobj', () => {
        // Positive test
        it("Should return an object ", () => {

            const newMagager = new Manager;



            // Assert
            //thanks for helping here Chuck
            expect(typeof (newMagager)).toEqual("object");
        })

    })
})