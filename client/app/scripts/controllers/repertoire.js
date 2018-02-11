'use strict';

angular.module('mentorApp.controllers.about', [])
  .controller('RepertoireCtrl', ['$scope', function ($scope) {

      $scope.adjustUrl = function(url) {
          return url.replace(/dl=0$/, "dl=0");
      };

      $scope.rep = [
          {
              genre: 'Classical',
              listing: [
                  {
                      name: "Concerto for Piccolo and Band – Vivaldi",
                      link: "audio/ConcertoForPiccoloAndBand_Vivaldi_PartI_04APR2012.mp3"
                  },{
                      name: "Prelude and Fugue in Ab – JS Bach",
                  },{
                      name: "Barber of Seville – G Rossini",
                      link: "audio/BarberOfSeville_Rossini_30OCT2013.mp3",
                  },{
                      name: "Capriol Suite – P Warlock",
                      link: "audio/CapriolSuite-Mattachins_Warlock_12NOV2014.mp3",
                  },{
                      name: "Symphony No. 3 Finale – G Mahler",
                  }
              ]
          },{
              genre: "March",
              listing: [
                  {
                      name: "National Emblem – EE Bagley",
                  },{
                      name: "Midway March – J Williams",
                  },{
                      name: "Commando March – S Barber",
                  },{
                      name: "The Stars and Stripes Forever March – JP Sousa",
                  },{
                      name: "First Suite – G Holst",
                      link: "audio/FirstSuiteEbMilitaryBand_Holst_02NOV2011.mp3",
                  }
              ]
          }, {
              genre: "Jazz/Big Band",
              listing: [
                  {
                      name: "Embraceable You – G Gerswhin",
                  },{
                      name: "Night and Day – C Porter",
                  },{
                      name: "Persuasion – S Nestico",
                  }
              ]
          }, {
              genre: "Popular",
              listing: [
                  {
                      name: "Bugler’s Holiday – L Anderson",
                      link: "audio/BuglersHoliday_Anderson%28Head%2CGekker%2CAlmalgrom%2C%20Trumpets%29_09APR2011.mp3",
                  },{
                      name: "Harry Potter Suite – J Williams",
                      link: "audio/HarryPotterSymphonicSuite_Williams_12NOV2014.mp3",
                  }
              ]
          }, {
              genre: "Broadway/Musicals",
              listing: [
                  {
                      name: "Summertime (Porgy & Bess) – G Gershwin (Millicent Scarlett, soprano)",
                      link: "audio/Summertime_GershwinMillicentScarlett%2CSoprano%2924June2011.mp3",
                  },{
                      name: "Seventy-Six Trombones – M Willson",
                  },{
                      name: "Carousel – R Rodgers",
                  },{
                      name: "South Pacific – R Rodgers"

                  }
              ]
          }, {
              genre: "Traditional/Folk",
              listing: [
                  {
                      name: "An Irish Rhapsody – C Grundman",
                    },{
                        name: "Loch Lomond – F Ticheli",
                        link: "audio/LochLomond_Tichelli_02NOV2011.mp3",
                    },{
                        name: "Irish Tune from County Derry – P Grainger"
                    }
              ]
          }, {
              genre: "American Symphonic",
              listing: [
                  {
                      name: "An Outdoor Overture – A Copland",
                  },{
                      name: "October – E Whitacre",
                      link: "audio/October_Whitacre_31OCT2012.mp3",
                  },{
                      name: "O Magnum Mysterium – Lauridsen",
                  }
              ]
          }, {
              genre: "Holiday",
              listing: [
                  {
                      name: "Sleigh Ride - Leroy Anderson",
                      link: "https://youtu.be/V-zUbe9laks",
                  }
              ]
          }
      ];

      $scope.soloistRep = [
          {
              name: "They Can’t Take That Away From Me – G Gershwin (Millicent Scarlett, soprano)",
              linky: "audio/TheyCantTakeThatAwayFromMe_Gershwin%28MillicentScarlett%2CSoprano%29_19JUN2013.mp3",
          },{
              name: "Take The A Train – B Strayhorn (Chris Vadala, saxophone)",
              link: "audio/TakeTheATrain_Strayhorn%28ChrisVadala%2CSaxophone%29_24June2011.mp3",
          },{
              name: "Meditation from “Thaïs” – Massenet (Daniel Sender, violin)",
              link: "audio/MeditationfromThais_Massenet%28DanielSender%2CViolin%29_09DEC2011.mp3",
          },{
              name: "Variations on Napoli – Bellstedt (Jermaine Fryer, euphonium)",
              link: "audio/VariationsOnNapoli_Bellstedt%28JermaineFryer%2CEuphonium%29.mp3",
          }
      ];

  }]);
