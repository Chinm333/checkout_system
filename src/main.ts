import { Checkout } from './checkout';
import { products, pricingRules } from './checkout';

const co1 = new Checkout(pricingRules);
co1.scan(products[2]);
co1.scan(products[2]);
co1.scan(products[2]);
co1.scan(products[3]); 
console.log(co1.total());

const co2 = new Checkout(pricingRules);
co2.scan(products[2]);
co2.scan(products[0]); 
co2.scan(products[0]); 
co2.scan(products[2]);
co2.scan(products[0]); 
co2.scan(products[0]); 
co2.scan(products[0]); 
console.log(co2.total()); 
