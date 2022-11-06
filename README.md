# Masterswap

## What is Masterswap?

Masterswap is a service that allows users to purchase items with cryptocurrency using their debit card. The service utiliizes 0x's APIs to swap cryptocurrencies from those availble in a customer's wallet to a merchant's expected payment form. Masterswap makes it easy as a one-time approval for a customer to begin spending crypto on daily expenditures.

## How is Masterswap using 0x's APIs

Masterswap allows users to purchase items with any ERC20 tokens in their wallet and leverages 0x's APIs to swap into a merchant's desired payment form. The service uses 0x's GET /quote API to retrieve the best possible swap hops before a purchase, and converts the currencies accordingly.

Masterswap alleviates the complexity of swapping tokens before purchases, giving customers the ability to swipe their cards knowing our service will take care of the rest.

## Adoption & Market

Mastercard handles over 33 billion transactions on a quarterly basis. If a fraction of those payments utilize the cryptocurrency aspect of the card, that would be billions of transactions being routed through the 0x protocol.

## Team Members

Ao Li - leoninela2016@gmail.com

Lakshay Jhamb -

Noah Eggenschwiler -

Lola Roberts - lola.beatrice.roberts@gmail.com

# How To Run Masterswap

1. Open Terminal, navigate to the root of the folder and run these commands:

```shell
npm install
```

2. Create a new file named: ".env" under the root folder and insert the code below:

```shell
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51LA1opDxb0LTFfqbVOzKchAGcRaHMrnv50P9U81wraV00GU1DkpbWSgvAppbq2MrZFrR2EtDgA8ZOyZimnwBxp9Z00dzh9Jwb4
STRIPE_SECRET_KEY=sk_test_51LA1opDxb0LTFfqbiT5dPpURsO8kuhNKPHc1ZbiQTiz7HfHjUyLp4I3i4xvmU2IXst6GkPJT49L1ZsYFSyCBFykS00XlALfMLo
BANK_ACCOUNT=5555555555554444
EXP_DATE=05/25
CVC=555
```

3. Go back to the terminal and run:

```shell
npm run dev
```

4. Checkout the different pages:

Bank homepage use:

```shell
http://localhost:3000/bank
```

Market Checkout page use:

```shell
http://localhost:3000/checkout
```

## Troubleshooting

1. If you can't start the application:

- Check that you npm installed in the root file
- Try running 'npm install -f'
