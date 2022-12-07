import request from '@api/Core';

export default {
  fetchAll(id) {
    return request({
      url: `/letters/${id}`,
      method: 'get',
    });
  },
  send(id, data) {
    return request({
      url: `/letters/${id}`,
      method: 'post',
      data
    });
  }
};
