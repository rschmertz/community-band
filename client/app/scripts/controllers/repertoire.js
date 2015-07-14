'use strict';

angular.module('mentorApp.controllers.about', [])
  .controller('RepertoireCtrl', ['$scope', function ($scope) {

      $scope.adjustUrl = function(url) {
          return url.replace(/dl=0$/, "dl=1");
      };

      $scope.rep = [
          {
              genre: 'Classical',
              listing: [
                  {
                      name: "Concerto for Piccolo and Band – Vivaldi",
                      link: "https://www.dropbox.com/s/fjv31a9a47p9jru/ConcertoForPiccoloAndBand_Vivaldi_PartI_04APR2012.mp3?dl=0"
                  },{
                      name: "Prelude and Fugue in Ab – JS Bach",
                  },{
                      name: "Barber of Seville – G Rossini",
                      link: "https://www.dropbox.com/s/2wnrwe7lohuyu86/BarberOfSeville_Rossini_30OCT2013.mp3?dl=0",
                  },{
                      name: "Capriol Suite – P Warlock",
                      link: "https://www.dropbox.com/s/qyc5g57dw5zvgmf/CapriolSuite-Mattachins_Warlock_12NOV2014.mp3?dl=0",
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
                      name: "Moorside March – G Holst",
                      link: "https://www.dropbox.com/s/lpmwyuk6jxmzgd7/FirstSuiteEbMilitaryBand_Holst_02NOV2011.mp3?dl=0",
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
                      link: "https://www.dropbox.com/s/8xpvm2ymctzg958/BuglersHoliday_Anderson%28Head%2CGekker%2CAlmalgrom%2C%20Trumpets%29_09APR2011.mp3?dl=1",
                  },{
                      name: "Harry Potter Suite – J Williams",
                      link: "https://www.dropbox.com/s/qf1y2rnfny7tik1/HarryPotterSymphonicSuite_Williams_12NOV2014.mp3?dl=0",
                  }
              ]
          }, {
              genre: "Broadway/Musicals",
              listing: [
                  {
                      name: "Summertime (Porgy & Bess) – G Gershwin (Millicent Scarlett, soprano)",
                      link: "https://www.dropbox.com/s/yemi5t2z1invaoc/Summertime_GershwinMillicentScarlett%2CSoprano%2924June2011.mp3?dl=0",
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
                        link: "https://www.dropbox.com/s/v84r3g6y4kzcblc/LochLomond_Tichelli_02NOV2011.mp3?dl=0",
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
                      link: "https://www.dropbox.com/s/blu0z1w1z25ufi1/October_Whitacre_31OCT2012.mp3?dl=0",
                  },{
                      name: "O Magnum Mysterium – Lauridsen",
                  }
              ]
          }
      ];

      $scope.soloistRep = [
          {
              name: "They Can’t Take That Away From Me – G Gershwin (Millicent Scarlett, soprano)",
              linky: "https://www.dropbox.com/s/xbpp5q2ezhpz8x4/TheyCantTakeThatAwayFromMe_Gershwin%28MillicentScarlett%2CSoprano%29_19JUN2013.mp3?dl=0",
          },{
              name: "Take The A Train – B Strayhorn (Chris Vadala, saxophone)",
              link: "https://www.dropbox.com/s/727v2y5t77o1744/TakeTheATrain_Strayhorn%28ChrisVadala%2CSaxophone%29_24June2011.mp3?dl=0",
          },{
              name: "Meditation from “Thaïs” – Massenet (Daniel Sender, violin)",
              link: "https://www.dropbox.com/s/2ro467ocgvl9347/MeditationfromThais_Massenet%28DanielSender%2CViolin%29_09DEC2011.mp3?dl=0",
          },{
              name: "Variations on Napoli – Bellstedt (Jermaine Fryer, euphonium)",
              link: "https://www.dropbox.com/s/xhywf3br5k5xn9c/VariationsOnNapoli_Bellstedt%28JermaineFryer%2CEuphonium%29.mp3?dl=0",
          }
      ];

  }]);
