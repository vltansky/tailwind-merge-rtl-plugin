import { customTwMergeWithPluginRTL } from './helper'

test('merges classes from same group correctly', () => {
    expect(customTwMergeWithPluginRTL('overflow-x-auto overflow-x-hidden')).toBe(
        'overflow-x-hidden'
    )
    expect(customTwMergeWithPluginRTL('overflow-x-auto overflow-x-hidden overflow-x-scroll')).toBe(
        'overflow-x-scroll'
    )
    expect(
        customTwMergeWithPluginRTL('overflow-x-auto hover:overflow-x-hidden overflow-x-scroll')
    ).toBe('hover:overflow-x-hidden overflow-x-scroll')
    expect(
        customTwMergeWithPluginRTL(
            'overflow-x-auto hover:overflow-x-hidden hover:overflow-x-auto overflow-x-scroll'
        )
    ).toBe('hover:overflow-x-auto overflow-x-scroll')
})

test('merges classes from Font Variant Numeric section correctly', () => {
    expect(customTwMergeWithPluginRTL('lining-nums tabular-nums diagonal-fractions')).toBe(
        'lining-nums tabular-nums diagonal-fractions'
    )
    expect(customTwMergeWithPluginRTL('normal-nums tabular-nums diagonal-fractions')).toBe(
        'tabular-nums diagonal-fractions'
    )
    expect(customTwMergeWithPluginRTL('tabular-nums diagonal-fractions normal-nums')).toBe(
        'normal-nums'
    )
    expect(customTwMergeWithPluginRTL('tabular-nums proportional-nums')).toBe('proportional-nums')
})
