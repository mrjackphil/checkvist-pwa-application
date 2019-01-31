import ax from 'axios';

export const axios = ax.create({
    baseURL: 'https://beta.checkvist.com/',
    headers: {
      post: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
});
