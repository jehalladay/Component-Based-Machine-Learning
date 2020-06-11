import { Neuron } from '../dep.js';
import { TestComp } from './testComp.js';
import { v4 } from 'uuid';
Neuro.py('demo.py')([1, 2, 3, 4, 5, 6, 7, 8, 9]).then(console.log.bind(console.log, 'the sum is')).catch(console.log);
const testVal = Neuron.createCell("p", null, "hello world");
const testVal2 = Neuron.createCell(TestComp, null, "hello world");
const testVal3 = Neuron.createCell("testComp", null, "hello world"); // const testVal4 = <TestComp>hello world</TestComp>

console.log("hello", Neuron.createCell(Neuron.Fragment, null, "world"));
console.log(testVal);
console.log(testVal2);
console.log(testVal3);

const id = x => x;

const extract = x => {
  const y = '';
  x.then(z => z);
};

console.log(Neuro.py('firstnn.py')([1, 2, 3, 2.5])); // .then(x => {
//     console.log(x)
// })

console.log(v4(Symbol('hello world')));