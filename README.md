# Petner 🐾

**Petner** is a comprehensive pet funeral and memorial service application designed to honor the unconditional love pets give us. It provides a one-stop solution for aftercare arrangements, memorial shopping, community support, and digital pet archives.

## 🔗 Live Demo & Repository

- **Live Demo:** [https://ent-app-c8of.vercel.app/](https://ent-app-c8of.vercel.app/)
  > **⚠️ Note:** Depending on your network region, a **VPN** might be required to access the live demo (hosted on Vercel).
- **GitHub Repository:** [https://github.com/DamKilling/ent.app](https://github.com/DamKilling/ent.app)

---

## 🛠️ Tech Stack

This project is built using modern web technologies to ensure high performance and type safety:

- **Frontend Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **AI Integration:** [Deepseek API](https://ai.google.dev/) (For Pet Memorial AI Companion)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📱 Application Overview

Petner offers a clean and soothing interface with five core modules accessible via the top navigation bar.

### 🌟 Key Features

#### 1. Home 🏠
The central hub for all services.
- **Service Guide:** Quick access to "Quick Booking" and "Afterlife Process".
- **Shortcuts:** Store Booking, Memorials, About Us, and Partnerships.

#### 2. Services 🕯️
Professional aftercare planning.
- View detailed processes for cremation and ceremonies.
- **Online Booking:** Customize packages (e.g., Basic Farewell, Premium Memorial).

#### 3. Shop 🛍️
Cherish precious memories with curated products.
- Browse pet memorials (Urns, pendants).
- Full shopping cart and checkout functionality.

#### 4. Community 💬
Share memories and find support.
- **Social Feed:** "Follow", "Discover", and "Nearby" tabs.
- **Interact:** Post photos/text, like, and comment to support others.

#### 5. Profile & AI Companion 👤
Personalized management and emotional support.
- **Order Management:** Track service status.
- **Pet Memorial AI Model:** Powered by **Google Gemini**, this feature allows users to chat with an AI representation of their beloved pet for emotional comfort.

---

## 📂 Project Structure

```text
├── api/                # API integrations (e.g., Gemini AI)
├── components/         # Reusable UI components
├── App.tsx             # Main application component
├── index.tsx           # Entry point
├── vite.config.ts      # Vite configuration
└── vercel.json         # Vercel deployment settings
