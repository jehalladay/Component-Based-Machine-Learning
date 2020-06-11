import { Neuron, Component } from '../dep.js';

class TestComp extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.val = 'test'
        console.log("TestComp props:", props)
    }

    render() {
        return (
            <dummy type={this.val}>hello</dummy>
        )
    }
}

export { TestComp }