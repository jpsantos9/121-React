import React from 'react';
import ShoppingItem from './ShoppingItem';

// React.Component
// ShoppingList is a React component class, or React component type
class ShoppingList extends React.Component {
  // Constructor method may contain the props and state
  constructor(props) {
    // Propreties are data passed from the parent component to the child component
    super(props);
    // States are the data local to a component
    this.state = {
      items: [{name: "Popcorn", selected: false}, 
        {name: "Beef", selected: false}, 
        {name: "Tissue", selected: false}, 
        {name: "Tuna", selected: false}],
      itemToBeAdded: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.updateItemToBeAdded = this.updateItemToBeAdded.bind(this);
    this.addItem = this.addItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  updateItemToBeAdded(e) {
    // setState method overwrites the value of the state
    this.setState({itemToBeAdded: e.target.value});
  }

  addItem(e) {
    if (this.state.itemToBeAdded === "") {
      return;
    }

    var newItem = {name: this.state.itemToBeAdded, selected: false};
    this.setState({items: [...this.state.items, newItem]});
  }

  removeItem(e) {
    var items = this.state.items;
    
    var updatedItems = items.filter((item) => {return !item.selected});
    this.setState({items: updatedItems});
  }

  selectItem(indexOfItem) {
    var items = this.state.items;
    var selectedItem = items[indexOfItem];
    items[indexOfItem].selected = !selectedItem.selected;
    this.setState({items: items});
  }

  // Render method returns a description of what you want to see on the screen.
  // @returns React element which is in JSX format
  render() {
    return (
      <div className="shopping-list">
        <input onChange={this.updateItemToBeAdded}></input>
        <button onClick={this.addItem}>Add</button>
        {/* A component takes in parameters, called props (short for “properties”) */}
        <h1>Shopping List for {this.props.user}</h1>
        <ul>
          {
            // Example on how to insert javascript code in JSX {}
            // For .map() method you need to include a key prop
            this.state.items.map((item, index) => (
              // You can pass data & method props
              <ShoppingItem key={index} dataKey={index} item={item} selectItem={this.selectItem}/>
            ))
          }
        </ul>
        <button onClick={this.removeItem}>Delete Items</button>
      </div>
    );
  }
}

export default ShoppingList;