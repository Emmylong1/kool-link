# Kool Link ❄️

A modern, responsive landing page for **Kool Link Iceblocks** — built with React and Tailwind CSS.  
It includes an order form connected to **EmailJS** and a WhatsApp quick-order CTA for fast customer conversions.

---

## 🚀 Features

- ✅ Fully responsive landing page UI
- ✅ WhatsApp “Order Now” deep link with pre-filled message
- ✅ Contact/Order form sends orders directly to email via **EmailJS**
- ✅ Smooth scroll navigation
- ✅ Clean, modular React section-based structure
- ✅ Tailwind CSS styling

---

## 🧱 Tech Stack

- **React** (CRA)
- **Tailwind CSS**
- **EmailJS** (client-side email delivery)

---

## 📂 Project Structure

```txt
src/
  components/
  config/
    contact.js
  hooks/
  sections/
    HeaderHero.jsx
    About.jsx
    WhyChooseUs.jsx
    Products.jsx
    Delivery.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css
  index.js
✅ Getting Started
1) Install Dependencies
npm install
2) Add Environment Variables
Create a .env file in the project root:

REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
After adding .env, restart your dev server.

3) Run the App
npm start
App will run on:

http://localhost:3000
📩 EmailJS Setup Notes
Your EmailJS template should include these variables:

{{full_name}}

{{phone}}

{{location}}

{{ice_type}}

{{quantity}}

{{message}}

💬 WhatsApp Ordering
WhatsApp link is configured in:

src/config/contact.js

Example:

export const WHATSAPP_NUMBER = "2348100032611";
export const WHATSAPP_TEXT = "Hi Kool Link! I want to order ice blocks...";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
📦 Deployment


You can deploy easily on:

Vercel

Netlify

GitHub Pages

👤 Author
Built by Emmanuel (Otti011)
GitHub: https://github.com/Otti011


---
