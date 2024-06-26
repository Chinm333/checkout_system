import { Product } from './product';
import { PricingRule } from './pricingRule';

export class Checkout {
    private cart: { [sku: string]: number } = {};
    private pricingRules: PricingRule[];

    constructor(pricingRules: PricingRule[]) {
        this.pricingRules = pricingRules;
    }

    scan(item: Product): void {
        if (!this.cart[item.sku]) {
            this.cart[item.sku] = 0;
        }
        this.cart[item.sku]++;
    }

    total(): number {
        let total = 0;

        for (const sku in this.cart) {
            const quantity = this.cart[sku];
            const product = products.find(p => p.sku === sku);
            const pricingRule = this.pricingRules.find(rule => rule.sku === sku);

            if (product) {
                if (pricingRule) {
                    if (pricingRule.discountType === 'bulk' && quantity > pricingRule.discountValue.threshold) {
                        total += pricingRule.discountValue.price * quantity;
                    } else if (pricingRule.discountType === 'bundle' && quantity >= pricingRule.discountValue.threshold) {
                        const discountedQuantity = Math.floor(quantity / pricingRule.discountValue.threshold) * (pricingRule.discountValue.threshold - 1);
                        const fullPriceQuantity = quantity % pricingRule.discountValue.threshold;
                        total += product.price * (discountedQuantity + fullPriceQuantity);
                    } else {
                        total += product.price * quantity;
                    }
                } else {
                    total += product.price * quantity;
                }
            }
        }

        return total;
    }
}

const products = [
    new Product('ipd', 'Super iPad', 549.99),
    new Product('mbp', 'MacBook Pro', 1399.99),
    new Product('atv', 'Apple TV', 109.50),
    new Product('vga', 'VGA adapter', 30.00)
];

const pricingRules = [
    new PricingRule('atv', 'bundle', { threshold: 3 }),
    new PricingRule('ipd', 'bulk', { threshold: 4, price: 499.99 })
];

export { products, pricingRules };
