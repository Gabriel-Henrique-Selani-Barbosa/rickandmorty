<script>
    import { RouterLink } from 'vue-router';
    import Icon from '@/components/base/Icon.vue';

    export default {
        components: {
            Icon,
            RouterLink
        },
        methods: {
            scrollToTop() {
                document.body.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Para uma rolagem suave
                });
            }
        }
    }
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <RouterLink to="/">
                    <Icon iconPath="logo" iconColor="#11B0C8" />
                </RouterLink>

                <span @click="scrollToTop()">Voltar ao topo <Icon iconPath="arrowUp" iconColor="#11B0C8" /></span>
            </div>
            <div class="footer__bottom">
                <span><Icon iconPath="dev" iconColor="#11B0C8" />Desenvolvido por <strong>Gabriel Barbosa</strong></span>
            </div>
        </div>
    </footer>
</template>