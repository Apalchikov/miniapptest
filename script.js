<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DYNASTY - Официальный сайт</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Подключение шрифта Bebas Neue -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Главная секция -->
  <header class="hero-section">
    <div class="container">
      <h1 class="logo">DYNASTY</h1>
      <p class="slogan">Ваш стиль — ваша история.</p>
      <p class="about-text">DYNASTY — это ваша свобода самовыражения через стиль. Каждый образ становится частью вашей уникальной истории с качественной одеждой, отражающей современные тренды и индивидуальность.</p>
      <button onclick="scrollToSection('collections')">Просмотреть коллекции</button>
    </div>
  </header>

  <!-- Секция "Коллекции" -->
  <section id="collections" class="section collections-section">
    <div class="container">
      <h2>Наши коллекции</h2>
      <div class="collection-grid">
        <!-- Коллекция MINIMAL -->
        <div class="collection-item" onclick="showMinimalShowcase()">
          <img src="https://cdn.zenden.cloud/oeR8tNVmuRHmH_25FzuAnTVGysUaT0qU17nqj7Bfya8/resize:fit:1440:600:false:false:ce:0:0/aHR0cHM6Ly9iYWNrZW5kLnNhbGFtYW5kZXIucnUvdXBsb2FkL2libG9jay8wN2QvanEwaDlkMXM0NDk4dG14MjE2dDducGt2bDIwMm0yeGQucG5n.png" alt="MINIMAL Collection">
          <div class="collection-item-content">
            <h3>MINIMAL</h3>
            <p>Минимализм в каждом детале.</p>
          </div>
        </div>

        <!-- Коллекция FIGHTER -->
        <div class="collection-item" onclick="showFighterShowcase()">
          <img src="https://img08.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/b/8a/b8a18c1b099ac560f5c1fc27618ed838.jpg" alt="FIGHTER Collection">
          <div class="collection-item-content">
            <h3>FIGHTER</h3>
            <p>Сила и уверенность в каждом образе.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Витрина коллекции MINIMAL -->
  <section id="minimal-showcase" class="section showcase-section hidden">
    <div class="container">
      <h2>Коллекция MINIMAL</h2>
      <p>Минимализм в каждой детали. Простота и элегантность.</p>
      <div class="product-grid">
        <!-- Товар 1 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Белая рубашка">
          <h4>Белая рубашка</h4>
          <span>$60</span>
          <button onclick="addToCart('Белая рубашка', 60)">Добавить в корзину</button>
        </div>

        <!-- Товар 2 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Черные брюки">
          <h4>Черные брюки</h4>
          <span>$80</span>
          <button onclick="addToCart('Черные брюки', 80)">Добавить в корзину</button>
        </div>

        <!-- Товар 3 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Классические туфли">
          <h4>Классические туфли</h4>
          <span>$120</span>
          <button onclick="addToCart('Классические туфли', 120)">Добавить в корзину</button>
        </div>

        <!-- Товар 4 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Простой свитер">
          <h4>Простой свитер</h4>
          <span>$70</span>
          <button onclick="addToCart('Простой свитер', 70)">Добавить в корзину</button>
        </div>
      </div>
      <button onclick="openCart()">Посмотреть корзину</button>
      <button onclick="goBack()">Назад к коллекциям</button>
    </div>
  </section>

  <!-- Витрина коллекции FIGHTER -->
  <section id="fighter-showcase" class="section showcase-section hidden">
    <div class="container">
      <h2>Коллекция FIGHTER</h2>
      <p>Сила и уверенность в каждом образе. Агрессивный стиль для настоящих бойцов.</p>
      <div class="product-grid">
        <!-- Товар 1 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Спортивный костюм">
          <h4>Спортивный костюм</h4>
          <span>$90</span>
          <button onclick="addToCart('Спортивный костюм', 90)">Добавить в корзину</button>
        </div>

        <!-- Товар 2 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Кроссовки">
          <h4>Кроссовки</h4>
          <span>$100</span>
          <button onclick="addToCart('Кроссовки', 100)">Добавить в корзину</button>
        </div>

        <!-- Товар 3 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Бейсболка">
          <h4>Бейсболка</h4>
          <span>$25</span>
          <button onclick="addToCart('Бейсболка', 25)">Добавить в корзину</button>
        </div>

        <!-- Товар 4 -->
        <div class="product-item">
          <img src="https://kingboxer.ru/upload/iblock/69e/69e740686b62ccba98f5db40a85e9694.jpg" alt="Тренировочный жилет">
          <h4>Тренировочный жилет</h4>
          <span>$45</span>
          <button onclick="addToCart('Тренировочный жилет', 45)">Добавить в корзину</button>
        </div>
      </div>
      <button onclick="openCart()">Посмотреть корзину</button>
      <button onclick="goBack()">Назад к коллекциям</button>
    </div>
  </section>

  <!-- Корзина (всегда видна в правом нижнем углу) -->
  <div id="cart-preview" class="cart-preview">
    <button id="cart-preview-toggle" onclick="toggleCartPreview()">Корзина ($0)</button>
    <ul id="cart-preview-items"></ul>
  </div>

  <!-- Модальное окно корзины -->
  <section id="cart-modal" class="modal hidden">
    <div class="modal-content">
      <h2>Корзина</h2>
      <ul id="cart-modal-items"></ul>
      <p id="cart-modal-total">Общая сумма: $0</p>
      <button onclick="clearCart()">Очистить корзину</button>
      <button onclick="closeCart()">Закрыть</button>
    </div>
  </section>

  <!-- Секция "Контакты" -->
  <section id="contacts" class="section">
    <div class="container">
      <h2>Свяжитесь с нами</h2>
      <p>Напишите нам в Telegram:</p>
      <a href="https://t.me/dynastybrand" target="_blank">Telegram</a>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
