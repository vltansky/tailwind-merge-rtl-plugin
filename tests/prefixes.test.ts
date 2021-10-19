import { customTwMergeWithPluginRTL } from './helper'

test('conflicts across prefixes', () => {
    expect(customTwMergeWithPluginRTL('hover:block hover:inline')).toBe('hover:inline')
    expect(customTwMergeWithPluginRTL('hover:block hover:focus:inline')).toBe(
        'hover:block hover:focus:inline'
    )
    expect(customTwMergeWithPluginRTL('hover:block hover:focus:inline focus:hover:inline')).toBe(
        'hover:block focus:hover:inline'
    )
    expect(customTwMergeWithPluginRTL('focus-within:inline focus-within:block')).toBe(
        'focus-within:block'
    )
})
