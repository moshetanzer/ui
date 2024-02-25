import { describe, it, expect } from 'vitest'
import { UMeter } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'

describe('Meter', () => {
  it.each([
    ['basic case', {}],
    ['with custom value', { props: { value: 50 } }],
    ['with custom min', { props: { min: 20 } }],
    ['with custom max', { props: { max: 200 } }],
    ['with indicator enabled', { props: { indicator: true } }],
    ['with label', { props: { label: 'meter label' } }],
    ['with icon', { slots: { label: () => 'label slot' }, props: { icon: 'i-heroicons-chart-bar' } }],
    ['with custom size', { props: { size: 'lg' } }],
    ['with custom color', { props: { color: 'red' } }],
    ['with label slot', { slots: { label: () => 'Label slot' } }],
    ['with indicator slot', { slots: { indicator: () => 'Indicator slot' }, props: { indicator: true } }]
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof UMeter.props>) => {
    const html = await ComponentRender(nameOrHtml, options, UMeter)
    expect(html).toMatchSnapshot()
  })
})
