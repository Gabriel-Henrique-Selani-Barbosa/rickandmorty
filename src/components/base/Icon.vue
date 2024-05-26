<script>
const vSvg = {
  mounted(el, binding) {
    const svgPath = binding.value.path;
    const iconColor = binding.value.color;
    fetch(svgPath)
      .then(response => response.text())
      .then(svgData => {
        // Cria um elemento temporário para manipular o SVG
        const tempEl = document.createElement('div');
        tempEl.innerHTML = svgData;
        // Atualiza a cor do path do SVG com a cor fornecida, se houver
        const svgElement = tempEl.querySelector('svg');
        if (iconColor) {
          const pathElement = svgElement.querySelector('path');
          pathElement.setAttribute('fill', iconColor);
        }
        // Adiciona o SVG modificado ao elemento do componente
        el.appendChild(svgElement);
      });
  }
};

export default {
  props: {
    iconPath: String,
    iconColor: String // Adiciona uma prop para a cor do ícone
  },
  directives: {
    svg: vSvg
  },
  computed: {
    getIconFullPath() {
      return `/icons/${this.iconPath}.svg`;
    }
  }
};
</script>

<template>
  <div class="icon-wrapper" v-svg="{ path: getIconFullPath, color: iconColor }"></div>
</template>