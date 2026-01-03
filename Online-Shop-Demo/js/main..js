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
    },
    {
        id: 5,
        name: "Video Editing Template Pack",
        description: "Professional video editing templates for Adobe Premiere and After Effects.",
        price: 44.99,
        category: "templates",
        icon: "🎬",
        file: "video-templates.zip",
        size: "210 MB",
        downloads: 567,
        rating: 4.5
    },
    {
        id: 6,
        name: "Website Analytics Dashboard",
        description: "Advanced analytics dashboard for tracking website performance and user behavior.",
        price: 34.99,
        category: "software",
        icon: "📊",
        file: "analytics-dashboard.zip",
        size: "65 MB",
        downloads: 932,
        rating: 4.4
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

    container.innerHTML =