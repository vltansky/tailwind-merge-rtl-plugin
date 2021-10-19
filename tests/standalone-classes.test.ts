import { customTwMergeWithPluginRTL } from './helper'

test('merges standalone classes from same group correctly', () => {
    expect(customTwMergeWithPluginRTL('inline block')).toBe('block')
    expect(customTwMergeWithPluginRTL('hover:block hover:inline')).toBe('hover:inline')
    expect(customTwMergeWithPluginRTL('hover:block hover:block')).toBe('hover:block')
    expect(
        customTwMergeWithPluginRTL('inline hover:inline focus:inline hover:block hover:focus:block')
    ).toBe('inline focus:inline hover:block hover:focus:block')
    expect(customTwMergeWithPluginRTL('underline line-through')).toBe('line-through')
    expect(customTwMergeWithPluginRTL('line-through no-underline')).toBe('no-underline')
})
