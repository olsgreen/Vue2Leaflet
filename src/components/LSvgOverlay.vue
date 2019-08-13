<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { optionsMerger, propsBinder, findRealParent } from '../utils/utils.js';
import SvgOverlayMixin from '../mixins/SvgOverlay.js';
import { svgOverlay, DomEvent } from 'leaflet';

export default {
  name: 'LSvgOverlay',
  mixins: [SvgOverlayMixin],
  mounted () {
    this.setup();
  },
  beforeUpdate () {
    this.gc();
  },
  updated () {
    this.setup();
  },
  methods: {
    setup () {
      const options = optionsMerger(this.svgOverlayOptions, this);
      this.mapObject = svgOverlay(this.svgElement, this.bounds, options);
      DomEvent.on(this.mapObject, this.$listeners);
      propsBinder(this, this.mapObject, this.$options.props);
      this.parentContainer = findRealParent(this.$parent);
      this.parentContainer.addLayer(this, !this.visible);
      this.$nextTick(() => {
        this.$emit('ready', this.mapObject);
      });
    },
    gc () {
      if (this.mapObject) {
        this.mapObject.remove();
      }
    }
  },
  render () {
    return null;
  }
};
</script>
