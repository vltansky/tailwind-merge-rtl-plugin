import { twMerge } from 'tailwind-merge'

import { customTwMergeWithPluginRTL } from './helper'

test('has correct export types', () => {
    expect(twMerge).toStrictEqual(expect.any(Function))
    expect(customTwMergeWithPluginRTL).toStrictEqual(expect.any(Function))
})

test('customTwMergeWithPluginRTL() has correct inputs and outputs', () => {
    expect(customTwMergeWithPluginRTL('')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginRTL('hello world')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginRTL('-:-:-:::---h-')).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginRTL('hello world', '-:-:-:::---h-')).toStrictEqual(
        expect.any(String)
    )
    expect(
        customTwMergeWithPluginRTL('hello world', '-:-:-:::---h-', '', 'something')
    ).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginRTL('hello world', undefined)).toStrictEqual(expect.any(String))
    expect(customTwMergeWithPluginRTL('hello world', undefined, null)).toStrictEqual(
        expect.any(String)
    )
    expect(customTwMergeWithPluginRTL('hello world', undefined, null, false)).toStrictEqual(
        expect.any(String)
    )

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const noRun = () => {
        // @ts-expect-error
        customTwMergeWithPluginRTL(0)
        // @ts-expect-error
        customTwMergeWithPluginRTL(123)
        // @ts-expect-error
        customTwMergeWithPluginRTL(true)
        // @ts-expect-error
        customTwMergeWithPluginRTL({})
        // @ts-expect-error
        customTwMergeWithPluginRTL(new Date())
        // @ts-expect-error
        customTwMergeWithPluginRTL(() => {})
    }
})
