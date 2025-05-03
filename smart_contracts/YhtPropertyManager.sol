// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YieldHivePropertyManager is Ownable {
    struct Property {
        string name;
        uint256 monthlyIncome;
        uint256 totalShares;
        uint256 soldShares;
        address owner;
    }

    IERC20 public yieldHiveToken;
    uint256 public nextPropertyId;

    mapping(uint256 => Property) public properties;
    mapping(uint256 => mapping(address => uint256)) public propertyShares;
    mapping(uint256 => address[]) public propertyInvestors;
    uint256[] public allPropertyIds;

    event PropertyEnlisted(uint256 propertyId, address owner);
    event SharesBought(uint256 propertyId, address investor, uint256 shares);

    constructor(address _yieldHiveToken, address _initialOwner) 
        Ownable(_initialOwner) 
    {
        yieldHiveToken = IERC20(_yieldHiveToken);
    }

    // Simplified: No approval checks needed
    function buyShares(uint256 propertyId, uint256 numberOfShares) external {
        Property storage property = properties[propertyId];
        require(property.owner != address(0), "Invalid property");
        require(numberOfShares > 0, "Minimum 1 share");
        require(property.totalShares - property.soldShares >= numberOfShares, "Not enough shares");

        uint256 totalCost = 1 ether * numberOfShares; // 1 YHT per share

        // Direct transfer (no approve needed)
        yieldHiveToken.transferFrom(msg.sender, address(this), totalCost);

        if (propertyShares[propertyId][msg.sender] == 0) {
            propertyInvestors[propertyId].push(msg.sender);
        }

        propertyShares[propertyId][msg.sender] += numberOfShares;
        property.soldShares += numberOfShares;

        emit SharesBought(propertyId, msg.sender, numberOfShares);
    }

    function enlistProperty(
        string memory _name,
        uint256 _monthlyIncome,
        uint256 _totalShares
    ) external {
        require(_totalShares > 0, "Shares must be > 0");
        
        properties[nextPropertyId] = Property({
            name: _name,
            monthlyIncome: _monthlyIncome,
            totalShares: _totalShares,
            soldShares: 0,
            owner: msg.sender
        });

        allPropertyIds.push(nextPropertyId);
        emit PropertyEnlisted(nextPropertyId, msg.sender);
        nextPropertyId++;
    }

    // Additional view functions (unchanged)
    function getRemainingShares(uint256 propertyId) external view returns (uint256) {
        return properties[propertyId].totalShares - properties[propertyId].soldShares;
    }

    // Alternative: Return as separate arrays (more gas-efficient)
    function getAllPropertiesDetailsSeparate() external view returns (
        string[] memory names,
        uint256[] memory monthlyIncomes,
        uint256[] memory totalShares,
        uint256[] memory soldShares,
        address[] memory owners
    ) {
        uint256 count = allPropertyIds.length;
        
        names = new string[](count);
        monthlyIncomes = new uint256[](count);
        totalShares = new uint256[](count);
        soldShares = new uint256[](count);
        owners = new address[](count);

        for (uint256 i = 0; i < count; i++) {
            uint256 propertyId = allPropertyIds[i];
            Property storage p = properties[propertyId];
            
            names[i] = p.name;
            monthlyIncomes[i] = p.monthlyIncome;
            totalShares[i] = p.totalShares;
            soldShares[i] = p.soldShares;
            owners[i] = p.owner;
        }
    }

    
}