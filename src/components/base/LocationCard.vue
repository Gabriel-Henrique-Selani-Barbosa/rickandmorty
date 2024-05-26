<script>
    import Icon from '@/components/base/Icon.vue';

    export default {
        components: {
            Icon
        },
        props: {
            locations: {
                type: Array,
                required: true
            }
        },
        methods: {
            getIconPathByType(type) {
                const iconMap = {
                    Planet: 'planet',
                    Spacestation: 'station2',
                    Dimension: 'dimension',
                    TV: 'tv',
                    Microverse: 'microverse',
                    Cluster: 'cluster',
                    Resort: 'planet',
                    Fantasytown: 'planet'
                };
                return iconMap[type] || '';
            },
        }
    }
</script>

<template>
    <li class="location__item" v-for="location in locations" :key="location.id">
        <div class="location__item--info">
            <Icon :iconPath="getIconPathByType(location.type.replace(/\s+/g, ''))" iconColor="#313234" />

            <h3>{{ location.type }}</h3>
            <h2>{{ location.name }}</h2>
        </div>
    </li>
</template>