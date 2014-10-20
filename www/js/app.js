angular.module('fire-talk', ['ionic',
                             'ui.router',
                             'fire-talk-login',
                             'fire-talk-lobby',
                             'fire-talk-chat-room'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise("/")
      $stateProvider
        .state('login',
        {
          url: '/',
          templateUrl: 'views/login.html',
          controller:'LoginCtrl',
          controllerAs:'login'
        })
        .state('signup',
        {
          url:'/signup',
          templateUrl:'views/signup.html',
          controller:'SignupCtrl',
          controllerAs: 'signup'
        })
        .state('lobby',{
          url:'/lobby',
          templateUrl:'views/lobby.html',
          controller:'LobbyCtrl',
          controllerAs:'lobby'
        })
        .state('chat',{
          url:'/chat/:chatId',
          templateUrl:'views/chatRoom.html',
          controller:'ChatCtrl',
          controllerAs:'chat'
        })
  }])
  .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
  });
