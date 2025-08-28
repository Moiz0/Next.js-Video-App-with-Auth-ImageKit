# 🎬 Next.js Video App with Auth & ImageKit

This project is a **Next.js 13 (App Router)** application built with:

- ✅ **NextAuth.js** for authentication  
- ✅ **MongoDB & Mongoose** for database  
- ✅ **ImageKit** for video/image upload & transformations  
- ✅ **TypeScript** for type safety  
- ✅ **Bcrypt.js** for password hashing  

---
## ⚡ Features

- 🔑 **User authentication** (register & login)  
- 🔒 **Passwords stored securely with bcrypt**  
- 🎥 **Video model** with transformation options (height, width, quality, controls)  
- ☁️ **ImageKit integration** for secure uploads  
- 📦 **API client** with reusable fetch wrapper  
- 🛠 **TypeScript interfaces** for type safety  

---
## ⚡ Authentication Flow
Register: /register → Stores hashed password in MongoDB

Login: /login → Uses NextAuth CredentialsProvider

Sessions: JWT-based authentication

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/nextjs-video-app.git
cd nextjs-video-app

 
MONGODB_URI=mongodb+srv://your_user:your_pass@cluster.mongodb.net/dbname
NEXTAUTH_SECRET=your_super_secret
NEXTAUTH_URL=http://localhost:3000

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/

