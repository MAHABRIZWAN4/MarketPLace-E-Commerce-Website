
import { NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string);

export const POST = async (request: Request) => {
  const { allproducts } = await request.json();
  let activeProducts = await stripe.products.list({ active: true });

  try {
    // 1. Find products from stripe that matches products from cart.
    for (const product of allproducts) {
      const matchedProducts = activeProducts?.data?.find((stripeProduct: Stripe.Product) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );
      // 2. If product didn't exist in Stripe, then add this product to stripe.
      if (matchedProducts == undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: 'usd',
            unit_amount: product.price * 100,
          },
        });
      }
    }

    // 3. Once the new product has been added to stripe, do FETCH Products again with updated products from stripe
  

    activeProducts = await stripe.products.list({ active: true });
    const stripeProducts: { price: string | undefined; quantity: number }[] = [];


    for (const product of allproducts) {
      const stripeProduct = activeProducts?.data?.find((stripeProduct: Stripe.Product) =>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (stripeProduct) {
        stripeProducts.push({
          price: stripeProduct.default_price ? String(stripeProduct.default_price) : undefined,
          quantity: product.quantity,
        });
      }
    }

    // 4. Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Remove this line
      line_items: stripeProducts,
      mode: 'payment',
      success_url: `https://marketplace-e-commerce-website-46.vercel.app/success`,
      cancel_url: `https://marketplace-e-commerce-website-46.vercel.app/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe checkout session", error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
};