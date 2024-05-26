<script>
    import Icon from '@/components/base/Icon.vue';
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            Icon,
            RouterLink
        },
        props: {
            characters: {
                type: Array,
                required: true
            }
        },
        methods: {
            getIconPathBySpecies(species) {
                const iconMap = {
                    Human: 'human',
                    Alien: 'alien',
                    Robot: 'robot'
                };
                return iconMap[species] || '';
            },
            getIconPathByStatus(status) {
                const colorMap = {
                    Alive: 'alive',
                    Dead: 'dead',
                    unknown: 'unknown'
                };
                return colorMap[status] || '';
            }
        }
    }
</script>

<template>
    <li class="character__item" v-for="character in characters" :key="character.id">
        <figure class="character__item--figure">
            <img :src="character.image" :alt="character.name" />
        </figure>
        <div class="character__item--info">
            <h3>{{ character.name }}</h3>

            <ul class="status">
                <li>
                    <Icon :iconPath="getIconPathByStatus(character.status)" iconColor="#BFDE42" />
                    {{ character.status }}
                </li>
                <li>
                    <Icon :iconPath="getIconPathBySpecies(character.species)" iconColor="#313234" />
                    {{ character.species }}
                </li>
                <li>
                    <Icon iconPath="planet" iconColor="#313234" />
                    {{ character.origin.name }}
                </li>
            </ul>
        </div>
        <RouterLink :to="{ name: 'Characters', params: { characterId: character.id }}" class="character__item--know-more">
            <Icon iconPath="know" />
            Saiba Mais
        </RouterLink>
    </li>
</template>