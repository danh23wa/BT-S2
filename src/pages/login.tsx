import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && matKhau === "admin") {
      navigate("/home");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-64">
      {/* Username */}
      <div className="flex flex-col gap-2">
        <label htmlFor="txtUsername" className="text-sm font-medium text-gray-700"
        style={{ margin: "10px" }}>
          Tên đăng nhập
        </label>
        <input
          id="txtUsername"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập username"
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mật khẩu */}
      <div className="flex flex-col gap-2">
        <label htmlFor="txtMatKhau" className="text-sm font-medium text-gray-700"
        style={{ margin: "10px" }}>
          Mật khẩu
        </label>
        <input
          id="txtPassword"
          type="password"
          value={matKhau}
          onChange={(e) => setMatKhau(e.target.value)}
          placeholder="Nhập mật khẩu"
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nút login */}
      <button
        id="btnLogin"
        onClick={handleLogin}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;
