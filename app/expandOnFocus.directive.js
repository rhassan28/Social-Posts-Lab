"use strict";
function expandOnFocus() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs){
            $element.on("focus", function(){
                $element.css("height", "scale(2,2)")
                // $element.css("position", "absolute")

            })
            $element.on("blur", function(){ 
                $element.css("transform", "")
            })
        }
    }
}

angular
    .module("SocialApp")
    .directive("expandOnFocus", expandOnFocus);