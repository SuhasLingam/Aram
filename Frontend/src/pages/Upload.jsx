import React from "react";
import Input from "../components/Input";
import { useStorageUpload } from "@thirdweb-dev/react";

function Upload() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className=" p-8 m-8">
        <h1 className="text-4xl text-white">Upload Your Proof</h1>
        <div className=" flex flex-col m-6 text-white">
          <label htmlFor="desc" className="m-1">
            Description:
          </label>
          <textarea
            id="desc"
            className="mb-4 py-2 bg-white outline-none w-[700px] rounded-lg"
            required
          />
          <label htmlFor="Address" className="m-1">
            Address:
          </label>
          <textarea
            id="Address"
            className="mb-4 py-2 bg-white outline-none w-[700px] rounded-lg"
            required
          />
          <Input
            label="Video Proof: "
            type="file"
            className="mb-4"
            accept="video/mp4"
            required
          />
        </div>
        <button
          className="mx-6 bg-[#99ff53] rounded-xl p-3 px-4 text-black font-Inter font-semibold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Upload;
