import React from 'react';
import { ThemeContext } from '../context';

class ShoppingItem extends React.Component {
  
  // Lifecycle Methods [componentDidMount, componentWillUnmount]
  componentDidMount() {
    // The componentDidMount() method runs after the component output has been rendered to the DOM.
    console.log("Added item: " + this.props.item.name)
  }

  componentWillUnmount() {
    // the this.componentWillUnmount() method runs before the component is removed to the DOM.
    console.log("Removed item:" + this.props.item.name)
  }

  render() {
    return (
      <li style={{color: this.context.foreground, backgroundColor: this.context.background}}>
        {/* You can call a method from the parent component */}
        <input type="checkbox" checked={this.props.item.selected} onChange={() => this.props.selectItem(this.props.dataKey)} />
        {this.props.item.name}
      </li>
    )
  }
}

ShoppingItem.contextType=ThemeContext;

export default ShoppingItem;