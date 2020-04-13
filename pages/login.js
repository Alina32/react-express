import React from 'react';
import { Button, Form, Icon, Message, Segment, Container } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';

const INITIAL_USER ={
	email: "",
	password: ""
};

function Login() {
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
		event.preventDefault()

		try {
			setLoading(true);
			setError('');
			console.log(user);
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	}

  return <>
   <Container  style={{ width: '450px' }}>
  	<Message 
  		attached
  		icon="privacy"
  		header="Welcome Back!"
  		content="Login with email and password"
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
  			<Button
  				disabled={disabled || loading}
  				icon="sign in"
  				type="submit"
  				color="orange"
  				content="Login"
  			/>
  	</Form>
  	</Form>	
  	<Message attached="bottom" warning>
  		New user<Icon name="help"/>{""}
  		<Link href="/signup">
  			<a>Sign up here</a>
  		</Link>{""} instead.
  	</Message>
</Container>	
</>;
}

export default Login;
