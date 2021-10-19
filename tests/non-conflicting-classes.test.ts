import { customTwMergeWithPluginRTL } from './helper'

test('merges non-conflicting classes correctly', () => {
    expect(customTwMergeWithPluginRTL('border-t border-white/10')).toBe('border-t border-white/10')
    expect(customTwMergeWithPluginRTL('border-t border-white')).toBe('border-t border-white')
})
