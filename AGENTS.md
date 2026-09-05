# Project instructions

## Git and verification

- Never create commits. The user creates commits manually.
- Do not run `npm run lint` or `npm run build` until a task is complete and ready for the user's commit.

## Application architecture

- Name React component folders and files in PascalCase: `ComponentName/ComponentName.tsx`.
- Export reusable components from `src/components/index.ts` and import them through `@/components` outside the components directory.
- Put a component's stateful logic, event handlers, derived values, and orchestration in a sibling `ComponentName.controller.ts` file.
- Controller hooks must return an object with separate `data` and `actions` properties.
- Expose semantic event handlers in controller `actions`; never expose React state setters directly. Components should pass those handlers directly to UI controls whenever their signatures match.
- Declare React components with `function`. Declare functions inside components or controllers with `const` arrow functions.
- Keep shared constants, types, and reusable pure helpers in `src/common` or `src/utils`, choosing the folder that best matches their purpose.
- Use camelCase file names for non-component modules. Name collection modules in the plural (for example, `colorGroups.ts`) and suffix type-only modules with `.types.ts` (for example, `ohuhu.types.ts`).
- Prefer small, focused components and strongly typed public props and data boundaries.
- Keep application-facing text in English and internal identifiers in English.

## Data and styling

- Store local marker data in `src/data`.
- Store domain types in `src/types`.
- Use Tailwind CSS for layout and general styling; use Material UI only for controls that benefit from its behavior.
- Use canonical Tailwind CSS v4 utility names to avoid IntelliSense migration warnings (for example, `bg-linear-to-br`, not `bg-gradient-to-br`).
- Use `clsx` for conditional Tailwind `className` values. Keep unconditional class names as plain strings and do not create intermediate class-name constants used only once.
- Preserve accessibility: visible labels, keyboard-accessible controls, and sufficient contrast in every theme.
