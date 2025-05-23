const books = [
      {
        id: 1,
        title: "Cricket My Style",
        author: "Kapil Dev",
        image: "https://covers.openlibrary.org/b/id/10237243-L.jpg"
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
      },
      {
        id: 3,
        title: "The Discovery of India",
        author: "Jawaharlal Nehru",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://covers.openlibrary.org/b/id/8225263-L.jpg"
      }
    ];

    const bookList = document.getElementById("book-list");
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    let cart = [];

    function renderBooks() {
      books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>by ${book.author}</p>
          <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(card);
      });
    }

    function addToCart(bookId) {
      const book = books.find(b => b.id === bookId);
      cart.push(book);
      updateCart();
    }

    function updateCart() {
      cartCount.innerText = cart.length;
      cartItems.innerHTML = "";
      cart.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} - ${book.author}`;
        cartItems.appendChild(li);
      });
    }

    renderBooks();