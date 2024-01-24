// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataStorage {

    address public owner;

    constructor () {
        owner = msg.sender;
    }
   
        modifier OnlyOwner() {
        require(msg.sender == owner , "Youre not the Owner");
        _;
    }
    struct Data { 
        string description;
        string ipfsHash;
        string location;
        bool verified;
    }

    Data[] public dataList;

    function addData(
        string memory _description,
        string memory _ipfsHash,
        string memory _location,
        bool _verified
    ) external {
        Data memory newData = Data({
            description: _description,
            ipfsHash: _ipfsHash,
            location: _location,
            verified: _verified
        });

        dataList.push(newData);
    }

    function getData(uint256 index)
        external
        view
        returns (
            string memory description,
            string memory ipfsHash,
            string memory location,
            bool verified
        )
    {
        require(index < dataList.length, "Index out of bounds");

        Data storage data = dataList[index];
        return (data.description, data.ipfsHash, data.location, data.verified);
    }

    function getDataCount() external view returns (uint256) {
        return dataList.length;
    }

    function getBal () public view OnlyOwner returns(uint) {
        return address(this).balance;
    }

}


//0x878044D66A3535D6f2f87740A38d79B5c6fd8c14 Contract address