import { init } from '@rematch/core';
import { user } from './models/user';
import { ribbons } from './models/ribbons';

const store = init({
  models: { user, ribbons }
});

export default store