import React, { useState } from "react";

const products = [
  // 🍎 FRUITS
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Bananas",
    price: 60,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Oranges",
    price: 80,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Mangoes",
    price: 150,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Grapes",
    price: 100,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Watermelon",
    price: 70,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Pineapple",
    price: 90,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Papaya",
    price: 75,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Strawberries",
    price: 180,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Pomegranate",
    price: 160,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Guava",
    price: 80,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Kiwi",
    price: 200,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=500&q=80",
  },

  // 🥕 VEGETABLES
  {
    id: 13,
    name: "Tomatoes",
    price: 40,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Potatoes",
    price: 50,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Carrots",
    price: 70,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Onions",
    price: 55,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Broccoli",
    price: 80,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Cabbage",
    price: 45,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "Spinach",
    price: 35,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Capsicum",
    price: 90,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 21,
    name: "Green Peas",
    price: 100,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 22,
    name: "Cucumber",
    price: 45,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 23,
    name: "Cauliflower",
    price: 65,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 24,
    name: "Beetroot",
    price: 60,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80",
  },

  // 🥛 DAIRY
  {
    id: 25,
    name: "Fresh Milk",
    price: 50,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 26,
    name: "Butter",
    price: 90,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 27,
    name: "Cheese",
    price: 150,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 28,
    name: "Curd",
    price: 45,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 29,
    name: "Paneer",
    price: 180,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 30,
    name: "Greek Yogurt",
    price: 120,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 31,
    name: "Chocolate Milk",
    price: 70,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 32,
    name: "Fresh Cream",
    price: 100,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80",
  },

  // 🍞 BAKERY
  {
    id: 33,
    name: "Brown Bread",
    price: 45,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 34,
    name: "White Bread",
    price: 40,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 35,
    name: "Croissant",
    price: 80,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 36,
    name: "Donuts",
    price: 100,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 37,
    name: "Chocolate Cake",
    price: 350,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 38,
    name: "Cupcake",
    price: 70,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 39,
    name: "Cookies",
    price: 90,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 40,
    name: "Garlic Bread",
    price: 110,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=500&q=80",
  },

  // 🍚 GROCERIES
  {
    id: 41,
    name: "Basmati Rice",
    price: 180,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 42,
    name: "Wheat Flour",
    price: 90,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 43,
    name: "Sugar",
    price: 50,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 44,
    name: "Salt",
    price: 25,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1518110925495-5aa4f8b5f7e4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 45,
    name: "Toor Dal",
    price: 140,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 46,
    name: "Moong Dal",
    price: 130,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 47,
    name: "Chana Dal",
    price: 110,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 48,
    name: "Cooking Oil",
    price: 160,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 49,
    name: "Tea Powder",
    price: 120,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 50,
    name: "Coffee Powder",
    price: 180,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80",
  },

  // 🥤 BEVERAGES
  {
    id: 51,
    name: "Orange Juice",
    price: 110,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 52,
    name: "Apple Juice",
    price: 120,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 53,
    name: "Green Tea",
    price: 150,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 54,
    name: "Mineral Water",
    price: 30,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 55,
    name: "Lemon Juice",
    price: 80,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f1d?auto=format&fit=crop&w=500&q=80",
  },

  // 🍫 SNACKS
  {
    id: 56,
    name: "Potato Chips",
    price: 40,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 57,
    name: "Chocolate",
    price: 100,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1548907040-4d42e2f8f0a5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 58,
    name: "Popcorn",
    price: 60,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 59,
    name: "Namkeen",
    price: 80,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2aa1ef6b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 60,
    name: "Mixed Nuts",
    price: 250,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=500&q=80",
  },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${product.name} added to cart! 🛒`);
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Groceries",
    "Beverages",
    "Snacks",
  ];

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1250px",
        margin: "auto",
      }}
    >
      <h1>🛒 Fresh Products</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />

      {/* CATEGORY FILTER */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              backgroundColor:
                category === item
                  ? "green"
                  : "#eeeeee",
              color:
                category === item
                  ? "white"
                  : "black",
              fontWeight: "bold",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* SORT */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Sort by: </strong>
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            fontSize: "15px",
          }}
        >
          <option value="default">
            Default
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>
        </select>
      </div>

      {/* PRODUCT COUNT */}
      <p>
        <strong>
          Showing {filteredProducts.length} products
        </strong>
      </p>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
          }}
        >
          <h2>❌ No products found</h2>
          <p>
            Try another product name or category.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            marginTop: "20px",
          }}
        >
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
                style={{
                  position: "relative",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                  backgroundColor: "white",
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.10)",
                }}
              >
                {/* WISHLIST BUTTON */}
                <button
                  onClick={() =>
                    toggleWishlist(product)
                  }
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    border: "none",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    fontSize: "23px",
                    cursor: "pointer",
                    boxShadow:
                      "0 2px 6px rgba(0,0,0,0.15)",
                    zIndex: 2,
                  }}
                >
                  {isWishlisted ? "❤️" : "🤍"}
                </button>

                {/* PRODUCT IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                {/* PRODUCT NAME */}
                <h2
                  style={{
                    fontSize: "20px",
                    marginTop: "15px",
                  }}
                >
                  {product.name}
                </h2>

                {/* CATEGORY */}
                <p
                  style={{
                    color: "#777",
                    margin: "5px 0",
                  }}
                >
                  {product.category}
                </p>

                {/* PRICE */}
                <p
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  ₹{product.price}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart 🛒
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;