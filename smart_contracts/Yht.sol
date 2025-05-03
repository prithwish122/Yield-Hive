// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YieldHiveToken is ERC20, Ownable {
    constructor(address initialOwner) 
        ERC20("YieldHive Token", "YHT") 
        Ownable(initialOwner) 
    {
        _mint(initialOwner, 1000000 * 10**18); // Initial 1M supply
    }

    // Unlimited faucet (100 YHT per call)
    function claimTokens() external {
        _mint(msg.sender, 100 * 10**18); // 100 YHT
    }

    // Owner minting
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Disabled approvals (transfers always allowed)
    function transferFrom(address sender, address recipient, uint256 amount) 
        public override returns (bool) 
    {
        _transfer(sender, recipient, amount);
        return true;
    }
}