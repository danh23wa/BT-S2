import React, { useState } from "react";

const LoginForm: React.FC = () => {
  
  return (
    <div className="flex flex-col gap-4 w-64">
      {/* Username */}
      <div className="flex flex-col gap-2">
        <label htmlFor="txtUsername" className="text-sm font-medium text-gray-700">
          Username
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

    </div>
  );
};

export default LoginForm;
