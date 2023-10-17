// https://uibakery.io/regex-library/phone-number

import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store.js';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from "../user/userSlice";

const isValidPhone = (str) => {
    return (/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/).test(str);
};

const CreateOrder = () => {
  const [withPriority, setWithPriority] = useState(false);

  const { username, status: addressStatus, position, address, error: errorAddress } = useSelector((state) => {
    return state.user;
  });
  // console.log(username);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  // console.log(formErrors);

  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  // console.log(cart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  // console.log(totalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  // console.log(priorityPrice);
  const totalPrice = totalCartPrice + priorityPrice;
  // console.log(totalPrice);

  if (!cart.length) {
    return(
      <EmptyCart />
    );
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" action="/order/new">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name:</label>
          <input 
              className="input grow" 
              type="text" 
              name="customer" 
              placeholder="Enter your First Name..."
              defaultValue={username}
              required 
          />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number:</label>
          <div className="grow">
            <input 
                className="input w-full" 
                type="tel" 
                name="phone" 
                placeholder="Enter your Phone Number..."
                required 
            />
            {formErrors?.phone && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address:</label>
          <div className="grow">
            <input 
                className="input w-full" 
                type="text" 
                name="address" 
                placeholder="Enter your Address..."
                disabled={isLoadingAddress}
                defaultValue={address}
                required 
            />
            {addressStatus === 'error' && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {errorAddress}
              </p>
            )}
          </div>

         {!position.latitude && !position.langitude && (
            <span className="absolute right-1 top-9 z-50 sm:right-1 sm:top-1">
                <Button 
                  disabled={isLoadingAddress}
                  type='small' 
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress())
                  }}
                >
                    Get Position
                </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5 ">
          <input
              className="cursor-pointer h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medum">
              Do you want to give your order priority?
          </label>
        </div>

        <div>
          <input 
              type='hidden' 
              name='cart'
              value={JSON.stringify(cart)}
          />
          <input 
              type='hidden' 
              name='position' 
              value={position.longitude && position.latitude ? `${position.latitude}, ${position.langitude}` : ''}
          />
          <Button disabled={isSubmitting || isLoadingAddress} type='primary'>
            {isSubmitting ? (`Placing order...`) : (`Order now from ${formatCurrency(totalPrice)}`)}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);

    const data = Object.fromEntries(formData);
    console.log(data);

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true'
    };
    console.log(order);

    const errors = {};

    if (!isValidPhone(order.phone)) {
        errors.phone = "Please give us your correct phone number. We might need it to contact you";
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    // if everything is okay, create new order and redirect
    const newOrder = await createOrder(order);
    console.log(newOrder);

    // DO NOT overuse
    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
    // return null;
};

export default CreateOrder;