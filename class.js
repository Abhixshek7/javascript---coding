class Student{
    constructor(name,dept){
        name = this.name;
        dept = this.dept;
    }

     Name(){
        return this.name ;
    }
     getDept(){
        return this.dept;
    }
}


const student1 = new Student();
student1.name = 'Abhishek';
student1.dept = "Computer Science and Design";
console.log(student1.Name())
console.log(student1.getDept())
