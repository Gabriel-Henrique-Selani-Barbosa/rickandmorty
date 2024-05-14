<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import CharacterCard from '@/components/base/CharacterCard.vue';

export default {
  name: 'HomeView',
  components: {
    CharacterCard,
  },
  setup() {
    const store = useStore();
    const characters = ref([]);

    onMounted(async () => {
      try {
        await store.dispatch('fetchCharacters'); // Chama a action diretamente
        characters.value = store.state.characters.characters;
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    });

    return { characters };
  },
};
</script>

<template>
  <main>
    <CharacterCard :characters="characters.results"/>
  </main>
</template>