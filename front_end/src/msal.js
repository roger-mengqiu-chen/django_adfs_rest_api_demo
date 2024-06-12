import * as msal from "@azure/msal-browser";

const clientID = ""
const azureADTenantID = "";

if(!clientID) {
  throw new Error("ClientID is not set in environment");
}
if(!azureADTenantID) {
  throw new Error("Azure AD TenantID is not set in environment");
}

const msalConfig = {
  auth: {
    clientId: clientID,
    authority: `https://login.microsoftonline.com/${azureADTenantID}`,
    redirectUri: '/'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

msalInstance.addEventCallback(event => {
  if(event.eventType === msal.EventType.LOGIN_SUCCESS) {
    if(event.payload){
      // Typescript may warn on event.payload.account
      msalInstance.setActiveAccount(event.payload.account);
    }
  }
})

export { msalInstance }