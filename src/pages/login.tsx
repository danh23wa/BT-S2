import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const navigate = useNavigate ();


  return (
    <div className="flex flex-col gap-4 w-64">
      {/* Username */}
      <div className="flex flex-col gap-2">
        <label htmlFor="txtUsername" className="text-sm font-medium text-gray-700">
          tên đăng nhập 
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
        <label htmlFor="txtMatKhau" className="text-sm font-medium text-gray-700">
          mật khẩu 
        </label>
        <input
          id="txtMatKhau"
          type="password"
          value={matKhau}
          onChange={(e) => setMatKhau(e.target.value)}
          placeholder="Nhập mật khẩu"
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

<button
        id="btnLogin"
        onClick={handleLogin}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        đăng nhập
      </button>
    </div>
  );
};

export default LoginForm;
