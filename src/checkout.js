"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingRules = exports.products = exports.Checkout = void 0;
const product_1 = require("./product");
const pricingRule_1 = require("./pricingRule");
class Checkout {
    constructor(pricingRules) {
        this.cart = {};
        this.pricingRules = pricingRules;
    }
    scan(item) {
        if (!this.cart[item.sku]) {
            this.cart[item.sku] = 0;
        }
        this.cart[item.sku]++;
    }
    total() {
        let total = 0;
        for (const sku in this.cart) {
            const quantity = this.cart[sku];
            const product = products.find(p => p.sku === sku);
            const pricingRule = this.pricingRules.find(rule => rule.sku === sku);
            if (product) {
                if (pricingRule) {
                    if (pricingRule.discountType === 'bulk' && quantity > pricingRule.discountValue.threshold) {
                        total += pricingRule.discountValue.price * quantity;
                    }
                    else if (pricingRule.discountType === 'bundle' && quantity >= pricingRule.discountValue.threshold) {
                        const discountedQuantity = Math.floor(quantity / pricingRule.discountValue.threshold) * (pricingRule.discountValue.threshold - 1);
                        const fullPriceQuantity = quantity % pricingRule.discountValue.threshold;
                        total += product.price * (discountedQuantity + fullPriceQuantity);
                    }
                    else {
                        total += product.price * quantity;
                    }
                }
                else {
                    total += product.price * quantity;
                }
            }
        }
        return total;
    }
}
exports.Checkout = Checkout;
const products = [
    new product_1.Product('ipd', 'Super iPad', 549.99),
    new product_1.Product('mbp', 'MacBook Pro', 1399.99),
    new product_1.Product('atv', 'Apple TV', 109.50),
    new product_1.Product('vga', 'VGA adapter', 30.00)
];
exports.products = products;
const pricingRules = [
    new pricingRule_1.PricingRule('atv', 'bundle', { threshold: 3 }),
    new pricingRule_1.PricingRule('ipd', 'bulk', { threshold: 4, price: 499.99 })
];
exports.pricingRules = pricingRules;
