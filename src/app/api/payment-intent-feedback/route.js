import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  const body = request.text();
  const signature = request.headers.get("Stripe-Signature");

  if (!signature) {
    console.log("no signature");
    return NextResponse.json({ error: "no signature" });
  }

  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
    apiVersion: "2022-11-15",
    typescript: false,
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_KEY,
    );
  } catch (error) {
    console.log("Webhook signature verification failed", error.message);
    return NextResponse.json({ error: error });
  }

  console.log("received ", event.type);

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      const userId = Number(paymentIntent?.metadata?.userId) || 1;
      console.log("userId ", userId);

      // await prisma.user.update({
      //   where: {
      //     id: userId,
      //   },
      //   data: {
      //     tokens: {
      //       increment: 1,
      //     },
      //     paid: true,
      //   },
      // });

      break;
    case "payment_method.attached":
      const paymentMethod = event.data.object;

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ received: true });
};
