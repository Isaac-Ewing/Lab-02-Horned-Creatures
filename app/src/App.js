import React from 'react';
import data from './data.js';
import './App.css';
//import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
  state = {
    keyword: '',
  }
  handleChange = (e) => {
    this.setState({keyword: e.target.value});
  }
  render() {
    let pics = data.filter(animal => animal.keyword === this.state.keyword)
    if (this.state.keyword === '') {
      pics = data;
    }
    return (
      <div className="App">
        <label>
          <select onChange={this.handleChange}>
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="addax">Addax</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
          </select>
        </label>
        <ImageList images={pics}/>
      </div>
    );
  }
}