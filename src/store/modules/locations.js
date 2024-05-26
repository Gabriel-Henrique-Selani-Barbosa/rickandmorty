import axiosInstance from '../../axiosInstance';

const state = {
  locations: [],
};

const mutations = {
  SET_LOCATIONS(state, locations) {
    state.locations = locations;
  },
};

const actions = {
  async fetchLocations({ commit }) {
    try {
      // Realiza a chamada à API usando o Axios
      const response = await axiosInstance.get('location');
      // Extrai os dados da resposta
      const locationsData = response.data;
      // Chama a mutation para atualizar o estado com as localizações
      commit('SET_LOCATIONS', locationsData);
    } catch (error) {
      console.error('Erro ao buscar localizações:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
