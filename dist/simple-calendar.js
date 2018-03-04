(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory(require("react"));
	else
		root["Calendar"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/add_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/add_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, amount) {
  var date = parse(dirtyDate)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "./node_modules/date-fns/are_ranges_overlapping/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/are_ranges_overlapping/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "./node_modules/date-fns/each_day/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/each_day/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ "./node_modules/date-fns/end_of_month/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_month/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "./node_modules/date-fns/end_of_week/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_week/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, options) {
  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(/*! ../get_day_of_year/index.js */ "./node_modules/date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ "./node_modules/date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var isValid = __webpack_require__(/*! ../is_valid/index.js */ "./node_modules/date-fns/is_valid/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, formatStr, options) {
  formatStr = formatStr || 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  options = options || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfYear = __webpack_require__(/*! ../start_of_year/index.js */ "./node_modules/date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "./node_modules/date-fns/is_after/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_after/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ "./node_modules/date-fns/is_before/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_before/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/is_equal/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_equal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ "./node_modules/date-fns/is_same_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_same_day/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "./node_modules/date-fns/is_same_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_same_month/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_valid/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (date) {
  if (isDate(date)) {
    return !isNaN(date)
  } else {
    throw new TypeError(toString.call(date) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "./node_modules/date-fns/is_weekend/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/is_weekend/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ "./node_modules/date-fns/is_within_range/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_within_range/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(/*! ../../_lib/build_formatting_tokens_reg_exp/index.js */ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/en/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(/*! ./build_distance_in_words_locale/index.js */ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__(/*! ./build_format_locale/index.js */ "./node_modules/date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, options) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  options = options || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_month/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_month/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, options) {
  var weekStartsOn = options ? (options.weekStartsOn || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_year/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/sub_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, amount) {
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./src/calendar/_lib/index.js":
/*!************************************!*\
  !*** ./src/calendar/_lib/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datePropType = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datePropType = exports.datePropType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.instanceOf(Date)]);

/***/ }),

/***/ "./src/calendar/calendar.jsx":
/*!***********************************!*\
  !*** ./src/calendar/calendar.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _month = __webpack_require__(/*! ./month */ "./src/calendar/month.jsx");

var _month2 = _interopRequireDefault(_month);

var _month_header = __webpack_require__(/*! ./month_header */ "./src/calendar/month_header.jsx");

var _month_header2 = _interopRequireDefault(_month_header);

var _notice = __webpack_require__(/*! ./notice */ "./src/calendar/notice.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

var _lib = __webpack_require__(/*! ./_lib */ "./src/calendar/_lib/index.js");

var _start_of_month = __webpack_require__(/*! date-fns/start_of_month */ "./node_modules/date-fns/start_of_month/index.js");

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _is_same_month = __webpack_require__(/*! date-fns/is_same_month */ "./node_modules/date-fns/is_same_month/index.js");

var _is_same_month2 = _interopRequireDefault(_is_same_month);

var _is_valid = __webpack_require__(/*! date-fns/is_valid */ "./node_modules/date-fns/is_valid/index.js");

var _is_valid2 = _interopRequireDefault(_is_valid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SINGLE_MODE = 'single';
var RANGE_MODE = 'range';

var isValid = function isValid(date) {
  try {
    return (0, _is_valid2.default)(date);
  } catch (e) {
    return false;
  }
};

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      activeMonth: _this._initialMonth(props),
      selection: null,
      shownNoticeType: null
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeMonth && !(0, _is_same_month2.default)(nextProps.activeMonth, this.props.activeMonth)) {
        this.setState({ activeMonth: (0, _start_of_month2.default)(nextProps.activeMonth) });
      }
    }
  }, {
    key: '_initialMonth',
    value: function _initialMonth(props) {
      var _ref = props || this.props,
          selected = _ref.selected,
          activeMonth = _ref.activeMonth,
          mode = _ref.mode,
          today = _ref.today;

      if (isValid(activeMonth)) {
        return activeMonth;
      } else {
        if (selected) {
          var selectionStart = mode === SINGLE_MODE ? selected : selected.start;
          if (isValid(selectionStart)) {
            return (0, _start_of_month2.default)(selectionStart);
          }
        }
      }
      return (0, _start_of_month2.default)(today || new Date());
    }
  }, {
    key: '_switchMonth',
    value: function _switchMonth(date) {
      var onMonthChange = this.props.onMonthChange;

      if (typeof onMonthChange === 'function') {
        onMonthChange(date);
      } else {
        this.setState({
          activeMonth: date
        });
      }
    }
  }, {
    key: '_activeMonth',
    value: function _activeMonth() {
      var _props = this.props,
          onMonthChange = _props.onMonthChange,
          activeMonth = _props.activeMonth;

      if (onMonthChange) {
        return activeMonth;
      } else {
        return this.state.activeMonth;
      }
    }
  }, {
    key: '_highlight',
    value: function _highlight() {
      var highlighted = this.props.highlighted;

      if (!highlighted) return { start: null, end: null };

      var start = highlighted.start,
          end = highlighted.end;


      if (isValid(start) && isValid(end)) {
        return { start: start, end: end };
      } else {
        return { start: null, end: null };
      }
    }
  }, {
    key: '_selection',
    value: function _selection() {
      var start = this._selectionStart();
      var end = this._selectionEnd();

      if (isValid(start) && isValid(end)) {
        return { start: start, end: end };
      } else {
        return { start: null, end: null };
      }
    }
  }, {
    key: '_selectionStart',
    value: function _selectionStart() {
      return this._selectionDate('start');
    }
  }, {
    key: '_selectionEnd',
    value: function _selectionEnd() {
      return this._selectionDate('end');
    }
  }, {
    key: '_selectionDate',
    value: function _selectionDate(dateType) {
      var _props2 = this.props,
          selected = _props2.selected,
          onSelectionProgress = _props2.onSelectionProgress;
      var selection = this.state.selection;


      switch (this.props.mode) {
        case SINGLE_MODE:
          return selected;

        case RANGE_MODE:
          if (!onSelectionProgress && selection) {
            return selection[dateType];
          } else {
            return selected && selected[dateType];
          }
      }
    }
  }, {
    key: '_selectionChanged',
    value: function _selectionChanged(selection) {
      var start = selection.start,
          end = selection.end,
          inProgress = selection.inProgress;
      var _props3 = this.props,
          mode = _props3.mode,
          onSelect = _props3.onSelect,
          onSelectionProgress = _props3.onSelectionProgress;


      if (onSelect && start && (mode !== RANGE_MODE || !inProgress)) {
        onSelect(mode === SINGLE_MODE ? start : { start: start, end: end });
      }

      if (mode === RANGE_MODE) {
        if (onSelectionProgress) {
          onSelectionProgress(selection);
        } else {
          this.setState({ selection: inProgress ? { start: start, end: end } : null });
        }
      }
    }
  }, {
    key: '_noticeChanged',
    value: function _noticeChanged(shownNoticeType) {
      this.setState({ shownNoticeType: shownNoticeType });
    }
  }, {
    key: '_today',
    value: function _today() {
      return this.props.today || new Date();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          blockClassName = _props4.blockClassName,
          disableDaysOfWeek = _props4.disableDaysOfWeek,
          headerNextArrow = _props4.headerNextArrow,
          headerNextTitle = _props4.headerNextTitle,
          headerPrevArrow = _props4.headerPrevArrow,
          headerPrevTitle = _props4.headerPrevTitle,
          maxDate = _props4.maxDate,
          minDate = _props4.minDate,
          minNumberOfWeeks = _props4.minNumberOfWeeks,
          mode = _props4.mode,
          onDayHover = _props4.onDayHover,
          disabledIntervals = _props4.disabledIntervals,
          rangeLimit = _props4.rangeLimit,
          weekStartsOn = _props4.weekStartsOn;

      var selection = this._selection();
      var highlight = this._highlight();
      var MonthHeaderComponent = this.props.MonthHeaderComponent || _month_header2.default;

      return _react2.default.createElement(
        'div',
        { className: blockClassName },
        this._renderNotice(),
        _react2.default.createElement(MonthHeaderComponent, {
          ref: 'header',
          minDate: minDate,
          maxDate: maxDate,
          headerPrevArrow: headerPrevArrow,
          headerPrevTitle: headerPrevTitle,
          headerNextArrow: headerNextArrow,
          headerNextTitle: headerNextTitle,
          activeMonth: this._activeMonth(),
          onMonthChange: this._switchMonth.bind(this),
          blockClassName: blockClassName
        }),
        _react2.default.createElement(_month2.default, {
          mode: mode,
          minDate: minDate,
          maxDate: maxDate,
          minNumberOfWeeks: minNumberOfWeeks,
          rangeLimit: rangeLimit,
          today: this._today(),
          ref: 'month',
          activeMonth: this._activeMonth(),
          selectedMin: selection.start,
          selectedMax: selection.end,
          disableDaysOfWeek: disableDaysOfWeek,
          onDayHover: onDayHover,
          highlightedStart: highlight.start,
          highlightedEnd: highlight.end,
          onChange: this._selectionChanged.bind(this),
          onNoticeChange: this._noticeChanged.bind(this),
          blockClassName: blockClassName,
          disabledIntervals: disabledIntervals,
          weekStartsOn: weekStartsOn
        })
      );
    }
  }, {
    key: '_renderNotice',
    value: function _renderNotice() {
      var shownNoticeType = this.state.shownNoticeType;
      var blockClassName = this.props.blockClassName;

      var NoticeComponent = this.props.NoticeComponent || _notice2.default;

      return shownNoticeType && _react2.default.createElement(NoticeComponent, { blockClassName: blockClassName, type: shownNoticeType });
    }
  }]);

  return Calendar;
}(_react2.default.Component);

Calendar.propTypes = {
  MonthHeaderComponent: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  NoticeComponent: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  activeMonth: _lib.datePropType,
  blockClassName: _propTypes2.default.string,
  disableDaysOfWeek: _propTypes2.default.bool,
  disabledIntervals: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _lib.datePropType.isRequired,
    end: _lib.datePropType.isRequired
  })),
  headerNextArrow: _propTypes2.default.element,
  headerNextTitle: _propTypes2.default.string,
  headerPrevArrow: _propTypes2.default.element,
  headerPrevTitle: _propTypes2.default.string,
  highlighted: _propTypes2.default.shape({
    start: _lib.datePropType.isRequired,
    end: _lib.datePropType.isRequired
  }),
  maxDate: _lib.datePropType,
  minDate: _lib.datePropType,
  minNumberOfWeeks: _propTypes2.default.number,
  mode: _propTypes2.default.oneOf([SINGLE_MODE, RANGE_MODE]),
  onDayHover: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onSelectionProgress: _propTypes2.default.func,
  rangeLimit: _propTypes2.default.number,
  selected: _propTypes2.default.oneOfType([_lib.datePropType, _propTypes2.default.shape({
    start: _lib.datePropType.isRequired,
    end: _lib.datePropType.isRequired,
    inProgress: _propTypes2.default.bool
  })]),
  today: _lib.datePropType,
  weekStartsOn: _propTypes2.default.oneOf(_consts.DAYS_IN_WEEK)
};
Calendar.defaultProps = {
  weekStartsOn: 1,
  mode: SINGLE_MODE,
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = Calendar;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/consts.js":
/*!********************************!*\
  !*** ./src/calendar/consts.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BLOCK_CLASS_NAME = exports.BLOCK_CLASS_NAME = 'calendar';
var NEXT_MONTH_TITLE = exports.NEXT_MONTH_TITLE = 'Next month';
var PREV_MONTH_TITLE = exports.PREV_MONTH_TITLE = 'Previous month';
var DAYS_IN_WEEK = exports.DAYS_IN_WEEK = [0, 1, 2, 3, 4, 5, 6];

/***/ }),

