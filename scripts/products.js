
let restoredProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

document.addEventListener('DOMContentLoaded', () => {
    if (restoredProducts.length === 0) {
        console.log("Нет сохраненных товаров в localStorage.");
        // Можно добавить логику для случая отсутствия выбранных товаров, например, 
        // отобразить сообщение пользователю, что нет добавленных товаров.
        return;
    }

    fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/products")
        .then(response => response.json())
        .then(data => {
            // Фильтруем товары, оставляя только те, чьи id есть в restoredProducts
            const selectedProductsData = data.filter(product => restoredProducts.includes(product.id));
            if (selectedProductsData.length === 0) {
                console.log("Нет товаров с сохраненными id.");
                //Можно добавить логику, если товары не найдены
                return;
            }
            // Сортируем выбранные товары по имени
            selectedProductsData.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

            // Здесь можно вызвать функцию для отображения selectedProductsData на странице
            displayProducts(selectedProductsData);
        })
        .catch(error => {
            console.error("Ошибка при загрузке данных:", error);
            // Здесь можно обработать ошибку загрузки данных
        });
});


function displayProducts(products) {
    // Получаем контейнер для отображения товаров
    const productsContainer = document.getElementById('products-container'); // Замените на фактический ID вашего контейнера

    if (!productsContainer) {
        console.error('Не найден контейнер для отображения товаров');
        return;
    }
    productsContainer.innerHTML = '';// Очищаем контейнер перед добавлением новых элементов

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        const ratingStars = '<span style="color: gold;">' + '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)) + '</span>';
        const discount = Math.round((1 - product.discount_price / product.actual_price) * 100);

        productElement.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}" style="width: 100%; height: auto; object-fit: contain;">
                <h3>${product.name}</h3>
                <p>${product.rating} ${ratingStars}</p>
                <p>${product.discount_price} руб. <span style="color: red; text-decoration: line-through;">${product.actual_price} руб.</span> <span style="color: red;">-${discount}%</span></p>
                <button data-id="${product.id}">Добавить в корзину</button>
            `;
        productsContainer.appendChild(productDiv);

    });
}

            
            

            submitButton.addEventListener('click', (event) => {
                event.preventDefault();// Не отправляем форму, если заказ некорректен
                    let delivery_type = 'by_time';
                    if (document.querySelectorAll('input[name="need_time"]:checked')[0].value === 'asap') {
                        delivery_type = 'now';
                    }

                    let subscribe = false;
                    if (document.getElementById('subscribe').value === 'on') {
                        subscribe = true;
                    }

                    const formData = new FormData();

                    formData.append('full_name', document.getElementById('name').value);
                    formData.append('email', document.getElementById('email').value);
                    formData.append('subscribe', subscribe);
                    formData.append('phone', document.getElementById('phone').value);
                    formData.append('delivery_address', document.getElementById('address').value);
                    formData.append('delivery_type', delivery_type);
                    formData.append('delivery_time', document.getElementById('time_choice').value);
                    formData.append('comment', document.getElementById('comment').value);
                  
                    const soupId = window.localStorage.getItem('soup-selected');
                    if (soupId !== null) formData.append('soup_id', Number(soupId));

                    const mainCourseId = window.localStorage.getItem('main-course-selected');
                    if (mainCourseId !== null) formData.append('main_course_id', Number(mainCourseId));

                    const saladId = window.localStorage.getItem('salad-selected');
                    if (saladId !== null) formData.append('salad_id', Number(saladId));

                    const drinkId = window.localStorage.getItem('drink-selected');
                    if (drinkId !== null) formData.append('drink_id', Number(drinkId));

                    const dessertId = window.localStorage.getItem('dessert-selected');
                    if (dessertId !== null) formData.append('dessert_id', Number(dessertId));

                    for (let pair of formData.entries()) {
                        console.log(pair[0] + ': ' + pair[1] + ' (' + typeof pair[1] + ')');
                    }

                    updateNothingSelectedMessage();

                    fetch('https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=9fbacd36-e75b-4d34-839b-5d03ae7386eb', {
                        method: 'POST',
                        body: formData
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data['error']) {
                                showNotification(data['error']);
                            } else {
                                window.localStorage.removeItem('soup-selected');
                                window.localStorage.removeItem('main-course-selected');
                                window.localStorage.removeItem('salad-selected');
                                window.localStorage.removeItem('drink-selected');
                                window.localStorage.removeItem('dessert-selected');
                                showNotification('Спасибо за заказ!');
                                setTimeout(() => { location.reload(); }, 3000);
                            }
                        })
                        .catch((error) => {
                            console.error('Ошибка при отправке:', error);
                            showNotification('Произошла ошибка. Попробуйте снова.');
                        })

                
            });