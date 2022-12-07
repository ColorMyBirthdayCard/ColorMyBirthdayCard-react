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
      url: '/signup',
      method: 'post',
      data
    });
  },
  checkId(data) {
    return request({
      url: '/checkId',
      method: 'post',
      data
    });
  }
};
