<script>
    import Icon from '@/components/base/Icon.vue';

    export default {
        components: {
            Icon
        },
        props: {
            episodes: {
                type: Array,
                required: true
            }
        },
    }
</script>

<template>
    <li class="episode__item" v-for="episode in episodes" :key="episode.id">
        <div class="episode__item--info">
            <h3><Icon iconPath="episode" iconColor="#313234" /> {{ episode.name }} | {{ episode.episode }}</h3>
        </div>
    </li>
</template>