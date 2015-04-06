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
            pdf: "img/file-icons/pdf/pdf-64_32.png"
        };
        this.doclist1 = [
            {
                name: "Ruels and Procedures.doc",
                fileType: "doc",
                description: "This file is a must-read for all members.  Members must read it and commit the contents to heart, or be prepared to suffer the consequences.",
                url: "https://www.dropbox.com/s/2cpdryl61w82fz0/BandBrochure.docx?dl=1"
            },
            {
                name: "Other miscellany.pdf",
                fileType: "pdf",
                description: "this is just really just a pdf",
                url: "https://www.dropbox.com/s/47nnoenpyjhxggs/agenda%203-10-14.pdf?dl=1"
            }
        ];
    });
