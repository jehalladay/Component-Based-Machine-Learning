import { v4 } from 'uuid'
import { config, cells, presetComponents } from './config.js'



class Cell { 
    constructor(type, key, props, $$typeof) {
        this.$$typeof = $$typeof;
        this.type = type;
        this.key = key;
        this.props = props;
        // owner: owner
        // source: source,

    return this;
    };
};


const neuron = function(type, key, props) {
    const cell = new Cell

    return cell
}

const createCell = function(type, props, input) {
    const keyId = props != null && props.key? props.key : Symbol('cell');
    const keyValue = cells[keyId] || v4(keyId)
    const inputLength = arguments.length - 2;
    
    cells[keyId] = keyValue
    console.log('type =', type.name)

    props || (props = {})

    
    
    if (inputLength === 1 && input !== null) {
        props.input = input;
    } else if (inputLength > 1) {
        const inputArray = Array(inputLength);
        for (let i = 0; i < inputLength; i++) {
            inputArray[i] = arguments[i + 2];
        }
        props.input = inputArray;
    }
    return neuron(type, keyValue, props)
}

const use = (nameSpace, componentDictionary) => {
    if(presetComponents[nameSpace]) {
        presetComponents[nameSpace] = {
            ...presetComponents[nameSpace],
            ...componentDictionary,
        }
    } else {
        presetComponents[nameSpace] = componentDictionary
    }
}

export {createCell, use}