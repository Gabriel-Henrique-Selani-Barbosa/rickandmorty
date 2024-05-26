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
                    <Icon iconPath="logo" />
                </RouterLink>

                <span @click="scrollToTop()">Voltar ao topo <Icon iconPath="arrowUp" /></span>
            </div>
            <div class="footer__bottom">
                <span><Icon iconPath="dev" />Desenvolvido por <strong>Gabriel Barbosa</strong></span>
            </div>
        </div>
    </footer>
</template>