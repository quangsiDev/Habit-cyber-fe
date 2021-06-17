import React from "react";

export default function AddInput({ title }) {
  return (
    <div className="w-full bg-brown ">
      <input
        type="text"
        placeholder={`Add a ${title}`}
        className="placeholder-gray-600 bg-gray-300 hover:bg-brown cursor-pointer w-full h-12 p-4 focus:bg-white focus:outline-none
         focus:ring-1 focus:ring-purple-900 focus:ring-opacity-95"
      />
    </div>
  );
}
