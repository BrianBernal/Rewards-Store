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

export function getProfile() {
  return {
    endpoint: `${BASE_URL}user/me`,
    initObj: { ...INIT },
  };
}
