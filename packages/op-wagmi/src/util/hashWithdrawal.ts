import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem'
import { type WithdrawalMessage } from '../types/WithdrawalMessage.js'

// Hashes a withdrawal
export function hashWithdrawal(withdrawalMessage: WithdrawalMessage) {
  return keccak256(
    encodeAbiParameters(parseAbiParameters('uint256, address, address, uint256, uint256, bytes'), [
      withdrawalMessage.nonce,
      withdrawalMessage.sender,
      withdrawalMessage.target,
      withdrawalMessage.value,
      withdrawalMessage.gasLimit,
      withdrawalMessage.data,
    ]),
  )
}
