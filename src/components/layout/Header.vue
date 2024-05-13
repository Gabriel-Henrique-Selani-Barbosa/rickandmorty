<script>
    import { RouterLink } from 'vue-router';
    import Icon from '@/components/base/Icon.vue';
    import Theme from '@/components/base/Theme.vue';
    import Wishlist from '@/components/base/Wishlist.vue';

    export default {
        components: {
            RouterLink,
            Icon,
            Theme,
            Wishlist
        },
        data() {
            return {
                headerText: 'Wubba Lubba Dub Dub! Cuidado com os olhos.',
                iconPath: 'lightThemeImage'
            }
        },
        methods: {
            handleThemeChange(newTheme) {
                this.headerText = newTheme === 'dark' ? 'Ai sim, Porr#@%&*' : 'Wubba Lubba Dub Dub! Cuidado com os olhos.';
                this.iconPath = newTheme === 'dark' ? 'darkThemeImage' : 'lightThemeImage';
            }
        }
    }
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__first-content">
                <RouterLink to="/">
                    <Icon iconPath="logo" iconColor="#11B0C8" />
                </RouterLink>
                <h1>
                    Saiba tudo em um só <strong>lugar.</strong>
                </h1>
                <h5>Personagens. localizações, episódios e muito mais.</h5>
                <div class="header__buttons">
                    <Theme @theme-changed="handleThemeChange"  />
                    <Wishlist />
                </div>
                <p>{{ headerText }}</p>
            </div>
            <div class="header__second-content">
                <Icon :iconPath="iconPath" />
            </div>
        </div>
    </header>
</template>