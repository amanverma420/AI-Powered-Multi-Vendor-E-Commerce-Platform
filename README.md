# 🛒 MultiCart — Multi-Vendor E-Commerce Platform

> A full-stack, production-ready multi-vendor e-commerce platform built with Next.js 16, MongoDB, Stripe, and AI-powered features.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Roles & Permissions](#roles--permissions)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Database Models](#database-models)
- [Deployment](#deployment)


## Overview

MultiCart is a scalable, multi-vendor e-commerce platform where **users** shop, **vendors** sell, and **admins** manage everything — all in one unified system. It supports online payments via Stripe, cash-on-delivery, OTP-based delivery verification, AI-powered chat suggestions, product reviews, return/refund flows, and real-time analytics dashboards.



## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Database | MongoDB + Mongoose |
| Auth | NextAuth v5 (Credentials + Google OAuth) |
| State Management | Redux Toolkit |
| Payments | Stripe |
| Image Storage | Cloudinary |
| Email | Nodemailer (Gmail SMTP) |
| AI | Google Gemini API (`@google/genai`) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Charts | Recharts |



## Features

### 🧑 User Features
- Register / Login with email+password or Google OAuth
- Browse products by category, shop, rating, price range
- Product detail pages with image gallery, reviews, highlights
- Add to cart, update quantity, remove items
- Checkout with address form — Cash on Delivery or Stripe
- Order tracking with live status steps
- Cancel or return orders (within replacement window)
- Submit product reviews with optional image upload
- Real-time support chat with vendors/admin
- AI-powered reply suggestions in chat

### 🏪 Vendor Features
- Register as vendor, submit shop details (name, address, GST)
- Dashboard with sales analytics, order charts, product performance
- Add products with 4 images, categories, sizes, policies (warranty, free delivery, COD, replacement days), detail points
- Edit/update products (triggers re-verification)
- Enable/disable product listings
- View and manage incoming orders
- Mark orders for delivery — triggers OTP to buyer
- Verify delivery OTP to confirm order completion
- Chat with buyers and admin

### 🔐 Admin Features
- Admin dashboard with platform-wide analytics (vendors, products, orders, earnings)
- Approve or reject vendor registration requests (with reason)
- Approve or reject product listing requests (with reason)
- View all orders across all vendors
- Vendor-wise breakdown of orders, cancellations, returns, earnings
- Pie/bar charts for order status and vendor performance
- Chat with vendors

### 💬 AI Chat Suggestions
- Powered by Google Gemini
- Context-aware reply suggestions based on role (user/vendor/admin)
- Suggestions refresh on demand per last received message

## Roles & Permissions

| Action | User | Vendor | Admin |
|---|---|---|---|
| Browse & buy products | ✅ | ❌ | ❌ |
| Manage cart & checkout | ✅ | ❌ | ❌ |
| Add/edit products | ❌ | ✅ | ❌ |
| Approve vendors/products | ❌ | ❌ | ✅ |
| View all orders | ❌ | Own only | ✅ |
| Update order status | ❌ | Own only | ❌ |
| Chat | ✅ | ✅ | ✅ |
| Analytics dashboard | ❌ | Own | Platform-wide |

> **Note:** Only one Admin can exist per platform. The Admin role is blocked if an admin already exists.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── admin/          # Vendor & product approval endpoints
│   │   ├── auth/           # NextAuth + registration
│   │   ├── cart/           # Add, get, update, remove cart items
│   │   ├── chat/           # Chat messages, active users, AI suggestions
│   │   ├── currentUser/    # Fetch authenticated user
│   │   ├── order/          # Create, cancel, return, update, verify OTP
│   │   ├── product/        # All products, add review
│   │   ├── search/         # Full-text + filter product search
│   │   ├── user/           # Edit profile, edit role+phone
│   │   └── vendor/         # Add/update product, vendor details, approval
│   ├── cart/               # Cart page
│   ├── category/           # Browse by category with filters
│   ├── checkout/[productId]/ # Checkout flow
│   ├── login/              # Login page
│   ├── orders/             # User order history + tracking
│   ├── profile/            # User/Vendor profile edit
│   ├── shop/               # All shops listing
│   ├── shop-details/[id]/  # Individual shop + products
│   ├── signup/             # Registration
│   ├── support/            # Chat support page
│   ├── update-product/[id]/ # Vendor product update
│   ├── view-product/[id]/  # Product detail + reviews
│   └── page.tsx            # Root page (role-based render)
├── component/              # All UI components
├── hooks/                  # Data-fetching hooks (Redux dispatch)
├── lib/                    # DB connection, Cloudinary, Mailer
├── models/                 # Mongoose schemas (User, Product, Order)
├── redux/                  # Store, slices (user, vendor, order)
├── auth.ts                 # NextAuth configuration
└── proxy.ts                # Middleware for route protection
```

## Screenshots

> Replace the placeholder comments below with actual screenshot images.

### Home / User Dashboard
![Home Page](./images/1st.png) 
(./images/2.png) 
(./images/3.png) 

### Product Listing & Category Browse
(./images/3.png) 

### Product Detail Page
(./images/4.png) 

### Cart & Checkout
(./images/5.png) 
(./images/6.png) 
(./images/7.png) 

### Order Tracking
(./images/7.png) 
(./images/8.png) 

### Vendor Dashboard
(./images/9.png) 
(./images/10.png) 

### Admin Dashboard
(./images/11.png) 
(./images/12.png) 
(./images/13.png) 
(./images/14.png) 


### Chat / Support
(./images/15.png) 
(./images/16.png) 

## Getting Started

### Prerequisites

- Node.js >= 20
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account
- Stripe account
- Google OAuth credentials
- Gmail App Password (for Nodemailer)
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/multicart.git
cd multicart

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root with the following:

```env
# MongoDB
MONGODB_URL=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/

# NextAuth
AUTH_SECRET=your_nextauth_secret
NEXT_BASE_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Gmail (Nodemailer)
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=your_app_password

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key
```

---

## API Reference

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| GET/POST | `/api/auth/[...nextauth]` | NextAuth handlers |
| GET | `/api/currentUser` | Get authenticated user |

### Cart
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/cart/add` | Add product to cart |
| GET | `/api/cart/get` | Get user's cart |
| POST | `/api/cart/update` | Update item quantity |
| POST | `/api/cart/remove` | Remove item from cart |

### Orders
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/order/create-cod` | Place COD order |
| POST | `/api/order/online-pay` | Place Stripe order + get checkout URL |
| GET | `/api/order/allOrder` | Fetch all orders |
| POST | `/api/order/cancel` | Cancel an order |
| POST | `/api/order/return` | Return a delivered order |
| POST | `/api/order/update-status` | Update order status (vendor) |
| POST | `/api/order/verify-delivery-otp` | Verify OTP and mark delivered |
| POST | `/api/order/stripe/webhook` | Stripe webhook handler |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/product/all-products-data` | Fetch all products |
| POST | `/api/product/add-review` | Add a product review |
| GET | `/api/search` | Search + filter products |

### Vendor
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/vendor/add-product` | Add a new product |
| PUT | `/api/vendor/update-product` | Update existing product |
| POST | `/api/vendor/active-product` | Enable/disable product |
| POST | `/api/vendor/update-details` | Submit shop details |
| POST | `/api/vendor/verify-again` | Re-submit for verification |
| GET | `/api/vendor/all-vendor` | Get all vendors |

### Admin
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admin/update-vendor-status` | Approve/reject vendor |
| POST | `/api/admin/update-product-status` | Approve/reject product |
| GET | `/api/admin/check-admin` | Check if admin exists |

### Chat
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/chat/active-users` | Get users to chat with |
| GET | `/api/chat/get` | Get messages with a user |
| POST | `/api/chat/send` | Send a message |
| POST | `/api/chat/suggestions` | Get AI reply suggestions |

---

## Database Models

### User
Fields: `name`, `email`, `password`, `image`, `role` (user/vendor/admin), `phone`, `shopName`, `businessAddress`, `gstNumber`, `verificationStatus`, `cart[]`, `orders[]`, `vendorProducts[]`, `chats[]`

### Product
Fields: `title`, `description`, `price`, `stock`, `images (1–4)`, `category`, `isWearable`, `sizes[]`, `vendor`, `verificationStatus`, `isActive`, `replacementDays`, `freeDelivery`, `warranty`, `payOnDelivery`, `detailsPoints[]`, `reviews[]`

### Order
Fields: `products[]`, `buyer`, `productVendor`, `productsTotal`, `deliveryCharge`, `serviceCharge`, `totalAmount`, `paymentMethod`, `isPaid`, `orderStatus`, `address`, `returnedAmount`, `deliveryOtp`, `deliveryDate`

---

## Key Flows

### Order & Delivery Flow
```
User adds to cart
  → Checkout (COD or Stripe)
    → Order created (pending)
      → Vendor confirms → ships
        → Vendor triggers delivery → OTP sent to buyer email
          → Vendor enters OTP → Order marked delivered
            → Buyer can return within replacementDays window
```

### Vendor Onboarding Flow
```
Register → Select "Vendor" role
  → Submit shop details (name, address, GST)
    → Admin reviews → Approves or Rejects
      → If approved → Access vendor dashboard
        → Add products → Admin reviews → Approves
          → Vendor enables product → Visible to buyers
```

---

## Deployment

This project is optimized for deployment on **Vercel**.

```bash
npm run build
```

For Stripe webhooks in production, configure your webhook endpoint at:
```
https://your-domain.com/api/order/stripe/webhook
```

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## License

This project is private. All rights reserved.

---

> Built with ❤️ using Next.js, MongoDB, Stripe, and Google Gemini.