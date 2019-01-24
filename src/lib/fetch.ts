import IFetcher, { FetcherOptions } from '@/entities/fetch';
import { jsonToFormData } from './data';
import fetch from 'isomorphic-fetch';

export default class Fetcher implements IFetcher {
	basePath: string;
	constructor( b?: FetcherOptions) {
		this.basePath = b ? b.basePath : 'https://checkvist.com/';
	}

	private async get(u: string, opt: RequestInit) {
		return fetch(this.basePath + u, opt).then( r => {
			if (r.status !== 200) {
				throw `${r.status} ${r.statusText}`;
			} else {
				return r;
			}
		});
	}

	async login(u: string, k: string) {
		const f = jsonToFormData({
			username: u,
			remote_key: k
		});
		return this.get('auth/login.json', {
			method: 'post',
			body: f
		}).then( res => res.text() );
	}

	async refreshToken(t: string) {
		const f = jsonToFormData({ old_token: t });
		return this.get('auth/refresh_token.json', {
			method: 'post',
			body: f
		}).then( res => res.text());
	}

}
