import React from "react";
import { useState, useEffect } from "react";
import Cards from "../components/Admin/profCard";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import KnowMore from "./KnowMore";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";
const Profile = () => {
  const { authUser, setAuthUser, isloggedin, setIsloggedin } = useAuth();

  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  const CallAboutPage = async () => {
    setIsFetching(true);
    console.log("Call about");
    try {
      console.log("tried");
      const token = localStorage.getItem("token");
      console.log(token);

      const res = await axios.get("http://localhost:5000/profilec", {
        headers: {
          Authorization: token,
        },
      });

      const object = await res.data;
      setAuthUser(object);

      setIsFetching(false);
      if (!res.status === 200) {
        const error = new Error(res.error);
        alert(
          "There seems to be some issue with your credentials. We are working on it."
        );
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log("caught error");
      setIsFetching(false);
      navigate("/signin");
    }
  };
  useEffect(() => {
    CallAboutPage();
  }, []);

  if (isFetching) {
    <h1>Page is Loading</h1>;
  } else {
    return (
      <div>
        <div class="bg-gray-700">
          <div class="container mx-auto py-5 p-5">
            <div class="md:flex flex-nowrap md:-mx-2 ">
              {/* <!-- Left_Side --> */}
              <div class="w-full md:w-3/12 md:mx-2 ">
                {/* <!-- Profile_Card --> */}
                <div class=" bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3 border-t-4 border-green-400">
                  <div class="image overflow-hidden">
                    <img
                      class="h-auto w-full mx-auto"
                      src="https://images-ext-2.discordapp.net/external/vgvgD-_zO0974W3kIR3KyNCAQPB9uGXcfBp3dMbqeco/https/i.etsystatic.com/36532523/r/il/97ae46/4078306713/il_1140xN.4078306713_n74s.jpg"
                      alt=""
                    />
                  </div>
                  <h1 class="text-gray-100 font-bold text-xl leading-8 my-1">
                    {authUser.name}
                  </h1>

                  <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li class="flex items-center py-3">
                      <span>Status</span>
                      <span class="ml-auto">
                        <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          Student
                        </span>
                      </span>
                    </li>
                    <li class="flex items-center py-3">
                      <span>Number of Items Listed</span>
                      <span class="ml-auto">{authUser.list.length}</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- End-profile card --> */}
                <div class="my-4"></div>
              </div>
              {/* <!-- Right_Side --> */}
              <div class="w-full md:w-9/12 mx-2 ">
                {/* <!-- Profile_tab --> */}
                {/* <!-- About_Section --> */}
                <div class="bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3 rounded-sm">
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span class="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide text-white">About</span>
                  </div>
                  <div class="text-white">
                    <div class="grid md:grid-cols-2 text-sm before:hidden after:hidden">
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">Name</div>
                        <div class="px-4 py-2 w-[50%]">{authUser.name}</div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">
                          Nationality
                        </div>
                        <div class="px-4 py-2 w-[50%]">Indian</div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">
                          Gender
                        </div>
                        <div class="px-4 py-2 w-[50%]">Prefer Not to Say</div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">
                          College.
                        </div>
                        <div class="px-4 py-2 w-[50%]">
                          VIT BHOPAL University
                        </div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">State</div>
                        <div class="px-4 py-2 w-[50%]">BHOPAL</div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-2 font-semibold w-[50%]">
                          Email.
                        </div>
                        <div class="px-4 py-2 w-[50%]">
                          <a
                            class="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            {authUser.email_id}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End-about section --> */}

                <div class="my-4"></div>

                {/* <!-- Experience and education section --> */}
                <div class=" bg-black shadow-slate-900 bg-opacity-30 text-white  shadow-lg p-3  rounded-sm">
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span class="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide text-white">My Listing</span>
                  </div>
                  <div class=" before:hidden after:hidden">
                    {authUser.list.map((dataa, key) => {
                      return (
                        <>
                          <button
                            className=" text-left"
                            onClick={() => {
                              navigate("/knowmore", {
                                state: { item_id: dataa._id },
                              });
                            }}
                          >
                            <Cards
                              productName={dataa.item_name}
                              productInfo={dataa.item_description}
                              productImage={dataa.item_image}
                            />
                          </button>
                          <Routes>
                            <Route
                              path="/knowmore"
                              element={<KnowMore a={dataa._id} />}
                            />
                          </Routes>
                        </>
                      );
                    })}
                  </div>
                  {/* <!-- End of Experience and education section --> */}
                </div>
                {/* <!-- End of profile_tab --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