/***/ "./src/calendar/day.jsx":
/*!******************************!*\
  !*** ./src/calendar/day.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

var _lib = __webpack_require__(/*! ./_lib */ "./src/calendar/_lib/index.js");

var _format = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      var _props = this.props,
          date = _props.date,
          onClick = _props.onClick;

      if (onClick) {
        onClick(date);
      }
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(e) {
      e.preventDefault();
      var _props2 = this.props,
          date = _props2.date,
          onMouseMove = _props2.onMouseMove;

      if (onMouseMove) {
        onMouseMove(date);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          date = _props3.date,
          className = _props3.className,
          blockClassName = _props3.blockClassName;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(blockClassName + '-day', className),
          onClick: this._onClick.bind(this),
          onMouseMove: this._onMouseMove.bind(this)
        },
        (0, _format2.default)(date, 'D')
      );
    }
  }]);

  return Day;
}(_react2.default.Component);

Day.propTypes = {
  blockClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  date: _lib.datePropType.isRequired,
  onClick: _propTypes2.default.func,
  onMouseMove: _propTypes2.default.func,
  today: _lib.datePropType.isRequired
};
Day.defaultProps = {
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = Day;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/days_of_week.jsx":
/*!***************************************!*\
  !*** ./src/calendar/days_of_week.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

var DaysOfWeek = function (_React$Component) {
  _inherits(DaysOfWeek, _React$Component);

  function DaysOfWeek() {
    _classCallCheck(this, DaysOfWeek);

    return _possibleConstructorReturn(this, (DaysOfWeek.__proto__ || Object.getPrototypeOf(DaysOfWeek)).apply(this, arguments));
  }

  _createClass(DaysOfWeek, [{
    key: '_getDaysOfWeek',
    value: function _getDaysOfWeek(day) {
      return daysOfWeek.slice(day - 1).concat(daysOfWeek.slice(0, day - 1));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          blockClassName = _props.blockClassName,
          weekStartsOn = _props.weekStartsOn;

      var slicedDaysOfWeek = this._getDaysOfWeek(weekStartsOn);

      return _react2.default.createElement(
        'div',
        { className: blockClassName + '-days_of_week' },
        slicedDaysOfWeek.map(function (day, index) {
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(blockClassName + '-days_of_week_day', {
                'is-weekend': index > 4 // 4 is an index of Friday
              }),
              key: day
            },
            day
          );
        })
      );
    }
  }]);

  return DaysOfWeek;
}(_react2.default.Component);

DaysOfWeek.propTypes = {
  blockClassName: _propTypes2.default.string,
  weekStartsOn: _propTypes2.default.oneOf(_consts.DAYS_IN_WEEK)
};
DaysOfWeek.defaultProps = {
  weekStartsOn: 1,
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = DaysOfWeek;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/header_button.jsx":
/*!****************************************!*\
  !*** ./src/calendar/header_button.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderButton = function (_React$Component) {
  _inherits(HeaderButton, _React$Component);

  function HeaderButton() {
    _classCallCheck(this, HeaderButton);

    return _possibleConstructorReturn(this, (HeaderButton.__proto__ || Object.getPrototypeOf(HeaderButton)).apply(this, arguments));
  }

  _createClass(HeaderButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrow = _props.arrow,
          blockClassName = _props.blockClassName,
          enabled = _props.enabled,
          type = _props.type,
          title = _props.title,
          onClick = _props.onClick;


      return _react2.default.createElement(
        'button',
        {
          className: (0, _classnames2.default)(blockClassName + '-header_button', 'is-' + type, {
            'is-disabled': !enabled
          }),
          type: 'button',
          disabled: !enabled,
          title: title,
          onClick: onClick
        },
        arrow
      );
    }
  }]);

  return HeaderButton;
}(_react2.default.Component);

HeaderButton.propTypes = {
  arrow: _propTypes2.default.element,
  blockClassName: _propTypes2.default.string,
  enabled: _propTypes2.default.bool,
  offset: _propTypes2.default.number,
  onClick: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['prev', 'next']).isRequired
};
HeaderButton.defaultProps = {
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = HeaderButton;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/month.jsx":
/*!********************************!*\
  !*** ./src/calendar/month.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _week = __webpack_require__(/*! ./week */ "./src/calendar/week.jsx");

