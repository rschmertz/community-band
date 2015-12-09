angular.module('mentorApp')
    .directive('fileItem', function () {
	return {
	    restrict:'E',
	    templateUrl: 'fileItemTpl',
	    link:function (scope, el, attrs, ctrl) {
        
	    }
	};
    }).controller("docListCtrl", ['$http', '$q', 'CardList', 'CardAttachments', 'DocUtils', function ($http, $q, CardList, CardAttachments, DocUtils) {
        // We'll add some changes here
        this.icons = {
            doc: "img/file-icons/docx/docx_win-64_32.png",
            docx: "img/file-icons/docx/docx_win-64_32.png",
            pdf: "img/file-icons/pdf/pdf-64_32.png"
        };

        console.log(CardList);
        console.log("fjdkfl f df ds'");

        this.doclist1 = [];
        var self = this;

        // "Documents" list
        var cardList;

        CardList.query(function (one, two) {
            cardList = one;
            console.log(one);
            console.log(two);
            var promises =[];
            cardList.forEach(function (card) {
                var what = CardAttachments.query({ id: card.id }, function (data) {
                    data.forEach(function(attachment) {
                        attachment.icon = DocUtils.getIcon(attachment.name);
                        attachment.fixedUrl = DocUtils.adjustUrl(attachment.url);
                    });
                });
                promises.push(what);
            });
            $q.all(promises).then(function (data) {
                for (var i = 0; i < data.length && i < cardList.length; i++) {
                    cardList[i].attachments = data[i];
                };
                var firstCard = cardList[0];
                self.doclist1 = cardList;
            });
        });

        var fileNameRegex = new RegExp("http.*box.com/s/[a-z0-9]+/(.+\.(pdf|doc|docx))\\?dl=.");
        fileNameRegex = new RegExp(".+\.(pdf|doc|docx)");
        this.getFileName = function(url) {
            return decodeURI(url.match(fileNameRegex)[1]);
        };
        this.getIcon = function(url) {
            var match = url.match(fileNameRegex);
            console.log("matchi is ", match[1]);
            return this.icons[match[1]];
        };
        this.adjustUrl = function(url) {
            return url.replace(/dl=0$/, "dl=1");
        };
    }]);
