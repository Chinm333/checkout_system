import { Checkout } from './src/Checkout';
import { products } from './src/data/products';
import { ThreeForTwoAppleTV } from './src/pricingRules/ThreeForTwoAppleTV';
import { BulkDiscountSuperIPad } from './src/pricingRules/BulkDiscountSuperIPad';

// Initialize pricing rules
const pricingRules = [
    new ThreeForTwoAppleTV(),
    new BulkDiscountSuperIPad()
];

// Initialize checkout
const co = new Checkout(pricingRules);


co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'vga')!);
console.log('Total expected: $249.00, Total calculated:', co.total());


co['items'] = [];


co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'ipd')!);
co.scan(products.find(p => p.sku === 'ipd')!);
co.scan(products.find(p => p.sku === 'atv')!);
co.scan(products.find(p => p.sku === 'ipd')!);
co.scan(products.find(p => p.sku === 'ipd')!);
co.scan(products.find(p => p.sku === 'ipd')!);
console.log('Total expected: $2718.95, Total calculated:', co.total());
