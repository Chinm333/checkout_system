"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingRule = void 0;
class PricingRule {
    constructor(sku, discountType, discountValue) {
        this.sku = sku;
        this.discountType = discountType;
        this.discountValue = discountValue;
    }
}
exports.PricingRule = PricingRule;
