"use strict";

var assert = require("cucumber-assert");
var webdriver = require("selenium-webdriver");
var chai = require("chai");
var expect = chai.expect;

module.exports = function() {
  this.Given(/^I click on the search icon$/, function() {
    return this.driver
      .findElement(webdriver.By.css(".skip-search.dpi-mobile"))
      .then(function(element) {
        element.click();
      });
  });
};
