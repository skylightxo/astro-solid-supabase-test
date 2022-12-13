import { createSignal } from 'solid-js';

import type { CartItem } from '~/types/CartItem';

const [cart, setCart] = createSignal<CartItem[]>([]);

const cartTotal = () => {
    return cart().length;
};

const cartTotalPrice = () => {
    const totalPrice = cart().reduce((acc, item) => {
        return acc + parseFloat(item.price);
    }, 0);

    return totalPrice.toFixed(2);
};

const addToCart = (item: CartItem) => {
    setCart([...cart(), item]);
};

export { cartTotal, cartTotalPrice, addToCart };