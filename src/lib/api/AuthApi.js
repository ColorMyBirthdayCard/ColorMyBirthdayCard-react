import request from '@api/Core';

export default {
  signIn(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    });
  },
  signUp(data) {
    return request({
      url: '/test',
      method: 'get'
    });
  }
};
