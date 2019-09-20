import { System } from './system';
import { Arrow } from './arrow';

export class Layer {
    layerName: String;
    layerDepth: number;
    systems: System[];
    arrows: Arrow[];
    constructor(layerName: String, layerDepth: number, systems: System[] = [], arrows: Arrow[] = []) {
        this.layerName = layerName;
        this.layerDepth = layerDepth;
        this.systems = systems;
        this.arrows = arrows;
    }
}