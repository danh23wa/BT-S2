import React, { useState } from "react";

const UsernameInput: React.FC = () => {
  const [username, setUsername] = useState("");

  return (
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
  );
};

export default UsernameInput;
