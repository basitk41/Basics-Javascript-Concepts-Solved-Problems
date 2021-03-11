// Problem 12:-Given the list of items and their actual prices and sold prices. Find the number of items in sold products which has wrong prices
const Products =      ['eggs', 'milk', 'cheese','butter'];
const productPrices = [2.89,    3.29,    5.79,    4.0];
const productSold = ['eggs', 'eggs', 'cheese', 'milk','butter'];
const soldPrice =    [2.89,   2.99,    5.97,    3.29,   2.0];

const lengthOfProductSold = productSold.length;
let wrongPrice = 0;
for(let i=0;i<lengthOfProductSold;i++){
      let product=productSold[i];
      let index = Products.indexOf(product);
      if(productPrices[index]!==soldPrice[i]){
          wrongPrice++;
      }
}
console.log('Problem 12 solution:',wrongPrice);