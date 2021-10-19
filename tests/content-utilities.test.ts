import { customTwMergeWithPluginRTL } from './helper'

test('merges content utilities correctly', () => {
    expect(customTwMergeWithPluginRTL("content-['hello'] content-[attr(data-content)]")).toBe(
        'content-[attr(data-content)]'
    )
})
