/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let total = 0;
  let currentNumber = n1;

  while (currentNumber <= n2) {
    total += currentNumber;
    currentNumber += 1;
  }

  return total;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1Center = {
    x: rect1.left + rect1.width / 2,
    y: rect1.top + rect1.height / 2,
  };
  const rect2Center = {
    x: rect2.left + rect2.width / 2,
    y: rect2.top + rect2.height / 2,
  };

  return (
    Math.abs(rect1Center.x - rect2Center.x) < (rect1.width + rect2.width) / 2
    && Math.abs(rect1Center.y - rect2Center.y) < (rect1.height + rect2.height) / 2
  );
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const { center, radius } = circle;
  const distance = Math.sqrt(
    (center.x - point.x) ** 2 + (center.y - point.y) ** 2,
  );

  return distance < radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let targetChar = null;

  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      targetChar = str[i];
      break;
    }
  }

  return targetChar;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const intervalStart = isStartIncluded ? '[' : '(';
  const intervalEnd = isEndIncluded ? ']' : ')';
  const intervalRange = a < b ? `${a}, ${b}` : `${b}, ${a}`;

  return `${intervalStart}${intervalRange}${intervalEnd}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const numStringRepresentation = num.toString();

  return numStringRepresentation.split('').reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

function myGetDigitalRoot(number) {
  let root = number;
  while (root > 9) {
    const digits = root
      .toString()
      .split('')
      .map((strNum) => Number.parseInt(strNum, 10));
    root = digits.reduce((sum, digit) => sum + digit);
  }

  return root;
}

function isCreditCardNumber(ccn) {
  const digits = ccn
    .toString()
    .split('')
    .map((strNum) => Number.parseInt(strNum, 10));

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] = myGetDigitalRoot(digits[i]);
    }
  }

  const checkSum = digits.reduce((sum, digit) => sum + digit);

  return checkSum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let root = num;
  while (root > 9) {
    const digits = root
      .toString()
      .split('')
      .map((strNum) => Number.parseInt(strNum, 10));
    root = digits.reduce((sum, digit) => sum + digit);
  }

  return root;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const validationStack = [];
  const bracketsMap = new Map([
    ['[', ']'],
    ['(', ')'],
    ['{', '}'],
    ['<', '>'],
  ]);

  for (let i = 0; i < str.length; i += 1) {
    if (bracketsMap.has(str[i])) {
      validationStack.push(str[i]);
    } else if (str[i] === bracketsMap.get(validationStack.at(-1))) {
      validationStack.pop();
    } else {
      return false;
    }
  }

  return !validationStack.length;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let isMatchingPaths = true;
  const pathesSplitted = pathes.map((path) => path.split('/'));
  const minPathLength = Math.min(...pathesSplitted.map((path) => path.length));
  const commonFolders = [];

  while (isMatchingPaths) {
    for (let j = 0; j < minPathLength; j += 1) {
      for (let i = 0; i < pathes.length - 1; i += 1) {
        if (pathesSplitted[i][j] !== pathesSplitted[i + 1][j]) {
          isMatchingPaths = false;
          break;
        }
      }
      if (isMatchingPaths) {
        commonFolders.push(pathesSplitted[0][j]);
      } else {
        break;
      }
    }
  }

  if (commonFolders.length === 0) {
    return '';
  }
  if (commonFolders.length === 1) {
    return commonFolders[0] === '' ? '/' : commonFolders[0];
  }
  return `${commonFolders.join('/')}/`;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const m = [];
  for (let i = 0; i < m1.length; i += 1) {
    m.push(new Array(m2[0].length).fill(0));
  }

  for (let i = 0; i < m1.length; i += 1) {
    for (let j = 0; j < m2[0].length; j += 1) {
      for (let k = 0; k < m1[0].length; k += 1) {
        m[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return m;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function isAllElementsEqual(array) {
  return (
    array.filter((element) => element === array[0]).length === array.length
    && array[0] !== undefined
  );
}

function scanRows(position) {
  for (let i = 0; i < position.length; i += 1) {
    const currRow = position[i];
    if (currRow.length === 3 && isAllElementsEqual(currRow)) {
      return currRow[0];
    }
  }

  return undefined;
}

function scanCols(position) {
  for (let j = 0; j < position[0].length; j += 1) {
    const currCol = [];
    for (let i = 0; i < position.length; i += 1) {
      currCol.push(position[i][j]);
    }
    if (isAllElementsEqual(currCol)) {
      return currCol[0];
    }
  }

  return undefined;
}

function scanMainDiag(position) {
  const mainDiag = [];

  for (let i = 0; i < position.length; i += 1) {
    mainDiag.push(position[i][i]);
  }
  if (isAllElementsEqual(mainDiag)) {
    return mainDiag[0];
  }

  return undefined;
}

function scanSecondaryDiag(position) {
  const secondaryDiag = [];

  for (let i = 0; i < position.length; i += 1) {
    secondaryDiag.push(position[i][position[0].length - 1 - i]);
  }
  if (isAllElementsEqual(secondaryDiag)) {
    return secondaryDiag[0];
  }

  return undefined;
}

function evaluateTicTacToePosition(position) {
  return (
    scanCols(position)
    || scanRows(position)
    || scanMainDiag(position)
    || scanSecondaryDiag(position)
  );
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
