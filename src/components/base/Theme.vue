<template>
    <div class="theme">
        <div class="theme__option" @click="changeTheme(false)" :class="{ 'active': !dark }">
            <Icon iconPath="sun" iconColor="#fff" />
            Claro
        </div>
        <div class="theme__option" @click="changeTheme(true)" :class="{ 'active': dark }">
            <Icon iconPath="moon" :iconColor="dark ? '#fff' : '#313224'" />
            Escuro
        </div>
    </div>
</template>
  
<script>
  import Icon from '@/components/base/Icon.vue';
  
  export default {
    components: {
      Icon
    },
    data() {
      return {
        dark: false
      };
    },
    methods: {
      changeTheme(isDark) {
        if (this.dark !== isDark) {
          this.dark = isDark;
          const newTheme = isDark ? 'dark' : 'light';
          document.body.setAttribute('data-theme', newTheme);
          this.$emit('theme-changed', newTheme);
        }
      }
    }
  };
  </script>
  