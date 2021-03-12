import { AccountInfo, PublicKey } from "@safecoin/web3.js";

import { AccountInfo as TokenAccountInfo } from "@safecoin/spl-token";

export interface TokenAccount {
  pubkey: PublicKey;
  account: AccountInfo<Buffer>;
  info: TokenAccountInfo;
}
