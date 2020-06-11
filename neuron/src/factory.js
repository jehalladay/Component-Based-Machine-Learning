import { v4 } from 'uuid'
// class Cell { }
const NEURON_TYPE = Symbol.for('Neuron')

const cells = {}

const neuron = function(type, key, props) {
    const cell = {
        $$typeof: NEURON_TYPE,
        type: type,
        key: key,
        // source: source,
        props: props,
        // owner: owner
    }

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


export {createCell, cells, NEURON_TYPE}