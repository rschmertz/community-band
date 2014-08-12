
angular.module('mentorApp.config', [])
  .value('config', {
    default_locale: 'En',
    apiBaseUrl: 'localhost:8000/api/v1/',
    tagsUrl: 'tags/'
  });