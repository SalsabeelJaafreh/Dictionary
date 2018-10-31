import React, { Component } from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const input={
   width:'100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border:' 2px solid red',
    borderRadius: '4px'
}
const button = {
  padding: '5px',

  display: 'block',
   marginRight: 'auto',
   marginLeft: 'auto',
  backgroundColor: 'yellow',
  color: 'blue',
  border: '2px solid #123456',
  marginTop: '0px',
  fontSize: '20px',
  borderRadius: '50px',
  fontFamily: 'Lobster'
};  
const appname={
  color: '#1a2d63',
  fontWeight: 'bold',
   textAlign: 'center',
  fontSize: '50px',
  fontFamily: 'Lobster',
  marginTop: '2px'
};


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      word: '',
      data: [],
    }
  }

  onWrite(e) {
    this.setState({
    [e.target.name]: e.target.value
     
    });
     console.log(e.target.value)
  }


  sentData(word) {
    $.ajax({
      type: 'POST',
      url: '/difinition',
      data: {
        word: `${this.state.word}`
      },
      //when success do this
      success: function(res) {
        alert(res);
      },
      error: function(res) {
        alert('Failed sent this data please try agian');
      }
    });
  }

render() {
    return (
      <div>
      <h1 style={appname} >Salsabeel Dictionary</h1>
              <h3 style={appname}> Enter word OR text:</h3>
              
              <input style={input} onChange={this.onWrite.bind(this)} />
               <br/>
               <br/>
               <Button style={button} onClick={this.sentData.bind(this)}>Defintion</Button>

              
              </div>
    );
  }
}


export default App;