var _week2 = _interopRequireDefault(_week);

var _days_of_week = __webpack_require__(/*! ./days_of_week */ "./src/calendar/days_of_week.jsx");

var _days_of_week2 = _interopRequireDefault(_days_of_week);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

var _lib = __webpack_require__(/*! ./_lib */ "./src/calendar/_lib/index.js");

var _start_of_week = __webpack_require__(/*! date-fns/start_of_week */ "./node_modules/date-fns/start_of_week/index.js");

var _start_of_week2 = _interopRequireDefault(_start_of_week);

var _end_of_week = __webpack_require__(/*! date-fns/end_of_week */ "./node_modules/date-fns/end_of_week/index.js");

var _end_of_week2 = _interopRequireDefault(_end_of_week);

var _are_ranges_overlapping = __webpack_require__(/*! date-fns/are_ranges_overlapping */ "./node_modules/date-fns/are_ranges_overlapping/index.js");

var _are_ranges_overlapping2 = _interopRequireDefault(_are_ranges_overlapping);

var _start_of_month = __webpack_require__(/*! date-fns/start_of_month */ "./node_modules/date-fns/start_of_month/index.js");

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _end_of_month = __webpack_require__(/*! date-fns/end_of_month */ "./node_modules/date-fns/end_of_month/index.js");

