import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import SideBar from '../components/Hotels/SideBar';
import Footer from '../components/Index/Footer';

export default class Hotelspage extends Component {

   render() {
 
    return (
    <>	
	    <Container style={{ width: '1200px' }}>
		 <SideBar />
		</Container>    
		 <Footer />
	</>	
    );
  }
}