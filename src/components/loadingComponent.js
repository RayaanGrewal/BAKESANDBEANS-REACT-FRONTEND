import React from 'react';
import {Container } from "react-bootstrap";


const Loading = () => {

  return (

<Container>
    <div className="loader">
      <img alt="loading"src={require("../assets/loading.svg")}/>
    </div>
</Container>
)
}
export default Loading
