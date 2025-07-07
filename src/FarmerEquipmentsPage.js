import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Tractor, Users, Shield, Truck, Phone, Mail, MapPin,
  ShoppingCart, Plus, Minus, X
} from "lucide-react";

const equipmentData = [
  {
    id: 1,
    name: "Premium Buffalo",
    category: "Buffalo",
    price: 2500,
    image: "https://via.placeholder.com/300x200",
    description: "Strong and reliable buffalo for heavy farm work and dairy production",
    features: ["High milk production", "Strong work capacity", "Disease resistant", "Low maintenance"],
    inStock: true,
  },
  {
    id: 2,
    name: "Murrah Buffalo",
    category: "Buffalo",
    price: 3000,
    image: "https://via.placeholder.com/300x200",
    description: "Premium Murrah breed buffalo known for excellent milk yield",
    features: ["Excellent milk yield", "Hardy breed", "Good reproduction", "Long productive life"],
    inStock: true,
  },
  {
    id: 3,
    name: "Holstein Dairy Cow",
    category: "Cows",
    price: 1800,
    image: "https://via.placeholder.com/300x200",
    description: "High-yielding Holstein dairy cow for commercial milk production",
    features: ["Premium milk quality", "High yield breed", "Vaccinated & healthy", "Expert breeding"],
    inStock: true,
  },
  {
    id: 4,
    name: "Jersey Cow",
    category: "Cows",
    price: 1500,
    image: "https://via.placeholder.com/300x200",
    description: "Jersey breed cow known for rich milk with high butterfat content",
    features: ["Rich milk quality", "Efficient feed conversion", "Gentle temperament", "Good for small farms"],
    inStock: true,
  },
  {
    id: 5,
    name: "John Deere 5050D",
    category: "Tractors",
    price: 45000,
    image: "https://via.placeholder.com/300x200",
    description: "50 HP tractor perfect for medium-scale farming operations",
    features: ["50 HP engine", "Fuel efficient", "Multiple attachments", "Service support"],
    inStock: true,
  },
  {
    id: 6,
    name: "Mahindra 575 DI",
    category: "Tractors",
    price: 38000,
    image: "https://via.placeholder.com/300x200",
    description: "Reliable 47 HP tractor with excellent performance and durability",
    features: ["47 HP power", "Advanced hydraulics", "Comfortable cabin", "Low maintenance"],
    inStock: false,
  },
];

export default function FarmerEquipmentsPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
const navigate = useNavigate();

  const categories = ["All", "Buffalo", "Cows", "Tractors"];

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) removeFromCart(id);
    else setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity } : i));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const getTotalPrice = () => cart.reduce((total, i) => total + i.price * i.quantity, 0);
  const getTotalItems = () => cart.reduce((sum, i) => sum + i.quantity, 0);

  const filteredItems = selectedCategory === "All"
    ? equipmentData
    : equipmentData.filter((i) => i.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <header style={{ padding: 20, backgroundColor: "#fff", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ddd" }}>
        <div style={{ fontSize: 24, fontWeight: "bold", color: "#228B22" }}>
          <Tractor size={24} style={{ marginRight: 8 }} />
          FarmEquip Store
        </div>
        <div>
          <button onClick={() => setShowCart(!showCart)} style={{ marginRight: 10 }}>
            <ShoppingCart size={20} /> Cart ({getTotalItems()})
          </button>
          <button onClick={() => navigate("/Login")} style={{ marginRight: 10 }}>Login</button>
          <button onClick={() => navigate("/register")} style={{ backgroundColor: "#228B22", color: "#fff", padding: "5px 10px" }}>Register</button>
        </div>
      </header>

      {/* Category Filter */}
      <div style={{ padding: 20, textAlign: "center" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: "0 10px",
              padding: "6px 12px",
              backgroundColor: selectedCategory === cat ? "#228B22" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#228B22",
              border: "1px solid #228B22",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 20, justifyContent: "center" }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: 8, width: 300, overflow: "hidden" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
            <div style={{ padding: 16 }}>
              <h3 style={{ fontSize: 18, color: "#228B22", marginBottom: 8 }}>{item.name}</h3>
              <p style={{ fontSize: 14, marginBottom: 8 }}>{item.description}</p>
              <ul style={{ fontSize: 12, marginBottom: 8 }}>
                {item.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
              <p style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>${item.price}</p>
              <button
                onClick={() => addToCart(item)}
                disabled={!item.inStock}
                style={{
                  width: "100%",
                  padding: 10,
                  backgroundColor: item.inStock ? "#228B22" : "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: item.inStock ? "pointer" : "not-allowed"
                }}
              >
                {item.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div style={{
          position: "fixed", top: 0, right: 0, width: 300, height: "100%",
          backgroundColor: "#fff", borderLeft: "1px solid #ccc", padding: 20, overflowY: "auto"
        }}>
          <h3 style={{ marginBottom: 20 }}>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: 16, borderBottom: "1px solid #ddd", paddingBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <strong>{item.name}</strong><br />
                      ${item.price}
                    </div>
                    <div>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>X</button>
                    </div>
                  </div>
                </div>
              ))}
              <p><strong>Total:</strong> ${getTotalPrice()}</p>
              <button style={{ backgroundColor: "#228B22", color: "#fff", padding: 10, width: "100%", marginTop: 10 }}>
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
