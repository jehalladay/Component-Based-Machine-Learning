
import { createCell, use} from './src/factory.js'
import { Component } from './src/component.js'
import { Fragment } from './src/fragment.js'
import { config } from './src/config.js'
import { py } from './src/py.js'


'use strict';

const Neuron = {
    Component: Component,
    config: config,
    createCell: createCell,
    Fragment: Fragment,
    py: py,
    use: use,
};


export { Neuron, Component, createCell, Fragment }