# FZ Studio — Product Update Guide

This system keeps the website product page, Google product schema, GA4 item data and Merchant Center feed tied to one product file.

## Where products live

Every product has one file inside:

`_products/`

Examples:
- `_products/peach-study.md`
- `_products/amalfi-watercolour-paper-sample-pack.md`

## The fields you normally change

- `title` — customer-facing product name
- `price` — use numbers only, for example `"35.00"`
- `paypal_id` — the PayPal hosted product ID
- `stock` — use a number for finite stock, such as `40`; leave blank for made-to-order products
- `availability` — usually `in_stock`; use `out_of_stock`, `preorder` or `backorder` when needed
- `image` — main product image path, for example `/assets/images/products/my-print.jpg`
- `image_alt` — a plain description of the image
- `facts` — the short specification lines shown on the product page
- the paragraph below the second `---` — the main product description

## Adding a new product

1. Duplicate the closest existing file in `_products/`.
2. Rename the copy using lowercase words separated by hyphens, for example `new-flower-print.md`.
3. Give it a new permanent `product_id`. Never reuse an old product ID for a different product.
4. Update the title, description, category, price, PayPal ID, image, facts and product description.
5. Put the product image in `assets/images/products/` and use that path in `image`.
6. Commit and push with GitHub Desktop.

The site then automatically:
- creates a product page under `/products/<filename>/`
- adds Product/Offer structured data
- adds GA4 `view_item` and `add_to_cart` data
- adds the product to `merchant-feed.xml` once a real main image is present
- includes the product page in the sitemap

## Stock

The site is static, so PayPal does not automatically reduce the `stock` number after a sale.

For the Amalfi sample pack, after an order you only need to change the number in its product file, for example:

`stock: 40` → `stock: 39`

When stock reaches `0`, the website and Merchant feed treat the item as out of stock and the product page stops showing the PayPal Add to Cart button.

## Pre-orders later

For a future pre-order product, use:

`availability: preorder`

and add an ISO date such as:

`availability_date: 2026-10-15`

The expected availability date should also be visible in the customer-facing product description.

## Merchant Center

The automated feed URL is:

`https://fz-studio.co.uk/merchant-feed.xml`

Products without a real `image` are deliberately excluded from the feed so Google does not receive invalid image links.
