import { customTwMergeWithPluginRTL } from './helper'

test('handles pseudo variants conflicts properly', () => {
    expect(customTwMergeWithPluginRTL('empty:p-2 empty:p-3')).toBe('empty:p-3')
    expect(customTwMergeWithPluginRTL('hover:empty:p-2 hover:empty:p-3')).toBe('hover:empty:p-3')
    expect(customTwMergeWithPluginRTL('read-only:p-2 read-only:p-3')).toBe('read-only:p-3')
})

test('handles pseudo variant group conflicts properly', () => {
    expect(customTwMergeWithPluginRTL('group-empty:p-2 group-empty:p-3')).toBe('group-empty:p-3')
    expect(customTwMergeWithPluginRTL('peer-empty:p-2 peer-empty:p-3')).toBe('peer-empty:p-3')
    expect(customTwMergeWithPluginRTL('group-empty:p-2 peer-empty:p-3')).toBe(
        'group-empty:p-2 peer-empty:p-3'
    )
    expect(customTwMergeWithPluginRTL('hover:group-empty:p-2 hover:group-empty:p-3')).toBe(
        'hover:group-empty:p-3'
    )
    expect(customTwMergeWithPluginRTL('group-read-only:p-2 group-read-only:p-3')).toBe(
        'group-read-only:p-3'
    )
})
