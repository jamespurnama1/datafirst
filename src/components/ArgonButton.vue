/* eslint-disable prettier/prettier */
<template>
  <button class="btn mb-0" :disabled="disabled" :class="getClasses(variant, color, size, fullWidth, active, disabled)">
    <slot />
  </button>
</template>

<script>
export default {
  name: "argon-button",
  props: {
    color: {
      type: String,
      default: "info",
    },
    size: {
      type: String,
      default: "md",
    },
    variant: {
      type: String,
      default: "fill",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClasses: (variant, color, size, fullWidth, active, disabled) => {
      let colorValue, sizeValue, fullWidthValue, activeValue, opacity, cursor;

      // Setting the button variant and color
      if (disabled) {
        colorValue = `bg-gradient-dark`;
        opacity = `opacity-3`;
        cursor = `cursor-disabled`;
      } else if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else if (variant === "outline") {
        colorValue = `btn-outline-${color}`;
      } else {
        colorValue = `btn-${color}`;
      }

      sizeValue = size ? `btn-${size}` : null;

      fullWidthValue = fullWidth ? "w-100" : null;

      activeValue = active ? "active" : null;

      return `${colorValue} ${cursor} ${opacity} ${sizeValue} ${fullWidthValue} ${activeValue}`;
    },
  },
};
</script>
