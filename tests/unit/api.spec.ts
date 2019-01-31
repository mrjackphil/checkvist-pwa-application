import Api from '@/lib/api';
import Mock from 'axios-mock-adapter';

describe('Testing base functions', () => {
  let api: Api;
  let mock: Mock;

  beforeEach(() => {
    api = new Api();
    mock = new Mock(api.adapter);
  });

  it('test login function', (done) => {
    mock.onPost('https://beta.checkvist.com/auth/login.json').reply(200, {
      token: 'sometoken'
    });

    api.login('login', 'password').then( (r) => {
        if (r.token === 'sometoken') {
          return done();
        } else {
          return done(r);
        }
      }
    ).catch( (err) => done(err));
  });
});
