import ImageOverlay from './ImageOverlay.js';

export default {
  mixins: [ImageOverlay],
  props: {
    embedMethod: {
      type: String,
      default: 'use',
      validator: function (value) {
        return ['use', 'object'].indexOf(value) !== -1;
      }
    },
    viewBox: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.svgOverlayOptions = {
      ...this.imageOverlayOptions
    };

    this.setElement();
  },
  updated () {
    this.setElement();
  },
  data () {
    return {
      childElement: null
    };
  },
  methods: {
    setElement () {
      if (this.$children.length > 0) {
        this.childElement = this.$children[0].$el;
        let nodeName = this.childElement.nodeName.toLowerCase();

        if (this.$children.length === 1 && nodeName === 'svg') {
          return;
        }

        throw new Error('<l-svg-overlay> elements must only have a single <svg> child.');
      }

      this.childElement = null;
    }
  },
  computed: {
    svgElement () {
      if (this.childElement) {
        return this.childElement;
      }

      var svgElement;

      if (this.embedMethod === 'object') {
        svgElement = document.createElement('object');
        svgElement.setAttribute('data', this.url);
        svgElement.setAttribute('alt', this.alt);
        return svgElement;
      }

      if (this.embedMethod === 'use') {
        svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if (this.viewBox) {
          svgElement.setAttribute('viewBox', this.viewBox);
        }
        svgElement.innerHTML = '<use xlink:href="' + this.url + '"></use>';
        return svgElement;
      }

      throw new Error('Invalid embed method specified. [' + this.embedMethod + ']');
    }
  }
};
