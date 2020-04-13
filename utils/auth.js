import cookie from 'js-cookie';
import Router from 'next/router';


export function handleLogin() {
	cookie.set('token', token);
	Router.push('/account');

}
