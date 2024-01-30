// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   // Define the product data using useState
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Ohrensessel Josslyn",
//       price: 499.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 2,
//       name: "Sessel Sofie",
//       price: 249.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 4,
//       name: "Schlafsessel Rovigo",
//       price: 239.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 6,
//       name: "Sessel Little",
//       price: 119.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 5,
//       name: "Sessel Peacock",
//       price: 599.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 3,
//       name: "Sessel Anna",
//       price: 149.99,
//       currency: "EUR",
//       image:
//         "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     // Add more product objects as needed
//   ]);

//   return (
//     <>
//       <div className="bg-green-50 text-center w-full h-auto">
//         <div className="bg-green-100 w-full p-2">
//           <h1 className="text-2xl text-black font-semibold">
//             React+Redux Shopping Cart Example
//           </h1>
//           <h1 className="text-xl text-black">Products</h1>
//         </div>

//         <div className="flex w-full">
//           <div className="h-auto p-4 flex flex-wrap items-center justify-evenly bg-green-50 w-[60%]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="card w-[300px] h-80 bg-green-200 flex flex-col mt-4 rounded-md"
//               >
//                 <img className="p-4 Image" src={product.image} alt="" />
//                 <div className="flex items-center justify-between w-full px-5">
//                   <div className="flex flex-col items-center justify-evenly">
//                     <h1 className="text-base text-black font-semibold md:text-lg">
//                       {product.name}
//                     </h1>
//                     <p className="text-base font-semibold text-black">
//                       {product.price}
//                     </p>
//                   </div>
//                   <div className="add-remove-btn flex flex-col items-center justify-evenly w-1/2 h-[80px]">
//                     <button id="add-btn" className="outline-none bg-blue-700 rounded-md text-xs w-full md:text-base  text-white px-1 py-1">
//                       Add to Cart
//                     </button>
//                     <button id="remove-btn" className="outline-none bg-yellow-700 rounded-md text-xs w-full md:text-base  text-white px-1 py-1">
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div id="cart" className="w-[40%] h-[340px] bg-green-300 p-4">
//             <h1 className="text-xl font-light text-black py-3">Shoping Cart</h1>
//             <div className="flex flex-col items-center justify-start space-y-4 w-full rounded-lg h-[200px] bg-red-300 overflow-y-auto p-4 scroll-container">
//               <div className="flex items-center justify-between px-3 w-full bg-red-400 rounded-md p-1">
//                 <div className="flex flex-row items-center justify-between">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     class="w-6 h-6 bg-red-600 p-[2px] rounded-full mr-2 remove-btn"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                   <h1 className="text-lg text-black font-semibold">
//                     Item Name
//                   </h1>
//                 </div>
                
//                 <h1 className="price text-lg text-black font-semibold">
//                   Item Price
//                 </h1>
//               </div>
              
              
//             </div>
//               <h1 id="total" className="text-2xl text-black font-semibold py-4">Totale Items Price :</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    // Your product data
    {
            id: 1,
            name: "Ohrensessel Josslyn",
            price: 499.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            name: "Sessel Sofie",
            price: 249.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 4,
            name: "Schlafsessel Rovigo",
            price: 239.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 6,
            name: "Sessel Little",
            price: 119.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 5,
            name: "Sessel Peacock",
            price: 599.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 3,
            name: "Sessel Anna",
            price: 149.99,
            currency: "EUR",
            image:
              "https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  ]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotalPrice(totalPrice - product.price);
  };

  const isItemInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <>
      <div className="bg-green-50 text-center w-full h-auto">
        <div className="bg-green-100 w-full p-2">
          <h1 className="text-2xl text-black font-semibold">
            React+Redux Shopping Cart Example
          </h1>
          <h1 className="text-xl text-black">Products</h1>
        </div>

        <div className="flex w-full">
          <div className="h-auto p-4 flex flex-wrap items-center justify-evenly bg-green-50 w-[60%]">
            {products.map((product) => (
              <div
                key={product.id}
                className="card w-[300px] h-80 bg-green-200 flex flex-col mt-4 rounded-md"
              >
                <img className="p-4 Image" src={product.image} alt="" />
                <div className="flex items-center justify-between w-full px-5">
                  <div className="flex flex-col items-center justify-evenly">
                    <h1 className="text-base text-black font-semibold md:text-lg">
                      {product.name}
                    </h1>
                    <p className="text-base font-semibold text-black">
                      {product.price}
                    </p>
                  </div>
                  <div className="add-remove-btn flex flex-col items-center justify-evenly w-1/2 h-[80px]">
                    {isItemInCart(product) ? (
                      <button
                        className="outline-none bg-yellow-700 rounded-md text-xs w-full md:text-base text-white px-1 py-1"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="outline-none bg-blue-700 rounded-md text-xs w-full md:text-base text-white px-1 py-1"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="cart" className="w-[40%] h-[340px] bg-green-300 p-4">
            <h1 className="text-xl font-light text-black py-3">Shopping Cart</h1>
            <div className="flex flex-col items-center justify-start space-y-4 w-full rounded-lg h-[200px] bg-red-300 overflow-y-auto p-4 scroll-container">
              {cart.map((cartItem) => (
                <div
                  className="flex items-center justify-between px-3 w-full bg-red-400 rounded-md p-1"
                  key={cartItem.id}
                >
                  <div className="flex flex-row items-center justify-between">
                    <h1 className="text-lg text-black font-semibold">
                      {cartItem.name}
                    </h1>
                  </div>
                  <h1 className="price text-lg text-black font-semibold">
                    ${cartItem.price}
                  </h1>
                </div>
              ))}
            </div>
            <h1 id="total" className="text-2xl text-black font-semibold py-4">
              Total Items Price: {totalPrice} $
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

