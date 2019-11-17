import {ApiClient} from "../ApiClient";
import fetchMock from 'fetch-mock';

describe("ApiClient", () => {
    it("should instantiate a class", () => {
        const apiClient = new ApiClient();
        expect(apiClient).toBeInstanceOf(ApiClient);
    });

    it("should handle a GET request", () => {
        fetchMock.get("/user", {
            firstName: "john",
        });
        const apiClient = new ApiClient();
        return apiClient.get("/user").then((data) => {
            expect(data).toEqual({
                firstName: "john",
            });
        });
    });

    it("should throw an error for invalid get url", () => {
        const apiClient = new ApiClient();
        try {
            apiClient.get();
        } catch (e) {
            expect(e).toEqual(new Error("Invalid url"))
        }
    });
});
