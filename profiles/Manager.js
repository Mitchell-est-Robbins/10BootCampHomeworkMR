const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, special) {
        super(name, id, email, "Manager",)
        this.special= special
    }
}

module.exports= Manager