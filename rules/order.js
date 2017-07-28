// Order inspired by Concentric CSS
// http://rhodesmill.org/brandon/2011/concentric-css/
module.exports = {
  'order/properties-order': [
    {
      order: 'strict',
      properties: [
        'content',
        'quotes',
      ],
    },
    {
      order: 'strict',
      properties: [
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'visibility',
        'opacity',
      ],
    },
    {
      order: 'strict',
      properties: [
        'transform',
        'transform-origin',
        // Animating transitions is common
        'transition'
      ],
    },
    
    {
      order: 'strict',
      properties: [
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
      ],
    },
    {
      order: 'strict',
      properties: [
        'box-sizing',
        'display',
        'overflow',
        'vertical-align',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        'align-self',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'grid',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-column-gap',
        'grid-row-gap',
        'columns',
        'column-gap',
        'column-fill',
        'column-rule',
        'column-span',
        'column-count',
        'column-width',
        'float',
        'clear',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
      ],
    },
    {
      order: 'strict',
      properties: [
        'background',
        'background-attachment',
        'background-clip',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',
        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'outline',
        'box-shadow',
      ],
    },
    {
      order: 'strict',
      properties: [
        'list-style',
        'list-style-type',
        'list-style-image',
        'list-style-position',
      ],
    },
    {
      order: 'strict',
      properties: [
        'caption-side',
        'table-layout',
        'border-collapse',
        'border-spacing',
        'empty-cells',
      ],
    },
    {
      order: 'strict',
      properties: [
        'font',
        'font-size',
        'font-weight',
        'font-style',
        'font-smoothing',
        'font-feature-settings',
        'line-height',
        'color',
        'text-align',
        'text-indent',
        'text-transform',
        'text-decoration',
        'text-rendering',
        'text-shadow',
        'text-overflow',
        'letter-spacing',
        'word-spacing',
        'word-wrap',
        'word-break',
        'white-space',
      ],
    },
    {
      order: 'strict',
      properties: [
        'cursor'
      ],
    },
  ],
  'order/properties-alphabetical-order': null,
};
