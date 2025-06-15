
## 📦 Features

- Local username/password login using Passport.js
- Rate limiter for login route to prevent brute force attacks
- Organized MVC structure
- Express sessions and middleware
- Easy to extend with JWT, MongoDB, OAuth, etc.

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---


---

### 📥 Install Dependencies

```bash
npm install
```

---

### ⚙️ Setup

1. Clone the repo:
   ```bash
   git clone https://https://github.com/Nikhilsharm/test
   cd YOUR_REPO_NAME
   ```

2. Create a `.env` file (declare some variables)
    Local_URL='Your mongoDB url'
    PORT='Your port number'
    SECRET_KEY='Your secret key'
    API_KEY='cloudanary api key'
    API_SECRET='Cloudanary api secret'
    CLOUD_NAME='Cloudanary cloud name'

3. Update `config/passport.js` for your user model or mock users

---

### ▶️ Run the App

```bash
npm start
```

The app will run at [http://localhost:'Your port number'] or (http://localhost:3000)

---

## 🔐 Rate Limiting

The login route is protected with a limiter:

- 5 login attempts per 15 minutes per IP
- After that: blocked with a 429 error

You can customize this in `middleware/loginLimiter.js`.

---

## 💡 Future Improvements

- MongoDB & Mongoose user model
- Account lockout or cooldown system
- Email verification & reset password
- JWT or OAuth-based auth
- Frontend form validation

---

## 🤝 Contributing

PRs welcome! Feel free to fork, clone, and open a pull request.

---

## 📄 License

MIT
