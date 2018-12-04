'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');
var chai = require('chai');
var expect = chai.expect;

module.exports = function() {
  this.Given(/^I open the Dream Products website$/, function(next) {
    this.driver.get('http://www.dreamproducts.com/');
    next();
  });

  this.Given(/^I click on the reflektion serach bar$/, function() {
    return this.driver
      .findElement(webdriver.By.id('search'))
      .then(function(element) {
        return element.click().then(() => {});
      });
  });

  this.When(/^I enter the keyword "([^"]*)" into the search bar$/, function(keyword) {
    return this.driver
      .findElement(webdriver.By.id('search'))
      .then(function(element) {
        return element.sendKeys(keyword);
      });
  });

  this.Then(/^I see the reflektion search container$/, function() {
    let _self = this;
    this.driver.sleep(1000).then(() => {
      this.driver
        .findElement(webdriver.By.className('rfk_search_container'))
        .then(() => {});
    });
  });

  this.When(/^I click on the suggetsion "([^"]*)"$/, function(string) {
    this.driver
      .findElement(webdriver.By.css('li [data-text="sock"] a'))
      .then(function(element) {
        element.click();
      });
  });

  this.Then(/^I am navigated to the search page of "([^"]*)"$/, function(keyword) {
    return this.driver.getCurrentUrl().then(url => {
      expect(url).to.contain(keyword);
    });
  });
};
