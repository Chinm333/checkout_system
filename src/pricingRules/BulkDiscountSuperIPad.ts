import { PricingRule } from "../interfaces/PricingRule";
import { Product } from "../interfaces/Product";

export class BulkDiscountSuperIPad implements PricingRule {
    apply(items: Product[]): number {
        const ipads = items.filter(item => item.sku === 'ipd');
        const originalPrice = 549.99;
        const discountedPrice = 499.99;

        if (ipads.length > 4) {
            const discount = (originalPrice - discountedPrice) * ipads.length;
            return discount;
        }
        return 0;
    }
}