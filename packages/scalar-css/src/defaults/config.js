export default {
  options: {},
  theme: {
    screens: [
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
