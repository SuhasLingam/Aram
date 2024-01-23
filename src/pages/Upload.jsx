import React from "react";
import Input from "../components/Input";

function Upload() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className=" m-8 p-8">
        <h1 className="text-white text-4xl">Upload Your Proof</h1>
        <div className="flex flex-col m-6 text-white ">
          <label htmlFor="desc" className="m-1">
            Description:
          </label>
          <textarea
            id="desc"
            className="mb-4 py-2 w-[700px] rounded-lg"
            required
          />
          <div>
            <Input />
          </div>
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
