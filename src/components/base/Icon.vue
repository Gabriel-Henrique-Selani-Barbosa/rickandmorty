<template>
  <div class="icon-wrapper">
    <object type="image/svg+xml" class="icon" :data="getIconFullPath" ref="svgObject"></object>
  </div>
</template>

<script>
export default {
  props: {
    iconPath: String,
    iconColor: String
  },
  data() {
    return {
      svgObject: null
    };
  },
  computed: {
    getIconFullPath() {
      return `/icons/${this.iconPath}.svg`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.svgObject = this.$refs.svgObject;
      if (this.svgObject) {
        this.svgObject.addEventListener('load', this.updateSvgStyle);
      }
    });
  },
  watch: {
    iconColor() {
      this.updateSvgStyle();
    }
  },
  methods: {
    updateSvgStyle() {
      if (this.svgObject && this.svgObject.contentDocument) {
        const pathElements = this.svgObject.contentDocument.querySelectorAll('path');
        pathElements.forEach((pathElement) => {
          if (pathElement.hasAttribute('fill')) {
            pathElement.setAttribute('fill', String(this.iconColor || ''));
          } else if (pathElement.hasAttribute('stroke')) {
            pathElement.setAttribute('stroke', String(this.iconColor || ''));
          }
        });
      }
    }
  }
};
</script>
