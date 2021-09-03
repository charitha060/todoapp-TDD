//import logo from './logo.svg';
import './App.css';
import React, {Component}  from 'react';
import { render } from '@testing-library/react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
  
  
class App extends Component  {
  constructor(props) {
    super(props);
  
    // Setting up state
    this.state = {
      userInput : "",
      list:[]
    }
  }
  
  // Set a user input value
  updateInput(value){
    this.setState({
      userInput: value,
    });
  }
  
  // Add item if user input in not empty
  addItem(){
    if(this.state.userInput !== '' ){
      const userInput = {
  
        // Add a random id which is used to delete
        id :  Math.random(),
  
        // Add a user value to list
        value : this.state.userInput
      };
  
      // Update list
      const list = [...this.state.list];
      list.push(userInput);
  
      // reset state
      this.setState({
        list,
        userInput:""
      });
    }
  }
  
  // Function to delete item from list use id to delete
  deleteItem(key){
    const list = [...this.state.list];
  
    // Filter values and leave value which we need to delete
    const updateList = list.filter(item => item.id !== key);
  
    // Update list in state
    this.setState({
      list:updateList,
    });
  
  }
  
  render(){
    document.title="To-Do-List"
    return(<Container>
      <title>To-Do-List</title>
      <header className="App-header">
        <h1>To-Do-List</h1>
      </header>
  
          <Row style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: '3rem',
                  fontWeight: 'bolder',
                  
                }}
                >
          </Row>
  
           <hr/>
          <Row>
          <Col md={{ span: 10, offset: 10 }}>
  
          <InputGroup className="mb-3">
          <FormControl className="md-8"
           
           data-testid="messageText"
           v-model="inputText"
            aria-size="50px"
            value = {this.state.userInput}
            onChange = {item => this.updateInput(item.target.value)}
            aria-label="add something"
            aria-describedby="basic-addon2"
            
          />
          &nbsp;&nbsp;&nbsp;
         <InputGroup.Append>
         <Button 
            data-testid="sendButton"
            
            className="md-7"
              variant="dark"
              size="lg"
              onClick = {()=>this.addItem()}
              >
              +
            </Button>
         </InputGroup.Append> 
        </InputGroup>
        
            
          
  
     </Col>
   </Row>
   <Row>
     <Row md={{ span: 5, offset: 4 }}>
        <ListGroup  >
        
          <ul className="mb-4" data-testid="list" >
          {/* map over and print items */}
         {this.state.list.map(item => {return(
           <li  className="mb-5" >
  
            <ListGroup.Item  action 
              onClick = { () => this.deleteItem(item.id) }>
              {item.value}
            </ListGroup.Item>
            </li>
  
         )})}
         </ul>
         
        </ListGroup>
     </Row>
   </Row>
     </Container>
    );
  }
}
  
export default App;
