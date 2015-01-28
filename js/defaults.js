var defaults = {

  // Basic Settings
  allowSelect: true,
  allowMove: true,
  allowResize: true,
  allowRotate: true,
  allowPan: true,

  panOnBoundaries: true,
  reactiveZoom: 5,

  trackDocument: true,

  // Styling Options
  baseClass: 'jcrop',
  addClass: null,
  bgColor: 'black',
  bgOpacity: 0.6,
  bgFade: false,
  borderOpacity: 0.4,
  handleOpacity: 0.5,
  handleSize: null,

  aspectRatio: 0,
  keySupport: true,
  createHandles: ['n', 's', 'e', 'w', 'nw', 'ne', 'se', 'sw'],
  createDragbars: ['n', 's', 'e', 'w'],
  createBorders: ['n', 's', 'e', 'w'],
  drawBorders: true,
  dragEdges: true,
  fixedSupport: true,
  touchSupport: null,

  shade: true,

  boxWidth: 0,
  boxHeight: 0,
  boundary: 2,
  fadeTime: 400,
  animationDelay: 20,
  swingSpeed: 3,

  minSelect: [0, 0],
  maxSize: [0, 0],
  minSize: [0, 0],

  // Callbacks / Event Handlers
  onChange: function () { },
  onSelect: function () { },
  onDblClick: function () { },
  onRelease: function () { },
  formatSelect: function (selection, transform) {
    var scale = 1 / transform.s;

    return {
      x: (selection.x - transform.t[0]) * scale | 0,
      y: (selection.y - transform.t[1]) * scale | 0,
      w: selection.w * scale | 0,
      h: selection.h * scale | 0,
      rotate: transform.r
    };
  }
};

module.exports = defaults;
