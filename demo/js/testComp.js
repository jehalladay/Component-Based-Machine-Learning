import { Neuro, Component } from '../dep.js';

class TestComp extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.val = 'test';
    console.log("TestComp props:", props);
  }

  render() {
    return Neuro.createCell("llb", {
      type: this.val
    }, "hello");
  }

}

export { TestComp };