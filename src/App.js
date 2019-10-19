import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

//import jsTPS from './jsTPS'

import uuid from 'uuid'

let undoList = [];
let redoList = [];


const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    todoItem: null,
    //jsTPS: new jsTPS()
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    undoList = [];
    redoList = [];
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  goEdit = (e) =>{
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    if(e){
      this.setState({todoItem: e});
    }else{
      const newTodoItem = {
        description: "",
        assigned_to: "",
        due_date: "",
        completed: false,
        key: -1
      }
      this.setState({todoItem: newTodoItem});
    }
    
  }

  addList = (e) => {
    const newList = {
      key: uuid.v4(),
      name: "Unknown",
      owner: "Unknown",
      items: [],
    }
    this.setState({todoLists: [...this.state.todoLists, newList]})
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: newList});
    
  }

  deleteList = (e) => {
    this.setState({todoLists:[...this.state.todoLists.filter(todoList => todoList.key !== e)]})
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  pushUndo = (e) => {
    undoList.push(e);
    //console.log(undoList);
  }

  myUndo = (e) => {
    if(undoList.length === 0){
      console.log("nothing to undo");
    }else{
      let tempTodoLists = [];
      //this.pushRedo(undoList[undoList.length -1]);
      //copy all todoLists besides the todoList we're in
      //console.log(undoList);
      let itemsCopy = [];
        for(let i = 0; i < this.state.currentList.items.length ; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.state.currentList.items[i].key;
            itemsCopy[i].description = this.state.currentList.items[i].description;
            itemsCopy[i].due_date = this.state.currentList.items[i].due_date;
            itemsCopy[i].assigned_to = this.state.currentList.items[i].assigned_to;
            itemsCopy[i].completed = this.state.currentList.items[i].completed;
        }
        let copy = {
            key: this.state.currentList.key,
            name: this.state.currentList.name,
            owner: this.state.currentList.owner,
            items: itemsCopy
        }
        this.pushRedo(copy);
        //
      for(let i = 0; i < this.state.todoLists.length ; i++){
        if(this.state.todoLists[i].key !== undoList[0].key){
          tempTodoLists.push(this.state.todoLists[i])
          
        }else{
          tempTodoLists.push(undoList[undoList.length-1])
        }
      }
      this.setState({todoLists: tempTodoLists})
      this.setState({currentList: undoList[undoList.length-1]});
      (undoList.pop());
      /*console.log("current List : ")
      console.log(this.state.currentList);
      console.log("todoLists: ")
      console.log(this.state.todoLists);*/
      
    }
    
  }

  pushRedo = (e) =>{
    redoList.push(e);
    console.log("redo list");
    console.log(redoList);
  }

  myRedo = (e) =>{
    if(redoList.length === 0){
      console.log("nothing to redo");
    }else{
      let tempTodoLists = [];
      let itemsCopy = [];
        for(let i = 0; i < this.state.currentList.items.length ; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.state.currentList.items[i].key;
            itemsCopy[i].description = this.state.currentList.items[i].description;
            itemsCopy[i].due_date = this.state.currentList.items[i].due_date;
            itemsCopy[i].assigned_to = this.state.currentList.items[i].assigned_to;
            itemsCopy[i].completed = this.state.currentList.items[i].completed;
        }
        let copy = {
            key: this.state.currentList.key,
            name: this.state.currentList.name,
            owner: this.state.currentList.owner,
            items: itemsCopy
        }
        this.pushUndo(copy);
      for(let i = 0; i < this.state.todoLists.length ; i++){
        if(this.state.todoLists[i].key !== redoList[0].key){
          tempTodoLists.push(this.state.todoLists[i])
        }else{
          tempTodoLists.push(redoList[redoList.length-1])
        }
      }
      this.setState({todoLists: tempTodoLists})
      this.setState({currentList: redoList[redoList.length-1]});
      (redoList.pop());
    }
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} 
        addList = {this.addList}
        />; //passes in loadList and todoLists as props to HomeScreen.js
        //addList is a method call from homeScreen that is handled here (this)
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList} 
          deleteList = {this.deleteList}
          goEdit = {this.goEdit}
          pushUndo = {this.pushUndo}
          undo = {this.myUndo}
          redo = {this.myRedo}
          pushRedo = {this.pushRedo}
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
          todoList = {this.state.currentList}
          cancelEdit = {this.loadList.bind(this)}
          todoItem = {this.state.todoItem}
          currentScreen = {this.state.currentScreen}
          
        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;