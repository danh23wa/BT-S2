import React, { useState } from "react";


const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [matKhau, setMatKhau] = useState("");
  
  return (
    <>
    <div className="flex flex-col gap-2">
      <label htmlFor="username" className="text-sm font-medium text-gray-700">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
   </div>
         <div className="flex flex-col gap-2">
         <label htmlFor="txtMatKhau" className="text-sm font-medium text-gray-700">
           Mật khẩu
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

       
       </>
  );
};

export default Login;