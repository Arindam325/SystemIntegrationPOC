import { System } from './system';

export class Layer {
    layerName: String;
    layerDepth: number;
    systems: System[];
    constructor(layerName: String, layerDepth: number, systems: System[]) {
        this.layerName = layerName;
        this.layerDepth = layerDepth;
        this.systems = systems;
    }
}