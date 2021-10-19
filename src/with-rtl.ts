import { createTailwindMerge } from 'tailwind-merge'

import { isAny, isCustomLength, isLength } from './config-validators'

const SIZES_SIMPLE = ['sm', 'md', 'lg', 'xl', '2xl'] as const
const LENGTH = [isLength] as const
const LENGTH_WITH_AUTO = ['auto', isLength] as const
const LENGTH_WITH_EMPTY = ['', isLength] as const
const ANY = [isAny] as const
const ROUNDED = ['none', '', ...SIZES_SIMPLE, '3xl', 'full', isCustomLength] as const

export const withRtl = (prevConfigFn: any) => {
    const prevConfig = prevConfigFn()

    return {
        ...prevConfig,
        classGroups: {
            ...prevConfig.classGroups,
            float: [
                ...(prevConfig.classGroups.float || []),
                { float: ['right', 'left', 'none', 'start', 'end'] },
            ],
            clear: [
                ...(prevConfig.classGroups.clear || []),
                { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            'text-alignment': [
                ...(prevConfig.classGroups['text-alignment'] || []),
                { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            start: [{ start: LENGTH_WITH_AUTO }],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            end: [{ end: LENGTH_WITH_AUTO }],
            /**
             * Padding start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            ps: [{ ps: LENGTH }],

            /**
             * Padding end
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            pe: [{ pe: LENGTH }],
            /**
             * Margin start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            ms: [{ ms: LENGTH }],

            /**
             * Margin end
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            me: [{ me: LENGTH }],
            /**
             * Space Between Start Direction
             * @see https://tailwindcss.com/docs/space
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'space-s': [{ 'space-s': LENGTH }],
            /**
             * Border Radius Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */ 'rounded-s': [{ 'rounded-s': ROUNDED }],
            /**
             * Border Radius End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rounded-e': [{ 'rounded-e': ROUNDED }],
            /**
             * Border Radius Top Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rounded-ts': [{ 'rounded-ts': ROUNDED }],
            /**
             * Border Radius Top End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rounded-te': [{ 'rounded-te': ROUNDED }],
            /**
             * Border Radius Bottom Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rounded-bs': [{ 'rounded-bs': ROUNDED }],
            /**
             * Border Radius Bottom End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rounded-be': [{ 'rounded-be': ROUNDED }],
            /**
             * Border Width Start
             * @see https://tailwindcss.com/docs/border-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */ 'border-w-s': [{ 'border-s': LENGTH_WITH_EMPTY }],
            /**
             * Border Width End
             * @see https://tailwindcss.com/docs/border-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'border-w-e': [{ 'border-e': LENGTH_WITH_EMPTY }],
            /**
             * Divide Width Start Direction
             * @see https://tailwindcss.com/docs/divide-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */ 'divide-s': [{ 'divide-s': LENGTH_WITH_EMPTY }],
            /**
             * Border Color Start
             * @see https://tailwindcss.com/docs/border-color
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */ 'border-color-s': [{ 'border-s': ANY }],
            /**
             * Border Color End
             * @see https://tailwindcss.com/docs/border-color
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'border-color-e': [{ 'border-e': ANY }],
        },
    }
}
