(function () {
    function Connections(){
        "use strict";
        return {
            firebase : 'https://blazing-fire-304.firebaseio.com'
        }
    }
    angular.module('fire-talk').factory('Connections',[Connections]);
})();