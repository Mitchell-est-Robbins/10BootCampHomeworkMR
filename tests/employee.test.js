const Employee = require("../profiles/Employee.js")

//taken from section 10 activity 15 then modified ======================
describe('employee', () => {
    describe('employeeObject', () => {
        // Positive test
        it("Should return an object ", () => {

            const newEmployee = new Employee;



            // Assert
            //thanks for helping here Chuck
            expect(typeof (newEmployee)).toEqual("object");
        })

    })
})