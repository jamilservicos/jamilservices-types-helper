# @jamilservices/types-helper
Personal type validation help module for javascript.

[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/)
[![Made with JavaScript](https://img.shields.io/badge/Made_with-JavaScript-blue?logo=javascript&logoColor=white)](https://www.javascript.com/)
[![Made with Node.js](https://img.shields.io/badge/Node.js->=14-blue?logo=node.js&logoColor=white)](https://nodejs.org)
[![npm - @jamilservices/types-helper](https://img.shields.io/badge/npm-%40jamilservices%2Ftypes--helper-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/types-helper)

[![jamilservicos - jamilservices-types-helper](https://img.shields.io/static/v1?label=jamilservicos&message=jamilservices-types-helper&color=blue&logo=github)](https://github.com/jamilservicos/jamilservices-types-helper)
[![stars - jamilservices-types-helper](https://img.shields.io/github/stars/jamilservicos/jamilservices-types-helper?style=social)](https://github.com/jamilservicos/jamilservices-types-helper)
[![forks - jamilservices-types-helper](https://img.shields.io/github/forks/jamilservicos/jamilservices-types-helper?style=social)](https://github.com/jamilservicos/jamilservices-types-helper)
[![issues - jamilservices-types-helper](https://img.shields.io/github/issues/jamilservicos/jamilservices-types-helper)](https://github.com/jamilservicos/jamilservices-types-helper/issues)
[![GitHub release](https://img.shields.io/github/release/jamilservicos/jamilservices-types-helper?include_prereleases=&sort=semver)](https://github.com/jamilservicos/jamilservices-types-helper/releases/)

[![Libraries.io - @jamilservices/types-helper](https://img.shields.io/badge/Libraries.io-%40jamilservices%2Ftypes--helper-blue?logo=Libraries.io&logoColor=white)](https://libraries.io/npm/@jamilservices%2Ftypes-helper)
[![Libraries.io SourceRank, scoped npm package](https://img.shields.io/librariesio/sourcerank/npm/@jamilservices/types-helper?logo=Libraries.io&logoColor=white&color=sucess)](https://libraries.io/npm/@jamilservices%2Ftypes-helper)

![npm (custom registry)](https://img.shields.io/npm/v/@jamilservices/types-helper/latest?registry_uri=https%3A%2F%2Fregistry.npmjs.com&logo=npm)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/@jamilservices/types-helper/latest?logo=npm)
![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/@jamilservices/types-helper/latest?logo=npm)
![npm downloads](https://img.shields.io/npm/dt/@jamilservices/types-helper.svg?logo=npm&label=total%20downloads)

[![CodeQL](https://github.com/jamilservicos/jamilservices-types-helper/workflows/CodeQL/badge.svg)](https://github.com/jamilservicos/jamilservices-types-helper/actions?query=workflow:"CodeQL")
[![Known Vulnerabilities](https://snyk.io/test/github/jamilservicos/jamilservices-types-helper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jamilservicos/jamilservices-types-helper?targetFile=package.json "Known Vulnerabilities")

![Maintained - yes](https://img.shields.io/badge/Maintained-yes-green)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/jamilservicos/jamilservices-types-helper/blob/main/LICENSE)


Installation ways:

- from github:
```
npm install --save git+https://github.com/jamilservicos/jamilservices-types-helper.git
yarn add git+https://github.com/jamilservicos/jamilservices-types-helper.git
```
- from npm:
```
npm install --save @jamilservices/types-helper
yarn add @jamilservices/types-helper
```


Example of use:

```
"use strict";
const check = require("@jamilservices/types-helper");

/**
 * @param {string} name
 * @param {(number || string)} value
 * @return {boolean}
 */
const example = (name, value) => {
    try {
        const t_name = check({types: "string", data: name});
        const t_number = check({types: ["number", "string"], data: value});
        if(typeof t_name === "object") throw t_name.error;
        if(typeof t_number === "object") throw t_number.error;

        return true;
    } catch (err) {
        console.log(err);
    }
};

example("string",1);
```

## License
Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).
- You can freely modify and reuse.
- The original license must be included with copies of this software.
- Please link back to this repo if you use a significant portion the source code.


## 👩‍💻💻 Technologies
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)

## 💲 Donate
![Bitcoin](https://img.shields.io/badge/1BrKxKsspVs3uR1ctAPfudLY38Tdw6yU3R-000000?style=for-the-badge&label=BTC&color=F7931A&labelColor=black)
![Dogecoin](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-C2A633?style=for-the-badge&label=DOGE&color=C2A633&labelColor=black)
![Tron](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-f60614?style=for-the-badge&label=TRX&color=f60614&labelColor=black)
![Waves](https://img.shields.io/badge/3PQA4gjdQJcSzHhxZLbdhoWjkjrFEXmTqqw-1c55ce?style=for-the-badge&label=WAVES&color=1c55ce&labelColor=black)
