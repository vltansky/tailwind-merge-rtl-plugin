import { Config, mergeConfigs, validators } from 'tailwind-merge'

export const withRtl = (prevConfig: Config): Config => {
    const getLength = () => [validators.isLength] as const
    const getLengthWithAuto = () => ['auto', validators.isLength] as const
    const getLengthWithEmpty = () => ['', validators.isLength] as const
    const getAny = () => [validators.isAny] as const
    const getRounded = () =>
        [
            'none',
            '',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '3xl',
            'full',
            validators.isCustomLength,
        ] as const

    return mergeConfigs(prevConfig, {
        classGroups: {
            float: [{ float: ['start', 'end'] }],
            clear: [{ clear: ['start', 'end'] }],
            'text-alignment': [{ text: ['start', 'end'] }],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.start': [{ start: getLengthWithAuto() }],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.end': [{ end: getLengthWithAuto() }],
            /**
             * Padding start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.ps': [{ ps: getLength() }],

            /**
             * Padding end
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.pe': [{ pe: getLength() }],
            /**
             * Margin start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.ms': [{ ms: getLength() }],

            /**
             * Margin end
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.me': [{ me: getLength() }],
            /**
             * Space Between Start Direction
             * @see https://tailwindcss.com/docs/space
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.space-s': [{ 'space-s': getLength() }],
            /**
             * Border Radius Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-s': [{ 'rounded-s': getRounded() }],
            /**
             * Border Radius End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-e': [{ 'rounded-e': getRounded() }],
            /**
             * Border Radius Top Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-ts': [{ 'rounded-ts': getRounded() }],
            /**
             * Border Radius Top End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-te': [{ 'rounded-te': getRounded() }],
            /**
             * Border Radius Bottom Start
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-bs': [{ 'rounded-bs': getRounded() }],
            /**
             * Border Radius Bottom End
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.rounded-be': [{ 'rounded-be': getRounded() }],
            /**
             * Border Width Start
             * @see https://tailwindcss.com/docs/border-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.border-w-s': [{ 'border-s': getLengthWithEmpty() }],
            /**
             * Border Width End
             * @see https://tailwindcss.com/docs/border-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.border-w-e': [{ 'border-e': getLengthWithEmpty() }],
            /**
             * Divide Width Start Direction
             * @see https://tailwindcss.com/docs/divide-width
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.divide-s': [{ 'divide-s': getLengthWithEmpty() }],
            /**
             * Border Color Start
             * @see https://tailwindcss.com/docs/border-color
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.border-color-s': [{ 'border-s': getAny() }],
            /**
             * Border Color End
             * @see https://tailwindcss.com/docs/border-color
             * @see https://github.com/20lives/tailwindcss-rtl#utilities
             */
            'rtl.border-color-e': [{ 'border-e': getAny() }],
        },
    })
}
