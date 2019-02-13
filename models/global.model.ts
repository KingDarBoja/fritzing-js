/**
 * An arbitrary string property
 * @param {string} name The name of this Property
 * @param {string} value The value of this Property
 */
export class Property {
    name: string;
    value: string;

    constructor(model: Property) {
        this.name = model.name;
        this.value = model.value;
    }
};

/**
 * A two-dimensional point in virtual space
 * @param {number} x The x-coordinate of this Point
 * @param {number} y The y-coordinate of this Point
 */
export class Point {
    x: number;
    y: number;

    constructor(model: Point) {
        this.x = model.x;
        this.y = model.y;
    }
};