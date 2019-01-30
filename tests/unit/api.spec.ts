import Api from '@/lib/api';
import sinon, { SinonSandbox } from 'sinon';
import axios, { AxiosPromise } from 'axios';
import Mock from 'axios-mock-adapter';


describe('Testing base functions', () => {
	let api: Api;
	let mock: Mock;

	beforeEach(() => {
		mock = new Mock(axios);
		api = new Api();
	});

	it('test login function', (done) => {

		mock.onAny().reply(500);
		mock.onPost('auth/login.json', {
			username: 'login',
			remote_key: 'password'
		}).reply(200, {
			token: 'sometoken'
		})

		api.login('login', 'password').then( r => {
				if (r.token === 'sometoken') {
					return done();
				} else {
					return done(r);
				}
			}
		);
	});
});