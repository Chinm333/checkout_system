import { Checkout } from "../src/Checkout";
import { products } from "../src/data/products";
import { ThreeForTwoAppleTV } from "../src/pricingRules/ThreeForTwoAppleTV";
import { BulkDiscountSuperIPad } from "../src/pricingRules/BulkDiscountSuperIPad";

describe('Checkout system', () => {
    it('Case1:SKUs Scanned: atv, atv, atv, vga Total expected: $249.00', () => {
        const co = new Checkout([new ThreeForTwoAppleTV()]);
        co.scan(products.find(p => p.sku === 'atv')!);
        co.scan(products.find(p => p.sku === 'atv')!);
        co.scan(products.find(p => p.sku === 'atv')!);
        co.scan(products.find(p => p.sku === 'vga')!);
        expect(co.total()).toBe(249.00);
    });

    it('CustomCase1:SKUs Scanned: ipd, ipd, ipd, ipd, ipd, atv Total expected: $2609.45', () => {
        const co = new Checkout([new BulkDiscountSuperIPad()]);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'atv')!);
        expect(co.total()).toBe(2609.45);
    });

    it('Case 2:SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95', () => {
        const co = new Checkout([new ThreeForTwoAppleTV(), new BulkDiscountSuperIPad()]);
        co.scan(products.find(p => p.sku === 'atv')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'atv')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        co.scan(products.find(p => p.sku === 'ipd')!);
        expect(co.total()).toBe(2718.95);
    });
});