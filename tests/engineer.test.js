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

describe('engineerfulltest', () => {
    it("return a full Engineer obj", () => {
        const name= "Me"
        const id= "1"
        const email= "me@me.com"
        // const role= "Engineer"
        const special= "github@github.com"
        
        const engineerfulltest = new Engineer (name, id, email, special)
        expect(engineerfulltest.name).toEqual(name)
        expect(engineerfulltest.id).toEqual(id)
        expect(engineerfulltest.email).toEqual(email)
        // expect(engineerfulltest.role).toEqual(role)
        expect(engineerfulltest.special).toEqual(special)
    })
})





//engineer obj==============================
// class Engineer extends Employee {
//     constructor (name, id, email, special) {
//         super(name, id, email, "Engineer",)
//         this.special= special
//     }
// }
