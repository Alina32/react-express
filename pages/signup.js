import React from 'react';
import { Button, Form, Icon, Message, Segment, Container } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';

const INITIAL_USER ={
	name: "",
	email: "",
	password: ""
};

function Signup() {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	React.useEffect(() => {
		const isUser = Object.values(user).every(el => Boolean(el))
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user])

	function handleChange(event) {
	const {name, value} = event.target;
		setUser(prevState => ({ ...prevState, [name]: value }))
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setLoading(true);
			setError('');
			const url = `${baseUrl}/api/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	}

  return <>
   <Container  style={{ width: '450px' }}>
  	<Message style={{borderRadius:'0px'}}
  		attached
  		icon="settings"
  		header="Get Started!"
  		content="Create a new account"
  		color="teal"
  	/>
  	<Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
  		<Message
  			error
  			header="Ooops!"
  			content={error}
  		/>	
  		<Form className='attached fluid segment'>
  			<Form.Input
  				fluid
  				icon="user"
  				iconPosition="left"
  				label="Name"
  				placeholder="Name"
  				name="name"
  				value={user.name}
  				onChange={handleChange}
  			/>
  			<Form.Input
  				fluid
  				icon="envelope"
  				iconPosition="left"
  				label="Email"
  				placeholder="Email"
  				name="email"
  				type="email"
  				value={user.email}
  				onChange={handleChange}
  			/>
  			<Form.Input
  				fluid
  				icon="lock"
  				iconPosition="left"
  				label="Password"
  				placeholder="Password"
  				name="password"
  				type="password"
  				value={user.password}
  				onChange={handleChange}
  			/>
  			<Form.Checkbox inline label='I agree to the terms and conditions' />
  			<Button
  				disabled={disabled || loading}
  				icon="signup"
  				type="submit"
  				color="instagram"
  				content="Signup"
  			/>  
  	</Form>
  	</Form>		
  	<Message attached="bottom" warning style={{borderRadius:'0px'}}>
  		Existing user<Icon name="help"/>{""}
  		<Link href="/login">
  			<a>Log in here</a>
  		</Link>{""} instead.
  	</Message>
</Container>	
</>;
}

export default Signup;
