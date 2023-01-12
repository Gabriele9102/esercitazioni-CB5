export const ENDPOINTS = {
  Url : `https://random-data-api.com/api/v2/`,

  get CREDIT_CARD(){
    return `${this.Url}/credit_cards`
  },

  get BANKS(){
    return `${this.Url}/banks`
  },

  get BLOOD_TYPES(){
    return `${this.Url}/blood_types`
  },

  get APPLIANCES(){
    return `${this.Url}/appliances`
  }
}