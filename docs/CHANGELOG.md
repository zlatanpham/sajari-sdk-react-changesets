# Change Log

## 1.7.0

### Minor Changes

- [`ee72945`](https://github.com/zlatanpham/sajari-sdk-react-changesets/commit/ee729457883d30522e88c1e1f3b0ca9eb6ab590f) Thanks [@zlatanpham](https://github.com/zlatanpham)! - test

## 1.6.8

### Patch Changes

- [`e482cb24`](https://github.com/sajari/sdk-react/commit/e482cb2403f7c1486447dcfce6a5d8ccc680613d) [#390](https://github.com/sajari/sdk-react/pull/390) Thanks [@sampotts](https://github.com/sampotts)! - Fixed title issues

* [`20b35922`](https://github.com/sajari/sdk-react/commit/20b35922f07512c9b4581c25a5d71941cb465010) [#388](https://github.com/sajari/sdk-react/pull/388) Thanks [@zlatanpham](https://github.com/zlatanpham)! - Fixed components depend on ThemeProvider wrapper to be able to work.

## 1.6.7

### Patch Changes

- [`2ffbc5d9`](https://github.com/sajari/sdk-react/commit/2ffbc5d9dc9de2e28413b7314b9733e65d35032a) [#385](https://github.com/sajari/sdk-react/pull/385) Thanks [@sampotts](https://github.com/sampotts)! - Package updates and minor doc updates

* [`2ffbc5d9`](https://github.com/sajari/sdk-react/commit/2ffbc5d9dc9de2e28413b7314b9733e65d35032a) [#385](https://github.com/sajari/sdk-react/pull/385) Thanks [@sampotts](https://github.com/sampotts)! - Add useSearch example of multiple searches

## 1.6.6

### Patch Changes

- [`a76beb89`](https://github.com/sajari/sdk-react/commit/a76beb8991bbf6063bf5b4e4dff29a104d6cca5c) [#383](https://github.com/sajari/sdk-react/pull/383) Thanks [@sampotts](https://github.com/sampotts)! - Add useSearch example of multiple searches

## 1.6.5

### Patch Changes

- [`65fd3fe2`](https://github.com/sajari/sdk-react/commit/65fd3fe2af94f27daa0d89ee9eab708e275ebbea) [#375](https://github.com/sajari/sdk-react/pull/375) Thanks [@sampotts](https://github.com/sampotts)! - Add more modal width options

## 1.6.4

### Patch Changes

- [`8f1bd0e6`](https://github.com/sajari/sdk-react/commit/8f1bd0e6d197f19dca1c1af2bc2d2f1e2785d4fb) [#374](https://github.com/sajari/sdk-react/pull/374) Thanks [@sampotts](https://github.com/sampotts)! - Allow ClickTracking on non URL fields

* [`d1af5773`](https://github.com/sajari/sdk-react/commit/d1af57738741a0600e2d15797ffff5648d1c4334) [#366](https://github.com/sajari/sdk-react/pull/366) Thanks [@zlatanpham](https://github.com/zlatanpham)! - Added Modal component for `@tpham0/react-components`.

## 1.6.3

### Patch Changes

- [`3953b091`](https://github.com/sajari/sdk-react/commit/3953b091c4d4b899f570f5d6ed33bf5858eb319e) [#369](https://github.com/sajari/sdk-react/pull/369) Thanks [@sampotts](https://github.com/sampotts)! - Added support for originalPrice field

## 1.6.2

### Patch Changes

- [`8a919df2`](https://github.com/sajari/sdk-react/commit/8a919df2d07b4b5adc0c8dab61fe755a89458f60) [#367](https://github.com/sajari/sdk-react/pull/367) Thanks [@sampotts](https://github.com/sampotts)! - Fix DOMException related to querySelector syntax

## 1.6.1

### Patch Changes

- [`85d52aa9`](https://github.com/sajari/sdk-react/commit/85d52aa91b95810ef6342b6ea9ac7f785072b1dc) [#359](https://github.com/sajari/sdk-react/pull/359) Thanks [@zlatanpham](https://github.com/zlatanpham)! - Fix using `useRangeFilter` will trigger an unwanted call of `reset` method in `didMount` phase.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.6.0](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.3.2...sajari-sdk-docs@1.6.0) (2021-01-14)

### Bug Fixes

- allow 1 decimal place in RangeFilterBuilder formatter ([#342](https://github.com/sajari/sdk-react/issues/342)) ([f0e50c6](https://github.com/sajari/sdk-react/commit/f0e50c6dce29c53f0d84f580e84a42781464d419))
- fix handling of steps in RangeInput ([#337](https://github.com/sajari/sdk-react/issues/337)) ([c785270](https://github.com/sajari/sdk-react/commit/c785270dd370400058cc702e1ea50a2361cfe197))
- fix pagination aria labels ([#318](https://github.com/sajari/sdk-react/issues/318)) ([1f2ba34](https://github.com/sajari/sdk-react/commit/1f2ba34add8856b75512600f06a9a9ba2cf99ae2))
- improve RangeInput input styling ([#335](https://github.com/sajari/sdk-react/issues/335)) ([cd997aa](https://github.com/sajari/sdk-react/commit/cd997aa980a2f9793ed3c74281f87dd57c89ade1))
- improve rounding logic for range filters ([#348](https://github.com/sajari/sdk-react/issues/348)) ([f20fae2](https://github.com/sajari/sdk-react/commit/f20fae2c592264b7387b33139b8b37c048e2b5b9))
- make RangeFilter more failsafe default for non aggregate ([#313](https://github.com/sajari/sdk-react/issues/313)) ([eb4c40d](https://github.com/sajari/sdk-react/commit/eb4c40d2951cb960ec50c789a22dffdac5596d23))

### Features

- added compact prop to Pagination component ([#314](https://github.com/sajari/sdk-react/issues/314)) ([c987a1c](https://github.com/sajari/sdk-react/commit/c987a1c5e9b13f9034d9bad6db9adf631d2ba161))
- added support for ARRAY_MATCH filter grouping ([#323](https://github.com/sajari/sdk-react/issues/323)) ([8c2939a](https://github.com/sajari/sdk-react/commit/8c2939af3a9249e20da93c2ed8f37769207b7688))

# [1.4.0](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.3.2...sajari-sdk-docs@1.4.0) (2021-01-08)

### Bug Fixes

- make RangeFilter more failsafe default for non aggregate ([#313](https://github.com/sajari/sdk-react/issues/313)) ([eb4c40d](https://github.com/sajari/sdk-react/commit/eb4c40d2951cb960ec50c789a22dffdac5596d23))

### Features

- added compact prop to Pagination component ([#314](https://github.com/sajari/sdk-react/issues/314)) ([c987a1c](https://github.com/sajari/sdk-react/commit/c987a1c5e9b13f9034d9bad6db9adf631d2ba161))

## [1.3.2](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.3.1...sajari-sdk-docs@1.3.2) (2021-01-07)

### Bug Fixes

- fix filter render lags ([ad5e161](https://github.com/sajari/sdk-react/commit/ad5e16162ba6e9f9d8650c71ec8779ed58a5cb7c))

## [1.3.1](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.3.0...sajari-sdk-docs@1.3.1) (2021-01-06)

### Bug Fixes

- laggy filter search ([#305](https://github.com/sajari/sdk-react/issues/305)) ([9bf2667](https://github.com/sajari/sdk-react/commit/9bf2667c4e8a7e6f3b6bf9ccf707d45c19be1998))

# [1.3.0](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.2.2...sajari-sdk-docs@1.3.0) (2021-01-05)

### Features

- add hover functionality to image ([#301](https://github.com/sajari/sdk-react/issues/301)) ([8eb55fb](https://github.com/sajari/sdk-react/commit/8eb55fb0a5e49a4f415f8bd4ca5108777ead1528))

## [1.2.2](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.2.1...sajari-sdk-docs@1.2.2) (2021-01-04)

### Bug Fixes

- fix SSR issues with Pagination ([6e2a6ab](https://github.com/sajari/sdk-react/commit/6e2a6ab9e9912de4bf6df869613a5f21dcab3693))

## [1.2.1](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.2.0...sajari-sdk-docs@1.2.1) (2021-01-01)

### Bug Fixes

- improvement to Select rendering ([9de9791](https://github.com/sajari/sdk-react/commit/9de9791fd607814a967b7d9736c22451fbfffc30))

# [1.2.0](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.1.4...sajari-sdk-docs@1.2.0) (2020-12-31)

### Features

- new custom select and select filter type ([#304](https://github.com/sajari/sdk-react/issues/304)) ([d85db03](https://github.com/sajari/sdk-react/commit/d85db034b9ea70e9f6e1d67a783c51a3a7537ec7))

## [1.1.4](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.1.3...sajari-sdk-docs@1.1.4) (2020-12-18)

### Bug Fixes

- default usePagination argument to ‘search’ ([2621f46](https://github.com/sajari/sdk-react/commit/2621f46d6b000567ecc809ad34ed34e1ead02b54))

## [1.1.3](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.1.2...sajari-sdk-docs@1.1.3) (2020-12-16)

**Note:** Version bump only for package sajari-sdk-docs

## [1.1.2](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.1.1...sajari-sdk-docs@1.1.2) (2020-12-15)

**Note:** Version bump only for package sajari-sdk-docs

## [1.1.1](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.1.0...sajari-sdk-docs@1.1.1) (2020-12-15)

**Note:** Version bump only for package sajari-sdk-docs

# [1.1.0](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0...sajari-sdk-docs@1.1.0) (2020-12-15)

### Features

- localization improvements ([f7b5ea1](https://github.com/sajari/sdk-react/commit/f7b5ea168a09b218e4df8f405c28a847fc85dc18))

# 1.0.0 (2020-12-14)

### Features

- merged v3 to master ([ba23102](https://github.com/sajari/sdk-react/commit/ba231022d78013689f69767e87b152d55ece1d6a))

# [1.0.0-beta.8](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.7...sajari-sdk-docs@1.0.0-beta.8) (2020-12-14)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-beta.7](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.6...sajari-sdk-docs@1.0.0-beta.7) (2020-12-11)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-beta.6](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.5...sajari-sdk-docs@1.0.0-beta.6) (2020-12-10)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-beta.5](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.4...sajari-sdk-docs@1.0.0-beta.5) (2020-12-10)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-beta.4](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.3...sajari-sdk-docs@1.0.0-beta.4) (2020-12-09)

### Features

- added SSRProvider component ([8aaa2d5](https://github.com/sajari/sdk-react/commit/8aaa2d560803479c9697756322e2689c968e9a44))

# [1.0.0-beta.3](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.2...sajari-sdk-docs@1.0.0-beta.3) (2020-12-08)

### Features

- improvements to SSR support ([729dfeb](https://github.com/sajari/sdk-react/commit/729dfebc04efadbe1db297666ebec4a104208a70))

# [1.0.0-beta.2](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-beta.1...sajari-sdk-docs@1.0.0-beta.2) (2020-12-07)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-beta.1](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.27...sajari-sdk-docs@1.0.0-beta.1) (2020-12-04)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.27](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.26...sajari-sdk-docs@1.0.0-alpha.27) (2020-12-04)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.26](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.25...sajari-sdk-docs@1.0.0-alpha.26) (2020-12-03)

### Bug Fixes

- rename ResultsPerPage sizes prop to options for consistency ([4a2b6d4](https://github.com/sajari/sdk-react/commit/4a2b6d4fd8b60b337faeb237b53c23793b73f7ef))

# [1.0.0-alpha.25](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.24...sajari-sdk-docs@1.0.0-alpha.25) (2020-12-03)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.24](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.23...sajari-sdk-docs@1.0.0-alpha.24) (2020-12-03)

### Bug Fixes

- empty query search logic ([#274](https://github.com/sajari/sdk-react/issues/274)) ([37acaee](https://github.com/sajari/sdk-react/commit/37acaeefe1b2e30e97461527b4a95522e15ccef5))
- remove redundant variables ([#272](https://github.com/sajari/sdk-react/issues/272)) ([fe57235](https://github.com/sajari/sdk-react/commit/fe57235d219c2003e56764c54958149931b5c2c6))
- summary disable suggestion by default ([#273](https://github.com/sajari/sdk-react/issues/273)) ([7c448b8](https://github.com/sajari/sdk-react/commit/7c448b850d185b8af9616f8536c5b101ba250c0d))

# [1.0.0-alpha.23](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.22...sajari-sdk-docs@1.0.0-alpha.23) (2020-12-02)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.22](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.21...sajari-sdk-docs@1.0.0-alpha.22) (2020-12-02)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.21](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.20...sajari-sdk-docs@1.0.0-alpha.21) (2020-12-01)

### Features

- add fontSize prop to Checkbox and Radio ([12a41aa](https://github.com/sajari/sdk-react/commit/12a41aa4dd2e8806ed93d803db1ef9d448fbb143))
- added TabFilter component ([#259](https://github.com/sajari/sdk-react/issues/259)) ([d19ccc7](https://github.com/sajari/sdk-react/commit/d19ccc76aebac7a26ee9386c72d4959d5d0b360e))

# [1.0.0-alpha.20](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.19...sajari-sdk-docs@1.0.0-alpha.20) (2020-11-30)

### Features

- added i18n support ([9a977b2](https://github.com/sajari/sdk-react/commit/9a977b29d9f430686523bf65e54e5fb5921dce51))

# [1.0.0-alpha.19](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.18...sajari-sdk-docs@1.0.0-alpha.19) (2020-11-27)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.18](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.17...sajari-sdk-docs@1.0.0-alpha.18) (2020-11-27)

### Features

- allow independent aspectRatio and objectFit props on Results ([7900493](https://github.com/sajari/sdk-react/commit/79004930cde3b403d52917c50e94d92aca47e98e))

# [1.0.0-alpha.17](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.16...sajari-sdk-docs@1.0.0-alpha.17) (2020-11-26)

### Bug Fixes

- make PoweredBy compose a Link ([a8f6a4e](https://github.com/sajari/sdk-react/commit/a8f6a4e9fdc04f4f652de0f2d640487896d34c6d))

# [1.0.0-alpha.16](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.15...sajari-sdk-docs@1.0.0-alpha.16) (2020-11-26)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.15](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.14...sajari-sdk-docs@1.0.0-alpha.15) (2020-11-26)

### Features

- add rating filter ([#253](https://github.com/sajari/sdk-react/issues/253)) ([3ea1dd8](https://github.com/sajari/sdk-react/commit/3ea1dd8417b034421a5d33781a190f09aaba8c91))
- only pinSelected if item count is over limit ([33ded9a](https://github.com/sajari/sdk-react/commit/33ded9a50465af2c0a273b821a15bc879a980638))

# [1.0.0-alpha.14](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.13...sajari-sdk-docs@1.0.0-alpha.14) (2020-11-26)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.13](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.12...sajari-sdk-docs@1.0.0-alpha.13) (2020-11-26)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.12](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.11...sajari-sdk-docs@1.0.0-alpha.12) (2020-11-26)

### Bug Fixes

- results appearance ([#249](https://github.com/sajari/sdk-react/issues/249)) ([ceef5b0](https://github.com/sajari/sdk-react/commit/ceef5b0cfc71635b4a4b090abaffc20ab4a6f880))

### Features

- don’t require variables to be set (nicer DX) ([f95fb3c](https://github.com/sajari/sdk-react/commit/f95fb3c4293bfbf540a3158d8a6d0ebfe8768858))

# [1.0.0-alpha.11](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.10...sajari-sdk-docs@1.0.0-alpha.11) (2020-11-26)

### Bug Fixes

- styling updates ([83bca31](https://github.com/sajari/sdk-react/commit/83bca31c4b88d4ea565b1fbf0d1b5625a5d0ce27))

### Features

- added size options for view option components ([ccef487](https://github.com/sajari/sdk-react/commit/ccef487a60374d35ea5e4a08278a5d1334f5f305))

# [1.0.0-alpha.10](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.9...sajari-sdk-docs@1.0.0-alpha.10) (2020-11-26)

### Bug Fixes

- useSearch ([#246](https://github.com/sajari/sdk-react/issues/246)) ([0ae10a2](https://github.com/sajari/sdk-react/commit/0ae10a2c66f2fffab3c977bb3291ff69178bf684))

# [1.0.0-alpha.9](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.8...sajari-sdk-docs@1.0.0-alpha.9) (2020-11-25)

### Bug Fixes

- more styling fixes ([bd4d00d](https://github.com/sajari/sdk-react/commit/bd4d00de6dd42066b3751d4cf3c90c41239286a8))

# [1.0.0-alpha.8](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.7...sajari-sdk-docs@1.0.0-alpha.8) (2020-11-25)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.7](https://github.com/sajari/sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.6...sajari-sdk-docs@1.0.0-alpha.7) (2020-11-24)

### Features

- added ResizeObserver component ([246bec5](https://github.com/sajari/sdk-react/commit/246bec5164d39c6a6a6bb27903d0690aa83b43f5))

# [1.0.0-alpha.6](https://github.com/sajari/sajari-sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.5...sajari-sdk-docs@1.0.0-alpha.6) (2020-11-20)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.5](https://github.com/sajari/sajari-sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.4...sajari-sdk-docs@1.0.0-alpha.5) (2020-11-18)

**Note:** Version bump only for package sajari-sdk-docs

# [1.0.0-alpha.4](https://github.com/sajari/sajari-sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.3...sajari-sdk-docs@1.0.0-alpha.4) (2020-11-17)

### Bug Fixes

- dropdown result item style tweaks ([52cb4a3](https://github.com/sajari/sajari-sdk-react/commit/52cb4a3582b84ad9c46af328ba0e2596ca6f28ff))

### Features

- updated props for Filter component ([#227](https://github.com/sajari/sajari-sdk-react/issues/227)) ([b44e7f2](https://github.com/sajari/sajari-sdk-react/commit/b44e7f294fa64033bdc04bd8a0414387e2b702ea))

# [1.0.0-alpha.3](https://github.com/sajari/sajari-sdk-react/compare/sajari-sdk-docs@1.0.0-alpha.2...sajari-sdk-docs@1.0.0-alpha.3) (2020-11-16)

**Note:** Version bump only for package sajari-sdk-docs

## 0.0.1 (xxxx-xx-xx)

**Note:** TBD
