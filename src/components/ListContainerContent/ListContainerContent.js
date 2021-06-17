import React from "react";
import AddInput from "../AddInput/AddInput";
import ItemContent from "../ItemContent/ItemContent";
export default function ListContainerContent({ title, contentItem }) {
  return (
    <div className="flex flex-col w-1/2 ">
      <p className="font-bold text-base text-dark">{title}</p>
      <div className="p-2 ">
        <AddInput title={title}></AddInput>
        <div className="mt-2">
          <ItemContent></ItemContent>
        </div>
      </div>
    </div>
  );
}
