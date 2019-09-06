export class System {
    name: String;
    type: String = 'S';

    constructor(name: String, type: String = 'S') {
        this.name = name;
        this.type = type;
    }
}