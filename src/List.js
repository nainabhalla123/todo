import React, { Component } from "react";
import './List.css';
import TodoItems from "./TodoItems";
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js';

import Rank from './components/Rank/Rank';


import Sigin from './components/Sigin/Sigin';
import Register from './components/Register/Register';



const initialState={

     
      route:'Signin',
      isSignedIn:false,

      user:{
         id:'',
         name:'',
         email:'',
         entries:0,
         joined:''
      }
} 
 
class List extends Component {

   constructor(props) {
    super(props);

      this.state = {
    items: [],
    route:'Signin',
      isSignedIn:false,
      user:{
         id:'',
         name:'',
         email:'',
         entries:0,
         joined:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  loaduser=(data)=>{
    this.setState({user:{
      id:data.id,
    name:data.name,
    email:data.email,
   
    entries:data.entries,
    joined:data.joined
    }})
  }

 
 
    
  

    addItem(e) {
       if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
 
  }

  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}
onRouteChange=(route)=>
{
  if(route==='signout'){
  this.setState(initialState)
}
else if(route==='home'){
  this.setState({isSignedIn:true})
}
this.setState({route:route});
}

  render() {
    const{isSignedIn,route}=this.state;
    return (
      <div  className="tc">


      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      {route==='home'
      ?
      <div>
      <Logo/>
        <h1 className='f1'>Todo List</h1>
            <Rank name={this.state.user.name}
              entries={this.state.user.entries}/>

        <div className="header">
          <form onSubmit={this.addItem}>
            <input className='pa3 ba b--green bg-lightest-blue' 
            ref={(a) => this._inputElement = a}
            placeholder="Your Personal Todo-List">
            </input>
            <br/>
            <br/>
            <button className='f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib mid-gray' type="submit">....Add...</button>
          </form>
        </div>
         <TodoItems entries={this.state.items}
                     delete={this.deleteItem}

                     />
      </div>
      :(

        route==='Signin'
?
 <Sigin loaduser={this.loaduser} onRouteChange={this.onRouteChange} />
 :<Register loaduser={this.loaduser} onRouteChange={this.onRouteChange} /> 
          )

           
        
     }

   
       </div>
   
            );
    
  }
}
export default List;