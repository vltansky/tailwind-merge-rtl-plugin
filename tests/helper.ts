import { createTailwindMerge } from 'tailwind-merge'

import { withRtl } from '../src'
// @ts-ignore
export const customTwMergeWithPluginRTL = createTailwindMerge(withRtl)
