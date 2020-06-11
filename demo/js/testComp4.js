import { Neuron, Component } from '../dep.js';
import { TestComp } from './testComp.js';
import { TestComp2 } from './testComp2.js';
import { TestComp3 } from './testComp3.js';

function start() {
  return Neuron.createCell(TestComp3, null, Neuron.createCell(TestComp2, null), Neuron.createCell(TestComp2, null), Neuron.createCell(TestComp, null), "Hello World", Neuron.createCell(TestComp3, null, Neuron.createCell(TestComp2, null), Neuron.createCell(TestComp, null)));
}

const val = start();
console.log(val);
console.log(val.props.input);