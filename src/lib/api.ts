import IFetcher from '@/entities/api';
import axios from 'axios';
import { jsonToFormData } from './data';
import { ChecklistOptions } from '@/entities/datatypes';

export default class Fetcher implements IFetcher {
  public basePath: string;
  constructor(opt?: { basePath: string }) {
    this.basePath = opt ? opt.basePath : 'https://checkvist.com/';
    this.init();
  }

  public async login(u: string, k: string) {
    return this.authPost('auth/login.json', {
      username: u,
      remote_key: k
    });
  }

  public async refreshToken(t: string) {
    return this.authPost('auth/refresh_token.json', {
      old_token: t
    });
  }

  public async checklists(opt?: ChecklistOptions) {
    return this.get('/checklists.json', opt);
  }

  private init() {
    axios.defaults.baseURL = this.basePath;
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
  }

  private async authPost(url: string, opt: any) {
    const promise = await axios.post(url, jsonToFormData(opt));
    return promise.data;
  }

  private async get(u: string, o?: any) {
    const t = localStorage.getItem('token');
    const promise = await axios({
      method: 'get',
      url: u,
      params: {
        token: t,
        ...o
      }
    });
    return promise.data;
  }

  private async post(u: string, opt: any) {
    const lsKey = (s: string): string => {
      const t = localStorage.getItem(s);
      return !!t ? t : '';
    };

    const authToken = (o: { [key: string]: string | null }) =>
      Object.defineProperty(o, 'token', lsKey('token'));

    const promise = await axios.post(u, {
      data: jsonToFormData(authToken(opt))
    });
    return promise.data;
  }


}
