import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import HotelSlider from '../components/Rooms/HotelSlider';
import Rooms from '../components/Rooms/Rooms';
import Footer from '../components/Index/Footer';

export default class RoomsPage extends Component {

   render() {
 
    return (
    <>	
     <Container style={{ width: '800px' }}> 
        <Rooms />
	   </Container>    
		 <Footer />
	</>	
    );
  }
}