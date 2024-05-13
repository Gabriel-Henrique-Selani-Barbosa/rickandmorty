<script>
    import Icon from '@/components/base/Icon.vue';
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            Icon,
            RouterLink
        }
    }
</script>

<template>
    <div class="wishlist-button">
        <RouterLink to="/">
            <Icon iconPath="heart" iconColor="#fff" />
            Lista de favoritos
        </RouterLink>
    </div>
</template>