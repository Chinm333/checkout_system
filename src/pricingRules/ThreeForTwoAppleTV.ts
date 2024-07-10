import { PricingRule } from "../interfaces/PricingRule";
import { Product } from "../interfaces/Product";

export class ThreeForTwoAppleTV implements PricingRule {
    apply(items: Product[]): number {
        const atvs = items.filter(item => item.sku === 'atv');
        const discount = Math.floor(atvs.length / 3) * atvs[0].price;
        return discount;
    }
}