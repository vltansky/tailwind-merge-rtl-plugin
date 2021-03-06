import { customTwMergeWithPluginRTL } from './helper'

test('rtl', () => {
    ;['pe', 'me', 'ps', 'ms', 'start', 'end'].forEach((tag) => {
        expect(
            customTwMergeWithPluginRTL(
                `${tag}-1 ${tag}-4 focus:${tag}-2 focus:${tag}-[4px] hover:${tag}-[2px] hover:${tag}-[1px]`
            )
        ).toBe(`${tag}-4 focus:${tag}-[4px] hover:${tag}-[1px]`)
    })
    ;['text', 'clear', 'float'].forEach((tag) => {
        expect(
            customTwMergeWithPluginRTL(
                `${tag}-left ${tag}-start ${tag}-end focus:${tag}-end focus:${tag}-start hover:${tag}-start hover:${tag}-end`
            )
        ).toBe(`${tag}-end focus:${tag}-start hover:${tag}-end`)
    })
    expect(customTwMergeWithPluginRTL('text-black text-left text-end')).toBe('text-black text-end')
    expect(customTwMergeWithPluginRTL(`left-[5px] rtl:right-[5px] rtl:let-auto`)).toBe(
        `left-[5px] rtl:right-[5px] rtl:let-auto`
    )
})
