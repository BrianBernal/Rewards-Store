const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIyNTc4YjNiYTYyNzAwMjE3YTMyYTciLCJpYXQiOjE2Mjk2NDA1ODd9.4ASFGTRdXNBgTQ9Nfhn3xlypgkGUWiVB5tWF5u9uiNI";
const BASE_URL = "https://coding-challenge-api.aerolab.co/";

const INIT = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

function serviceObject(endpoint, initObj) {
  this.endpoint = endpoint;
  this.initObj = initObj;
}

export function getProfile() {
  return new serviceObject(`${BASE_URL}user/me`, { ...INIT });
}

// amount must be a number
export function setPoints(amount) {
  if (isNaN(amount)) throw Error("Incorrect amount.");
  const body = JSON.stringify({ amount });
  const initObj = {
    body,
    method: "POST",
  };
  return new serviceObject(`${BASE_URL}user/points`, { ...INIT, ...initObj });
}

export function getProducts() {
  return new serviceObject(`${BASE_URL}products`, { ...INIT });
}
