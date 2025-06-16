class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}
  abstract openDoor(key: Key): void;
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Welcome home!');
    } else {
      console.log('The door is locked.');
    }
  }
  public listTenants(): void {
    console.log(`${this.tenants.length} tenant(s) inside.`);
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door opened successfully.');
    } else {
      console.log('Wrong key! Door remains locked.');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
house.listTenants();
