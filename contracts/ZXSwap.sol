pragma solidity ^0.8.0;
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";

//import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
//import "@openzeppelin/contracts/security/PullPayment.sol";

contract ZXSwap {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant MERCHANT_ROLE = keccak256("MERCHANT_ROLE");

    address public merchantAddress;
    address public exchangeProxy;

    constructor(
        address administrator,
        address _exchangeProxy,
        address _merchantAddress
    ) {
        exchangeProxy = _exchangeProxy;
        merchantAddress = _merchantAddress;
        //_setupRole(ADMIN_ROLE, administrator);
    }

    function faciliate(
        address sellToken,
        // Amount of Asset to Be Sold
        uint256 amountToSell,
        address buyToken,
        uint256 amountBought,
        // The `allowanceTarget` field from the API response.
        address spender,
        // The `to` field from the API response.
        address payable swapTarget,
        // The `data` field from the API response.
        bytes calldata swapCallData
    ) external payable {
        // Checks that the swapTarget is actually the address of 0x ExchangeProxy
        require(swapTarget == exchangeProxy, "Target not ExchangeProxy");

        TransferHelper.safeTransferFrom(
            sellToken,
            msg.sender,
            address(this),
            amountToSell
        );

        //Swap
        (bool success, ) = swapTarget.call{value: msg.value}(swapCallData);

        TransferHelper.safeTransferFrom(
            buyToken,
            msg.sender,
            merchantAddress,
            amountBought
        );
    }
}
