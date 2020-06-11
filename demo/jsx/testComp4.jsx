import { Neuro, Component } from '../dep.js';
import { TestComp } from './testComp.js'
import { TestComp2 } from './testComp2.js'
import { TestComp3 } from './testComp3.js'


function start() {
    return (
        <TestComp3>
            <TestComp2></TestComp2>
            <TestComp></TestComp>
        </TestComp3>
    )
} 

const val = start()
console.log(val)
console.log(val.props.input)
