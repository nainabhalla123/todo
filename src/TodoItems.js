import React, { Component } from "react";
 
class TodoItems extends Component {






  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }


    delete(key) {
    this.props.delete(key);
  }


  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  createTasks(item) {
  return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
}


 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul   className='f40 link dim ph3 pv2 mb2 dib white bg-navy'
          >
          {listItems}
      </ul>
    );
  }
};
export default TodoItems