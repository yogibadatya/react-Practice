import React from 'react'
import {
    Container ,
    Row,
    Col,
     InputGroup ,FormControl} from 'react-bootstrap'

class SignUp extends React.Component {
    constructor() {
        
        super()
       console.log(this.props);
           this.handlechange=this.handlechange.bind(this) 
    }
    handlechange(e){

       console.log(this.props);
      var id = this.props.id
      var name = this.props.label
      var value = e.target.value

      // console.log("ddddd",e.target.id)
      this.props.onChange(id,name,value)

    }
    render(){
    return (
        <div>
        
      
 
  <Container>
    <Row>
      <Col>
    <InputGroup className="col-md-12 mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default" >{this.props.label}</InputGroup.Text>
      </InputGroup.Prepend>
     <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        
        value={this.props.data} onChange={this.handlechange}
      />
       
    </InputGroup>
    </Col>
   
    </Row>
    
    
   
    </Container>
  
        </div>
      )  
    }
}
export default SignUp