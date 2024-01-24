// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ARAMSPARKS is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("ARAM SPARKS", "SPK")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}

//Contract address 0x69b2D23D1bAAE1443eB218f6630c4b222c992F19