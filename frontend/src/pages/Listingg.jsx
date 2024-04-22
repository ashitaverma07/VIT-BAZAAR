import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import KnowMore from "./KnowMore";
import axios from "axios";

const Listingg = () => {
  const [result, setResult] = useState();

  const fetchDataFromBackend = async () => {
    const res = await axios("http://localhost:5000/db");
    setResult(res.data[0].list);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromBackend();
  }, []);
  return (
    <div className="flex gap-4 ml-20 w-[600px]">
      {result?.map((item, index) => {
        return (
          <div key={index} className="text-white ">
            <div className=" w-[300px] bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
              <button
                className=" text-left"
                onClick={() => {
                  navigate("/knowmore", {
                    state: { item_id: item._id },
                  });
                }}
              >
                <img
                  className=" rounded-tl-3xl rounded-br-3xl object-cover w-[300px] h-[300px]"
                  src={item.item_image}
                  alt=""
                />
                <div className="my-[2%]">
                  <div className="rounded-md bg-yellow-400 text-white  inline py-[1px] px-2 ml-[1%]">
                    {item.item_tag}
                  </div>
                  <div className="font-bold text-[140%] ml-[5%] text-gray-900">
                    {item.item_name}
                  </div>
                </div>
                <div className="font-bold text-[120%] mb-[1%] ml-[5%]">
                  ₹{item.item_price}
                </div>
                <div className=" flex justify-between gap-[1%] text-gray-100 ">
                  <div className="flex">
                    {" "}
                    <img className="object-contain w-8 m-1" alt="" />{" "}
                    <div className="self-center">{item.item_age} Months</div>
                  </div>
                  <div className="flex">
                    {" "}
                    <img className="object-contain w-8 m-1" alt="" />{" "}
                    <div className="self-center">
                      {item.item_condition} Star Condition
                    </div>
                  </div>
                </div>
              </button>
              <Routes>
                <Route path="/knowmore" element={<KnowMore a={item._id} />} />
              </Routes>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listingg;
