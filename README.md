# tailwind-merge-rtl-plugin

[Tailwind RTL](https://github.com/20lives/tailwindcss-rtl) Plugin for [Tailwind Merge](https://github.com/dcastil/tailwind-merge)

```ts
import { extendTailwindMerge } from 'tailwind-merge'
import { withRtl } from 'tailwind-merge-rtl-plugin'

const customTwMergeWithPluginRTL = extendTailwindMerge(withRtl)

customTwMergeWithPluginRTL('start-1 ps-2 hover:bg-black', 'start-3 ps-[15px]')
// → 'hover:bg-black start-3 ps-[15px]'
```
