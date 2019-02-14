"use strict";

const post = {
    bindings: {
        removePost: "&",
        postsLibrary: "<"
    },
    templateUrl: "app/post.html"
}


angular
    .module("SocialApp")
    .component("post", post)