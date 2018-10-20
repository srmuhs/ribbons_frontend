import axios from 'axios';

export const user = {
  state: { userId: '', firstName: '', lastName: '' },
  reducers: {
    setUser(state, payload) {
      return payload;
    }
  },
  effects: ({
    async fetchUser(userId, rootState) {
      await axios.get(`/user/${userId}`)
        .then(res => this.setUser(res.data))
    }
  })
};