var _end_of_month2 = _interopRequireDefault(_end_of_month);

var _is_before = __webpack_require__(/*! date-fns/is_before */ "./node_modules/date-fns/is_before/index.js");

var _is_before2 = _interopRequireDefault(_is_before);

var _is_equal = __webpack_require__(/*! date-fns/is_equal */ "./node_modules/date-fns/is_equal/index.js");

var _is_equal2 = _interopRequireDefault(_is_equal);

var _add_days = __webpack_require__(/*! date-fns/add_days */ "./node_modules/date-fns/add_days/index.js");

var _add_days2 = _interopRequireDefault(_add_days);

var _sub_days = __webpack_require__(/*! date-fns/sub_days */ "./node_modules/date-fns/sub_days/index.js");

var _sub_days2 = _interopRequireDefault(_sub_days);

var _is_same_day = __webpack_require__(/*! date-fns/is_same_day */ "./node_modules/date-fns/is_same_day/index.js");

var _is_same_day2 = _interopRequireDefault(_is_same_day);

var _difference_in_calendar_days = __webpack_require__(/*! date-fns/difference_in_calendar_days */ "./node_modules/date-fns/difference_in_calendar_days/index.js");

var _difference_in_calendar_days2 = _interopRequireDefault(_difference_in_calendar_days);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SINGLE_MODE = 'single';
var RANGE_MODE = 'range';

