class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  public getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
    this.salary += 10000;
  }

  public getManagerDetails(): string {
    return `Manager ${this.name}, Salary: ${this.salary}`;
  }
}

const e = new Employee("Olena", "HR", 50000);
console.log(e.getEmployeeDetails());

const m = new Manager("Taras", "IT", 70000);
console.log(m.getEmployeeDetails());
