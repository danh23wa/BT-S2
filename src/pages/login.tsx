import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [matKhau, setMatKhau] = useState("");
  


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
      {/* Debug hiển thị giá trị nhập */}
      <div className="text-sm text-gray-500">
        Bạn nhập: {username} - {matKhau}
      </div>

    </div>
  );
};

export default LoginForm;
