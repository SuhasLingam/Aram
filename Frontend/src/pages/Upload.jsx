import React, { useRef, useState, useEffect } from "react";
import Input from "../components/Input";
import axios from "axios";
import { ethers } from "ethers";

function Upload() {
  const fileInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const file = fileInputRef.current.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const pinataUrl = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const pinataApiKey = "ee98571a288b8c4e12bb";
    const pinataSecretApiKey =
      "8ce4778c25f4ff93ff613c7d753bace09f1c2240234b713126dc4724b85b14a8";

    try {
      const response = await axios.post(pinataUrl, formData, {
        maxContentLength: "Infinity", // this is needed to prevent axios from erroring out with large files
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      });

      if (response.status === 200) {
        console.log("File uploaded successfully");
        console.log(response.data);

        const ipfsHash = response.data.IpfsHash;
        const description = event.target.elements.desc.value;
        const address = event.target.elements.Address.value;

        // Connect to the Ethereum network
        if (window.ethereum) {
          try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            // Check if Ethereum provider is injected
            if (typeof window.ethereum !== 'undefined') {
              // Create a Web3Provider using the injected Ethereum provider
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              // Now you can use provider to interact with Ethereum
              const signer = provider.getSigner();
            // Replace with your smart contract's address and ABI
            const contractAddress =
              "0x878044D66A3535D6f2f87740A38d79B5c6fd8c14";
            const contractABI = [
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "_description",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "_ipfsHash",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "_location",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "_verified",
                    type: "bool",
                  },
                ],
                name: "addData",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [],
                stateMutability: "nonpayable",
                type: "constructor",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                  },
                ],
                name: "dataList",
                outputs: [
                  {
                    internalType: "string",
                    name: "description",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "ipfsHash",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "location",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "verified",
                    type: "bool",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "getBal",
                outputs: [
                  {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256",
                  },
                ],
                name: "getData",
                outputs: [
                  {
                    internalType: "string",
                    name: "description",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "ipfsHash",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "location",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "verified",
                    type: "bool",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "getDataCount",
                outputs: [
                  {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [],
                name: "owner",
                outputs: [
                  {
                    internalType: "address",
                    name: "",
                    type: "address",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
            ];

            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
            console.log("address is : ", await contract.getAddress());

            // Replace with the name of the function in your smart contract that stores the IPFS hash
            const transactionResponse = await contract.addData(
              description,
              address,
              ipfsHash,
              false
            );

            await transactionResponse.wait();

            window.location.href = "/deeds";
            } else {
              console.log("Ethereum provider is not available");
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

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
            className="mb-4 p-2 placeholder:-2 bg-white outline-none w-[700px] rounded-lg text-black"
            required
          />
          <label htmlFor="Address" className="m-1">
            Address:
          </label>
          <textarea
            id="Address"
            className="mb-4 p-2 bg-white outline-none w-[700px] rounded-lg text-black"
            required
          />
          <Input label="Video Proof" type="file" ref={fileInputRef} />
          <button
            className="m-4 bg-[#99ff53] text-center rounded-xl p-3 text-black w-[200px] font-Inter font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Upload;