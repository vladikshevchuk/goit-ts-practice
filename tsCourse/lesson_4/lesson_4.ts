class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }
    
    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) { }
    
    
}