class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

const s = new Student("Ivan", 20, "A");
console.log(s.name, s.age, s.grade);
