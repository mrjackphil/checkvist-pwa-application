import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Fetcher from '@/lib/fetch';
import authData from './test-auth';

describe('Fetch testing', () => {
	it('Get token', (done) => {
		const fetch = new Fetcher();
		fetch.login(authData.email, authData.pass).then( token => {
				done(token);
			}
		).catch(err => done(err));
	});
});