var Month = function (_React$Component) {
  _inherits(Month, _React$Component);

  function Month() {
    _classCallCheck(this, Month);

    return _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).apply(this, arguments));
  }

  _createClass(Month, [{
    key: '_pushUpdate',
    value: function _pushUpdate() {
      var _props = this.props,
          onChange = _props.onChange,
          rangeLimit = _props.rangeLimit;

      var start = void 0,
          end = void 0;

      if (this._selectionStart && this._selectionEnd) {
        if ((0, _is_before2.default)(this._selectionStart, this._selectionEnd)) {
          start = this._selectionStart;
          end = this._selectionEnd;
        } else {
          start = this._selectionEnd;
          end = this._selectionStart;
        }

        if (rangeLimit && rangeLimit < (0, _difference_in_calendar_days2.default)(end, start)) {
          end = (0, _add_days2.default)(start, rangeLimit);
        }
      }

      return onChange({
        start: start,
        end: end,
        inProgress: this._selectionInProgress
      });
    }
  }, {
    key: '_pushNoticeUpdate',
    value: function _pushNoticeUpdate(noticeType) {
      var onNoticeChange = this.props.onNoticeChange;

      return onNoticeChange(noticeType);
    }
  }, {
    key: '_getDisabledRange',
    value: function _getDisabledRange(interval) {
      var start = interval.start,
          end = interval.end;
      var disabledIntervals = this.props.disabledIntervals;


      if (!disabledIntervals) return true;

      for (var i = 0; i < disabledIntervals.length; i++) {
        var _disabledIntervals$i = disabledIntervals[i],
            intervalStart = _disabledIntervals$i.start,
            intervalEnd = _disabledIntervals$i.end;


        if ((0, _are_ranges_overlapping2.default)(start, end, intervalStart, intervalEnd)) {
          return;
        }
      }

      return true;
    }
  }, {
    key: '_onDayMouseMove',
    value: function _onDayMouseMove(date) {
      var onDayHover = this.props.onDayHover;

      if (onDayHover) {
        onDayHover(date);
      }

      if (!this._selectionInProgress) return;

      var rangeLimit = this.props.rangeLimit;

      var dateLimit = (0, _sub_days2.default)(this._selectionStart, rangeLimit);

      var isDisabledWithin = this._getDisabledRange({
        start: (0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date,
        end: !(0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date
      });

      if (!isDisabledWithin) return;

      if (!(0, _is_equal2.default)(date, this._selectionEnd)) {
        if (!rangeLimit || rangeLimit && !(0, _is_before2.default)(date, dateLimit)) {
          this._selectionEnd = date;
          this._pushUpdate();
        }
      }
    }
  }, {
    key: '_onDayClick',
    value: function _onDayClick(date) {
      var mode = this.props.mode;


      if (mode === RANGE_MODE) {
        if (this._selectionInProgress) {
          var isDisabledWithin = this._getDisabledRange({
            start: (0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date,
            end: !(0, _is_before2.default)(this._selectionStart, date) ? this._selectionStart : date
          });

          if (!isDisabledWithin) {
            this._selectionInProgress = false;
            this._selectionStart = null;
            this._selectionEnd = null;
            this._pushUpdate();
            this._pushNoticeUpdate('overlapping_with_disabled');
            return;
          }

          this._selectionInProgress = false;
          this._selectionEnd = date;
        } else {
          this._selectionInProgress = true;
          this._selectionStart = date;
          this._selectionEnd = date;
        }
      } else {
        this._selectionInProgress = false;
        this._selectionStart = date;
        this._selectionEnd = date;
      }

      this._pushUpdate();
      this._pushNoticeUpdate(null);
    }
  }, {
    key: '_onDisabledDayClick',
    value: function _onDisabledDayClick() {
      var onNoticeChange = this.props.onNoticeChange;

      onNoticeChange('disabled_day_click');
    }
  }, {
    key: '_getMinDate',
    value: function _getMinDate() {
      var _props2 = this.props,
          rangeLimit = _props2.rangeLimit,
          minDate = _props2.minDate;

      var calcStartDate = (0, _sub_days2.default)(this._selectionStart, rangeLimit);

      if (minDate) {
        var isCalcStartDayAfter = (0, _is_before2.default)(minDate, calcStartDate);
        return isCalcStartDayAfter ? calcStartDate : minDate;
      } else {
        return calcStartDate;
      }
    }
  }, {
    key: '_getMaxDate',
    value: function _getMaxDate() {
      var _props3 = this.props,
          rangeLimit = _props3.rangeLimit,
          maxDate = _props3.maxDate;

      var calcEndDate = (0, _add_days2.default)(this._selectionStart, rangeLimit);

      if (maxDate) {
        var isCalcEndDayBefore = (0, _is_before2.default)(calcEndDate, maxDate);
        return isCalcEndDayBefore ? calcEndDate : maxDate;
      } else {
        return calcEndDate;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var blockClassName = this.props.blockClassName;

      return _react2.default.createElement(
        'div',
        { className: blockClassName + '-month' },
        this._renderWeekDays(),
        this._renderWeeks()
      );
    }
  }, {
    key: '_renderWeekDays',
    value: function _renderWeekDays() {
      var _props4 = this.props,
          blockClassName = _props4.blockClassName,
          disableDaysOfWeek = _props4.disableDaysOfWeek,
          weekStartsOn = _props4.weekStartsOn;

      if (disableDaysOfWeek) return null;

      return _react2.default.createElement(_days_of_week2.default, { blockClassName: blockClassName, weekStartsOn: weekStartsOn });
    }
  }, {
    key: '_renderWeeks',
    value: function _renderWeeks() {
      var _this2 = this;

      var _props5 = this.props,
          selectedMin = _props5.selectedMin,
          selectedMax = _props5.selectedMax,
          highlightedStart = _props5.highlightedStart,
          highlightedEnd = _props5.highlightedEnd,
          disabledIntervals = _props5.disabledIntervals,
          activeMonth = _props5.activeMonth,
          today = _props5.today,
          blockClassName = _props5.blockClassName,
          minNumberOfWeeks = _props5.minNumberOfWeeks,
          rangeLimit = _props5.rangeLimit,
          onDayHover = _props5.onDayHover,
          weekStartsOn = _props5.weekStartsOn;

      var weeks = [];
      var _props6 = this.props,
          minDate = _props6.minDate,
          maxDate = _props6.maxDate;

      var date = (0, _start_of_week2.default)((0, _start_of_month2.default)(activeMonth), { weekStartsOn: weekStartsOn });
      var end = (0, _end_of_week2.default)((0, _end_of_month2.default)(activeMonth), { weekStartsOn: weekStartsOn });

      if (this._selectionInProgress && rangeLimit) {
        minDate = this._getMinDate();
        maxDate = this._getMaxDate();
      }

      while (typeof minNumberOfWeeks == 'number' && minNumberOfWeeks > weeks.length || (0, _is_before2.default)(date, end) || (0, _is_same_day2.default)(date, end)) {
        weeks.push(date);
        date = (0, _add_days2.default)(date, 7);
      }

      return weeks.map(function (week) {
        return _react2.default.createElement(_week2.default, {
          key: week.getTime(),
          date: week,
          minDate: minDate,
          maxDate: maxDate,
          selectedMin: selectedMin,
          selectedMax: selectedMax,
          highlightedStart: highlightedStart,
          highlightedEnd: highlightedEnd,
          disabledIntervals: disabledIntervals,
          activeMonth: activeMonth,
          onDayHover: onDayHover,
          onDayClick: _this2._onDayClick.bind(_this2),
          onDisabledDayClick: _this2._onDisabledDayClick.bind(_this2),
          onDayMouseMove: _this2._onDayMouseMove.bind(_this2),
          today: today,
          blockClassName: blockClassName,
          weekStartsOn: weekStartsOn
        });
      });
    }
  }]);

  return Month;
}(_react2.default.Component);

Month.propTypes = {
  activeMonth: _lib.datePropType.isRequired,
  blockClassName: _propTypes2.default.string,
  disableDaysOfWeek: _propTypes2.default.bool,
  disabledIntervals: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _lib.datePropType.isRequired,
    end: _lib.datePropType.isRequired
  })),
  highlightedEnd: _lib.datePropType,
  highlightedStart: _lib.datePropType,
  maxDate: _lib.datePropType,
  minDate: _lib.datePropType,
  minNumberOfWeeks: _propTypes2.default.number,
  mode: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onDayHover: _propTypes2.default.func,
  onNoticeChange: _propTypes2.default.func.isRequired,
  rangeLimit: _propTypes2.default.number,
  selectedMax: _lib.datePropType,
  selectedMin: _lib.datePropType,
  today: _lib.datePropType.isRequired,
  weekStartsOn: _propTypes2.default.oneOf(_consts.DAYS_IN_WEEK)
};
Month.defaultProps = {
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = Month;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/month_header.jsx":
/*!***************************************!*\
  !*** ./src/calendar/month_header.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header_button = __webpack_require__(/*! ./header_button */ "./src/calendar/header_button.jsx");

