import axiosInstance from '../../axiosInstance';

const state = {
  episodes: [],
};

const mutations = {
  SET_EPISODES(state, episodes) {
    state.episodes = episodes;
  },
};

const actions = {
  async fetchEpisodes({ commit }) {
    try {
      // Realiza a chamada à API usando o Axios
      const response = await axiosInstance.get('episode');
      // Extrai os dados da resposta
      const episodesData = response.data;
      // Chama a mutation para atualizar o estado com os episodios
      commit('SET_EPISODES', episodesData);
    } catch (error) {
      console.error('Erro ao buscar episódios:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
