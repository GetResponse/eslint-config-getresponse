# eslint-config-getresponse

[![npm version](https://badge.fury.io/js/eslint-config-getresponse.svg)](https://badge.fury.io/js/eslint-config-getresponse)
[![Build Status](https://travis-ci.com/GetResponse/eslint-config-getresponse.svg?branch=master)](https://travis-ci.com/GetResponse/eslint-config-getresponse)
[![Dependencies](https://img.shields.io/david/getresponse/eslint-config-getresponse.svg)](https://david-dm.org/getresponse/eslint-config-getresponse)
[![peerDependencies Status](https://david-dm.org/getresponse/eslint-config-getresponse/peer-status.svg)](https://david-dm.org/getresponse/eslint-config-getresponse?type=peer)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

This package contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [eslint-config-getresponse-base](https://github.com/getresponse/eslint-config-getresponse-base/).

1. Install correct versions of each dependant package:

   ```bash
   npx install-peerdeps --dev eslint-config-getresponse
   ```

2. Add `"extends": "eslint-config-getresponse"` to your ESLint config.

3. If you're using babel be sure to use [babel-eslint](https://github.com/babel/babel-eslint) as your parser.
