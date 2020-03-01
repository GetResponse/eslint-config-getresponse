# eslint-config-getresponse

[![npm version](https://badge.fury.io/js/eslint-config-getresponse.svg)](https://badge.fury.io/js/eslint-config-getresponse)
[![Build Status](https://travis-ci.com/GetResponse/eslint-config-getresponse.svg?branch=master)](https://travis-ci.com/GetResponse/eslint-config-getresponse)
[![Dependencies](https://img.shields.io/david/getresponse/eslint-config-getresponse.svg)](https://david-dm.org/getresponse/eslint-config-getresponse)
[![peerDependencies Status](https://david-dm.org/getresponse/eslint-config-getresponse/peer-status.svg)](https://david-dm.org/getresponse/eslint-config-getresponse?type=peer)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

This package contains all of our ESLint rules, including ES6, TypeScript, Jest and React. It requires `eslint`, `typescript`,
`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-jest` and `@typescript-eslint/eslint-plugin`. If you don't need React and Jest, see [eslint-config-getresponse-base](https://github.com/getresponse/eslint-config-getresponse-base/).

1. Install correct versions of each dependant package:

   ```bash
   npx install-peerdeps --dev eslint-config-getresponse
   ```

2. Add `"extends": "eslint-config-getresponse"` to your ESLint config.
