# SmartCafe — Frontend

SmartCafe is an Advanced Internet Technologies CSE project prototype for QR/table-based cafe ordering and staff operations.

## Frontend-only scope

This stage intentionally uses only **HTML5, CSS3 and vanilla JavaScript**. Data is simulated in the browser with `localStorage` so the customer, kitchen and admin pages can demonstrate the complete workflow without a backend.

## Structure

```text
Smart Cafe Management System/
├── customer/
│   ├── index.html
│   ├── menu.html
│   ├── cart.html
│   ├── order-status.html
│   ├── css/
│   │   ├── style.cs
│   │   └── style.css
│   │   ├── components.css
│   ├── js/
│   │   ├── app.js
│   │   ├── data.js
│   │   ├── common.js
│   │   └── customer.js
│   └── assets/images/
├── kitchen.html
├── kitchen/js/kitchen.js
├── admin/
│   ├── index.html
│   ├── js/admin.js
│   └── assets/
└── README.md
```

## Demo routes

- Root `index.html`: entry point and role selector.
- Customer: `customer/index.html`.
- Kitchen: `kitchen.html`.
- Admin: `admin/index.html`.

## Demo credentials

- Customer: `customer@smartcafe.com` / `1234`
- Kitchen: `kitchen@smartcafe.com` / `1234`
- Admin: `admin@smartcafe.com` / `1234`

These are frontend demo credentials only; they are **not authentication or security**.

## Browser data

Orders and cart data are stored in `localStorage` under the SmartCafe keys. Clearing browser storage resets the demo state.

## Future backend boundary

The frontend is structured so the browser data layer can later be replaced by an API/database implementation. Backend technologies are intentionally not part of this frontend stage.
