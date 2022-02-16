class Person
{
    id: number
    name: string
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }
}

class Employee extends Person
{
    empDept: string;
    constructor(id,name,empDept)
    {
        super(id,name);
        this.empDept = empDept;
    }

    showDetails(): void
    {
        console.log("Employee Details:\nID: " +this.id+"\nName: "+this.name+"\nDepartment: "+this.empDept);
    }
}

let emp1 = new Employee(1,"Abc","IT");
emp1.showDetails();
