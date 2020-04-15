import React, { Component } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { Container, Button, Icon, Image, Item, Label, Popup, Statistic, Rating } from 'semantic-ui-react';

export default class Hotels extends Component {

   render() {
 
    return (
	   	
	     <Item.Group divided style={{ maxWidth: '900px' }}>
	       <Item>
	            <Item.Image src='http://i.piccy.info/i9/8acef96c994f930ebd4f4203cb392822/1586587352/565820/1372283/radisson.jpg' />
	            <Item.Content>
		            <Statistic color='green' size='small' floated='right'>
		                <Statistic.Value>8,6</Statistic.Value>
		               	<Statistic.Label>Очень хорошо</Statistic.Label>
		            </Statistic>

		            <Item.Header as='a'>Radisson Blue
		            	<Rating defaultRating={4} maxRating={4} disabled />
		            </Item.Header>
		               
		            <Item.Meta>
		                <span className='price'>от 1300 грн</span>
		            </Item.Meta>

		            	<p>Гостиница "Radisson Blue" расположена в престижном районе города Киева, в нескольких шагах от главного проспекта города.</p>

		            <Item.Extra>
		               	<Popup content='Бар' trigger={<Button size='mini' icon='bar' />} />
		                <Popup content='Wi-Fi' trigger={<Button size='mini' icon='rss' />} />
		                <Popup content='Автостоянка' trigger={<Button size='mini' size='mini' icon='car' />} />
		                <Popup content='Ресторан' trigger={<Button size='mini' icon='food' />} />
		            </Item.Extra>
					<Link href="rooms">
			            <Button color='brown' floated='right'>
			                Забронировать <Icon name='right chevron' />
			            </Button>
			         </Link>   

	        	</Item.Content>
	    	</Item>

	        <Item>
	            <Item.Image src='http://i.piccy.info/i9/09e28c074d69d08b4cf4df54b9f8e9ca/1586587130/63253/1372283/allure.jpg' />

	            <Item.Content>
	            <Statistic color='green' size='small' floated='right'>
	               <Statistic.Value>7,8</Statistic.Value>
	              	<Statistic.Label>Хорошо</Statistic.Label>
	             </Statistic>
	            <Item.Header as='a'>AllureInn
	            	<Rating defaultRating={3} maxRating={3} disabled />
	            </Item.Header>
	         
	            <Item.Meta>
	            	<span className='price'>от 1000 грн</span>
	            </Item.Meta>
	            	<p>Гостиница "AllureInn" расположена в престижном районе города Киева, в нескольких шагах от главного проспекта города.</p>
	            
	            <Item.Extra>
	               	<Popup content='Бар' trigger={<Button size='mini' icon='bar' />} />
	                <Popup content='Wi-Fi' trigger={<Button size='mini' icon='rss' />} />
	                <Popup content='Автостоянка' trigger={<Button size='mini' size='mini' icon='car' />} />
	                <Popup content='Ресторан' trigger={<Button size='mini' icon='food' />} />
	             </Item.Extra>
	              
	            <Button color='brown' floated='right'>
	                Забронировать
	                <Icon name='right chevron' />
	            </Button>

	           </Item.Content>
	           </Item>

	           <Item>
	             <Item.Image src='http://i.piccy.info/i9/01bc10e5287fc3ce7a843a5626041fe7/1586586970/159180/1372283/alexhof.jpg' />

	            <Item.Content>
	            <Statistic color='green' size='small' floated='right'>
	               <Statistic.Value>9,0</Statistic.Value>
	              	<Statistic.Label>Отлично</Statistic.Label>
	            </Statistic>

	            <Item.Header as='a'>Alexhof
	              	<Rating defaultRating={4} maxRating={4} disabled />
	            </Item.Header>

	            <Item.Meta>
	                <span className='price'>от 1200 грн</span>
	            </Item.Meta>
	              	<p>Гостиница "Alexhof" расположена в престижном районе города Киева, в нескольких шагах от главного проспекта города.</p>
	              
	            <Item.Extra>
	                <Popup content='Бар' trigger={<Button size='mini' icon='bar' />} />
	                <Popup content='Wi-Fi' trigger={<Button size='mini' icon='rss' />} />
	                <Popup content='Автостоянка' trigger={<Button size='mini' size='mini' icon='car' />} />
	            </Item.Extra>

	            <Button color='brown' floated='right'>
	                Забронировать
	                <Icon name='right chevron' />
	            </Button>

	            </Item.Content>
	           </Item>
	     	 </Item.Group>
	  
    );
  }
}