"use strict";

var _ = require(".");

describe('Simple React Calendar - Date helpers', function () {
  describe('#getISODate', function () {
    expect((0, _.getISODate)(new Date(2020, 1, 9))).toBe('2020-02-09');
  });
  describe('#getDayFormatted', function () {
    expect((0, _.getDayFormatted)(new Date(2020, 1, 9))).toBe('9');
  });
});