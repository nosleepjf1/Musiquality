angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page7',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('tabsController.home', {
      url: '/page8',
      views: {
        'tab1': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.newMusiq', {
      url: '/page9',
      views: {
        'tab1': {
          templateUrl: 'templates/newMusiq.html',
          controller: 'newMusiqCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.myLikes', {
      url: '/page14',
      views: {
        'tab4': {
          templateUrl: 'templates/myLikes.html',
          controller: 'myLikesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.popularMusiq', {
      url: '/page15',
      views: {
        'tab1': {
          templateUrl: 'templates/popularMusiq.html',
          controller: 'popularMusiqCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.artistNameSearch', {
      url: '/page17',
      views: {
        'tab1': {
          templateUrl: 'templates/artistNameSearch.html',
          controller: 'artistNameSearchCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.songTitleSearch', {
      url: '/page18',
      views: {
        'tab1': {
          templateUrl: 'templates/songTitleSearch.html',
          controller: 'songTitleSearchCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.musiqGenreSearch', {
      url: '/page19',
      views: {
        'tab1': {
          templateUrl: 'templates/musiqGenreSearch.html',
          controller: 'musiqGenreSearchCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.feedback', {
      url: '/page20',
      views: {
        'tab2': {
          templateUrl: 'templates/feedback.html',
          controller: 'feedbackCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.about', {
      url: '/page21',
      views: {
        'tab3': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.artistHome', {
      url: '/page22',
      views: {
        'tab1': {
          templateUrl: 'templates/artistHome.html',
          controller: 'artistHomeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.artistBiography', {
      url: '/page23',
      views: {
        'tab1': {
          templateUrl: 'templates/artistBiography.html',
          controller: 'artistBiographyCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page6');

});