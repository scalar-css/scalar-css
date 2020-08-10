import postcss from 'postcss'

const values = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'table',
  'table-caption',
  'table-cell',
  'table-column',
  'table-column-group',
  'table-footer-group',
  'table-header-group',
  'table-row-group',
  'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'none'
]

export function createBaseStyleRule() {
  return postcss
    .rule({ selector: '[class*="d-"]' })
    .append({ prop: 'display', value: 'var(--d) !important' })
}

export default function position(ctx, options, source) {
  ctx.theme.screens.forEach(screen => {
    if (screen.key === 'start') {
      screen.htmlRoot.append(createBaseStyleRule())
    }

    values.forEach(value => {
      screen.htmlRoot.append(
        postcss
          .rule({
            selector: `.d-${value}`
          })
          .append({
            prop: `--d`,
            value
          })
      )
    })
  })
}
