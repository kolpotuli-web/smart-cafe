const menuItems = [
    {
        id: 1,
        name: "Cappuccino",
        category: "coffee",
        price: 140,
        image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=80",
        description: "Rich espresso with steamed milk and creamy foam."
    },
    {
        id: 2,
        name: "Cafe Latte",
        category: "coffee",
        price: 150,
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=80",
        description: "Smooth espresso blended with warm steamed milk."
    },
    {
        id: 3,
        name: "Cold Coffee",
        category: "coffee",
        price: 160,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        description: "Refreshing chilled coffee served over ice."
    },
    {
        id: 4,
        name: "Masala Tea",
        category: "tea",
        price: 80,
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
        description: "Traditional Indian tea infused with aromatic spices."
    },
    {
        id: 5,
        name: "Green Tea",
        category: "tea",
        price: 90,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
        description: "Light and refreshing green tea."
    },
    {
        id: 6,
        name: "French Fries",
        category: "snacks",
        price: 120,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        description: "Crispy golden fries served with sauce."
    },
    {
        id: 7,
        name: "Veg Sandwich",
        category: "snacks",
        price: 150,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
        description: "Fresh vegetables layered inside toasted bread."
    },
    {
        id: 8,
        name: "Veg Pizza",
        category: "meals",
        price: 220,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        description: "Loaded vegetable pizza with melted cheese."
    },
    {
        id: 9,
        name: "Veg Burger",
        category: "meals",
        price: 180,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: "Crispy vegetable patty with fresh toppings."
    },
    {
        id: 10,
        name: "Pasta",
        category: "meals",
        price: 190,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
        description: "Creamy pasta prepared with fresh ingredients."
    },
    {
        id: 11,
        name: "Chocolate Brownie",
        category: "desserts",
        price: 130,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        description: "Rich and fudgy chocolate brownie."
    },
    {
        id: 12,
        name: "Cheesecake",
        category: "desserts",
        price: 160,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        description: "Creamy cheesecake with a delicious biscuit base."
    }
];

let cart = JSON.parse(localStorage.getItem("smartCafeCart")) || [];

let currentTable =
    new URLSearchParams(window.location.search).get("table") ||
    localStorage.getItem("smartCafeTable") ||
    "12";

localStorage.setItem("smartCafeTable", currentTable);


/* =========================
   COMMON FUNCTIONS
========================= */

function saveCart() {
    localStorage.setItem("smartCafeCart", JSON.stringify(cart));
}

function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll(".cart-count");

    cartCountElements.forEach(element => {
        element.textContent = getCartCount();
    });
}

function formatPrice(price) {
    return "₹" + price.toFixed(2);
}

function calculateItemPrice(item) {
    let price = item.price;

    if (item.size === "Medium") {
        price += 20;
    }

    if (item.size === "Large") {
        price += 40;
    }

    if (item.extras) {
        item.extras.forEach(extra => {
            price += extra.price;
        });
    }

    return price;
}


/* =========================
   MENU PAGE
========================= */

