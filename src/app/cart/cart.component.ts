import { Component, OnInit } from '@angular/core';
import CartProduct from '../../models/CartProduct';
import { Product } from '../../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: CartProduct[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.calculateTotal();
  }

  calculateTotal(): void {
    const cart = this.cartService.getCartProducts();
    const totalSum = cart.reduce((prev: number, prod: CartProduct) => prev + prod.price * prod.amount, 0);
    this.totalPrice = this.calculateTotalPrice(totalSum);
  }

  deleteProduct(id: number): void {
    this.cartService.removeFromCart(id);
    this.cartProducts = this.cartProducts.filter((p: CartProduct) => p.id !== id);
    this.calculateTotal();
  }

  calculateTotalPrice(sum: number): number {
    const trimmedSum = sum.toFixed(2);
    return Number(trimmedSum);
  }
}
