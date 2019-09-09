import React from 'react';
// import {Form,Container ,Row,Col,Button ,InputGroup ,FormControl} from 'react-bootstrap'
import {Form ,Button} from 'react-bootstrap'
//import Header from './components/Header';
//import MainContent from './components/MainContent';
//import Footer from './components/Footer';
// import logo from './logo.svg';
//import ContactCard from './components/ContactCard'
import './App.css';
//import DisplayName from './components/DisplayName';
import SignUp from './components/SignUp'
// import singnUpData from './components/singUpData'
import signUpData from './components/singUpData';

/* function App() {
  return (
   <div className="App">
       <Header />
      <MainContent />
      <Footer />
    </div>
  );
}*/ 
/* function App(){
  return (
    <div className="contacts">
            <ContactCard 
                name= "Mr. Whiskerson"
                imgUrl= "http://placekitten.com/300/200"
                phone= "(212) 555-1234"
                email= "mr.whiskaz@catnap.meow"
            />
            
            <ContactCard 
                name="Fluffykins" 
                imgUrl="http://placekitten.com/400/200" 
                phone="(212) 555-2345" 
                email="fluff@me.com"
            />
            
            <ContactCard 
                name="Destroyer" 
                imgUrl="http://placekitten.com/400/300" 
                phone="(212) 555-3456" 
                email="ofworlds@yahoo.com"
            />
            
            <ContactCard 
                name="Felix" 
                imgUrl="http://placekitten.com/200/100" 
                phone="(212) 555-4567" 
                email="thecat@hotmail.com"
            />
            
        </div>
  )
}*/
/*import Product from "./components/Products"
import productsData from "./components/schoolProducts"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}*/
//import DisplayName from './components/DisplayName'
/*class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isSubmit: false
    }
}
render() {
  let name
if (this.state.isSubmit === true){
   name = "yogesh"
}else {
 name= "badatya"
}
  return(

    <div >
            <input type="text" name="username"/>
           <input type="submit" onClick={{isSubmit : true}} />
    
    <h4>{name}</h4>

        </div>

  )
  }
}
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>*/
/*
function handleChange(e)  {
  console.log(e.target.value)
  const data = e.target.value
  console.log(data);
  
  }
 //  this.handleEvents = handleChange.bind(this)
function handleEvents(data){
console.log("name" ,data )
let val = handleChange.bind(this)
console.log(val.data)

  
}


function App(){
 // handleEvents = handleEvents.bind

 return(

    <div >
          <input type="text" name="username" onChange={handleChange}/>.
           <input type="submit" onClick={handleEvents} />
           </div>

  )
}
*/

