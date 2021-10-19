import { customTwMergeWithPluginRTL } from './helper'

test('handles negative value conflicts correctly', () => {
    expect(customTwMergeWithPluginRTL('-m-2 -m-5')).toBe('-m-5')
    expect(customTwMergeWithPluginRTL('-top-12 -top-2000')).toBe('-top-2000')
})

test('handles conflicts between positive and negative values correctly', () => {
    expect(customTwMergeWithPluginRTL('-m-2 m-auto')).toBe('m-auto')
    expect(customTwMergeWithPluginRTL('top-12 -top-69')).toBe('-top-69')
})

test('handles conflicts across groups with negative values correctly', () => {
    expect(customTwMergeWithPluginRTL('-right-1 inset-x-1')).toBe('inset-x-1')
    expect(customTwMergeWithPluginRTL('hover:focus:-right-1 focus:hover:inset-x-1')).toBe(
        'focus:hover:inset-x-1'
    )
})
