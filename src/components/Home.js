import React , { Component } from 'react';
import NavbarComponent from './NavbarComponent'
import { Breadcrumb , Jumbotron ,  Container} from 'react-bootstrap'
import CarouselComponent from './CarouselComponent.js'
import Loading from './loadingComponent'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false,

    }
  }
  componentDidMount()
  {
    this.setState({loading : true})
  }

  render()
  {
    let {loading } = this.state;
    if (!loading){
      return <Loading/>
    }
    return (
      <div >
<NavbarComponent />
<Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item  href="/" >
              Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/" >
          </Breadcrumb.Item>
        </Breadcrumb>

        <CarouselComponent/>

        <Jumbotron fluid style={{ marginBottom:0}}>
          <Container style={{marginBottom : 20 ,  marginTop : 0}}>

          
          <h1 style={{color :"#2f3542" , fontStyle: "italic"}}>About</h1>
	<a name="section1" href="/#section1">
          <p>
          Bakes & Beans is  one of the first stand alone coffee cafes in the country with its first branch that opened 20 years ago. It is the the brain child  of  Gurlal  Grewal , an industrialist   who set up    Upper India Steel .This cafe was not conceived as a business venture but from a passion to serve the best food in the best ambience .Cafes were a relatively brand new concept in the country at that time and this was one of the 1st cafes in Punjab.For more than 20 years Bakes & beans has been serving you impeccable quality of beverages and food .These 2 decades has been testimony to our strength of quality. Our sister concern Oliva ,the first  fine dining Italian restaurant in Punjab has been serving great quality for 20 years too..Gurlal Grewal introduced Italian cuisine  to Ludhiana and continue doing so to this day .His  motto is to get the best quality and the best taste on your plate or in that mug . The cost of making the food or the drink doesn’t matter as long as we are sure  it tastes great. That is our strength .That’s why our customers keep coming back for more and more. Come and taste the difference .

          </p>
</a>
          </Container>
        </Jumbotron>


</Container>





      </div>
    );
  }
}

export default Home;