var _header_button2 = _interopRequireDefault(_header_button);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

var _lib = __webpack_require__(/*! ./_lib */ "./src/calendar/_lib/index.js");

var _add_months = __webpack_require__(/*! date-fns/add_months */ "./node_modules/date-fns/add_months/index.js");

var _add_months2 = _interopRequireDefault(_add_months);

var _is_before = __webpack_require__(/*! date-fns/is_before */ "./node_modules/date-fns/is_before/index.js");

var _is_before2 = _interopRequireDefault(_is_before);

var _is_after = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");

var _is_after2 = _interopRequireDefault(_is_after);

var _start_of_month = __webpack_require__(/*! date-fns/start_of_month */ "./node_modules/date-fns/start_of_month/index.js");

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _format = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthHeader = function (_React$Component) {
  _inherits(MonthHeader, _React$Component);

  function MonthHeader() {
    _classCallCheck(this, MonthHeader);

    return _possibleConstructorReturn(this, (MonthHeader.__proto__ || Object.getPrototypeOf(MonthHeader)).apply(this, arguments));
  }

  _createClass(MonthHeader, [{
    key: '_switchMonth',
    value: function _switchMonth(offset) {
      var _props = this.props,
          onMonthChange = _props.onMonthChange,
          activeMonth = _props.activeMonth;

      onMonthChange((0, _add_months2.default)(activeMonth, parseInt(offset)));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          activeMonth = _props2.activeMonth,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          blockClassName = _props2.blockClassName,
          headerNextArrow = _props2.headerNextArrow,
          headerNextTitle = _props2.headerNextTitle,
          headerPrevArrow = _props2.headerPrevArrow,
          headerPrevTitle = _props2.headerPrevTitle;


      var prevEnabled = minDate ? (0, _is_before2.default)((0, _start_of_month2.default)(minDate), (0, _start_of_month2.default)(activeMonth)) : true;
      var nextEnabled = maxDate ? (0, _is_after2.default)((0, _start_of_month2.default)(maxDate), (0, _start_of_month2.default)(activeMonth)) : true;

      return _react2.default.createElement(
        'div',
        { className: blockClassName + '-month_header' },
        _react2.default.createElement(_header_button2.default, {
          type: 'prev',
          arrow: headerPrevArrow,
          title: headerPrevTitle,
          enabled: prevEnabled,
          onClick: this._switchMonth.bind(this, -1),
          blockClassName: blockClassName
        }),
        _react2.default.createElement(
          'div',
          { className: blockClassName + '-month_header_title' },
          (0, _format2.default)(activeMonth, 'MMMM YYYY')
        ),
        _react2.default.createElement(_header_button2.default, {
          type: 'next',
          arrow: headerNextArrow,
          title: headerNextTitle,
          enabled: nextEnabled,
          onClick: this._switchMonth.bind(this, 1),
          blockClassName: blockClassName
        })
      );
    }
  }]);

  return MonthHeader;
}(_react2.default.Component);

