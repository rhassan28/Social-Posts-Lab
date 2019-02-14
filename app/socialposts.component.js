"use strict";

const socialposts = {
    templateUrl: "app/socialposts.html",
    controller: [function () {
        const vm = this;
        vm.postsLibrary = [
            {
                title: "My Day",
                thought: " dslnfeov dsjfvwdsl vorsdxgn owrsdnfw udsphrfewsdiufldjsnkfceds flndsl;k gnjksgnvskdn;ds n;nfld s"
            },
            {
                title: "My Study Time",
                thought: "lorem ifdklgnbvrw fskgnwlkdsf vdszfedsfwdsflwklsdfeqs dklfewsd klsd fewlkds fqeds f;lvwdsfgkvlwsd"
            },
            {
                title: "My Cookie",
                thought: "jks vjksdlfewsdf dsfd ksfsdjklfnjdskf nedsjflkndsfkle;dsfuirwfshkjvnedfkdfJLWESRDUFIEDSHLJKN "
            }
        ];
        vm.formToggle = false;
        vm.addPost = function (newPost) {
            vm.postsLibrary.push({ ...newPost });
            vm.formToggle = false;
        }
        vm.removePost = function (index) {
            vm.postsLibrary.splice(index, 1)
        }
        vm.showForm = function () {
            vm.formToggle = true;
        }
    }]

};

    angular
        .module("SocialApp")
        .component("socialposts", socialposts)