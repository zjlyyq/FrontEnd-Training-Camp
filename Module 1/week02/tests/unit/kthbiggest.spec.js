import getKthbiggest from "../../src/views/KthBiggest/getKthbiggest";

describe("getKthBiggest.js", () => {
    it("main", () => {
        const array = [1, 3, 2, 4, 7, 9, 10, 0, 6, 5, 8];
        let kth = getKthbiggest(array, null, 4);
    })
})