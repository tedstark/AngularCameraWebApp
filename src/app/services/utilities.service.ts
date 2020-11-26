import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  sessionStorageAdd($cacheKey, $dataObj) {
    try {
      if (sessionStorage[$cacheKey]) this.sessionStorageDelete($cacheKey);
      if (typeof $dataObj === 'string') $dataObj = $dataObj.trim();
      sessionStorage.setItem($cacheKey, JSON.stringify($dataObj));
      return true;  
    } catch (e) {
      console.log("Session Storage Add Failed", e)
      return false;
    }
  }
     
  sessionStorageDelete($cacheKey) {
    try {
      if (sessionStorage[$cacheKey]) {
        sessionStorage.removeItem($cacheKey);
      }
      return true;  
    } catch (e) {
      console.log("Session Storage Delete Failed", e)
      return false;
    }
  }

  sessionStorageGet($cacheKey) {
    try {
      let cacheKeyValue = null;
      if (sessionStorage[$cacheKey]) {
        cacheKeyValue = JSON.parse(sessionStorage.getItem($cacheKey));
      }
      return cacheKeyValue;  
    } catch (e) {
      console.log("Session Storage Get Failed", e)
      return false;
    }
  }

  checkSessionStorageKey($cacheKey) {
    try {
      let keyCheck = false;
      if (sessionStorage[$cacheKey]) {          
        keyCheck = true;
      }
      return keyCheck;
    } catch (e) {
      console.log("Session Storage Check Failed", e)
      return false;
    }
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }

  isObjEmpty($obj) {
    if (($obj === null) || ($obj === undefined)) {
        return true;
    }
    return false;
}

  isStrEmpty($str) {
      if (($str === null) || ($str === undefined) || ($str === "")) {
          return true;
      }
      return false;
  }

}
