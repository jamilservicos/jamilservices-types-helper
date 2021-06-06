# @jamilservices-types-helper
Personal type validation help module for javascript.

Installation ways:

```
npm install --save git+https://github.com/jamilservicos/jamilservices-types-helper.git
yarn add git+https://github.com/jamilservicos/jamilservices-types-helper.git
```


Example of use:

```
"use strict";
const check = require("@jamilservices/types-helper");

/**
 * @param {string} name
 * @param {number} value
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
        console.error(err);
    }
};

example("string",1);
```
## 👩‍💻💻 Technologies
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)

## 💲 Donate
![Bitcoin](https://img.shields.io/badge/1BrKxKsspVs3uR1ctAPfudLY38Tdw6yU3R-000000?style=for-the-badge&label=BTC&color=F7931A&labelColor=black)
![Dogecoin](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-C2A633?style=for-the-badge&label=DOGE&color=C2A633&labelColor=black)
![Tron](https://img.shields.io/badge/DEj13YitqbqkWAidQVMHe6KHpgJeVP34jN-f60614?style=for-the-badge&label=TRX&color=f60614&labelColor=black)
![Waves](https://img.shields.io/badge/3PQA4gjdQJcSzHhxZLbdhoWjkjrFEXmTqqw-1c55ce?style=for-the-badge&label=WAVES&color=1c55ce&labelColor=black)
