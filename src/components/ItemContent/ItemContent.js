import React from "react";
import { Checkbox } from "antd";

const ItemContent = ({ data }) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="flex w-full">
      <div className="w-16 bg-yellow-300 flex-shrink-0 ">
        <label className="inline-flex items-center  cursor-pointer w-full h-full bg-yellow-400 p-3 lex justify-center  focus:ring-0">
          <input
            type="checkbox"
            className="form-checkbox h-7 w-7 text-yellow-200 forcus:ring-0  cursor-pointer
             border-indigo-800 ring-0 focus:ring-0 hover:bg-yellow-300 border-none
            bg-yellow-200 transition form-checkbox"
          />
        </label>
      </div>
      <div className="w-full bg-white p-2">
        <p>a</p>
      </div>
    </div>
  );
};

export default ItemContent;
