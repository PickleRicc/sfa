import { loadStripe } from '@stripe/stripe-js';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key');
}

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Stripe price IDs (not product IDs) for each package
export const STRIPE_PRODUCTS = {
  SINGLE_SESSION: 'price_1QcyBNQR14tyDEksOiDLCC0h',
  BASIC_MONTHLY: 'price_1QcyBlQR14tyDEksK5eMX6FR',
  STANDARD_MONTHLY: 'price_1QcyCFQR14tyDEkswnSCQhHc',
  ELITE_MONTHLY: 'price_1QcyCcQR14tyDEksbS1A7R3r',
  TEAM_TRAINING: 'price_1QcyCyQR14tyDEks3RaJBqoO'
};
