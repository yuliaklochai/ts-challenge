"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.querySelector(".posts");
function apiRequest(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const posts = yield response.json();
            return posts;
        }
        catch (error) {
            throw new Error();
        }
    });
}
function createPost(post) {
    let postBlock = document.createElement("div");
    let postTitle = document.createElement("h2");
    let postContent = document.createElement("p");
    let postUserId = document.createElement("p");
    postTitle.textContent = post.title;
    postContent.textContent = post.body;
    postUserId.textContent = `User: ${post.userId.toString()}`;
    postBlock.append(postUserId, postTitle, postContent);
    postsContainer === null || postsContainer === void 0 ? void 0 : postsContainer.append(postBlock);
}
apiRequest(API_URL).then((posts) => {
    posts.forEach((post) => {
        createPost(post);
    });
});
