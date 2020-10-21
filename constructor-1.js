var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.log = function () {
        console.log("name: " + this.name + ", age: " + this.age);
    };
    return Student;
}());
var stu = new Student("John Doe", 20);
console.log(stu);
stu.log();
