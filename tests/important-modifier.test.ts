import { customTwMergeWithPluginRTL } from './helper'

test('merges tailwind classes with important modifier correctly', () => {
    expect(customTwMergeWithPluginRTL('!font-medium !font-bold')).toBe('!font-bold')
    expect(customTwMergeWithPluginRTL('!font-medium !font-bold font-thin')).toBe(
        '!font-bold font-thin'
    )
    expect(customTwMergeWithPluginRTL('!right-2 !-inset-x-px')).toBe('!-inset-x-px')
    expect(customTwMergeWithPluginRTL('focus:!inline focus:!block')).toBe('focus:!block')
})
