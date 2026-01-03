// Product Database
const products = [
    {
        id: 1,
        name: "Premium eBook Template",
        description: "Professional eBook template with all source files included. Perfect for authors and content creators.",
        price: 29.99,
        category: "templates",
        icon: "📚",
        file: "ebook-template.zip",
        size: "45 MB",
        downloads: 1245,
        rating: 4.8
    },
    {
        id: 2,
        name: "Productivity Software Pro",
        description: "Advanced productivity software with AI features to boost your workflow efficiency.",
        price: 49.99,
        category: "software",
        icon: "💻",
        file: "productivity-software.exe",
        size: "120 MB",
        downloads: 892,
        rating: 4.6
    },
    {
        id: 3,
        name: "UI Design Kit 2024",
        description: "Complete UI design kit with 500+ components for modern web applications.",
        price: 39.99,
        category: "design",
        icon: "🎨",
        file: "ui-design-kit.zip",
        size: "85 MB",
        downloads: 1567,
        rating: 4.9
    },
    {
        id: 4,
        name: "Music Production Pack",
        description: "Royalty-free music samples and loops for professional music production.",
        price: 59.99,
        category: "audio",
        icon: "🎵",
        file: "music-pack.zip",
        size: "320 MB",
        downloads: 743,
        rating: 4.7
    }
];

// Display Products
function displayProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (productsArray.length === 0) {
        container.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }

    container.innerHTML = productsArray.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                ${product.icon}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span><i class="fas fa-download"></i> ${product.downloads} downloads</span>
                    <span><i class="fas fa-star"></i> ${product.rating}/5</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="btn-view-details">
                        <i class="fas fa-info-circle"></i> Details
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Display featured products on home page
    if (document.getElementById('featured-products')) {
        displayProducts(products.slice(0, 4), 'featured-products');
    }
    
    // Display all products on products page
    if (document.getElementById('all-products')) {
        displayProducts(products, 'all-products');
    }
    
    // Update cart count
    updateCartCount();
});

// Add to Cart function (will be implemented in cart.js)
function addToCart(productId) {
    alert('Adding to cart - this will work with cart.js');
    // This function will be completed in cart.js
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCounts = document.querySelectorAll('.cart-count');
    
    cartCounts.forEach(span => {
        span.textContent = count;
    });
}