export default function routes($stateProvider) {
  $stateProvider
    .state('videoListing', {
      url: '/videos',
      template: require('./videoListing.html'),
      controller: 'VideoListingController',
      controllerAs: 'video'
    });
}