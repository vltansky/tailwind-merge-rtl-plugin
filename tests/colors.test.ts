import { customTwMergeWithPluginRTL } from './helper'

test('handles color conflicts properly', () => {
    expect(customTwMergeWithPluginRTL('bg-grey-5 bg-hotpink')).toBe('bg-hotpink')
    expect(customTwMergeWithPluginRTL('hover:bg-grey-5 hover:bg-hotpink')).toBe('hover:bg-hotpink')
})
