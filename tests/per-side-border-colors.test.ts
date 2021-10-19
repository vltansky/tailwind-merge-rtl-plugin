import { customTwMergeWithPluginRTL } from './helper'

test('merges classes with per-side border colors correctly', () => {
    expect(customTwMergeWithPluginRTL('border-t-some-blue border-t-other-blue')).toBe(
        'border-t-other-blue'
    )
    expect(customTwMergeWithPluginRTL('border-t-some-blue border-some-blue')).toBe(
        'border-some-blue'
    )
})
