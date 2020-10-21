class Student {
    constructor(private name: string, private age: number) {
    }

    log():void {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

let stu = new Student("John Doe", 20);
console.log(stu);
stu.log();

