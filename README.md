### <span id="jamilservices-types-helper">@jamilservices/types-helper</span>  
#### Personal type validation help module for javascript.
#
## Table of Contents
- [Examples](https://github.com/jamilservicos/jamilservices-types-helper/tree/main/examples/)
- [Installation ways](#installation-ways)
- [Important Upgrade Notice for Version 1.0.0](#upgrade-notice)
- [Import module](#import-module)
- [typesHelper Function](#typeshelper-function)
    - [Functionality](#functionality)
    - [Input Parameters](#input-parameters)
    - [Returns](#returns)
    - [How to Use](#how-to-use)
- [License](#license)
- [Technologies](#technologies)
#
#### <span id="installation-ways">Installation ways:</span>
[(go to top)](#jamilservices-types-helper)   

###
- from github:
~~~bash
npm install --save git+https://github.com/jamilservicos/jamilservices-types-helper.git
yarn add git+https://github.com/jamilservicos/jamilservices-types-helper.git
~~~
###
- from npm:
~~~bash
npm install --save @jamilservices/types-helper
yarn add @jamilservices/types-helper
~~~    
#
### <span id="upgrade-notice">Important Upgrade Notice for Version 1.0.0</span>
[(go to top)](#jamilservices-types-helper)   

If you're updating to version 1.0.0 of @jamilservices/types-helper, please be aware of the following requirements and recommendations:

**Node.js Version Requirement:**   

Version 1.0.0 of @jamilservices/types-helper is designed to work with Node.js versions 20.10 or higher. Ensure that your environment is running a compatible version of Node.js to avoid any compatibility issues.   

**Migrating from Version 0.1.3:**   

If you're migrating from version 0.1.3, it's crucial to carefully review and implement the necessary updates and adaptations for version 1.0.0. This version includes significant changes that may affect how you use the library.   

**Why Upgrade?**   

Upgrading to version 1.0.0 brings you the latest features, performance improvements, and bug fixes. We strongly recommend updating to enhance your application's functionality and security.   

**Need Help?**   

Should you face any challenges or have queries about transitioning to version 1.0.0, we are here to help. For further assistance or to report any issues, please visit our issues page where you can submit queries and report problems.   

Your feedback is invaluable in helping us refine and enhance @jamilservices/types-helper.

#
#### <span id="import-module">Import module</span>
[(go to top)](#jamilservices-types-helper)   

~~~javascript
 const {typesHelper} = require("@jamilservices/types-helper");
~~~   

 or    

~~~javascript
 const customVariableName = require("@jamilservices/types-helper").typesHelper;
~~~   

 or    

~~~javascript
 import {typesHelper} from "@jamilservices/types-helper";
~~~   

#
### <span id="typeshelper-function">typesHelper Function: `typesHelper({data, types}, Boolean = false)`</span>
[(go to top)](#jamilservices-types-helper)   

The typesHelper function is designed to validate custom data against specified types. It provides a flexible and efficient way to ensure that data conforms to expected formats.

#### <span id="functionality">Functionality:</span>
[(go to top)](#jamilservices-types-helper)   

- **Adaptive Validation**: The function adjusts its validation approach based on the `types` parameter, accommodating both single and multiple type checks.
- **Comprehensive Error Handling**: If validation fails or if the input is invalid, it generates a comprehensive error detailing the issue.

#### <span id="input-parameters">Input Parameters:</span>
[(go to top)](#jamilservices-types-helper)   

- **{data, types} (Object)**: An object containing the data and types for validation.
  - **data (any)**: The custom data to be validated.
  - **types (Array.<string|string)**: An array of strings or a single string specifying the type or types to validate the data against.
- **boolean (Boolean)**: A flag indicating whether the function should only return boolean values. When true, the function returns simple true or false; otherwise, it may return detailed error information.

#### <span id="returns">Returns:</span>
[(go to top)](#jamilservices-types-helper)   

**Success**: Returns true if the data matches the specified types.
Failure: Returns an error object detailing the nature of the type mismatch or other validation issues.

#### <span id="how-to-use">How to Use:</span>
[(go to top)](#jamilservices-types-helper)   

1. **Prepare Data and Types**: Create an object containing the `data` to validate and the `types` against which you wish to validate the data.
2. **Call the Function**: Invoke `typesHelper` with the prepared object and the boolean flag based on your preference for the response type.
3. **Interpret the Response**: Handle the response by checking if it's true (indicating successful validation) or by examining the error object for details on validation failures.
   
The `typesHelper` function is an essential utility for scenarios where robust and flexible data validation is required. Its intuitive design and detailed responses make it an indispensable tool for ensuring data integrity and adherence to expected formats.

#
### <span id="license">License</span>   
[(go to top)](#jamilservices-types-helper)   

Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).  
* You can freely modify and reuse.
* The original license must be included with copies of this software.
* Please link back to this repo if you use a significant portion the source code.

#
### <span id="technologies">👩‍💻💻 Technologies</span>
[(go to top)](#jamilservices-types-helper)   

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
#
