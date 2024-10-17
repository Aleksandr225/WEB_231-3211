
// добавляем обработчик событий и определяем переменные для секций
document.addEventListener("DOMContentLoaded", () => {
  const soups = document.querySelector("#soups .dishes");
  const mains = document.querySelector("#mains .dishes");
  const drinks = document.querySelector("#drinks .dishes");
  const starts = document.querySelector("#starts .dishes");
  const deserts = document.querySelector("#deserts .dishes");



  document.querySelectorAll(".filters button").forEach(filter => {
    filter.addEventListener("click", (event) => {
        const section = event.target.closest("section");
        const previouslyActive = section.querySelector(".filters button.active");
        if (previouslyActive === event.target) {
            event.target.classList.remove("active");
            filterDishes(section, "all");
        } else {
            section.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");
            const kind = event.target.getAttribute("data-kind");
            filterDishes(section, kind);
        }
    });
});

const filterDishes = (section, kind) => {
    const sectionDishes = section.querySelectorAll(".dish");
    sectionDishes.forEach(dishElement => {
        const dishKeyword = dishElement.getAttribute("data-dish");
        const dish = dishes.find(d => d.keyword === dishKeyword);
        if (kind === "all" || dish.kind.includes(kind)) {
            dishElement.style.display = "block";
        } else {
            dishElement.style.display = "none";
        }
    });
};




  // сортируем массив объектов dishes по алфавиту по name 
  dishes.sort((a, b) => a.name.localeCompare(b.name));



  dishes.forEach(dish => { 
      const dishElement = document.createElement("div");
      dishElement.classList.add("dish");
      dishElement.setAttribute("data-dish", dish.keyword);

      //заплняем элементы блюда информацией 
      dishElement.innerHTML = ` 
          <img src="${dish.image}" alt="${dish.name}">
          <div class="dish-info">
              <p class="price">${dish.price}₽</p>
              <p class="name">${dish.name}</p>
              <p class="weight">${dish.count}</p>
              <button class="add">Добавить</button>
          </div>
      `;

      if (dish.category === "soup") {
          soups.appendChild(dishElement);
      } else if (dish.category === "main") {
          mains.appendChild(dishElement);
      } else if (dish.category === "juice") {
          drinks.appendChild(dishElement);
      } else if (dish.category === "starter") {
          starts.appendChild(dishElement);
      } else if (dish.category === "desert") {
          deserts.appendChild(dishElement);
      }
         
  });


  
  
/*


const buttons = document.querySelectorAll(".but0");
const sections = {
  soups: document.getElementById("soups"),
  mains: document.getElementById("mains"),
  drinks: document.getElementById("drinks"),
  starts: document.getElementById("starts"),
  deserts: document.getElementById("deserts"),
};

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const kind = button.dataset.category;
    const parentSection = button.closest("section").id;
    const section = sections[parentSection];
    const dishes = section.querySelector(".dishes"); // Получаем .dishes


if (dishes.style.display === "none") {
      dishes.style.display = "grid";
    } else {
      dishes.style.display = "none";
    }*/


  //определение элементов формы заказа
  const orderForm = {
      soup: document.getElementById("selected-soup"),
      starter: document.getElementById("selected-start"),
      main: document.getElementById("selected-main-dish"),
      desert: document.getElementById("selected-desert"),
      juice: document.getElementById("selected-drink"),
      totalPrice: document.querySelector("#total-price .price-value")
  };
// инициалиируем выбранные блюда
  let selectedDishes = {
      soup: null,
      starter: null,
      main: null,
      desert: null,
      juice: null
  };



  
// добавляем переменные
  const updateOrder = () => {
      let total = 0;
      let isAnyDishSelected = false;
// обновляем информацию о блюдах если блюдо выбрано то показана информация если нет то показано не выбрано 
      for (let category in selectedDishes) {
          if (selectedDishes[category]) {
              orderForm[category].textContent = `${selectedDishes[category].name} ${selectedDishes[category].price}₽`;
              total += selectedDishes[category].price;
              isAnyDishSelected = true;
          } else {
              orderForm[category].textContent = "Не выбрано";
          }
      }
// определение элементов для отображения сообщений и блоков заказа
      const noSelectionMessage = document.getElementById("no-selection-message");
      const soupOrder = document.getElementById("soup-order");
      const startOrder = document.getElementById("start-order");
      const mainOrder = document.getElementById("main-order");
      const desertOrder = document.getElementById("desert-order");
      const drinkOrder = document.getElementById("drink-order");
      const totalPriceBlock = document.getElementById("total-price-block");

      //отображение или скрытие элементов в зависимости выбрано блюдо или нет
      if (!isAnyDishSelected) {
          noSelectionMessage.style.display = 'block';
          soupOrder.style.display = 'none';
          startOrder.style.display = 'none';
          mainOrder.style.display = 'none';
          desertOrder.style.display = 'none';
          drinkOrder.style.display = 'none';
          totalPriceBlock.style.display = 'none';
      } else {
          noSelectionMessage.style.display = 'none';
          soupOrder.style.display = 'block';
          startOrder.style.display = 'block';
          mainOrder.style.display = 'block';
          desertOrder.style.display = 'block';
          drinkOrder.style.display = 'block';
          totalPriceBlock.style.display = 'block';
          orderForm.totalPrice.textContent = `${total}₽`;
      }
  };


  // обрабатывает события для каждого элемента чтобы обновлять заказ
  document.querySelectorAll(".dish").forEach(dishElement => {
      dishElement.addEventListener("click", (event) => {
          const dishKeyword = dishElement.getAttribute("data-dish");
          const dish = dishes.find(d => d.keyword === dishKeyword);

          if (dish) {
              selectedDishes[dish.category] = dish;
              updateOrder();
          }
      });
  });


});


