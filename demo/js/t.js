import React from 'react'

class Test extends React.Component {
    render() {
        React.createElement('p', {test: 1}, 'Hello again')
    }
}
const ex = React.createElement('div', {hello: 'world'}, 
React.createElement('p', {}, 'Hello world'),
React.createElement(Test, {}),
React.createElement('p', {hello: 'p'}, 'paragraph')
)
console.log(ex)
console.log(ex.props.children)

