import { Neuro, Component } from '../dep.js';
import { TestComp } from './testComp.js';

class TestComp3 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.val = 'test';
    console.log("TestComp props:", props);
  }

  render() {
    return Neuro.createCell(TestComp, {
      type: this.val
    }, "Hello from TestComp3", this.props.input);
  }

}

export { TestComp3 };