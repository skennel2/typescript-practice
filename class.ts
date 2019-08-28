class Student {
    private firstName: string;
    private lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() : string {
        return this.firstName + ' ' + this.lastName;
    }
}

function testClient(){
    let st1 = new Student("d", "3");

    console.log(st1.getFullName());
}

testClient();

