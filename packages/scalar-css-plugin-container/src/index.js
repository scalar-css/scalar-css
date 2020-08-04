import postcss from 'postcss'
import { scalarUnitConversion } from '@scalar-css/scalar-css-util-conversions'

export function createBaseStyleRule() {
  return postcss
    .rule({ selector: '[class*="container"]' })
    .append({ prop: 'padding', value: 'var(--padding, 0)' })
    .append({ prop: 'max-width', value: 'var(--max-width, 100%)' })
    .append({ prop: 'margin', value: 'var(--margin, 0 auto)' })
}

export function generateCSS(screen, prev, source) {
  const container = screen.container ? screen.container : prev.container
  const containerClass = postcss.rule({ selector: '.container', source })

  if (container.padding) {
    const paddingValue = scalarUnitConversion(container.padding)
    containerClass.append({ prop: '--padding', value: `0 ${paddingValue}` })
  }

  if (container.maxWidth) {
    containerClass.append({
      prop: '--max-width',
      value: scalarUnitConversion(container.maxWidth)
    })
  }

  if (container.margin) {
    const marginValue = scalarUnitConversion(container.margin)
    containerClass.append({ prop: '--margin', value: `0 ${marginValue}` })
  }

  screen.htmlRoot.append(containerClass)
}

export default function container(ctx, options, source) {
  ctx.Theme.Screens.forEach((screen, index) => {
    const prev = screen.key !== 'start' ? ctx.Theme.Screens[index - 1] : null

    if (screen.key === 'start') {
      screen.htmlRoot.append(createBaseStyleRule())
    }

    generateCSS(screen, prev, source)
  })
}
