const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email, "Intern")
        this.special= special
    }
}

module.exports= Intern