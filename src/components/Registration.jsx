import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Успешная регистрация!");
    } catch (error) {
      alert("Ошибка регистрации: " + error.message);
    }
  };

  return (
    <section>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <div className="block">
          <div className="block__item">
            <label htmlFor="regEmail">Введите почту</label>
            <input
              id="regEmail"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="block__item">
            <label htmlFor="regPass">Введите пароль</label>
            <input
              id="regPass"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </section>
  );
};

export default Registration;
