'use strict';

angular.module('mentorApp.controllers.main', [])
  .controller('MainCtrl', ['$scope', function ($scope) {
    var center = $(window).width() / 2;
$(document).ready(function () {
    /*function d() {
        $(".slide.active img").each(function () {
            var g = parseInt($(this).attr("class").split(" ")[1].replace("left", ""));
            var i = g + center;
            var h = parseInt($(this).attr("class").split(" ")[3].replace("t", ""));
            var f = parseInt($(this).attr("class").split(" ")[4].replace("z", ""));
            if ($(this).hasClass("fade")) {
                $(this).css({
                    left: i,
                    top: h,
                    "z-index": f
                })
            } else {
                $(this).css({
                    left: i,
                    top: h,
                    "z-index": f
                }).show()
            }
        });
        setTimeout(function () {
            $(".slide.active img.fade,.slide.active .info").fadeIn(600, "easeInOutQuad", function () {
                $("#feature_slider").removeClass()
            })
        }, 800)
    }*/
    function c() {
        $("#feature_slider").addClass("disabled").append('<ul id="pagination" /><a href="" id="slide-left" /><a href="" id="slide-right" />');
        $("#feature_slider article").each(function () {
            $("#pagination").append('<li><a href="#' + $(this).attr("id") + '">' + $(this).index() + "</a></li>")
        });
        $("#pagination li:first").addClass("active");
        $("#pagination").css({
            left: ($(window).width() - $("#pagination li").length * 14) / 2
        });
        var h = 0;

        function j() {
            $(".slide.active img").each(function () {
                var l = parseInt($(this).attr("class").split(" ")[1].replace("left", ""));
                var q = l + center;
                // var p = parseInt($(this).attr("class").split(" ")[2].replace("st", ""));
                var p = 400;
                var n = parseInt($(this).attr("class").split(" ")[2].replace("sp", ""));
                var o = parseInt($(this).attr("class").split(" ")[3].replace("t", ""));
                var k = parseInt($(this).attr("class").split(" ")[4].replace("z", ""));
                if ($(this).hasClass("fade")) {
                    $(this).css({
                        left: q,
                        top: o,
                        "z-index": k
                    })
                } else {
                    if ($("#feature_slider").hasClass("scrollLeft")) {
                        var m = -$(this).width() - p
                    } else {
                        var m = $(window).width() + p
                    }
                    $(this).css({
                        left: m,
                        top: o,
                        "z-index": k
                    }).show();
                    $(this).animate({
                        left: q
                    }, n, "easeOutQuad")
                }
            });
            setTimeout(function () {
                $(".slide.active img.fade,.slide.active .info").fadeIn(600, "easeInOutQuad", function () {
                    $("#feature_slider").removeClass()
                })
            }, 600)
        }
        function g() {
            $(".slide.active").removeClass("active").addClass("previous");
            $(".slide.previous img").not(".fade").each(function () {
                // var l = parseInt($(this).attr("class").split(" ")[2].replace("st", ""));
                var l = 400;
                var k = parseInt($(this).attr("class").split(" ")[2].replace("sp", ""));
                if ($("#feature_slider").hasClass("scrollLeft")) {
                    $(this).animate({
                        left: $(window).width() + l
                    }, k, "easeInQuad")
                } else {
                    $(this).animate({
                        left: -$(this).width() - l
                    }, k, "easeInQuad")
                }
            });
            // speed of transitions
            $(".slide.previous img.fade,.slide.previous .info").fadeOut(600, "easeInQuad", function () {
                $(".slide.next").removeClass("next").addClass("active").fadeIn(500, "easeInOutQuad", function () {
                    $(".slide.previous").removeClass("previous").fadeOut(500, "easeInOutQuad");
                    j()
                })
            })
        }
        $(".slide:first").addClass("active").fadeIn(500, "easeInOutQuad", function () {
            $("#slide-left, #slide-right, #pagination").fadeIn(200, "easeInOutQuad", function () {
                j()
            })
        });
        $("#pagination li").not("active").click(function () {
            clearInterval(f);
            if ($(this).index() < $("#pagination li.active").index()) {
                $("#feature_slider").addClass("scrollLeft")
            }
            if (!$("#feature_slider").hasClass("disabled")) {
                $("#feature_slider").addClass("disabled");
                $("#pagination li.active").removeClass();
                $(this).addClass("active");
                $($(this).find("a").attr("href")).addClass("next");
                g()
            }
            return false
        });
        $("#slide-left").click(function () {
            clearInterval(f);
            if (!$("#feature_slider").hasClass("disabled")) {
                $("#feature_slider").addClass("disabled");
                if ($("#pagination li:first").hasClass("active")) {
                    $("#pagination li.active").removeClass();
                    $("#pagination li:last").addClass("active");
                    $("#feature_slider article:last").addClass("next")
                } else {
                    $("#pagination li.active").removeClass().prev().addClass("active");
                    $("#feature_slider article.active").prev().addClass("next")
                }
                $("#feature_slider").addClass("scrollLeft");
                g()
            }
            return false
        });

        function i() {
            if (!$("#feature_slider").hasClass("disabled")) {
                $("#feature_slider").addClass("disabled");
                if ($("#pagination li:last").hasClass("active")) {
                    $("#pagination li.active").removeClass();
                    $("#pagination li:first").addClass("active");
                    $("#feature_slider article:first").addClass("next")
                } else {
                    $("#pagination li.active").removeClass().next().addClass("active");
                    $("#feature_slider article.active").next().addClass("next")
                }
                g()
            }
        }
        $("#slide-right").click(function () {
            clearInterval(f);
            i();
            return false
        });
        var f = setInterval(function () {
            i()
        }, 5000)
    }
    //c();
    $(window).resize(function () {
        $("#pagination").css({
            left: ($(window).width() - $("#pagination li").length * 14) / 2
        });
        center = $(window).width() / 2;
        //d()
    });
});


  }])
    .controller('EventsCtrl', ['$scope', '$q', 'Events', 'DocUtils', 'CardAttachments', function ($scope, $q, Events, DocUtils, CardAttachments) {

        this.eventList = [];//{name: 'name1', due: 'due1', simpleLocation: 'dekelboum'}];
        var self = this;
        var imgNameRegex = new RegExp(".+\.(png|jpg|gif)");
        var docNameRegex = new RegExp(".+\.(pdf|doc|docx)");

	var compDate = new Date();
	var lastCalYear = compDate.getFullYear() - 1;
	compDate.setFullYear(lastCalYear);
	console.log("Compdate is", compDate);
	$scope.pastYearEvents = function (event, one, two) {
	    
	    var concertDate = new Date(event.due);
	    var recent = concertDate > compDate;
	    //console.log(event.name + " is " + (recent ? '' : 'not ') + 'recent');
	    return recent;
	};

	

        Events.query(function(data, extra) {
            console.log("events query data is", data);
            var promises = [];
            var cardList = data;
            cardList.forEach(function (card) {
                card.doclist = [];
                card.linklist = [];
                var attachmentsPromise = CardAttachments.query({ id: card.id }, function (data) {
                    data.forEach(function(attachment) {
                        if (attachment.name.match(imgNameRegex)) {
                            if (!card.image) {
                                card.image = attachment;
                                for (var index = attachment.previews.length - 1;
                                     index > 0 &&
                                     attachment.previews[index].height > 300;
                                     index--);
                                card.largeImage = attachment.previews[index];
                            };
                        } else if (attachment.name.match(docNameRegex)) {
                            attachment.icon = DocUtils.getMiniIcon(attachment.name);
                            card.doclist.push(attachment);
                        } else {
                            card.linklist.push(attachment);
                        }
                    });
                })
                promises.push(attachmentsPromise);
            });
            $q.all(promises).then(function (cardAttachments) {
                for (var i = 0; i < cardAttachments.length && i < cardList.length; i++) {
                    cardList[i].attachments = cardAttachments[i];
                };
                self.eventList = cardList;
            });

        });
    }])
.filter('futurePast', function () {
    return function (eventlist, past) {
        var output = [];
        var today = new Date();
        past = past || false
        var reverseFactor = past ? -1 : 1
        eventlist.forEach(function(event) {
            var d = new Date(event.due);
            if ((d >= today) != past) {
                output.push(event);
            }
        });
	
        return output.sort(function (a, b) {
            return (new Date(a.due) - new Date(b.due)) * reverseFactor;
        });
    };
})
.filter('cardDateSort', function () {
    return function (eventlist, reverse) {
        var reverseFactor = reverse ? -1 : 1;
        var eListCopy = eventlist.slice(0);
        return(eListCopy.sort(function (a, b) {
            var diff = (new Date(a.due) - new Date(b.due)) * reverseFactor;
            return diff;
        }));

    }
})
