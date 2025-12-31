import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    svelte: true,
    typescript: true,
    markdown: {
      extensions: ['.md', '.svx'],
    },
  },
  {
    plugins: {
      'better-tailwindcss': tailwindcss,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './src/routes/layout.css',
      },
    },
    rules: {
      // Stylistic (warnings)
      'better-tailwindcss/enforce-consistent-class-order': 'warn',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'warn',
      'better-tailwindcss/no-duplicate-classes': 'warn',
      'better-tailwindcss/no-unnecessary-whitespace': 'warn',
      // Correctness (errors)
      'better-tailwindcss/no-conflicting-classes': 'error',
      // Disabled: doesn't recognize @tailwindcss/typography plugin classes
      'better-tailwindcss/no-unregistered-classes': 'off',
    },
  },
)
