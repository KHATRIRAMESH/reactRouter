import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div className="bg-gray-700 p-4 text-white rounded-lg ">User:{userid}</div>;
}

export default User;
