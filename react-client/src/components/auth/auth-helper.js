import { signout } from '../../utils/api-auth.js';

const auth = {
	isAuthenticated() {
		if (typeof window == 'undefined') return false;

		if (localStorage.getItem('jwt'))
			return JSON.parse(localStorage.getItem('jwt'));
		else return false;
	},
	authenticate(jwt, cb) {
		if (typeof window !== 'undefined')
			localStorage.setItem('jwt', JSON.stringify(jwt));
		cb();
    }
    ,
	signout(cb) {
		if (typeof window !== 'undefined') localStorage.removeItem('jwt');
		cb();
		//optional
		
	}
};

export default auth;