/*class App extends React.Component {
  
  constructor() {
      super()
      this.state = { data :[ 'initial value','yogesh', 25,'yogi@gmail.com','male', 7405950736] }
      this.handleClick = this.handleClick.bind(this)
      this.handlechange = this.handlechange.bind(this)
  }
  handlechange(r){
    console.log("data",this.state);
    let formdata = this.state.data;
    formdata[r.target.dataset.index] = r.target.value;
    console.log("index",r.target.dataset.index,formdata)
    console.log(r.target.value)
  //const val = r.target.value
    this.setState(prevState => {
          return {
              data : formdata
          }
      })
  
  }
  
  handleClick() {
      //console.log("ddddddddddddddd",this.state);
    
      console.log("eeee",this.state.data )
      /*
      this.setState(prevState => {
          return {
            data : this.state.data
          }
      })
  }
  
  render() {
    return (
      <div>
      
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
<Form>
<Container>
  <Row>
    <Col>
  <InputGroup className="col-md-12 mb-3" >
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default" >Username</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      name="username" data-index ={0} value={this.state.data[0]} onChange={this.handlechange} 
    />
     
  </InputGroup>
  </Col>
  <Col>
  <InputGroup className=" col-md-12 mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      name="fname"data-index ={1} value={this.state.data[1]} 
      onChange={this.handlechange}
    />
     
  </InputGroup>
  </Col>
  </Row>
  <Row><Col>
  <InputGroup className="col-md-12 mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Age</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      name="age" data-index ={2} value={this.state.data[2]} 
      onChange={this.handlechange}
    />
     
  </InputGroup>
  </Col>
  <Col>
  <InputGroup className="col-md-12 mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      name="email" data-index ={3} value={this.state.data[3]} 
      onChange={this.handlechange} 
    />
     
  </InputGroup>
  </Col>
  </Row>
  <Row>
    <Col>
  <InputGroup className="col-md-12 mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Gender</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      name="gender" data-index ={4} value={this.state.data[4]} 
      onChange={this.handlechange}
    />
     
  </InputGroup>
  </Col>
  <Col>
  <InputGroup className="col-md-12 mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Phone</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      
      name="phone" data-index ={5} value={this.state.data[5]} 
      onChange={this.handlechange}
    />
  </InputGroup>
  </Col>
  </Row>
  <hr/>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Total Value</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value = {  JSON.stringify(this.state.data , null , ' ')  }
    />
     
  </InputGroup>
  <hr/>  
  <Button variant="primary" onClick={this.handleClick}>Change the details</Button>
 
  </Container>
      
  </Form>  
      </div>
    )  
  }
}*/
/*
  <h4 >Username : <input type="text" name="username" data-index ={0} value={this.state.data[0]} 
        onChange={this.handlechange} /> </h4>
        <h4 >Name : <input type="text" name="fname"data-index ={1} value={this.state.data[1]} 
        onChange={this.handlechange} /> </h4>
        <h4 >Age : <input type="text" name="age" data-index ={2} value={this.state.data[2]} 
        onChange={this.handlechange} /> </h4>
        <h4 >Email : <input type="text" name="email" data-index ={3} value={this.state.data[3]} 
        onChange={this.handlechange} /> </h4>
        <h4 >Gender : <input type="text" name="gender" data-index ={4} value={this.state.data[4]} 
        onChange={this.handlechange} /> </h4>
        <h4 >Phone : <input type="text" name="phone" data-index ={5} value={this.state.data[5]} 
        onChange={this.handlechange} /> </h4>
        <p>{  JSON.stringify(this.state.data , null , ' ')  } </p>
        <button onClick={this.handleClick}>Change!</button>
        <hr/>
        { JSON.stringify(this.state.data , null , ' ') }
*/

  class App extends React.Component {
  
    constructor() {
        super()
        this.state = { data : signUpData }
        this.handleClick = this.handleClick.bind(this)
        this.handlechange = this.handlechange.bind(this)
    }
    handlechange(id,name,value){
      console.log("data",this.state);
      //  let formdata = JSON.stringify(this.state.data);
       let formdata = this.state.data;

       //var formArray = formdata.map( obj =>{ var sabji ={}; sabji[obj.id] = id ; return obj })
       var formArray = formdata.map(obj =>{ 

        if(obj.id === id) {
          obj.data = value; 
          console.log("sssssssssss",obj, value);  
        }

        //  var rObj = {}; 
        //  rObj[id] = obj.id;
          
          return obj;  
        });
       //  formdata[e] = v.target;
       console.log("index",formdata);
       console.log("dataaaaa",formArray)
      //  console.log("iddd",id)
     
  
       
    //  const formComponent= formdata.map(id=formdata.id)
    // //const val = r.target.value
      this.setState(prevState => {
            return {
                data :  signUpData 
            }
        })
    
   

    }
    
    handleClick() {
        //console.log("ddddddddddddddd",this.state);
      
        console.log("eeee",this.state.data )
        /*
        this.setState(prevState => {
            return {
              data : this.state.data
            }
        })*/
    }


    
    render() {
   const signUpComponent = this.state.data.map(signup => < SignUp key={signup.id} id={signup.id} label = {signup.label} data={signup.data} onChange={this.handlechange}/>)

  return(
    <div>
        <link
    rel="stylesheet"
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
  />
   <Form>
      {signUpComponent}
      <Button variant="primary" onClick={this.handleClick}
    >Change the details</Button>
     </Form>
     <pre>
       {JSON.stringify(this.state.data, null, ' ')}
     </pre>
    </div>
  )
  }
  }
export default App;
