import React, { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Успешный вход!");
    } catch (error) {
      alert("Ошибка входа:", error);
    }
  };

  return (
    <section>
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <div className="block">
          <div className="block__item">
            <label htmlFor="loginEmail">Введите почту</label>
            <input
              id="loginEmail"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="block__item">
            <label htmlFor="loginPass">Введите пароль</label>
            <input
              id="loginPass"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Войти</button>
      </form>
    </section>
  );
};

export default Login;
