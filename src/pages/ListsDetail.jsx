import React from "react";
import { useParams } from "react-router-dom";
import { listsDetail } from "./Lists";

function ListsDetail() {
  const { id } = useParams();
  const list = listsDetail.find((item) => item.id === Number(id));
  return (
    <div className="flex flex-col items-center mt-5">
      {list.icon}
      <p>{list.content}</p>
    </div>
  );
}

export default ListsDetail;
