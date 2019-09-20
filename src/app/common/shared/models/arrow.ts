export class Arrow {

    arrowType: string;
    arrowDirection: string;
    toSystem: string;
    fromSystem: string;
    values: number[];
    imageSrc: string;


    constructor(arrowType: string, arrowDirection: string, fromSystem: string, toSystem: string, values: number[]=[], imageSrc?: string) {
        this.arrowType = arrowType;
        this.arrowDirection = arrowDirection;
        this.fromSystem = fromSystem;
        this.toSystem = toSystem;
        this.values = values;
        this.imageSrc = imageSrc;
    }
}

export enum ArrowTypes {
    VAL = "VAL",
    NOVAL = "NOVAL"
}

export enum ArrowDirection {
    UP = "UP",
    DOWN = "DOWN",
    BOTH = "BOTH"
}