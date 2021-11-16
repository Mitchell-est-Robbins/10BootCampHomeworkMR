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


describe('internfulltest', () => {
    it("return a full Intern obj", () => {
        const name= "Me"
        const id= "1"
        const email= "me@me.com"
        const special= "UT"
        
        const internfulltest = new Intern (name, id, email, special)
        expect(internfulltest.name).toEqual(name)
        expect(internfulltest.id).toEqual(id)
        expect(internfulltest.email).toEqual(email)
        expect(internfulltest.special).toEqual(special)
    })
})