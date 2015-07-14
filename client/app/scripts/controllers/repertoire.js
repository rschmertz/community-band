'use strict';

angular.module('mentorApp.controllers.about', [])
  .controller('RepertoireCtrl', ['$scope', function ($scope) {
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
                      name: "Moorside March – G Holst"
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
                      name: "Summertime (Porgy & Bess) – G Gershwin",
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
                  },{
                      name: "O Magnum Mysterium – Lauridsen",
                  }
              ]
          }
      ];

      $scope.soloistRep = [
          {
              name: "They Can’t Take That Away From Me – G Gershwin (Millicent Scarlet, soprano)",
          },{
              name: "Take The A Train – B Strayhorn (Chris Vadala, saxophone)",
          },{
              name: "Meditation from “Thaïs” – Massenet (Daniel Sender, violin)",
          },{
              name: "Variations on Napoli – Bellstedt (Jermaine Fryer, euphonium)",
          }
      ];

  }]);
