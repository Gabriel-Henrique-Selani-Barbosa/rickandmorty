import axiosInstance from '../../axiosInstance';

const state = {
  characters: [],
};

const mutations = {
  SET_CHARACTERS(state, characters) {
    state.characters = characters;
  },
};

const actions = {
  async fetchCharacters({ commit }) {
    try {
      // Realiza a chamada à API usando o Axios
      const response = await axiosInstance.get('character');
      // Extrai os dados da resposta
      const charactersData = response.data;
      // Chama a mutation para atualizar o estado com os personagens
      commit('SET_CHARACTERS', charactersData);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