MonthHeader.propTypes = {
  activeMonth: _lib.datePropType.isRequired,
  blockClassName: _propTypes2.default.string,
  headerNextArrow: _propTypes2.default.element,
  headerNextTitle: _propTypes2.default.string,
  headerPrevArrow: _propTypes2.default.element,
  headerPrevTitle: _propTypes2.default.string,
  maxDate: _lib.datePropType,
  minDate: _lib.datePropType,
  onMonthChange: _propTypes2.default.func.isRequired
};
MonthHeader.defaultProps = {
  blockClassName: _consts.BLOCK_CLASS_NAME,
  headerNextTitle: _consts.NEXT_MONTH_TITLE,
  headerPrevTitle: _consts.PREV_MONTH_TITLE
};
exports.default = MonthHeader;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/notice.jsx":
/*!*********************************!*\
  !*** ./src/calendar/notice.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notice = function (_React$Component) {
  _inherits(Notice, _React$Component);

  function Notice() {
    _classCallCheck(this, Notice);

    return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
  }

  _createClass(Notice, [{
    key: 'render',
    value: function render() {
      var blockClassName = this.props.blockClassName;

      return _react2.default.createElement(
        'div',
        { className: blockClassName + '-notice' },
        this._renderMessage()
      );
    }
  }, {
    key: '_renderMessage',
    value: function _renderMessage() {
      switch (this.props.type) {
        case 'overlapping_with_disabled':
        case 'disabled_day_click':
          return 'Selected range must not overlap with disabled dates.';
      }
    }
  }]);

  return Notice;
}(_react2.default.Component);

Notice.propTypes = {
  blockClassName: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['overlapping_with_disabled', 'disabled_day_click']).isRequired
};
Notice.defaultProps = {
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = Notice;
module.exports = exports['default'];

/***/ }),

/***/ "./src/calendar/week.jsx":
/*!*******************************!*\
  !*** ./src/calendar/week.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _day = __webpack_require__(/*! ./day */ "./src/calendar/day.jsx");

var _day2 = _interopRequireDefault(_day);

var _consts = __webpack_require__(/*! ./consts */ "./src/calendar/consts.js");

var _lib = __webpack_require__(/*! ./_lib */ "./src/calendar/_lib/index.js");

var _each_day = __webpack_require__(/*! date-fns/each_day */ "./node_modules/date-fns/each_day/index.js");

var _each_day2 = _interopRequireDefault(_each_day);

var _start_of_day = __webpack_require__(/*! date-fns/start_of_day */ "./node_modules/date-fns/start_of_day/index.js");

var _start_of_day2 = _interopRequireDefault(_start_of_day);

var _start_of_week = __webpack_require__(/*! date-fns/start_of_week */ "./node_modules/date-fns/start_of_week/index.js");

var _start_of_week2 = _interopRequireDefault(_start_of_week);

var _end_of_week = __webpack_require__(/*! date-fns/end_of_week */ "./node_modules/date-fns/end_of_week/index.js");

var _end_of_week2 = _interopRequireDefault(_end_of_week);

var _is_within_range = __webpack_require__(/*! date-fns/is_within_range */ "./node_modules/date-fns/is_within_range/index.js");

var _is_within_range2 = _interopRequireDefault(_is_within_range);

var _format = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");

var _format2 = _interopRequireDefault(_format);

var _is_before = __webpack_require__(/*! date-fns/is_before */ "./node_modules/date-fns/is_before/index.js");

var _is_before2 = _interopRequireDefault(_is_before);

var _is_after = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");

var _is_after2 = _interopRequireDefault(_is_after);

var _is_equal = __webpack_require__(/*! date-fns/is_equal */ "./node_modules/date-fns/is_equal/index.js");

var _is_equal2 = _interopRequireDefault(_is_equal);

var _is_weekend = __webpack_require__(/*! date-fns/is_weekend */ "./node_modules/date-fns/is_weekend/index.js");

var _is_weekend2 = _interopRequireDefault(_is_weekend);

var _is_same_day = __webpack_require__(/*! date-fns/is_same_day */ "./node_modules/date-fns/is_same_day/index.js");

var _is_same_day2 = _interopRequireDefault(_is_same_day);

var _is_same_month = __webpack_require__(/*! date-fns/is_same_month */ "./node_modules/date-fns/is_same_month/index.js");

