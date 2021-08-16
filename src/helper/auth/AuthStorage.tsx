import STORAGEKEY from "../../config/storageKey";

class AuthStorage {

    static setStorageData = (key: any, data: any, keepMeLoggedIn: any) => {
        keepMeLoggedIn ? localStorage.setItem(key, data) : sessionStorage.setItem(key, data);
    }

    static setStorageJsonData = (key: any, data: any, keepMeLoggedIn: any) => {
        keepMeLoggedIn ? localStorage.setItem(key, JSON.stringify(data)) : sessionStorage.setItem(key, JSON.stringify(data));
    }

    static getStorageData = (key: any) => {
        return localStorage.getItem(key) || sessionStorage.getItem(key);
    }

    static getStorageJsonData = (key: any) => {
        const data = (localStorage.getItem(key) || sessionStorage.getItem(key)) ?? '';
        return JSON.parse(data);
    }

    static getToken = () => {
        return localStorage.getItem(STORAGEKEY.token) || sessionStorage.getItem(STORAGEKEY.token);
    }

    static isUserAuthenticated = () => {
        return (localStorage.getItem(STORAGEKEY.token) !== null || sessionStorage.getItem(STORAGEKEY.token) !== null);
    }

    static deauthenticateUser = () => {
        localStorage.removeItem(STORAGEKEY.token);
        localStorage.removeItem(STORAGEKEY.userData);

        sessionStorage.removeItem(STORAGEKEY.token);
        sessionStorage.removeItem(STORAGEKEY.userData);
    }

    static deleteKey = (key: any) => {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
    }
}

export default AuthStorage;
