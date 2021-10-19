import { customTwMergeWithPluginRTL } from './helper'

test('does not alter non-tailwind classes', () => {
    expect(customTwMergeWithPluginRTL('non-tailwind-class inline block')).toBe(
        'non-tailwind-class block'
    )
    expect(customTwMergeWithPluginRTL('inline block inline-1')).toBe('block inline-1')
    expect(customTwMergeWithPluginRTL('inline block i-inline')).toBe('block i-inline')
    expect(customTwMergeWithPluginRTL('focus:inline focus:block focus:inline-1')).toBe(
        'focus:block focus:inline-1'
    )
})
