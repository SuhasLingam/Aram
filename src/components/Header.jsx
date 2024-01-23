import React, { useState } from "react";
import { IoIosWallet } from "react-icons/io";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [networkId, setNetworkId] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const changeMetaMask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          acntChgHandler(accounts[0]);
          setIsWalletConnected(true);
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

    window.ethereum.request({ method: "net_version" }).then((network) => {
      setNetworkId(network);
    });
  };

  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex justify-center items-center">
          <div className="ml-4 text-center">
            <a href="/" className="text-2xl text-[#99ff53]">
              <img src="src/assets/Logo.png" alt="" width={85} />
            </a>
          </div>
          <div className="mx-4 ml-auto mr-8">
            <ul className="text-white mx-5 ml-5 flex text-lg font-sans items-center justify-center font-Inter">
              <li className="mx-4 ">
                <a
                  href=""
                  className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="mx-3">
                <a
                  href=""
                  className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li className="mx-3">
                <a
                  href=""
                  className="active:underline active:text-[#99ff53] hover:underline hover:text-[#99ff53] cursor-pointer"
                >
                  Your Rewards
                </a>
                <div className=" w-4 bg-yellow-300 rounded-full"></div>
              </li>

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
