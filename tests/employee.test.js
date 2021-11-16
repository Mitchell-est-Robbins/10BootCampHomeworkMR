const Employee = require("../profiles/Employee.js")

//taken from section 10 activity 15 then modified ======================
describe('employee', () => {
    describe('employeeObject', () => { //so it doesn't actually need the first one or this one... curious
        // Positive test
        it("Should return an object ", () => {

            const newEmployee = new Employee;



            // Assert
            //thanks for helping here Chuck
            expect(typeof (newEmployee)).toEqual("object");
        })

    })
})

describe('employeefulltest', () => {
    it("return a full employee obj", () => {
        const name= "Me"
        const id= "1"
        const email= "me@me.com"
        
        const employeefulltest = new Employee (name, id, email)
        expect(employeefulltest.name).toEqual(name)
        expect(employeefulltest.id).toEqual(id)
        expect(employeefulltest.email).toEqual(email)
    })
})






// =============employee obj
// class Employee {
//     constructor (name, id, email, role) {
//         this.name= name;
//         this.id= id;
//         this.email= email;
//         this.role= role;
//         }
    
//     }