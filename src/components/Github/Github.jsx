import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data,setData]=useState([])
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/KHATRIRAMESH")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data)
  //       });
  //   }, []);

  return (
    <div className=" rounded-lg text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github following:{data.following}
      <img
        src={data.avatar_url}
        alt="Github picture"
        width={300}
        height={300}
        className=" rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/KHATRIRAMESH")
  return response.json();
};
