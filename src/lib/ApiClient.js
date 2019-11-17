export class ApiClient {
    constructor() {
        this.getOptions = {
            credentials: 'same-origin',
            method: 'GET',
        }
    }
    get(url) {
        if (typeof url !== "string") {
            throw new Error("Invalid url");
        }
        return fetch(url, this.getOptions).then((response) => response.json())
    }
}
