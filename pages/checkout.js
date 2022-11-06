import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


import CheckoutForm from "./components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
    const [clientSecret, setClientSecret] = React.useState("");

    React.useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            <div>
                <img style={{ height: "50%", position: "relative", marginBottom: "0%" }} src="/samsaung.png" />
            </div>

            <div className='px-[20%] py-[5%] flex justify-around item-center'>
                <div className='border-r-2 mr-0 pr-10 mt-6'>
                    <span className="text-3xl mt-6">Checkout</span>
                    <img className='py-10 pr-3 w-[80%]' src='/tv.jpeg' />
                    <div className="mt-9">
                        <span className="text-xl block"><strong>Item:</strong> 98" 4K Smart Google TV</span>
                        <span className="text-xl block"><strong>Quatity:</strong> 1 </span>
                        <span className="text-xl block"><strong>Total Price:</strong> $8,499.99 </span>
                    </div>

                </div>

                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>

        </div>
    );
}