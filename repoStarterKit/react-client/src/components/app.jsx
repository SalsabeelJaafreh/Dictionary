import React, { Component } from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
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
  color: 'black',
  fontWeight: 'bold',
   textAlign: 'center',
  fontSize: '50px',
  fontFamily: 'Lobster',
  marginTop: '2px'
};
const dif={
 color: 'black',
  fontWeight: 'bold',
   textAlign: 'center',
  fontSize: '20px',
  fontFamily: 'Lobster',
  marginTop: '2px'


}


class App extends Component {

  constructor(props) {
    super();
  this.state = {
    word:'',
    meaning:''
  }
}

   onWrite(e) {
  {this.setState({word:e.target.value}) }
  
}

// //   sentData(word) {
// //     $.ajax({
// //       type:'GET',
// //      url: 'https://www.google.co.in/search?hl=en&q=define+hello',
// //      dataType: 'json',
// //       success: function(data) {
// //       console.log(data);
// //   }
// // });
//      }



  // sendData(word) {
  //   console.log("salsabeel")
  //   $.ajax({
  //     type: 'POST',
  //     url: '/definition',
  //      data: JSON.stringify({ word: word }),
  //      dataType: "json",
  //     //when success do this
  //     success: function(res) {
  //       console.log(res)
       
  //     },
  //     error: function(res) {
  //       alert('Failed send this data please try agian');
  //     }
  //   });
  // }


getmeaning(){
 $.ajax({
    method: 'GET',
    url: `/definition/${this.state.word}`,
    success:  (data) => {
      // alert(data)
      console.log('testing')
      this.setState({meaning: data});

    }
 })

}



render() {
    return (
      <div>
       
      <h1 style={appname} >Salsabeel Dictionary</h1>
              <h3 style={appname}> Enter word OR text:</h3>
               
              <input style={input} value={this.state.word} onChange={(e)=> {this.setState({word:e.target.value}) } }/>
            
              
              <br />
              
               <button  style={button}onClick= {() => {this.getmeaning()}}>Definition</button>
               <h4 style={dif}>the Difinition is :{this.state.meaning}</h4>
               <div>

               </div>
             
              </div>
    );
  }
}


export default App;