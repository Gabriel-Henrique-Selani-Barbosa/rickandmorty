import { createStore } from 'vuex';
import charactersModule from './modules/characters';

export default createStore({
  modules: {
    characters: charactersModule,
  },
});
