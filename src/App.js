import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  

  addList = (e) => {
    const newList = {
      key: this.state.todoLists[this.state.todoLists.length-1].key + 1,
      name: "Unknown",
      owner: "Unknown",
      items: [],
    }
    this.setState({todoLists: [...this.state.todoLists, newList]})
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: newList});
    
  }

  deleteList = (e) => {
    console.log(e)
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
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
        
        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;