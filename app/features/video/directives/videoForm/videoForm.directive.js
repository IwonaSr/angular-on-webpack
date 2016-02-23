export default function videoForm() {
  return {
    restrict: 'E',
    scope: {
      video: '=',
      submitText: '@',
      submitFunction: '&'
    },
    template: require('./videoForm.html'),
    link: (scope) => {
      scope.submitForm = () => {
        scope.submitFunction();
      }
    }
  }
}