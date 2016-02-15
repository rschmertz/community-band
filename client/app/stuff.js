var module = angular.module('tester', ['ngResource']);
module.controller('testCtrl', function ($scope, $http, $timeout, $q, CardList, CardAttachments) {
    $scope.phones = [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
    ];

    var cardList;

    CardList.query(function (one, two) {
        cardList = one;
        console.log($scope.cardList)
        console.log(one);
        console.log(two);
        var promises =[];
        cardList.forEach(function (card) {
            //console.dir(card);
            var what = CardAttachments.query({ id: card.id });
            promises.push(what);
            card.attachments = what;
        });
        $q.all(promises).then(function (data) {
            //console.dir(data);
            $scope.cardList = cardList;
        });
    });

    //$scope.cardList.get();
})
    .factory('CardList', function($resource) {
        return $resource('https://api.trello.com/1/lists/566397b374bba06e49402f2d/cards'); // Note the full endpoint address
    })
    .factory('CardAttachments', function ($resource) {
        return $resource('https://api.trello.com/1/cards/:id/attachments');
    });