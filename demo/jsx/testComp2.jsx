import { Neuro, Component } from '../dep.js';
import { TestComp } from './testComp.js'

class TestComp2 extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.val = 'test'
        console.log("TestComp props:", props)
    }

    render() {
        return (
            <TestComp type={this.val}>Hello inside testComp from testComp2</TestComp>
        )
    }
}

export { TestComp2 }