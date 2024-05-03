import React, { useState } from "react";

const AddressForm = ({ setUserAddress }) => {
  const [address, setAddress] = useState({
    City: "",
    Country: "",
    ZipCode: "",
  });

  const addAddress=()=>{
    setUserAddress(address)
  }

  return (
    <div>
      <div className=" mb-6">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          className="block w-full max-w-lg rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="city"
          value={address.City}
          onChange={(e) => {
            setAddress({ ...address, City: e.target.value });
          }}
        />
      </div>

      <div className=" mb-6">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <div className="relative rounded-md shadow-sm max-w-lg">
          <input
            type="text"
            name="country"
            id="country"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="country"
            value={address.Country}
            onChange={(e) => {
                setAddress({ ...address, Country: e.target.value });
            }}
          />
        </div>
      </div>
      <div className=" mb-6">
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ZipCode
        </label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          className="block w-full max-w-lg rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="zipCode"
          value={address.ZipCode}
          onChange={(e) => {
            setAddress({
              ...address,
              ZipCode: e.target.value,
            });
          }}
        />
      </div>
      <div className="text-center w-full max-w-lg mt-3">
        <button
          type="button"
          onClick={addAddress}
          className=" bg-blue-500 sm:text-sm text-xl p-1.5 m-2 text-white rounded-md hover:outline outline-gray-800"
        >
          Add Address
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