var _is_same_month2 = _interopRequireDefault(_is_same_month);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Week = function (_React$Component) {
  _inherits(Week, _React$Component);

  function Week() {
    _classCallCheck(this, Week);

    return _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).apply(this, arguments));
  }

  _createClass(Week, [{
    key: '_dateSelectable',
    value: function _dateSelectable(date) {
      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate;


      if (this._dateDisabled(date)) {
        return false;
      }

      if (minDate && maxDate) {
        return (0, _is_within_range2.default)(date, minDate, maxDate);
      } else if (minDate && !maxDate) {
        return (0, _is_after2.default)(date, minDate) || (0, _is_equal2.default)(date, minDate);
      } else if (maxDate && !minDate) {
        return (0, _is_before2.default)(date, maxDate) || (0, _is_equal2.default)(date, maxDate);
      } else {
        return true;
      }
    }
  }, {
    key: '_dateSelected',
    value: function _dateSelected(date) {
      var _props2 = this.props,
          selectedMin = _props2.selectedMin,
          selectedMax = _props2.selectedMax;

      return selectedMin && selectedMax && (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(selectedMin), (0, _start_of_day2.default)(selectedMax));
    }
  }, {
    key: '_dateHighlighted',
    value: function _dateHighlighted(date) {
      var _props3 = this.props,
          highlightedStart = _props3.highlightedStart,
          highlightedEnd = _props3.highlightedEnd;

      if (!highlightedStart || !highlightedEnd) return false;

      return (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(highlightedStart), (0, _start_of_day2.default)(highlightedEnd));
    }
  }, {
    key: '_dateDisabled',
    value: function _dateDisabled(date) {
      var dateDisabled = void 0;
      var disabledIntervals = this.props.disabledIntervals;

      if (!disabledIntervals) return false;

      for (var i = 0; i < disabledIntervals.length; i++) {
        var _disabledIntervals$i = disabledIntervals[i],
            start = _disabledIntervals$i.start,
            end = _disabledIntervals$i.end;


        dateDisabled = (0, _is_within_range2.default)((0, _start_of_day2.default)(date), (0, _start_of_day2.default)(start), (0, _start_of_day2.default)(end));

        if (dateDisabled) {
          return dateDisabled;
        }
      }

      return false;
    }
  }, {
    key: '_dateClasses',
    value: function _dateClasses(date) {
      var _classnames;

      var _props4 = this.props,
          today = _props4.today,
          activeMonth = _props4.activeMonth,
          selectedMax = _props4.selectedMax,
          selectedMin = _props4.selectedMin;


      return (0, _classnames3.default)((_classnames = {
        'is-selected': this._dateSelected(date),
        'is-highlighted': this._dateHighlighted(date),
        'is-disabled': this._dateDisabled(date),
        'is-today': (0, _is_same_day2.default)(today, date),
        'is-current_month': (0, _is_same_month2.default)(date, activeMonth),
        'is-start_selection': selectedMin && (0, _is_same_day2.default)(selectedMin, date),
        'is-end_selection': selectedMax && (0, _is_same_day2.default)(selectedMax, date),
        'is-prev_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_before2.default)(date, activeMonth),
        'is-next_month': date.getMonth() !== activeMonth.getMonth() && (0, _is_after2.default)(date, activeMonth)
      }, _defineProperty(_classnames, (0, _is_weekend2.default)(date) ? 'is-weekend' : 'is-working_day', true), _defineProperty(_classnames, this._dateSelectable(date) ? 'is-selectable' : 'is-not_selectable', true), _classnames));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.blockClassName + '-week' },
        this._renderDays()
      );
    }
  }, {
    key: '_renderDays',
    value: function _renderDays() {
      var _this2 = this;

      var _props5 = this.props,
          date = _props5.date,
          today = _props5.today,
          onDayClick = _props5.onDayClick,
          onDisabledDayClick = _props5.onDisabledDayClick,
          onDayMouseMove = _props5.onDayMouseMove,
          blockClassName = _props5.blockClassName,
          weekStartsOn = _props5.weekStartsOn;

      var start = (0, _start_of_week2.default)(date, { weekStartsOn: weekStartsOn });
      var end = (0, _end_of_week2.default)(date, { weekStartsOn: weekStartsOn });
      return (0, _each_day2.default)(start, end).map(function (day) {
        var data = _this2.props.data[(0, _format2.default)(day, 'YYYY-MM-DD')];
        var selectable = _this2._dateSelectable(day);
        var disabled = _this2._dateDisabled(day);

        var onClick = void 0;
        if (selectable) {
          onClick = onDayClick;
        } else if (disabled) {
          onClick = onDisabledDayClick;
        }

        return _react2.default.createElement(_day2.default, {
          blockClassName: blockClassName,
          key: day.getTime(),
          date: day,
          data: data,
          className: _this2._dateClasses(day, data),
          today: today,
          onClick: onClick,
          onMouseMove: selectable ? onDayMouseMove : null
        });
      });
    }
  }]);

  return Week;
}(_react2.default.Component);

Week.propTypes = {
  activeMonth: _lib.datePropType.isRequired,
  blockClassName: _propTypes2.default.string,
  data: _propTypes2.default.object,
  date: _lib.datePropType.isRequired,
  disabledIntervals: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _lib.datePropType.isRequired,
    end: _lib.datePropType.isRequired
  })),
  highlightedEnd: _lib.datePropType,
  highlightedStart: _lib.datePropType,
  maxDate: _lib.datePropType,
  minDate: _lib.datePropType,
  onDayClick: _propTypes2.default.func.isRequired,
  onDayMouseMove: _propTypes2.default.func.isRequired,
  onDisabledDayClick: _propTypes2.default.func.isRequired,
  selectedMax: _lib.datePropType,
  selectedMin: _lib.datePropType,
  today: _lib.datePropType.isRequired,
  weekStartsOn: _propTypes2.default.oneOf(_consts.DAYS_IN_WEEK)
};
Week.defaultProps = {
  data: {},
  blockClassName: _consts.BLOCK_CLASS_NAME
};
exports.default = Week;
module.exports = exports['default'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calendar = __webpack_require__(/*! ./calendar/calendar */ "./src/calendar/calendar.jsx");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_calendar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=simple-calendar.js.map