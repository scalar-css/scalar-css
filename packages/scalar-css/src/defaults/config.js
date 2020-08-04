export default {
  Options: {},
  Theme: {
    Fonts: {
      sans: {
        fontFamily: 'system',
        elements: 'body'
      },
      roboto: {
        fontFamily: '"Roboto Slab", serif',
        capHeight: 0.7288135593220338,
        ligatures: 'normal',
        elements: ['h1', 'h2', 'h3', 'h4', 'h5']
      },
      mono: {
        fontFamily: 'monospace',
        elements: 'mono'
      }
    },
    Typography: {
      '-3': 'system',
      '-2': 'system',
      '-1': 'system',
      '0': 'system',
      '1': 'georgia',
      '2': 'georgia',
      '3': 'georgia',
      '4': 'georgia',
      '5': 'georgia'
    },
    Screens: [
      {
        key: 'start',
        fontScaleId: 'minorThird',
        breakpointStartPx: 320,
        baseFontSizePx: 16,
        baseLineHeight: 1.5,
        container: {
          padding: '1vr'
        }
      },
      {
        key: 'sm',
        breakpointStartPx: 576,
        container: {
          maxWidth: 540
        }
      },
      {
        key: 'md',
        breakpointStartPx: 768,
        baseFontSizePx: 16,
        baseLineHeight: 1.5,
        container: {
          maxWidth: 720
        }
      },
      {
        key: 'lg',
        breakpointStartPx: 992,
        fontScaleId: 'perfectFourth',
        container: {
          padding: '0',
          maxWidth: 960,
          margin: 'auto'
        }
      },
      {
        key: 'xl',
        breakpointStartPx: 1200,
        baseFontSizePx: 20,
        baseLineHeight: 1.5,
        container: {
          maxWidth: 1140
        }
      },
      {
        key: 'end',
        breakpointStartPx: 1440
      }
    ]
  }
}
