import { customTwMergeWithPluginRTL } from './helper'

test('handles custom length conflicts correctly', () => {
    expect(customTwMergeWithPluginRTL('m-[2px] m-[10px]')).toBe('m-[10px]')
    expect(customTwMergeWithPluginRTL('my-[2px] m-[10rem]')).toBe('m-[10rem]')
    expect(customTwMergeWithPluginRTL('cursor-pointer cursor-[grab]')).toBe('cursor-[grab]')
    expect(customTwMergeWithPluginRTL('m-[2px] m-[calc(100%-var(--custom))]')).toBe(
        'm-[calc(100%-var(--custom))]'
    )
    expect(customTwMergeWithPluginRTL('m-[2px] m-[length:var(--mystery-var)]')).toBe(
        'm-[length:var(--mystery-var)]'
    )
})

test('handles custom length conflicts with labels and prefixes correctly', () => {
    expect(customTwMergeWithPluginRTL('hover:m-[2px] hover:m-[length:var(--c)]')).toBe(
        'hover:m-[length:var(--c)]'
    )
    expect(customTwMergeWithPluginRTL('hover:focus:m-[2px] focus:hover:m-[length:var(--c)]')).toBe(
        'focus:hover:m-[length:var(--c)]'
    )
})

test('handles complex custom value conflicts correctly', () => {
    expect(customTwMergeWithPluginRTL('grid-rows-[1fr,auto] grid-rows-2')).toBe('grid-rows-2')
    expect(customTwMergeWithPluginRTL('grid-rows-[repeat(20,minmax(0,1fr))] grid-rows-3')).toBe(
        'grid-rows-3'
    )
})
