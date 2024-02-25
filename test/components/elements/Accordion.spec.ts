import { describe, it, expect } from 'vitest'
import { UAccordion } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'

describe('Accordion', () => {
  it.each([
    ['renders with multiple items', { props: { items: [{ content: 'Item 1' }, { content: 'Item 2' }] } }],
    ['renders with defaultOpen set to true', { props: { items: [{ content: 'Accordion Content' }], defaultOpen: true } }],
    ['renders with custom openIcon', { props: { items: [{ content: 'Accordion Content' }], openIcon: 'heroicons-plus' } }],
    ['renders with custom closeIcon', { props: { items: [{ content: 'Accordion Content' }], closeIcon: 'heroicons-minus' } }],
    ['renders with multiple allowed to be open', { props: { items: [{ content: 'Item 1' }, { content: 'Item 2' }], multiple: true } }]
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof UAccordion.props>) => {
    const html = await ComponentRender(nameOrHtml, options, UAccordion)
    expect(html).toMatchSnapshot()
  })
})
