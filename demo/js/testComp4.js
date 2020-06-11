import { Neuro, Component } from '../dep.js';
import { TestComp } from './testComp.js';
import { TestComp2 } from './testComp2.js';
import { TestComp3 } from './testComp3.js';

function start() {
  return Neuro.createCell(TestComp3, null, Neuro.createCell(TestComp2, null), Neuro.createCell(TestComp, null));
}

const val = start();
console.log(val);
console.log(val.props.input);