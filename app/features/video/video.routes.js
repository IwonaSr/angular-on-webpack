export default function routes($stateProvider) {
  $stateProvider
    .state('videoListing', {
      url: '/videos',
      template: require('./videoListing/videoListing.html'),
      controller: 'VideoListingController',
      controllerAs: 'videoListingController'
    })
    
    .state('videoNew', {
      url: '/videos/new',
      template: require('./videoNew/videoNew.html'),
      controller: 'VideoNewController',
      controllerAs: 'videoNewController'

    }).state('videoEdit', {
      url: '/videos/:id',
      template: require('./videoEdit/videoEdit.html'),
      controller: 'VideoEditController',
      controllerAs: 'videoEditController'
    });
}