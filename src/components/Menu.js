import React , { Component } from 'react';
import NavbarComponent from './NavbarComponent'
import { Breadcrumb , Container , Card  , Badge , Row , Col} from 'react-bootstrap'




class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false,
      data : []

    }
  }

   componentDidMount()
   {
     fetch("https://bakes-and-beans-api.herokuapp.com/retrieve-item/").then(res =>res.json()).then(json => {this.setState({loading : true,data : json})})
   }


  render()
  {
    let {loading , data} = this.state;
    if (!loading){
      return <div className="loader-container"><div className="loader"><img alt="loading" src={require("../assets/loading.svg")}/></div></div>
    }
    else{
    return (
      <div >
      <NavbarComponent/>

      <Breadcrumb>
        <Breadcrumb.Item  href="/">
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active href="/">
        Menu
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container>

      <div>
      <ul>
        {data.map(items => (


          <Card style={{ margin : 10  }} key={items.pk}>
  <Card.Body >

  <Row>
  <Col  sm={8}>
    <Card.Title ><h1>{items.itemName}</h1></Card.Title>
  </Col>
    <Col sm={4}>{items.nonVeg ?
    <Badge  variant="danger">
      <h6 style={{margin : 2}}>  Non Veg</h6>
      </Badge> : <Badge variant="success">
          <h6 style={{margin : 2}}>Veg</h6>
        </Badge>}
      </Col>
  </Row>

  <Row>
  <Col style={{marginTop : 25}}>
    <Card.Text style={{fontStyle : "italic"}}>
      {items.ingredients}
    </Card.Text>
  </Col>
  </Row>

  </Card.Body>
</Card>


        ))}
      </ul>
      </div>


        </Container>
      </div>
    );}
  }
}

export default Menu;
