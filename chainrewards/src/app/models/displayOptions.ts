import { CheckType } from "@angular/core/src/view";

export class DisplayOptions {
  wallet: Boolean;
  rewards: Boolean;
  kyc: Boolean;
  amazon: Boolean;
  netflix: Boolean;
  amazonsearch: Boolean;
  netflixsearch: Boolean;
  email:Boolean;
  prodsearch: Boolean;
  netflixage: Boolean;
  amazonage: Boolean;



  constructor(obj) {
    this.wallet = obj && !!obj.display_wallet || false;
    this.rewards = obj && !!obj.display_rewards || false;
    this.kyc = obj && !!obj.display_kyc || false;
    this.amazon = obj && !!obj.display_amazon || false;
    this.netflix = obj && !!obj.display_netflix|| false;
    this.amazonsearch = obj && !!obj.display_amazonsearch|| false;
    this.netflixsearch = obj && !!obj.display_netflixsearch|| false;
    this.email = obj && !!obj.display_emial|| false;
    this.prodsearch = obj && !!obj.display_prodsearch|| false;
    this.amazonage = obj && !!obj.display_amazonage|| false;
    this.netflixage = obj && !!obj.display_netflixage|| false;


  }
  static get key(): string {
    return 'vault_preferences';
  }
  get value(): string {
    return JSON.stringify({
      display_wallet: this.wallet ? 1 : 0,
      display_rewards: this.rewards ? 1 : 0,
      display_kyc: this.kyc ? 1 : 0,
      display_amazon: this.amazon ? 1 : 0,
      display_netflix: this.netflix ? 1 : 0,
      display_amazonsearch: this.amazonsearch ? 1 : 0,
      display_netflixsearch: this.netflixsearch ? 1 : 0,
      display_email: this.email ? 1 : 0,
      display_prodsearch: this.prodsearch ? 1 : 0,
      display_amazonage: this.amazonage ? 1 : 0,
      display_netflixage: this.netflixage ? 1 : 0,

    });
  }
  updateValue(obj) {
    this.wallet = obj && !!obj.display_wallet || false;
    this.rewards = obj && !!obj.display_rewards || false;
    this.kyc = obj && !!obj.display_kyc || false;
    this.amazon = obj && !!obj.display_amazon || false;
    this.netflix = obj && !!obj.display_netflix || false;
    this.amazonsearch = obj && !!obj.display_amazonsearch || false;
    this.netflixsearch = obj && !!obj.display_netflixsearch || false;
    this.email = obj && !!obj.display_email || false;
    this.prodsearch = obj && !!obj.display_prodsearch || false;
    this.amazonage = obj && !!obj.display_amazonage|| false;
    this.netflixage = obj && !!obj.display_netflixage|| false;



  }
}
