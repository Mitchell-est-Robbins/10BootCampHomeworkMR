const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email, "Engineer",)
        this.special= special
    }
}

module.exports= Engineer