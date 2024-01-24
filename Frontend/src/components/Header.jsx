import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosWallet } from "react-icons/io";
import { ethers } from "ethers";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [isVerifier, setIsVerifier] = useState(false);

  const changeMetaMask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          acntChgHandler(accounts[0]);
          setIsWalletConnected(true);
          localStorage.setItem("isWal", true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please install MetaMask");
    }
  };

  const acntChgHandler = (account) => {
    setWalletAddress(account);
    localStorage.setItem("walAdd", JSON.stringify(account));
    window.ethereum.request({ method: "net_version" }).then((network) => {
      setNetworkId(network);
      localStorage.setItem("netId", JSON.stringify(network));
    });
  };

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("walAdd"));
    const network = JSON.parse(localStorage.getItem("netId"));
    const isWallet = localStorage.getItem("isWal");
    setNetworkId(network);
    setWalletAddress(account);
    setIsWalletConnected(isWallet);
  }, []);

  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex justify-center items-center">
          <div className="ml-4 text-center">
            <Link hrtoef="/" className="text-2xl text-[#99ff53]">
              <img src="../src/assets/Logo.png" alt="" width={85} />
            </Link>
          </div>
          <div className="mx-4 ml-auto mr-8">
            <ul className="text-white mx-5 ml-5 flex text-lg font-sans items-center justify-center font-Inter">
              <li className="mx-4 ">
                <Link
                  to="/"
                  className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                >
                  Home
                </Link>
              </li>
              {isWalletConnected ? (
                <div className="flex">
                  <li className="mx-3">
                    <Link
                      to="/Deeds"
                      className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                    >
                      Deeds
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      to="/upload"
                      className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                    >
                      Uploa
                    </Link>
                    <div className=" w-4 bg-yellow-300 rounded-full"></div>
                  </li>
                  <li className="mx-3">
                    <Link
                      to="/"
                      className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                    >
                      Your Sparks
                    </Link>
                  </li>
                </div>
              ) : null}

              {isWalletConnected ? (
                <div>
                  <IoIosWallet
                    className={`text-[#99ff53] mx-3 cursor-pointer `}
                    size={40}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  />
                  {showDropdown && (
                    <div className="absolute top-auto right-0 bg-[#7cfc00] text-black p-4 mr-2 rounded-lg wallet-details">
                      <p>Connected Wallet:</p>
                      <p>
                        Address:{" "}
                        {`${walletAddress.substring(
                          0,
                          4
                        )}...${walletAddress.slice(-3)}`}
                      </p>
                      <p>Network ID: {networkId}</p>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className="m-4 bg-[#99ff53] rounded-xl p-3 text-black font-Inter font-semibold"
                  onClick={changeMetaMask}
                >
                  Connect Your Wallet
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;