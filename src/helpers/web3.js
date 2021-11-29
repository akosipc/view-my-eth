import { utils } from 'web3'

export const formatHexToWords = (hex) => { 
  return utils.toBN(hex)?.words[0]
}
