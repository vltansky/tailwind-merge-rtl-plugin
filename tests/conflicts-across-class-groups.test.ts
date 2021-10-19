import { customTwMergeWithPluginRTL } from './helper'

test('handles conflicts across class groups correctly', () => {
    expect(customTwMergeWithPluginRTL('inset-1 inset-x-1')).toBe('inset-1 inset-x-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 left-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 inset-1 left-1')).toBe('inset-1 left-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 right-1 inset-1')).toBe('inset-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 right-1 inset-x-1')).toBe('inset-x-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 right-1 inset-y-1')).toBe(
        'inset-x-1 right-1 inset-y-1'
    )
    expect(customTwMergeWithPluginRTL('right-1 inset-x-1 inset-y-1')).toBe('inset-x-1 inset-y-1')
    expect(customTwMergeWithPluginRTL('inset-x-1 hover:left-1 inset-1')).toBe(
        'hover:left-1 inset-1'
    )
})

test('ring and shadow classes do not create conflict', () => {
    expect(customTwMergeWithPluginRTL('ring shadow')).toBe('ring shadow')
    expect(customTwMergeWithPluginRTL('ring-2 shadow-md')).toBe('ring-2 shadow-md')
    expect(customTwMergeWithPluginRTL('shadow ring')).toBe('shadow ring')
    expect(customTwMergeWithPluginRTL('shadow-md ring-2')).toBe('shadow-md ring-2')
})
