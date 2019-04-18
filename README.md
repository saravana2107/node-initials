# node-initials

To extract initials from names.

## Installation

To install node-initials, use [npm](http://github.com/npm/npm):

```
npm i node-initials -S
```

## Usage

```javascript
import initials from 'node-initials';

initials('John');
/* 'JO' */

initials('', 'Wick');
/* 'WI' */

initials('John', 'Wick');
/* 'JW' */

initials('John Wick');
/* 'JW' */
```

## Options
- `firstName` - Define First Name or Full Name to get initials.
- `lastName` - Define Last Name to include in initials (default: null) [OPTIONAL]

## Tests

```
npm install
npm test
```