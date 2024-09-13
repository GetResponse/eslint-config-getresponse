## [8.1.1](https://github.com/getresponse/eslint-config-getresponse/compare/v8.1.0...v8.1.1) (2024-09-13)


### Bug Fixes

* **playwright/expect-expect:** turn off warning ([3db45ce](https://github.com/getresponse/eslint-config-getresponse/commit/3db45ceb3fc0d02bd87d3d76bd9bb9924773ab3d))

# [8.1.0](https://github.com/getresponse/eslint-config-getresponse/compare/v8.0.2...v8.1.0) (2024-09-13)


### Features

* add playwright eslint rules ([c8c4ee9](https://github.com/getresponse/eslint-config-getresponse/commit/c8c4ee939321a5ed6de3d6d2fcc24154a7db0d28))

## [8.0.2](https://github.com/getresponse/eslint-config-getresponse/compare/v8.0.1...v8.0.2) (2023-11-29)


### Bug Fixes

* update 'react/jsx-filename-extension' rule to allow JSX inside .mdx files ([160473e](https://github.com/getresponse/eslint-config-getresponse/commit/160473e97832f59d9ec8913841b854770d343add))

## [8.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v8.0.0...v8.0.1) (2023-10-31)


### Bug Fixes

* Bump Node.js to 20.x ([e58c595](https://github.com/getresponse/eslint-config-getresponse/commit/e58c595f46627c66be11295cccc91af471d5b3bd))
* **TypeScript:** Handle missing tsconfig file ([ded40ba](https://github.com/getresponse/eslint-config-getresponse/commit/ded40ba6bb2d365656e0e43c6d21736d006eefa4))
* Update dependencies ([26e9a48](https://github.com/getresponse/eslint-config-getresponse/commit/26e9a487c4f72068cfa58c37875837b166a30157))

# [8.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v7.4.0...v8.0.0) (2023-09-21)


### Features

* rule @typescript-eslint/consistent-type-imports warn ([e3fa7ac](https://github.com/getresponse/eslint-config-getresponse/commit/e3fa7ac23ac714e3e6e001509f75002ccadc0279))


### BREAKING CHANGES

* omitting type specifier in import will throw warning

# [7.4.0](https://github.com/getresponse/eslint-config-getresponse/compare/v7.3.0...v7.4.0) (2023-09-20)


### Bug Fixes

* conditional rule @typescript-eslint/strict-boolean-expressions ([453e330](https://github.com/getresponse/eslint-config-getresponse/commit/453e330a1e4fe3285377dc7fddfce3444222daa4))
* update deps ([f414a68](https://github.com/getresponse/eslint-config-getresponse/commit/f414a68e132b2476cf01942cbbbbb90e911dbffa))
* use deprecated createDefaultProgram parserOption ([8d26442](https://github.com/getresponse/eslint-config-getresponse/commit/8d264427ee207fd0b773372f4ee43f0fed8d521d))


### Features

* @typescript-eslint/no-duplicate-type-constituents warn ([ab2b4df](https://github.com/getresponse/eslint-config-getresponse/commit/ab2b4df748a5a44acf3ef3701e2f3abac9433d88))

# [7.3.0](https://github.com/getresponse/eslint-config-getresponse/compare/v7.2.0...v7.3.0) (2023-09-12)


### Features

* typescript-eslint/strict-boolean-expressions warn ([93e5e3a](https://github.com/getresponse/eslint-config-getresponse/commit/93e5e3a5ff00a5da68c77b7f83c26c2daf4c5fb2))

# [7.2.0](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.10...v7.2.0) (2023-08-28)


### Features

* support typescript v5 by updating eslint packages to latest tags ([3c546da](https://github.com/getresponse/eslint-config-getresponse/commit/3c546dac998ce434dae649eca4dabcf7772bbaac))

## [7.1.10](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.9...v7.1.10) (2023-07-05)


### Bug Fixes

* runtime exception thrown when .gitignore file missing ([ee90f19](https://github.com/getresponse/eslint-config-getresponse/commit/ee90f192b123dd99e9e7591b140bc8c10b8df10f))

## [7.1.9](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.8...v7.1.9) (2022-09-02)


### Bug Fixes

* jsx-no-leaked-render valid strategy = ternary ([6f96cdd](https://github.com/getresponse/eslint-config-getresponse/commit/6f96cdd9a0ccf889a8b06fd2ee10269770b8f988))

## [7.1.8](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.7...v7.1.8) (2022-09-02)


### Bug Fixes

* remove no-jest-import rule ([5d230ff](https://github.com/getresponse/eslint-config-getresponse/commit/5d230ffeef4ec889bfd958775af8b5af1cc906f0))

## [7.1.7](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.6...v7.1.7) (2022-09-02)


### Bug Fixes

* **TypeScript:** Update `tsconfig` glob ([2787a94](https://github.com/getresponse/eslint-config-getresponse/commit/2787a94cb68c5cc615b0df9934249a280f712517))
* Update deps ([84d34a0](https://github.com/getresponse/eslint-config-getresponse/commit/84d34a01975a0266ba44f79a90eeb237689da7b3))

## [7.1.6](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.5...v7.1.6) (2022-07-18)


### Bug Fixes

* **TypeScript:** Disable `@typescript-eslint/return-await` ([6326a19](https://github.com/getresponse/eslint-config-getresponse/commit/6326a197fd646e79841dcb28cf737a1df421cbbb))

## [7.1.5](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.4...v7.1.5) (2022-07-15)


### Bug Fixes

* **TypeScript:** GRFRONTEND-1138 Disable `no-unnecessary-type-assertion` due to a bug in the strict mode ([3a8013d](https://github.com/getresponse/eslint-config-getresponse/commit/3a8013d919295f595eacc564444ca077fa81194c))

## [7.1.4](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.3...v7.1.4) (2022-07-15)


### Bug Fixes

* **React:** GRFRONTEND-1138 Allow usage of dynamic components in props ([4f482ed](https://github.com/getresponse/eslint-config-getresponse/commit/4f482ed056f19e1b0c520fcef3f5b1713aaf6fb2))

## [7.1.3](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.2...v7.1.3) (2022-07-15)


### Bug Fixes

* **Dynamic configuration:** GRFRONTEND-1138 Fix support for projects without `package.json` file ([5864505](https://github.com/getresponse/eslint-config-getresponse/commit/5864505276157a8edd5640e9aa3afa2474170bc7))

## [7.1.2](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.1...v7.1.2) (2022-07-15)


### Bug Fixes

* **TypeScript:** GRFRONTEND-1138 Adjust duplicated rules ([00724d7](https://github.com/getresponse/eslint-config-getresponse/commit/00724d756e92b4f73f8df1a65d0d14c2fab4b10c))

## [7.1.1](https://github.com/getresponse/eslint-config-getresponse/compare/v7.1.0...v7.1.1) (2022-07-15)


### Bug Fixes

* **TypeScript:** GRFRONTEND-1138 Disable `no-undef` rule ([3dcc765](https://github.com/getresponse/eslint-config-getresponse/commit/3dcc765559b4e71571a51fb2a75f96b712fb18c7))

# [7.1.0](https://github.com/getresponse/eslint-config-getresponse/compare/v7.0.1...v7.1.0) (2022-07-14)


### Features

* GRFRONTEND-1138 Exclude files ignored by git ([9a713b9](https://github.com/getresponse/eslint-config-getresponse/commit/9a713b9f15d57f7f26b0ca9db9e778c5bac93724))

## [7.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v7.0.0...v7.0.1) (2022-07-14)


### Bug Fixes

* GRFRONTEND-1138 Add missing peer dependency ([13a42b1](https://github.com/getresponse/eslint-config-getresponse/commit/13a42b105a76254ed1ee9fe7905db9def4ff852f))

# [7.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v6.0.3...v7.0.0) (2022-07-14)


### Bug Fixes

* **React:** GRFRONTEND-1138 Enable `exhaustive-deps` ([6c01101](https://github.com/getresponse/eslint-config-getresponse/commit/6c0110155edd47cf004b6399ca73f7dda89fb52e))


### Features

* GRFRONTEND-1138 Enable modern JS rules ([7c403e2](https://github.com/getresponse/eslint-config-getresponse/commit/7c403e283f0209d3727f6cc6619f5beae8e6b4a4))
* GRFRONTEND-1138 Merge `eslint-config-getresponse` and `eslint-config-getresponse-base` ([9a01aca](https://github.com/getresponse/eslint-config-getresponse/commit/9a01acabe6fde3996ab70dc8e77f53eb5d7d26dc))
* **React:** GRFRONTEND-1138 Update React rules ([5b07e53](https://github.com/getresponse/eslint-config-getresponse/commit/5b07e531a481025add7964b56f81fbebb5683da0))
* **Report:** GRFRONTEND-1138 Introduce rules overview page ([54ac572](https://github.com/getresponse/eslint-config-getresponse/commit/54ac572917d5dd01dac6dbd09971c2157f73038f))
* **TypeScript:** GRFRONTEND-1138 Add non-strict version ([dce064e](https://github.com/getresponse/eslint-config-getresponse/commit/dce064ef44ae65ccda68257e5f63f3073798bc3c))
* **TypeScript:** GRFRONTEND-1138 Update TS rules ([b301643](https://github.com/getresponse/eslint-config-getresponse/commit/b3016432a66b6d639c4e34677af3bdc67fb018ad))


### BREAKING CHANGES

* Rename package to `@gr/eslint-config`

## [6.0.3](https://github.com/getresponse/eslint-config-getresponse/compare/v6.0.2...v6.0.3) (2022-04-13)

### Bug Fixes

* update base config package, bump up dev
  depedencies ([7a8fae8](https://github.com/getresponse/eslint-config-getresponse/commit/7a8fae863cb54b4779585f14cb1072d0ca1b1ced))

## [6.0.2](https://github.com/getresponse/eslint-config-getresponse/compare/v6.0.1...v6.0.2) (2022-01-03)

### Bug Fixes

* **react:** disable react-hooks/exhaustive-deps
  rule ([8ad6406](https://github.com/getresponse/eslint-config-getresponse/commit/8ad640694f73c7ad8a9fcd2897b0c29d81f3f1b1))
* update package
  dependencies ([d5b5a0b](https://github.com/getresponse/eslint-config-getresponse/commit/d5b5a0be25b45ec1a763126c5ef21f72cdd4a498))

## [6.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v6.0.0...v6.0.1) (2021-11-10)

### Bug Fixes

* update base
  config ([d20f76e](https://github.com/getresponse/eslint-config-getresponse/commit/d20f76e74bc0a5a7e53f2599c629ec335e10589c))

# [6.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.5...v6.0.0) (2021-10-12)

### Bug Fixes

* update base
  config ([97b6705](https://github.com/getresponse/eslint-config-getresponse/commit/97b6705497df79f9b8d5b51ca388359fb5d675f4))

### BREAKING CHANGES

* peerDependencies are updated to latest major versions including eslint v8

## [5.4.5](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.4...v5.4.5) (2021-10-11)

### Bug Fixes

* trigger release for missing 5.4.4 version caused by npm
  incident ([901ca47](https://github.com/getresponse/eslint-config-getresponse/commit/901ca478cf339ec9fa2590f6f5ce6bc8a4dee92d))

## [5.4.4](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.3...v5.4.4) (2021-10-11)

### Bug Fixes

* update base
  config ([d2b7acf](https://github.com/getresponse/eslint-config-getresponse/commit/d2b7acf78c3ed574f3407585726f7d66a3e26158))

## [5.4.3](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.2...v5.4.3) (2021-09-20)

### Bug Fixes

* update base
  config ([08e73b6](https://github.com/getresponse/eslint-config-getresponse/commit/08e73b6ef08a10ae2bff110e60b95278486b6f36))

## [5.4.2](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.1...v5.4.2) (2021-09-15)

### Bug Fixes

* update base
  config ([7ae2893](https://github.com/getresponse/eslint-config-getresponse/commit/7ae289310172d2e116b257c584af4ac0f1d4fae1))

## [5.4.1](https://github.com/getresponse/eslint-config-getresponse/compare/v5.4.0...v5.4.1) (2021-09-08)

### Bug Fixes

* disable react/no-unused-prop-types for typescript
  files ([60ffff5](https://github.com/getresponse/eslint-config-getresponse/commit/60ffff568569b9e3a77051bcddb2269164ad08ec))

# [5.4.0](https://github.com/getresponse/eslint-config-getresponse/compare/v5.3.0...v5.4.0) (2021-08-24)

### Features

* update base
  config ([ef7e3f9](https://github.com/getresponse/eslint-config-getresponse/commit/ef7e3f98969b903907ceddaf93af163079b8dc8c))

# [5.3.0](https://github.com/getresponse/eslint-config-getresponse/compare/v5.2.3...v5.3.0) (2021-08-20)

### Bug Fixes

* disable react/prop-types rule for typescript
  files ([4899138](https://github.com/getresponse/eslint-config-getresponse/commit/489913849aa2ece308fbc3ee55e95759c107cd18))

### Features

* update base
  config ([7fdc654](https://github.com/getresponse/eslint-config-getresponse/commit/7fdc65444e6dc12e46b76c68dfa7a5d8dd6ddc71))

## [5.2.3](https://github.com/getresponse/eslint-config-getresponse/compare/v5.2.2...v5.2.3) (2021-04-16)

### Bug Fixes

* update base
  config ([23ea0dc](https://github.com/getresponse/eslint-config-getresponse/commit/23ea0dc365aebc38c75f675cf185d9d9e1bbe2a9))

## [5.2.2](https://github.com/getresponse/eslint-config-getresponse/compare/v5.2.1...v5.2.2) (2021-04-09)

### Bug Fixes

* update base
  config ([ab00b52](https://github.com/getresponse/eslint-config-getresponse/commit/ab00b52a52b054121e31fc7405f3e368062a6092))

## [5.2.1](https://github.com/getresponse/eslint-config-getresponse/compare/v5.2.0...v5.2.1) (2021-04-07)

### Bug Fixes

* update base
  config ([4e08c1b](https://github.com/getresponse/eslint-config-getresponse/commit/4e08c1b9ba0305af3d4b86cca59d5412b69728b3))

# [5.2.0](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.6...v5.2.0) (2021-04-06)

### Bug Fixes

* **jsx-no-bind:** turn on ignoreDOMComponents config
  option ([46ba6ba](https://github.com/getresponse/eslint-config-getresponse/commit/46ba6ba4c4d2dcbfbd79073e0f88aea4130863d7))

### Features

* update base
  config ([0347df9](https://github.com/getresponse/eslint-config-getresponse/commit/0347df95b227cf87d893e06ede6c9240bf5fd9ca))

## [5.1.6](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.5...v5.1.6) (2021-04-06)

### Bug Fixes

* update base
  config ([9d2a3e3](https://github.com/getresponse/eslint-config-getresponse/commit/9d2a3e331db9ad3e113a93ca45a467326086f983))

## [5.1.5](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.4...v5.1.5) (2020-09-14)

### Bug Fixes

* update base
  config ([70b7de8](https://github.com/getresponse/eslint-config-getresponse/commit/70b7de8bf22a944eda5c4318bf05e75326d2642b))

## [5.1.4](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.3...v5.1.4) (2020-09-14)

### Bug Fixes

* update base
  config ([ac01d04](https://github.com/getresponse/eslint-config-getresponse/commit/ac01d0432f736d99bc52980a991456c55304635d))

## [5.1.3](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.2...v5.1.3) (2020-09-11)

### Bug Fixes

* update base
  config ([01af624](https://github.com/getresponse/eslint-config-getresponse/commit/01af6243428c74bac10c53af0130a536d694ec28))

## [5.1.2](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.1...v5.1.2) (2020-09-10)

### Bug Fixes

* **typescript:** update parser
  options ([8ae9022](https://github.com/getresponse/eslint-config-getresponse/commit/8ae90223316670729df810d0a19ec56562c69e53))

## [5.1.1](https://github.com/getresponse/eslint-config-getresponse/compare/v5.1.0...v5.1.1) (2020-09-08)

### Bug Fixes

* update base
  config ([c53b71d](https://github.com/getresponse/eslint-config-getresponse/commit/c53b71db21e7aaa7972316382ea83008d35c3e03))

# [5.1.0](https://github.com/getresponse/eslint-config-getresponse/compare/v5.0.4...v5.1.0) (2020-09-07)

### Features

* update eslint
  dependencies ([cba9d71](https://github.com/getresponse/eslint-config-getresponse/commit/cba9d719be686c64e1eb40b916f837144b380de8))

## [5.0.4](https://github.com/getresponse/eslint-config-getresponse/compare/v5.0.3...v5.0.4) (2020-07-11)

### Bug Fixes

* update base
  config ([de2ef6a](https://github.com/getresponse/eslint-config-getresponse/commit/de2ef6a309726dd6bed81de8057ca14c4b3d3286))

## [5.0.3](https://github.com/getresponse/eslint-config-getresponse/compare/v5.0.2...v5.0.3) (2020-06-04)

### Bug Fixes

* update base
  config ([537273a](https://github.com/getresponse/eslint-config-getresponse/commit/537273aaa7f9b032e1f58a85b26707cd5baea8b2))

## [5.0.2](https://github.com/getresponse/eslint-config-getresponse/compare/v5.0.1...v5.0.2) (2020-06-04)

### Bug Fixes

* update eslint
  dependencies ([50180f4](https://github.com/getresponse/eslint-config-getresponse/commit/50180f419339513fb24ea5c85ff6a24d12bd6693))

## [5.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v5.0.0...v5.0.1) (2020-04-05)

### Bug Fixes

* update eslint-config-getresponse-base to
  v5.0.1 ([170130a](https://github.com/getresponse/eslint-config-getresponse/commit/170130af8ca9802e56e9100c2f99052700fc3509))

# [5.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.6...v5.0.0) (2020-03-23)

### Features

* update eslint-config-getresponse-base to
  v5.0.0 ([92b59a8](https://github.com/getresponse/eslint-config-getresponse/commit/92b59a8f4dab087d2c229dba98618548de71dbef))

### BREAKING CHANGES

* there is no longer need for tsconfig.eslint.json

## [4.0.6](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.5...v4.0.6) (2020-03-19)

### Bug Fixes

* update eslint-config-getresponse-base to
  v4.0.6 ([9514dcd](https://github.com/getresponse/eslint-config-getresponse/commit/9514dcd4ce06489a60d18fbe451095fe6cf3f70b))

## [4.0.5](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.4...v4.0.5) (2020-03-09)

### Bug Fixes

* update eslint-config-getresponse-base to
  v4.0.5 ([845ff3f](https://github.com/getresponse/eslint-config-getresponse/commit/845ff3fbfbb85162f3f9782d0776e8af94840ad3))

## [4.0.4](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.3...v4.0.4) (2020-03-06)

### Bug Fixes

* update eslint-config-getresponse-base to
  v4.0.4 ([35ffd72](https://github.com/getresponse/eslint-config-getresponse/commit/35ffd72e103acd49491dc9bf94a7a420e2ca46b9))

## [4.0.3](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.2...v4.0.3) (2020-03-06)

### Bug Fixes

* update eslint-config-getresponse-base to
  v4.0.3 ([ebb590a](https://github.com/getresponse/eslint-config-getresponse/commit/ebb590a36106c901c9c3e2ab7b4d49a5a49e2216))

## [4.0.2](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.1...v4.0.2) (2020-03-04)

### Bug Fixes

* **react:** disable function-component-definition
  rule ([6df923d](https://github.com/getresponse/eslint-config-getresponse/commit/6df923dcee4f2de09705490ba49a29a117273c11))

## [4.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v4.0.0...v4.0.1) (2020-03-03)

### Bug Fixes

* update eslint-config-getresponse-base to
  v4.0.2 ([88bff04](https://github.com/getresponse/eslint-config-getresponse/commit/88bff0488751c01465557ded81fdba2d4e92bcd4))

# [4.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.18...v4.0.0) (2020-03-03)

### Bug Fixes

* move jest rules to base
  config ([f50797c](https://github.com/getresponse/eslint-config-getresponse/commit/f50797c12a1988c12721b8775bfbf9b5f543f947))

### BREAKING CHANGES

* updated peer dependencies

## [3.1.18](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.17...v3.1.18) (2020-03-03)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.18 ([ba6ff19](https://github.com/getresponse/eslint-config-getresponse/commit/ba6ff192328efca89d1a669e44d0a47f538592f3))

## [3.1.17](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.16...v3.1.17) (2020-03-02)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.17 ([cface7f](https://github.com/getresponse/eslint-config-getresponse/commit/cface7f6bd87ebeb8184683bf3fb5345d408260c))

## [3.1.16](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.15...v3.1.16) (2020-03-02)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.15 ([09e1a62](https://github.com/getresponse/eslint-config-getresponse/commit/09e1a62072a93e3cb19306feb0f9dcc35e57acf6))

## [3.1.15](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.14...v3.1.15) (2020-03-02)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.14 ([c9f355b](https://github.com/getresponse/eslint-config-getresponse/commit/c9f355be1b7e79c1100ea13d88b2986e49204534))

## [3.1.14](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.13...v3.1.14) (2020-03-01)

### Bug Fixes

* **react:** update no-multi-comp rule to ignore stateless
  components ([52fa645](https://github.com/getresponse/eslint-config-getresponse/commit/52fa645ef90384c03db42ddce2a8b56685b1b55b))

## [3.1.13](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.12...v3.1.13) (2020-03-01)

### Bug Fixes

* update eslint-config-getresponse-base to v3.1.13, drop requirement for
  eslint-plugin-import ([f0ee46a](https://github.com/getresponse/eslint-config-getresponse/commit/f0ee46a7de88ecd043d03696224fdc1fb42a8e80))

## [3.1.12](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.11...v3.1.12) (2020-03-01)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.12 ([a53d73b](https://github.com/getresponse/eslint-config-getresponse/commit/a53d73b3ee594e649457835088399e71c64a5ca7))

## [3.1.11](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.10...v3.1.11) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.11 ([b5ba7d0](https://github.com/getresponse/eslint-config-getresponse/commit/b5ba7d0f5aa7f1ccd48e58d6ad592f433ab0f8a8))

## [3.1.10](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.9...v3.1.10) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.10 ([1376d0d](https://github.com/getresponse/eslint-config-getresponse/commit/1376d0d5f1cd2cb209733efe6b0d7abdf4160813))

## [3.1.9](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.8...v3.1.9) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.9 ([325bf7a](https://github.com/getresponse/eslint-config-getresponse/commit/325bf7ac9196cb4677db247f7e5b860320904373))

## [3.1.8](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.7...v3.1.8) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.8 ([76e0b73](https://github.com/getresponse/eslint-config-getresponse/commit/76e0b7341497368ece6b38a02ed60306b4d0c278))

## [3.1.7](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.6...v3.1.7) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.7 ([d44bf76](https://github.com/getresponse/eslint-config-getresponse/commit/d44bf76be8edd08f81fd75e1720d3e5c21889c90))

## [3.1.6](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.5...v3.1.6) (2020-02-29)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.6 ([45c4b09](https://github.com/getresponse/eslint-config-getresponse/commit/45c4b09ce770576385d4744285d7183cc64d029c))

## [3.1.5](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.4...v3.1.5) (2020-02-28)

### Bug Fixes

* **jest:** disable no-unused-modules for manual
  mocks ([14a0bb5](https://github.com/getresponse/eslint-config-getresponse/commit/14a0bb5cc0f9229ffefd9db8dbc7c7b433348949))

## [3.1.4](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.3...v3.1.4) (2020-02-28)

### Bug Fixes

* **jest:** disable prefer-called-with
  rule ([8315230](https://github.com/getresponse/eslint-config-getresponse/commit/83152305fac4117dc80d43840d4771a3e733f80f))

## [3.1.3](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.2...v3.1.3) (2020-02-28)

### Bug Fixes

* **jest:** update lowercase-name
  rule ([cd2ac83](https://github.com/getresponse/eslint-config-getresponse/commit/cd2ac83f3bd8ca54a49b68d1eb322eb85bd2c550))

## [3.1.2](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.1...v3.1.2) (2020-02-28)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.3 ([7942dda](https://github.com/getresponse/eslint-config-getresponse/commit/7942ddac2e9503e7f52351939aa8ad2f5af3c987))

## [3.1.1](https://github.com/getresponse/eslint-config-getresponse/compare/v3.1.0...v3.1.1) (2020-02-28)

### Bug Fixes

* update eslint-config-getresponse-base to
  v3.1.2 ([8c26f16](https://github.com/getresponse/eslint-config-getresponse/commit/8c26f162224ebbc3a5ad2a5d48764021df329c7f))

# [3.1.0](https://github.com/getresponse/eslint-config-getresponse/compare/v3.0.3...v3.1.0) (2020-02-28)

### Features

* add rules for
  jest ([f768468](https://github.com/getresponse/eslint-config-getresponse/commit/f76846879acbb875da0e68f71064ca2db126fe2f))

## [3.0.3](https://github.com/getresponse/eslint-config-getresponse/compare/v3.0.2...v3.0.3) (2020-02-28)

### Bug Fixes

* **react:** update jsx-tag-spacing
  rule ([7ffdafe](https://github.com/getresponse/eslint-config-getresponse/commit/7ffdafeba96b3781173a3ec9acb7f9aa1b2d58d1))

## [3.0.2](https://github.com/getresponse/eslint-config-getresponse/compare/v3.0.1...v3.0.2) (2020-02-28)

### Bug Fixes

* update typescript and react
  rules ([8c5b0a0](https://github.com/getresponse/eslint-config-getresponse/commit/8c5b0a063d6411d8af06d2702f56a2297a31feef))

## [3.0.1](https://github.com/getresponse/eslint-config-getresponse/compare/v3.0.0...v3.0.1) (2020-02-28)

### Bug Fixes

* remove useless files from published
  package ([9c283ac](https://github.com/getresponse/eslint-config-getresponse/commit/9c283acee241d6ff4d9db5e137f51e4ea8211637))

# [3.0.0](https://github.com/getresponse/eslint-config-getresponse/compare/v2.1.0...v3.0.0) (2020-02-28)

### Features

* add typescript
  support ([1562ac5](https://github.com/getresponse/eslint-config-getresponse/commit/1562ac5002c3ce7aba214d78a6a49a98a58ac7ce))

### BREAKING CHANGES

* depends on eslint ^6.8.0

2.1.0 / 2019-07-05
==================

- Updated base config

2.0.4 / 2019-01-25
==================

- Updated base config

2.0.3 / 2019-01-21
==================

- Fixed `react/jsx-fragments` rule - changed mode from `syntax` to `element`

2.0.2 / 2019-01-21
==================

- Updated base config

2.0.1 / 2019-01-21
==================

- Fixed legacy decorators support

2.0.0 / 2019-01-21
==================

- Updated ESLint from v4 to v5

1.0.0 / 2018-10-25
==================

- First release
