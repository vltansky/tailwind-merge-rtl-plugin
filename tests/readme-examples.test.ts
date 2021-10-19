import fs from 'fs'

import { customTwMergeWithPluginRTL } from './helper'

const twMergeExampleRegex =
    /customTwMergeWithPluginRTL\((?<arguments>[\w\s\-:[\]#(),!\n'"]+?)\)(?!.*(?<!\/\/.*)')\s*\n?\s*\/\/\s*→\s*['"](?<result>.+)['"]/g

test('readme examples', () => {
    expect.assertions(1)

    return fs.promises
        .readFile(`${__dirname}/../README.md`, { encoding: 'utf-8' })
        .then((fileContent) => {
            Array.from(fileContent.matchAll(twMergeExampleRegex)).forEach((match) => {
                // eslint-disable-next-line no-eval
                const args = eval(`[${match.groups!.arguments}]`)
                expect(customTwMergeWithPluginRTL(...args)).toBe(match.groups!.result)
            })
        })
})
