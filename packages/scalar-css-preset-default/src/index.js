/**
 * @author Kether Saturnius
 * @license MIT
 * @module scalar-css:preset:default
 * @overview
 *
 * This default preset includes all of the major plugins for generating
 * the complete Scalar CSS framework
 */
import container from '@scalar-css/scalar-css-plugin-container'
import rootSizes from '@scalar-css/scalar-css-plugin-root-sizes'
import type from '@scalar-css/scalar-css-plugin-type'

const defaultOptions = {}

export default function presetDefault(opts = {}) {
  const options = Object.assign({}, defaultOptions, opts)

  const plugins = [
    [container, options.container],
    [rootSizes, options.rootSizes],
    [type, options.type]
  ]

  return { plugins }
}
