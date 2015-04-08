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
                description: "This file is a must-read for all members.  Members must read it and commit the contents to heart, or be prepared to suffer the consequences.",
                url: "https://www.dropbox.com/s/2cpdryl61w82fz0/BandBrochure.docx?dl=1"
            },
            {
                description: "this is just really just a pdf",
                url: "https://www.dropbox.com/s/47nnoenpyjhxggs/agenda%203-10-14.pdf?dl=1"
            }
        ];
    });
