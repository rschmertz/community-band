angular.module('mentorApp')
    .directive('fileItem', function () {
	return {
	    restrict:'E',
	    templateUrl: 'fileItemTpl',
	    link:function (scope, el, attrs, ctrl) {
        
	    }
	};
    }).controller("docListCtrl", ['$http', function ($http) {
        // We'll add some changes here
        this.icons = {
            doc: "img/file-icons/docx/docx_win-64_32.png",
            docx: "img/file-icons/docx/docx_win-64_32.png",
            pdf: "img/file-icons/pdf/pdf-64_32.png"
        };

        this.doclist1 = [];
        var self = this;
        // "Documents" list
        $http.get('https://api.trello.com/1/lists/566397b374bba06e49402f2d/cards')
            .success(function(data, status) {
                console.log(data);
                
                data.forEach(function (card) {
                    
                    var cardThing = {
                        name: card.name,
                        url: card.url,
                        desc: card.desc,
                    }; 
                    self.doclist1.push(cardThing);
                    console.log("Stupid url", card.url);
                    cardThing.attachment = $http.get('https://api.trello.com/1/cards/' + card.id + '/attachments')
                        .success(function (data, status) {
                            /*
                            data.forEach(function(attachment) {
                                console.log("Hey, it's at " + attachment.url);
                                console.log("oh, the attachment is ", attachment);
                                cardThing.attachment = attachment;
                            });
                            */
                        })
                        .error(function (data, status) {
                            console.log("problem getting attachments");
                        });
                });
                setTimeout(function () {
                    console.log(self.doclist1);
                }, 4000);
            })
            .error(function (data, status) {
                console.log("Shoot, we couldn't get it to work");
            });
        
        var fileNameRegex = new RegExp("http.*box.com/s/[a-z0-9]+/(.+\.(pdf|doc|docx))\\?dl=.");
        fileNameRegex = new RegExp(".+\.(pdf|doc|docx)");
        this.getFileName = function(url) {
            return decodeURI(url.match(fileNameRegex)[1]);
        };
        this.getIcon = function(url) {
            console.log("url is ", url);
            //return 'doc';
            var match = url.match(fileNameRegex);
            console.log("matchi is ", match[1]);
            return this.icons[match[1]];
        };
        this.adjustUrl = function(url) {
            return url.replace(/dl=0$/, "dl=1");
        };
        this.vdoclist1 = [
            {
                description: "Section Leaders",
                url: "https://www.dropbox.com/s/3bx8wxe1ny3ttsp/Section%20Leaders.docx?dl=0"
            },
            {
                description: "Concert Schedule for Fall 2015",
                url: "https://www.dropbox.com/s/6lwakm2x4s9japs/2015%20Fall.docx?dl=0"
            },
            {
                description: "Promotional flyer for NextNOW concert 2015",
                url: "https://www.dropbox.com/s/gnaoj110ali4dg8/MDCB%20Concert%20Flyer%209.10.15-Composers-FINAL-Indent.pdf?dl=0"
            },
        ];
        this.vdoclist2 = [
            {
                description: "Band Librarian Committee",
                url: "https://www.dropbox.com/s/hnwiyam9owvr7dl/BAND%20LIBRARIAN.docx?dl=0"
            },
            {
                description: "Concert Venues Committee",
                url: "https://www.dropbox.com/s/iez9zk8f1ygi5ai/CONCERT%20VENUES.docx?dl=0"
            },
            {
                description: "Hospitality Committee",
                url: "https://www.dropbox.com/s/ra0qrx38cm5zan1/HOSPITALITY.docx?dl=0"
            },
            {
                description: "Band History Committee",
                url: "https://www.dropbox.com/s/j87yj663y209yr8/BAND%20HISTORY.docx?dl=0"
            },
            {
                description: "Membership Committee",
                url: "https://www.dropbox.com/s/3bm00xhnoyxgaij/MEMBERSHIP.docx?dl=0"
            },
            {
                description: "Publicity Committee",
                url: "https://www.dropbox.com/s/2g8buudjzuj4n94/PUBLICITY.docx?dl=0"
            },
            {
                description: "Website Committee",
                url: "https://www.dropbox.com/s/1iw069bxnww8ijk/WEBSITE.docx?dl=0"
            },
        ];
    }]);
