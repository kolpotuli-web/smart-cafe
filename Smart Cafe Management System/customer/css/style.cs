* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #5c3d2e;
    --primary-dark: #40291f;
    --secondary: #f3e7dc;
    --background: #faf8f5;
    --white: #ffffff;
    --text: #2b2522;
    --muted: #756d68;
    --border: #e6ddd6;
    --success: #3f7d4a;
    --danger: #b64a4a;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    font-family: inherit;
}

button {
    cursor: pointer;
}

.container {
    width: min(1120px, 92%);
    margin: 0 auto;
}


/* =========================
   HEADER
========================= */

.site-header {
    background: var(--white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
}

.table-display {
    padding: 8px 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--background);
    font-size: 14px;
    font-weight: 600;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.cart-button {
    background: var(--primary);
    color: var(--white);
    padding: 9px 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
}

.cart-button span {
    background: var(--white);
    color: var(--primary);
    padding: 2px 6px;
    border-radius: 5px;
    margin-left: 5px;
}


/* =========================
   BUTTONS
========================= */

.primary-button,
.secondary-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 46px;
    padding: 0 22px;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s ease;
}

.primary-button {
    background: var(--primary);
    color: var(--white);
}

.primary-button:hover {
    background: var(--primary-dark);
}

.secondary-button {
    background: var(--secondary);
    color: var(--primary);
}

.secondary-button:hover {
    background: #e8d8ca;
}

.full-width {
    width: 100%;
    margin-top: 14px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 560px;
    display: flex;
    align-items: center;
    background:
        linear-gradient(
            90deg,
            rgba(250, 248, 245, 0.98),
            rgba(250, 248, 245, 0.82),
            rgba(250, 248, 245, 0.35)
        );
}

.hero-content {
    padding: 80px 0;
}

.eyebrow {
    color: var(--primary);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
}

.hero h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;
    margin-bottom: 25px;
    max-width: 700px;
}

.hero-description {
    max-width: 560px;
    color: var(--muted);
    font-size: 18px;
    margin-bottom: 32px;
}


/* =========================
   SECTIONS
========================= */

.how-section,
.features-section,
.menu-section,
.cart-section,
.status-section {
    padding: 80px 0;
}

.section-heading {
    max-width: 650px;
    margin-bottom: 45px;
}

.section-heading h2 {
    font-size: 38px;
    margin-bottom: 10px;
}

.section-heading p:not(.eyebrow) {
    color: var(--muted);
}


/* =========================
   HOW IT WORKS
========================= */

.steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.step-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 30px;
}

.step-number {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 35px;
}

.step-card h3 {
    font-size: 23px;
    margin-bottom: 10px;
}

.step-card p {
    color: var(--muted);
}


/* =========================
   FEATURES
========================= */

.features-section {
    background: var(--secondary);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.feature-card {
    background: var(--white);
    padding: 25px;
    border-radius: 10px;
}

.feature-card h3 {
    margin-bottom: 10px;
    font-size: 18px;
}

.feature-card p {
    color: var(--muted);
    font-size: 14px;
}


/* =========================
   MENU HEADER
========================= */

.menu-header {
    padding: 70px 0 35px;
}

.menu-header h1,
.page-heading h1 {
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 12px;
}

.menu-header p:not(.eyebrow),
.page-heading p:not(.eyebrow) {
    color: var(--muted);
}

.search-container {
    margin-top: 30px;
}

.search-container input {
    width: 100%;
    max-width: 600px;
    height: 48px;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0 16px;
    outline: none;
    background: var(--white);
    font-size: 15px;
}

.search-container input:focus {
    border-color: var(--primary);
}


/* =========================
   CATEGORIES
========================= */

.category-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 35px;
}

.category-button {
    border: 1px solid var(--border);
    background: var(--white);
    padding: 10px 17px;
    border-radius: 7px;
    color: var(--text);
}

.category-button.active,
.category-button:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
}


/* =========================
   MENU ITEMS
========================= */

.menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.menu-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
}

.menu-image {
    height: 190px;
    background: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 16px;
    font-weight: 700;
}

.menu-content {
    padding: 20px;
}

.menu-category {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 700;
    letter-spacing: 1px;
}

.menu-content h3 {
    font-size: 21px;
    margin: 5px 0;
}

.menu-description {
    color: var(--muted);
    font-size: 14px;
    min-height: 44px;
    margin-bottom: 15px;
}

.menu-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.menu-price {
    font-size: 18px;
    font-weight: 700;
}

.add-button {
    border: none;
    background: var(--primary);
    color: var(--white);
    padding: 9px 14px;
    border-radius: 7px;
    font-weight: 600;
}

.add-button:hover {
    background: var(--primary-dark);
}


/* =========================
   MODAL
========================= */

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 200;
    padding: 20px;
}

.modal-overlay.active {
    display: flex;
}

