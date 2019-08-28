var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Student;
}());
function testClient() {
    var st1 = new Student("d", "3");
    console.log(st1.getFullName());
}
testClient();
