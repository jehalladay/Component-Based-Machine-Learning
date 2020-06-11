import { generate } from './src/generate.js'
import { config } from '/src/config.js';
import { NeuroFiber } from './src/neurofiber.js'

'use strict';


const growthChamber = {
    config: config,
    generate: generate,
    NeuroFiber: NeuroFiber,
};





export { growthChamber }