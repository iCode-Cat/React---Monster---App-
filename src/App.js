
import './App.css';
import { Component } from 'react';
import { CardList} from './components/card-list/card-list.component'
import { logDOM } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(users => this.setState({monsters:users}))
    }
  
  render() {

    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
     monster.name.toLowerCase().includes(searchField.toLowerCase())  
      );

    return (
      
      <div className="App">
        <input type='search' onChange={e  => {
          this.setState({searchField:e.target.value})
        }} />
        <CardList monsters = {filteredMonsters} />  
  
    </div>
    )
    
  }
}

export default App;
