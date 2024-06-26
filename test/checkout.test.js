"use strict";
const { Checkout } = require('../src/checkout');
const { products, pricingRules } = require('../src/checkout');
test('Scenario 1: atv, atv, atv, vga', () => {
    const co = new Checkout(pricingRules);
    co.scan(products[2]);
    co.scan(products[2]);
    co.scan(products[2]);
    co.scan(products[3]);
    expect(co.total()).toBe(249.00);
});
test('Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd', () => {
    const co = new Checkout(pricingRules);
    co.scan(products[2]);
    co.scan(products[0]);
    co.scan(products[0]);
    co.scan(products[2]);
    co.scan(products[0]);
    co.scan(products[0]);
    co.scan(products[0]);
    expect(co.total()).toBe(2718.95);
});