.modal {
    background: var(--white);
    width: min(600px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 12px;
    padding: 30px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}

.modal-header h2 {
    font-size: 26px;
}

.close-modal {
    border: none;
    background: transparent;
    font-size: 25px;
}

.form-group {
    margin-bottom: 22px;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 9px;
}

.option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.option-label {
    border: 1px solid var(--border);
    padding: 11px;
    border-radius: 7px;
    cursor: pointer;
}

.option-label:hover {
    border-color: var(--primary);
}

.option-label input {
    margin-right: 8px;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 15px;
}

.quantity-control button {
    width: 34px;
    height: 34px;
    border: 1px solid var(--border);
    background: var(--white);
    border-radius: 6px;
}

.quantity-control span {
    font-weight: 700;
}

.form-group textarea {
    width: 100%;
    min-height: 90px;
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 12px;
    resize: vertical;
    outline: none;
}

.modal-price {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
}


/* =========================
   CART
========================= */

.page-heading {
    margin-bottom: 40px;
}

.cart-layout {
    display: grid;
    grid-template-columns: 1.6fr 0.9fr;
    gap: 30px;
    align-items: start;
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.cart-item {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
}

.cart-item-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.cart-item h3 {
    margin-bottom: 5px;
}

.cart-item-details {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 15px;
}

.cart-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-quantity {
    display: flex;
    align-items: center;
    gap: 12px;
}

.cart-quantity button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--border);
    background: var(--white);
    border-radius: 5px;
}

.remove-button {
    color: var(--danger);
    background: transparent;
    border: none;
    font-size: 13px;
}

.order-summary {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 25px;
    position: sticky;
    top: 95px;
}

.order-summary h2 {
    margin-bottom: 25px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.summary-divider {
    height: 1px;
    background: var(--border);
    margin: 20px 0;
}

.total-row {
    font-size: 19px;
    font-weight: 700;
}

.empty-cart {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 50px 30px;
    border-radius: 12px;
    text-align: center;
}

.empty-cart h2 {
    margin-bottom: 10px;
}

.empty-cart p {
    color: var(--muted);
    margin-bottom: 20px;
}


/* =========================
   ORDER STATUS
========================= */

.status-section {
    min-height: calc(100vh - 150px);
}

.status-card {
    max-width: 750px;
    margin: 0 auto;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 45px;
    box-shadow: var(--shadow);
}

.status-card > h1 {
    font-size: 40px;
    margin-bottom: 8px;
}

.status-card > p:not(.eyebrow) {
    color: var(--muted);
    margin-bottom: 40px;
}

.status-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.status-step {
    display: flex;
    gap: 18px;
    position: relative;
    padding-bottom: 35px;
    opacity: 0.4;
}

.status-step:last-child {
    padding-bottom: 0;
}

.status-step.completed,
.status-step.active {
    opacity: 1;
}

.status-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--border);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    flex-shrink: 0;
}

.status-step.completed .status-circle,
.status-step.active .status-circle {
    background: var(--primary);
    color: var(--white);
}

.status-step h3 {
    margin-bottom: 4px;
}

.status-step p {
    color: var(--muted);
    font-size: 14px;
}

.status-actions {
    margin-top: 35px;
}


/* =========================
   FOOTER
========================= */

.site-footer {
    border-top: 1px solid var(--border);
    background: var(--white);
    padding: 25px 0;
    color: var(--muted);
    font-size: 13px;
}

.site-footer .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}


/* =========================
   RESPONSIVE DESIGN
========================= */

@media (max-width: 900px) {

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .cart-layout {
        grid-template-columns: 1fr;
    }

    .order-summary {
        position: static;
    }

}

@media (max-width: 700px) {

    .header-content {
        min-height: 64px;
    }

    .header-actions {
        gap: 7px;
    }

    .table-display {
        padding: 7px 9px;
        font-size: 12px;
    }

    .cart-button {
        padding: 8px 10px;
    }

    .hero {
        min-height: 500px;
    }

    .hero-content {
        padding: 60px 0;
    }

    .steps-grid {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .menu-grid {
        grid-template-columns: 1fr;
    }

    .menu-header h1,
    .page-heading h1 {
        font-size: 38px;
    }

    .status-card {
        padding: 25px;
    }

    .status-card > h1 {
        font-size: 32px;
    }

    .site-footer .container {
        flex-direction: column;
    }

}

@media (max-width: 450px) {

    .logo {
        font-size: 20px;
    }

    .header-content {
        gap: 8px;
    }

    .hero h1 {
        font-size: 42px;
    }

    .category-container {
        overflow-x: auto;
        flex-wrap: nowrap;
        padding-bottom: 5px;
    }

    .category-button {
        white-space: nowrap;
    }

}

.menu-image {
    width: 100%;
    height: 210px;
    overflow: hidden;
    border-radius: 14px 14px 0 0;
    background: #f3f3f3;
}

.menu-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.menu-card:hover .menu-image img {
    transform: scale(1.05);
}

.customization-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 18px;
}

.customization-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cart-item-image {
    width: 100px;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
    flex-shrink: 0;
}

.cart-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}