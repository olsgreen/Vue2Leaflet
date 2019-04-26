import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicExample',
      component: () =>
        import(/* webpackChunkName: "BasicExample" */ './views/Simple.vue')
    },
    {
      path: '/crs-and-image-overlay',
      name: 'CRSAndImageOverlay',
      component: () =>
        import(
          /* webpackChunkName: "CRSAndImageOverlay" */ './views/CRSAndImageOverlay.vue'
        )
    },
    {
      path: '/custom-control',
      name: 'CustomControl',
      component: () =>
        import(
          /* webpackChunkName: "CustomControl" */ './views/CustomControl.vue'
        )
    },
    {
      path: '/custom-url-params',
      name: 'CustomUrlParams',
      component: () =>
        import(
          /* webpackChunkName: "CustomUrlParams" */ './views/CustomUrlParams.vue'
        )
    },
    {
      path: '/advanced-examples',
      name: 'AdvancedExamples',
      component: () =>
        import(/* webpackChunkName: "AdvancedExamples" */ './views/Example.vue')
    },
    {
      path: '/geo-json',
      name: 'GeoJson',
      component: () =>
        import(/* webpackChunkName: "GeoJson" */ './views/GeoJSON.vue')
    },
    {
      path: '/geo-json-2',
      name: 'GeoJson2',
      component: () =>
        import(/* webpackChunkName: "GeoJson2" */ './views/GeoJSON2.vue')
    },
    {
      path: '/geometry-test',
      name: 'GeometryTest',
      component: () =>
        import(
          /* webpackChunkName: "GeometryTest" */ './views/GeometryTest.vue'
        )
    },
    {
      path: '/custom-icon',
      name: 'CustomIcon',
      component: () =>
        import(/* webpackChunkName: "CustomIcon" */ './views/Icon.vue')
    },
    {
      path: '/load-test',
      name: 'LoadTest',
      component: () =>
        import(/* webpackChunkName: "LoadTest" */ './views/LoadTest.vue')
    },
    {
      path: '/marker-popup',
      name: 'MarkerPopupExample',
      component: () =>
        import(
          /* webpackChunkName: "MarkerPopupExample" */ './views/MarkerPopupExample.vue'
        )
    },
    {
      path: '/multi-map',
      name: 'MultiMap',
      component: () =>
        import(/* webpackChunkName: "MultiMap" */ './views/MultiMap.vue')
    },
    {
      path: '/geometry-popup',
      name: 'PopupOnGeometryTest',
      component: () =>
        import(
          /* webpackChunkName: "PopupOnGeometryTest" */ './views/PopupOnGeometryTest.vue'
        )
    },
    {
      path: '/set-bounds',
      name: 'SetBounds',
      component: () =>
        import(/* webpackChunkName: "SetBounds" */ './views/SetBounds.vue')
    },
    {
      path: '/wms-layers',
      name: 'WMSLayers',
      component: () =>
        import(/* webpackChunkName: "WMSLayers" */ './views/WMSLayers.vue')
    },
    {
      path: '/world-copy-jump',
      name: 'WorldCopyJump',
      component: () =>
        import(
          /* webpackChunkName: "WorldCopyJump" */ './views/WorldCopyJump.vue'
        )
    }
  ]
});