function displayMenu(items = menuItems) {
    const menuContainer = document.getElementById("menu-container");

    if (!menuContainer) {
        return;
    }

    if (items.length === 0) {
        menuContainer.innerHTML = `
            <div class="empty-message">
                <h3>No items found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    menuContainer.innerHTML = items.map(item => `
        <div class="menu-card">

            <div class="menu-image">
                <img 
                    src="${item.image}" 
                    alt="${item.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >
            </div>

            <div class="menu-card-content">

                <div class="menu-card-top">
                    <h3>${item.name}</h3>
                    <span class="food-category">
                        ${item.category}
                    </span>
                </div>

                <p class="menu-description">
                    ${item.description}
                </p>

                <div class="menu-card-bottom">

                    <strong class="food-price">
                        ${formatPrice(item.price)}
                    </strong>

                    <button 
                        class="add-btn"
                        onclick="openCustomization(${item.id})"
                    >
                        Add
                    </button>

                </div>

            </div>

        </div>
    `).join("");
}


/* =========================
   SEARCH
========================= */

function setupSearch() {
    const searchInput = document.getElementById("menu-search");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        const filteredItems = menuItems.filter(item =>
            item.name.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        );

        displayMenu(filteredItems);
    });
}


/* =========================
   CATEGORY FILTER
========================= */

function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll(".category-btn");

    categoryButtons.forEach(button => {

        button.addEventListener("click", function () {

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const category = this.dataset.category;

            if (category === "all") {
                displayMenu(menuItems);
            } else {
                const filteredItems = menuItems.filter(
                    item => item.category === category
                );

                displayMenu(filteredItems);
            }
        });
    });
}


/* =========================
   CUSTOMIZATION MODAL
========================= */

function openCustomization(itemId) {

    const item = menuItems.find(menuItem => menuItem.id === itemId);

    if (!item) {
        return;
    }

    const modal = document.createElement("div");

    modal.className = "customization-modal";

    modal.innerHTML = `
        <div class="customization-box">

            <button 
                class="close-modal"
                onclick="this.closest('.customization-modal').remove()"
            >
                ×
            </button>

            <div class="customization-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <h2>${item.name}</h2>

            <p class="customization-description">
                ${item.description}
            </p>

            <div class="customization-section">

                <h3>Select Size</h3>

                <label>
                    <input 
                        type="radio" 
                        name="size"
                        value="Small"
                        checked
                    >
                    Small
                    <span>+₹0</span>
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="size"
                        value="Medium"
                    >
                    Medium
                    <span>+₹20</span>
                </label>

                <label>
                    <input 
                        type="radio" 
                        name="size"
                        value="Large"
                    >
                    Large
                    <span>+₹40</span>
                </label>

            </div>

            <div class="customization-section">

                <h3>Extras</h3>

                <label>
                    <input 
                        type="checkbox"
                        value="Extra Cheese"
                        data-price="30"
                    >
                    Extra Cheese
                    <span>+₹30</span>
                </label>

                <label>
                    <input 
                        type="checkbox"
                        value="Extra Sauce"
                        data-price="20"
                    >
                    Extra Sauce
                    <span>+₹20</span>
                </label>

                <label>
                    <input 
                        type="checkbox"
                        value="Extra Topping"
                        data-price="40"
                    >
                    Extra Topping
                    <span>+₹40</span>
                </label>

            </div>

            <div class="customization-section">

                <h3>Special Instructions</h3>

                <textarea
                    id="special-instructions"
                    placeholder="Any special request or allergy information?"
                ></textarea>

            </div>

            <div class="quantity-section">

                <button onclick="changeModalQuantity(-1)">
                    -
                </button>

                <span id="modal-quantity">
                    1
                </span>

                <button onclick="changeModalQuantity(1)">
                    +
                </button>

            </div>

            <button
                class="confirm-add-btn"
                onclick="addCustomizedItem(${item.id})"
            >
                Add to Cart
            </button>

        </div>
    `;

    document.body.appendChild(modal);
}


function changeModalQuantity(change) {

    const quantityElement =
        document.getElementById("modal-quantity");

    if (!quantityElement) {
        return;
    }

    let quantity = parseInt(quantityElement.textContent);

    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
    }

    quantityElement.textContent = quantity;
}


/* =========================
   ADD CUSTOMIZED ITEM
========================= */

function addCustomizedItem(itemId) {

    const item = menuItems.find(menuItem => menuItem.id === itemId);

    if (!item) {
        return;
    }

    const sizeElement =
        document.querySelector(
            'input[name="size"]:checked'
        );

    const size = sizeElement
        ? sizeElement.value
        : "Small";

    const extraElements =
        document.querySelectorAll(
            '.customization-section input[type="checkbox"]:checked'
        );

    const extras = [];

    extraElements.forEach(extra => {

        extras.push({
            name: extra.value,
            price: Number(extra.dataset.price)
        });

    });

    const instructionsElement =
        document.getElementById("special-instructions");

    const instructions =
        instructionsElement
            ? instructionsElement.value.trim()
            : "";

    const quantityElement =
        document.getElementById("modal-quantity");

    const quantity =
        quantityElement
            ? parseInt(quantityElement.textContent)
            : 1;

    const cartItem = {
        cartId: Date.now(),
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: size,
        extras: extras,
        instructions: instructions,
        quantity: quantity
    };

    cart.push(cartItem);

    saveCart();

    updateCartCount();

    const modal =
        document.querySelector(".customization-modal");

    if (modal) {
        modal.remove();
    }

    showNotification(
        item.name + " added to cart"
    );
}


/* =========================
   CART PAGE
========================= */

function displayCart() {

    const cartContainer =
        document.getElementById("cart-items");

    if (!cartContainer) {
        return;
    }

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some delicious items from the menu.</p>

                <a href="menu.html" class="primary-btn">
                    Browse Menu
                </a>
            </div>
        `;

        updateCartTotals();

        return;
    }

    cartContainer.innerHTML = cart.map(item => {

        const unitPrice = calculateItemPrice(item);

        return `
            <div class="cart-item">

                <div class="cart-item-image">
                    <img 
                        src="${item.image}"
                        alt="${item.name}"
                    >
                </div>

                <div class="cart-item-details">

                    <h3>${item.name}</h3>

                    <p>
                        Size: ${item.size}
                    </p>

                    ${
                        item.extras && item.extras.length > 0
                            ? `
                                <p>
                                    Extras:
                                    ${item.extras
                                        .map(extra => extra.name)
                                        .join(", ")
                                    }
                                </p>
                            `
                            : ""
                    }

                    ${
                        item.instructions
                            ? `
                                <p>
                                    Note: ${item.instructions}
                                </p>
                            `
                            : ""
                    }

                    <strong>
                        ${formatPrice(unitPrice)}
                    </strong>

                </div>

                <div class="cart-quantity">

                    <button
                        onclick="updateCartQuantity(${item.cartId}, -1)"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="updateCartQuantity(${item.cartId}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove-cart-item"
                    onclick="removeCartItem(${item.cartId})"
                >
                    Remove
                </button>

            </div>
        `;

    }).join("");

    updateCartTotals();
}


