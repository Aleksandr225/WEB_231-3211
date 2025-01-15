document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '9fbacd36-e75b-4d34-839b-5d03ae7386eb';
    const apiUrl = 'https://edu.std-900.ist.mospolytech.ru/exam-2024-1/api/goods';
    const productsContainer = document.getElementById('products');
    const loadMoreButton = document.getElementById('load-more');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search');
    const filterForm = document.getElementById('filter-form');
    const resetFiltersButton = document.getElementById('reset-filters');
    const sortOrderSelect = document.getElementById('sort-order');
    let products = [];
    let currentIndex = 0;
    const perPage = 3;
    const selectedProductIds = JSON.parse(localStorage.getItem('selectedProductIds')) || [];

    if (!productsContainer || !loadMoreButton || !searchButton || !searchInput || !filterForm || !resetFiltersButton || !sortOrderSelect) {
        console.error('Не найдены необходимые элементы на странице.');
        return;
    }

    function displayProducts() {
        if (products.length === 0) {
            productsContainer.innerHTML = '<p>Товары не найдены.</p>';
            loadMoreButton.style.display = 'none';
            return;
        }

        const endIndex = Math.min(currentIndex + perPage, products.length);
        for (let i = currentIndex; i < endIndex; i++) {
            const product = products[i];
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            const ratingStars = '<span style="color: gold;">' + '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)) + '</span>';
            const discount = Math.round((1 - product.discount_price / product.actual_price) * 100);
            productElement.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}" style="width: 100%; height: auto; object-fit: contain;">
                <h3>${product.name}</h3>
                <p>${product.rating} ${ratingStars}</p>
                <p>${product.discount_price} руб. <span style="color: red; text-decoration: line-through;">${product.actual_price} руб.</span> <span style="color: red;">-${discount}%</span></p>
                <button data-id="${product.id}" class="add-to-cart">Добавить в корзину</button>
            `;
            productsContainer.appendChild(productElement);
        }
        currentIndex = endIndex;
        if (currentIndex >= products.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }

    function saveSelectedProductIds() {
        localStorage.setItem('selectedProductIds', JSON.stringify(selectedProductIds));
    }

    function restoreSelectedProducts() {
        selectedProductIds.forEach(id => {
            const productElement = document.querySelector(`button[data-id="${id}"]`);
            if (productElement) {
                productElement.classList.add('selected');
            }
        });
    }

    async function loadProducts(query = '', filters = {}, sortOrder = '') {
        try {
            const url = new URL(apiUrl);
            url.searchParams.append('api_key', apiKey);
            if (query) {
                url.searchParams.append('query', query);
            }
            Object.keys(filters).forEach(key => {
                if (Array.isArray(filters[key])) {
                    filters[key].forEach(value => url.searchParams.append(key, value));
                } else {
                    url.searchParams.append(key, filters[key]);
                }
            });
            if (sortOrder) {
                url.searchParams.append('sort', sortOrder);
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            const data = await response.json();
            products = data || [];
            currentIndex = 0;
            productsContainer.innerHTML = '';
            displayProducts();
            restoreSelectedProducts();
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
            productsContainer.innerHTML = `<p>Ошибка загрузки товаров: ${error.message}</p>`;
        }
    }

    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.dataset.id;
            if (selectedProductIds.includes(productId)) {
                selectedProductIds.splice(selectedProductIds.indexOf(productId), 1);
                event.target.classList.remove('selected');
            } else {
                selectedProductIds.push(productId);
                event.target.classList.add('selected');
            }
            saveSelectedProductIds();
        }
    });

    loadMoreButton.addEventListener('click', () => {
        displayProducts();
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        loadProducts(query);
    });

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const filters = {};
        formData.forEach((value, key) => {
            if (!filters[key]) {
                filters[key] = [];
            }
            filters[key].push(value);
        });
        loadProducts(searchInput.value, filters, sortOrderSelect.value);
    });

    resetFiltersButton.addEventListener('click', () => {
        filterForm.reset();
        loadProducts(searchInput.value);
    });

    sortOrderSelect.addEventListener('change', () => {
        loadProducts(searchInput.value, {}, sortOrderSelect.value);
    });

    loadProducts();
});






























