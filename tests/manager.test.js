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


describe('managerfulltest', () => {
    it("return a full Manager obj", () => {
        const name= "Me"
        const id= "1"
        const email= "me@me.com"
        const special= "Corner 2"
        
        const managerfulltest = new Manager (name, id, email, special)
        expect(managerfulltest.name).toEqual(name)
        expect(managerfulltest.id).toEqual(id)
        expect(managerfulltest.email).toEqual(email)
        expect(managerfulltest.special).toEqual(special)
    })
})