function updateCartQuantity(cartId, change) {

    const item = cart.find(
        cartItem => cartItem.cartId === cartId
    );

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(
            cartItem => cartItem.cartId !== cartId
        );

    }

    saveCart();

    displayCart();

    updateCartCount();
}


function removeCartItem(cartId) {

    cart = cart.filter(
        item => item.cartId !== cartId
    );

    saveCart();

    displayCart();

    updateCartCount();
}


/* =========================
   CART TOTALS
========================= */

function updateCartTotals() {

    const subtotalElement =
        document.getElementById("cart-subtotal");

    const taxElement =
        document.getElementById("cart-tax");

    const totalElement =
        document.getElementById("cart-total");

    let subtotal = 0;

    cart.forEach(item => {

        const itemPrice =
            calculateItemPrice(item);

        subtotal +=
            itemPrice * item.quantity;

    });

    const tax = subtotal * 0.05;

    const total = subtotal + tax;

    if (subtotalElement) {
        subtotalElement.textContent =
            formatPrice(subtotal);
    }

    if (taxElement) {
        taxElement.textContent =
            formatPrice(tax);
    }

    if (totalElement) {
        totalElement.textContent =
            formatPrice(total);
    }
}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    if (cart.length === 0) {

        showNotification(
            "Your cart is empty"
        );

        return;
    }

    let subtotal = 0;

    cart.forEach(item => {

        subtotal +=
            calculateItemPrice(item) *
            item.quantity;

    });

    const tax = subtotal * 0.05;

    const total = subtotal + tax;

    const orderNumber =
        "SC" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    const order = {

        orderNumber: orderNumber,

        table: currentTable,

        items: cart,

        subtotal: subtotal,

        tax: tax,

        total: total,

        status: "Received",

        createdAt: new Date().toISOString()

    };

    localStorage.setItem(
        "smartCafeCurrentOrder",
        JSON.stringify(order)
    );

    localStorage.removeItem(
        "smartCafeCart"
    );

    cart = [];

    window.location.href =
        "order-status.html";

}


/* =========================
   ORDER STATUS
========================= */

function loadOrderStatus() {

    const order =
        JSON.parse(
            localStorage.getItem(
                "smartCafeCurrentOrder"
            )
        );

    if (!order) {
        return;
    }

    const orderNumberElement =
        document.getElementById("order-number");

    const tableNumberElement =
        document.getElementById("status-table");

    if (orderNumberElement) {
        orderNumberElement.textContent =
            order.orderNumber;
    }

    if (tableNumberElement) {
        tableNumberElement.textContent =
            order.table;
    }

    updateOrderStatus(order);
}


function updateOrderStatus(order) {

    const statusElement =
        document.getElementById("order-status");

    if (statusElement) {
        statusElement.textContent =
            order.status;
    }

    const statusSteps =
        document.querySelectorAll(".status-step");

    statusSteps.forEach(step => {

        step.classList.remove("active");
        step.classList.remove("completed");

    });

    const statusOrder = [
        "Received",
        "Preparing",
        "Ready",
        "Completed"
    ];

    const currentIndex =
        statusOrder.indexOf(order.status);

    statusSteps.forEach((step, index) => {

        if (index < currentIndex) {
            step.classList.add("completed");
        }

        if (index === currentIndex) {
            step.classList.add("active");
        }

    });
}


/* =========================
   FRONTEND STATUS SIMULATION
========================= */

function simulateOrderStatus() {

    const order =
        JSON.parse(
            localStorage.getItem(
                "smartCafeCurrentOrder"
            )
        );

    if (!order) {
        return;
    }

    setTimeout(() => {

        order.status = "Preparing";

        localStorage.setItem(
            "smartCafeCurrentOrder",
            JSON.stringify(order)
        );

        updateOrderStatus(order);

    }, 8000);


    setTimeout(() => {

        order.status = "Ready";

        localStorage.setItem(
            "smartCafeCurrentOrder",
            JSON.stringify(order)
        );

        updateOrderStatus(order);

    }, 16000);


    setTimeout(() => {

        order.status = "Completed";

        localStorage.setItem(
            "smartCafeCurrentOrder",
            JSON.stringify(order)
        );

        updateOrderStatus(order);

    }, 24000);
}


/* =========================
   NOTIFICATION
========================= */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.className =
        "notification";

    notification.textContent =
        message;

    document.body.appendChild(
        notification
    );

    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 10);

    setTimeout(() => {

        notification.remove();

    }, 2500);
}


/* =========================
   TABLE INFORMATION
========================= */

function displayTableNumber() {

    const tableElements =
        document.querySelectorAll(
            ".table-number"
        );

    tableElements.forEach(element => {

        element.textContent =
            currentTable;

    });
}


/* =========================
   PAGE INITIALIZATION
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayTableNumber();

        updateCartCount();

        displayMenu();

        setupSearch();

        setupCategoryButtons();

        displayCart();

        loadOrderStatus();

        if (
            window.location.pathname.includes(
                "order-status.html"
            )
        ) {
            simulateOrderStatus();
        }

    }
);