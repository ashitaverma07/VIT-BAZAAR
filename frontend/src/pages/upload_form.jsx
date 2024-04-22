import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();

  const { isloggedin } = useAuth();
  const [data, setData] = useState({
    item_description: "",
    item_name: "",
    item_age: 0,
    item_price: 0,
    item_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAnY0WIICyaq_C4WrSToewu2aNJdlp629am_b7Dkt61xoe12XB7XBhNTLhMB0kokh948&usqp=CAU",
    item_condition: +"",
    item_tag: "",
  });

  const [url, setUrl] = useState("");

 

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const final = () => {
    postData();
    
    navigate("/Home");
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Using  FileReader to read file as base64 string
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      setData({ ...data, item_image: base64String });
    };
    reader.readAsDataURL(file);
  };

  const postData = async (e) => {
    const {
      item_name,
      item_price,
      item_age,
      item_condition,
      item_image,
      item_tag,
      item_description,
    } = data;
    setData({
      data,
    });
    console.log(data);

 

    const token = localStorage.getItem("token");

    try {
      axios.patch(`http://localhost:5000/add_data`, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          ETag: 'W/"37-NEFrvcdVZRILpM9yV9AHs0xg1Ho"',
          Authorization: token,
        },
      });
      window.alert("Data Added");
      console.log(data);
    } catch (e) {
      console.error(e);
    }

  };

  if (!isloggedin) {
    return <Navigate to="/Signin" />;
  } else {
    return (
      <div>
        <div className="container p-10 m-auto ">
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Name
            </label>
            <input
              name="item_name"
              value={data.item_name}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hello"
              onChange={handleInputs}
              required
            />
          </div>
          <div className="flex">
            <div className="flex-1 pr-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Item Age
              </label>
              <input
                type="Number"
                name="item_age"
                value={data.item_age}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mention the Item Age in months"
                onChange={handleInputs}
                required
              />
            </div>
            <div className="flex-1 pl-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="Number"
                name="item_price"
                value={data.item_price}
                onChange={handleInputs}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Put your expected price in Rs."
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Item Description
            </label>
            <textarea
              name="item_description"
              id="message"
              rows="4"
              value={data.item_description}
              onChange={handleInputs}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex md:flex-row flex-col py-5">
            <div className="mr-full my-auto">
              {/* Paste here below*/}
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="item_tag"
                    value={data.item_tag}
                    label="cat"
                    onChange={handleInputs}
                  >
                    <MenuItem value="Stationary">Stationary</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>

                    <MenuItem value="Clothing_essentials">
                      Clothing Essentials
                    </MenuItem>
                    <MenuItem value="Books">Books</MenuItem>
                    <MenuItem value="Daily-use">Daily Use</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="md:ml-20 ml-full pb-5">
              {/*Rating System Code Below */}
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Item Condition</Typography>
                <Rating
                  name="item_condition"
                  value={data.item_condition}
                  onChange={handleInputs}
                />
              </Box>
            </div>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="user_avatar"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              onChangeCapture={(e) => uploadImage(e)}
            />
          </div>
          <div className="my-5 text-center">
            <button
              onClick={final}
              className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Form;
