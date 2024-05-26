import { createStore } from 'vuex';
import charactersModule from './modules/characters';
import episodesModule from './modules/episodes';
import locationsModule from './modules/locations';

export default createStore({
  modules: {
    characters: charactersModule,
    episodes: episodesModule,
    locations: locationsModule,
  },
});
