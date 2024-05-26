<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import CharacterCard from '@/components/base/CharacterCard.vue';
import EpisodeCard from '@/components/base/EpisodeCard.vue';
import LocationCard from '@/components/base/LocationCard.vue';

export default {
  name: 'HomeView',
  components: {
    CharacterCard,
    EpisodeCard,
    LocationCard
  },
  setup() {
    const store = useStore();
    const characters = ref([]);
    const episodes = ref([]);
    const locations = ref([]);

    onMounted(async () => {
      try {
        await store.dispatch('fetchCharacters');
        await store.dispatch('fetchEpisodes');
        await store.dispatch('fetchLocations');
        characters.value = store.state.characters.characters.results.splice(0, 8);
        episodes.value = store.state.episodes.episodes.results.splice(0, 5);
        locations.value = store.state.locations.locations.results.splice(0, 7);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    });

    return { characters, episodes, locations };
  },
};
</script>

<template>
  <main>
    <div class="characters">
      <h2>Personagens</h2>

      <ul class="characters__list">
        <CharacterCard :characters="characters"/>
      </ul>
    </div>

    <div class="episodes">
      <h2>Episódios</h2>

      <ul class="episodes__list">
        <EpisodeCard :episodes="episodes"/>
      </ul>
    </div>

    <div class="planets">
      <h2>Localizações</h2>

      <ul class="planets__list">
        <LocationCard :locations="locations"/>
      </ul>
    </div>
  </main>
</template>