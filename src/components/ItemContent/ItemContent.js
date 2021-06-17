import React from "react";
import { Input } from "antd";

const ItemContent = ({ data, level }) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log("level", level);
  const bg_color =
    level === "easy"
      ? "bg-yellow"
      : level === "medium"
      ? "bg-orange"
      : "bg-red";
  return (
    <div className="flex w-full my-1">
      <div className={`w-16 ${bg_color} flex-shrink-0 `}>
        <label className="inline-flex items-center  cursor-pointer w-full h-full bg-yellow-400 p-3 lex justify-center  focus:ring-0">
          <input
            type="checkbox"
            className="form-checkbox h-7 w-7 text-yellow-200 forcus:ring-0  cursor-pointer
             border-indigo-800 ring-0 focus:ring-0 hover:bg-yellow-300 border-none
            bg-yellow-200 transition form-checkbox"
          />
        </label>
      </div>
      <div className="w-full bg-white p-2  focus-within:bg-gray-50">
        <Input
          defaultValue="Ant Design love you "
          className="border-none outline-none w-full border-red-600 focus:bg-gray-50"
        />
      </div>
    </div>
  );
};

export default ItemContent;
