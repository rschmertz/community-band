angular.module('mentorApp')
    .directive('fileItem', function () {
	return {
	    restrict:'E',
	    templateUrl: 'fileItemTpl',
	    link:function (scope, el, attrs, ctrl) {
        
	    }
	};
    }).controller("docListCtrl", function () {
        this.icons = {
            doc: "img/file-icons/docx/docx_win-64_32.png",
            docx: "img/file-icons/docx/docx_win-64_32.png",
            pdf: "img/file-icons/pdf/pdf-64_32.png"
        };

        var fileNameRegex = new RegExp("http.*box.com/s/[a-z0-9]+/(.+\.(pdf|doc|docx))\\?dl=.");
        this.getFileName = function(url) {
            return url.match(fileNameRegex)[1];
        };
        this.getIcon = function(url) {
            var match = url.match(fileNameRegex);
            return this.icons[match[2]];
        };
        this.adjustUrl = function(url) {
            return url.replace(/dl=0$/, "dl=1");
        };
        this.doclist1 = [
            {
                description: "Performance schedule for Spring 2015",
                url: "https://www.dropbox.com/s/rpzmnyv0ekazgh5/2015%20Spring.pdf?dl=0"
            },
	    {
		description: "Publicity write-up for Bowie concert, April 19, 2015",
		url: "https://www.dropbox.com/s/rjv7dt79menw7wf/MCBPubliciityforApr19BCPA.pdf?dl=0"
	    },
	    {
		description: "Promotional flyer for Bowie concert, April 19, 2015",
		url: "https://www.dropbox.com/s/entn076kf4iavl1/BCPA%20Flyer%20April19%20v5.pdf?dl=0"
	    }
        ];
        this.doclist2 = [
            {
                description: "Sign-up sheet for Band Librarian Committee",
                url: "https://www.dropbox.com/s/hnwiyam9owvr7dl/BAND%20LIBRARIAN.docx?dl=0"
            },
            {
                description: "Sign-up sheet for Concert Venues Committee",
                url: "https://www.dropbox.com/s/iez9zk8f1ygi5ai/CONCERT%20VENUES.docx?dl=0"
            },
            {
                description: "Sign-up sheet for Hospitality Committee",
                url: "https://www.dropbox.com/s/ra0qrx38cm5zan1/HOSPITALITY.docx?dl=0"
            },
            {
                description: "Sign-up sheet for Band History Committee",
                url: "https://www.dropbox.com/s/j87yj663y209yr8/BAND%20HISTORY.docx?dl=0"
            },
            {
                description: "Sign-up sheet for Membership Committee",
                url: "https://www.dropbox.com/s/3bm00xhnoyxgaij/MEMBERSHIP.docx?dl=0"
            },
            {
                description: "Sign-up sheet for Publicity Committee",
                url: "https://www.dropbox.com/s/2g8buudjzuj4n94/PUBLICITY.docx?dl=0"
            }
	];
    });
