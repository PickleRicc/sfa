import Stripe from 'stripe';
import { STRIPE_PRODUCTS } from '../../config/stripe';

// Add console log to debug
console.log('API Key:', process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16' // Add specific API version
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { priceId, packageName } = req.body;

    // Determine if this is a one-time payment or subscription
    const isOneTime = priceId === STRIPE_PRODUCTS.SINGLE_SESSION || priceId === STRIPE_PRODUCTS.TEAM_TRAINING;

    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: isOneTime ? 'payment' : 'subscription',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/book-training`,
      metadata: {
        packageName: packageName || '',
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      }
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ 
      statusCode: 500, 
      message: err.message || 'An error occurred with the payment process.' 
    });
  }
};
