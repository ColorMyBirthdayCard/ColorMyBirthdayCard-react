import request from '@api/Core';

export default {
  fetchAll(id) {
    return request({
      url: `/home/${id}`,
      method: 'get'
    });
  },
  send(id, data) {
    return request({
      url: `/card/${id}`,
      method: 'post',
      data
    });
  }
};
