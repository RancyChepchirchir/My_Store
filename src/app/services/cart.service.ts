import { Injectable } from '@angular/core';
import CartProduct from '../../models/CartProduct';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = [];

  constructor() { 
    const storedCart = sessionStorage.getItem('storefront-cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  addToCart = (product: Product, amount: number): void => {
    const existingProductIndex = this.cart.findIndex(cProd => cProd.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedAmount = this.cart[existingProductIndex].amount + amount;
      this.cart[existingProductIndex] = {...product, amount: updatedAmount};
      alert(`Updated amount of product: ${product.name} - new amount: ${updatedAmount}`);
    } else {
      this.cart.push({...product, amount: amount});
      alert(`Added product to cart: ${product.name} - amount: ${amount}`);
    }
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  }

  removeFromCart = (id: number): void => {
    this.cart = this.cart.filter(cProd => cProd.id !== id);
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  }

  updateAmount = (id: number, amount: number): void => {
    this.cart = this.cart.map(cProd => {
      if (cProd.id === id) {
        return {...cProd, amount: amount};
      }
      return cProd;
    });
    sessionStorage.setItem('storefront-cart', JSON.stringify(this.cart));
  }

  getCartProducts = (): CartProduct[] => this.cart;

  clearCart = (): void => {
    this.cart = [];
    sessionStorage.removeItem('storefront-cart');
  }
}
