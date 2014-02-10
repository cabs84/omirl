/**
 * Created by p.campanella on 27/01/14.
 */

'use strict';
angular.module('omirl.mapNavigatorService', []).
    service('MapNavigatorService', ['$http',  function ($http) {
        this.APIURL = 'http://localhost:8080/it.fadeout.mercurius.webapi/rest';

        this.m_oHttp = $http;

        this.getMapFirstLevels = function() {
            var aoMapLinks = [
                {
                    "link":"img/rain_drops.png",
                    "linkId":1,
                    "selected": false,
                    "hasThirdLevel": false,
                    "description":"Pioggia",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "link":"img/wet.png",
                    "linkId":2,
                    "selected": false,
                    "hasThirdLevel": false,
                    "description":"Umidita' del suolo",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "link":"img/thermometer.png",
                    "linkId":3,
                    "selected": false,
                    "hasThirdLevel": false,
                    "description":"Temperatura",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                }
            ];

            return aoMapLinks;
        }

        this.getMapSecondLevels = function(linkId) {
            if(linkId==1) {
                var aoMapLinks = [
                    {
                        "link":"img/15m.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultimi 15'",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall15m"
                    },
                    {
                        "link":"img/30m.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultimi 30'",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall30m"
                    },
                    {
                        "link":"img/1h.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultima Ora",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall1h"
                    },
                    {
                        "link":"img/3h.png",
                        "linkId":2,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultime 3 Ore",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall3h"
                    },
                    {
                        "link":"img/6h.png",
                        "linkId":3,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultime 6 Ore",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall3h"
                    },
                    {
                        "link":"img/12h.png",
                        "linkId":4,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultime 12 Ore",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall3h"
                    },
                    {
                        "link":"img/24h.png",
                        "linkId":5,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultime 24 Ore",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall24h"
                    },
                    {
                        "link":"img/7d.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultimi 7 Giorni",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall24h"
                    },
                    {
                        "link":"img/15d.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultimi 15 Giorni",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall15d"
                    },
                    {
                        "link":"img/30d.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Pioggia - Ultimi 30 Giorni",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:rainfall30d"
                    }
                ];

                return aoMapLinks;
            }
            else if (linkId == 2) {
                var aoMapLinks = [
                    {
                        "link":"img/wet0.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Umidità del suolo - Stato alle 00:00",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:humidity00"
                    },
                    {
                        "link":"img/wet6.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Umidità del suolo - Stato alle 06:00",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:humidity06"
                    },
                    {
                        "link":"img/wet12.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Umidità del suolo - Stato alle 12:00",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:humidity12"
                    },
                    {
                        "link":"img/wet18.png",
                        "linkId":2,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Umidità del suolo - Stato alle 18:00",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:humidity12"
                    },
                    {
                        "link":"img/wetstart.png",
                        "linkId":3,
                        "selected": false,
                        "hasThirdLevel": true,
                        "description":"Umidità del suolo - Condizioni Iniziali",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "OMIRL:humidityStart"
                    }
                ];

                return aoMapLinks;
            }
            else if (linkId == 3) {
                var aoMapLinks = [
                    {
                        "link":"img/temp-min.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": false,
                        "description":"Temperatura - Minima",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "tempMin"
                    },
                    {
                        "link":"img/temp-avg.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": false,
                        "description":"Temperatura - Media",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "tempMean"
                    },
                    {
                        "link":"img/temp-max.png",
                        "linkId":1,
                        "selected": false,
                        "hasThirdLevel": false,
                        "description":"Temperatura - Massima",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "tempMax"
                    },
                    {
                        "link":"img/theta.png",
                        "linkId":2,
                        "selected": false,
                        "hasThirdLevel": false,
                        "description":"Temperatura - Theta da Media",
                        "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                        "layerID": "tempTheta"
                    }
                ];

                return aoMapLinks;
            }
        }

        this.getMapThirdLevel = function(oMapItem) {
            var aoMapLinks = [
                {
                    "isDefault": true,
                    "mapItem": oMapItem,
                    "description":"Interpolata",
                    "layerIDModifier": ""
                },
                {
                    "isDefault": false,
                    "mapItem": oMapItem,
                    "description":"Comuni",
                    "layerIDModifier": "Com"
                },
                {
                    "isDefault": false,
                    "mapItem": oMapItem,
                    "description":"Bacini",
                    "layerIDModifier": "Bac"
                },
                {
                    "isDefault": false,
                    "mapItem": oMapItem,
                    "description":"Aree Allertamento",
                    "layerIDModifier": "AA"
                }
            ];

            return aoMapLinks;
        }


        this.getSensorFirstLevel = function() {
            var aoSensorFirstLevels = [
                {
                    "code": "Pluvio",
                    "description": "Precipitazione",
                    "imageLinkOn": "img/sensors/pluviometriOn.png",
                    "imageLinkOff": "img/sensors/pluviometriOff.png",
                    "imageLinkInv": "img/sensors/pluviometriInv.png",
                    "count": 50,
                    "isActive": false,
                    "mesUnit": "mm"
                },
                {
                    "code": "Termo",
                    "description": "Termometri",
                    "imageLinkOn": "img/sensors/temperaturaOn.png",
                    "imageLinkOff": "img/sensors/temperaturaOff.png",
                    "imageLinkInv": "img/sensors/temperaturaInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "°"
                },
                {
                    "code": "Idro",
                    "description": "Idrometri",
                    "imageLinkOn": "img/sensors/idrometriOn.png",
                    "imageLinkOff": "img/sensors/idrometriOff.png",
                    "imageLinkInv": "img/sensors/idrometriInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "m/s"
                },
                {
                    "code": "Vento",
                    "description": "Vento",
                    "imageLinkOn": "img/sensors/ventoOn.png",
                    "imageLinkOff": "img/sensors/ventoOff.png",
                    "imageLinkInv": "img/sensors/ventoInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "km/h"
                },
                {
                    "code": "Igro",
                    "description": "Umidita' del Suolo",
                    "imageLinkOn": "img/sensors/igrometriOn.png",
                    "imageLinkOff": "img/sensors/igrometriOff.png",
                    "imageLinkInv": "img/sensors/igrometriInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "%"
                },
                {
                    "code": "Radio",
                    "description": "Radiazione Solare",
                    "imageLinkOn": "img/sensors/radiazioneOn.png",
                    "imageLinkOff": "img/sensors/radiazioneOff.png",
                    "imageLinkInv": "img/sensors/radiazioneInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "W/m^2"
                },
                {
                    "code": "Foglie",
                    "description": "Bagnatura Foliare",
                    "imageLinkOn": "img/sensors/fogliareOn.png",
                    "imageLinkOff": "img/sensors/fogliareOff.png",
                    "imageLinkInv": "img/sensors/fogliareInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "%"
                },
                {
                    "code": "Press",
                    "description": "Pressione Atmosferica",
                    "imageLinkOn": "img/sensors/pressioneOn.png",
                    "imageLinkOff": "img/sensors/pressioneOff.png",
                    "imageLinkInv": "img/sensors/pressioneInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "bar"
                },
                {
                    "code": "Batt",
                    "description": "Tensione Batteria",
                    "imageLinkOn": "img/sensors/batteriaOn.png",
                    "imageLinkOff": "img/sensors/batteriaOff.png",
                    "imageLinkInv": "img/sensors/batteriaInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "%"
                },
                {
                    "code": "Boa",
                    "description": "Boa Onda Metrica",
                    "imageLinkOn": "img/sensors/boeOn.png",
                    "imageLinkOff": "img/sensors/boeOff.png",
                    "imageLinkInv": "img/sensors/boeInv.png",
                    "count": 43,
                    "isActive": false,
                    "mesUnit": "%"
                }
            ];

            return aoSensorFirstLevels;
        }

        this.getStaticLayerLinks = function() {
            var aoStaticLinks = [
                {
                    "selected": false,
                    "description":"Comuni della Liguria",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "selected": false,
                    "description":"Province della Liguria",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "selected": false,
                    "description":"Aree Allertamento",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "selected": false,
                    "description":"Spartiacque della Liguria",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "selected": false,
                    "description":"Reticolo Idrografico",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                },
                {
                    "selected": false,
                    "description":"Aree Inondabili",
                    "layerWMS": "http://www.nfsproject.com/geoserver/OMIRL/wms",
                    "layerID": ""
                }
            ];

            return aoStaticLinks;
        }

    }]);

