import axios from 'axios';

export const user = {
  state: { ribbons: [] },
  reducers: {
    setRibbons(state, payload) {
      return payload;
    }
  },
  effects: ({
    async fetchRibbons(userId, rootState) {
      await axios.get(`/ribbons/${userId}`)
        .then(res => this.setRibbons(res.data))
    }
  })
};
