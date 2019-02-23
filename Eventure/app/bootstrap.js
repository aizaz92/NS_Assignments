'use strict';
(function(window) {
    require.config({
        baseUrl: "app",
        paths: {
            'jasmine_f': '../libs/jasmine/lib/jasmine-core',
            'specs': '../test/specs',
            'angular-mocks': '../libs/angular-mocks/angular-mocks',
            'mocks': '../test/mocks',
            '$Libs': '../libs',
            '$App': '../libs/apperyio',
            '$Screens': 'pages',
            '$Modals': 'modals',
            '$Services': 'services',
            "navigateTo": "services/navigateTo",
            "backButton": "services/backButton",
            "AngularTranslate": "services/AngularTranslate",
            "text": "../libs/text",
            "require": "../libs/requirejs/require",
            "angular": "../libs/angular/angular.min",
            "angular-touch": "../libs/angular-touch/angular-touch.min",
            "angular-route": "../libs/angular-route/angular-route.min",
            "ionic": "../libs/ionic/ionic.bundle",
            "appery-ui": "../libs/appery-ui/appery-ui",
            "lodash": "../libs/lodash/dist/lodash.min",
            "gmaps": "../libs/angular-google-maps/angular-google-maps.min",
            "angular-translate": "../libs/angular-translate/angular-translate.min",
            "Apperyio": "../libs/apperyio/Apperyio",
            "q": "../libs/ms_sdk_bundle/q/q",
            "ms-client-sdk": "../libs/ms_sdk_bundle/client-sdk",
            "cordova": "../cordova",
            "x2js": "../libs/x2js/xml2json",
            "$App/crouterconfig": "../libs/apperyio/crouterconfig",
            '$Weekendactivities': 'pages/Weekendactivities',
            '$Sanfran': 'pages/Sanfran',
            '$signup': 'pages/signup',
            '$Home': 'pages/Home',
            '$INL': 'pages/INL',
            '$Invitetocontribute': 'pages/Invitetocontribute',
            '$Input': 'pages/Input',
            '$LL': 'pages/LL',
            '$Youhavechosen': 'pages/Youhavechosen',
            '$signin': 'pages/signin',
            '$Invitetoevent': 'pages/Invitetoevent',
            '$Prof': 'pages/Prof',
            '$Ranking': 'pages/Ranking',
            '$Events': 'pages/Events',
            '$Votingcomplete': 'pages/Votingcomplete',
            '$profile': 'pages/profile'
        },
        waitSeconds: 100,
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-touch": {
                deps: [
                    "angular"
                ]
            },
            "angular-route": {
                deps: [
                    "angular"
                ]
            },
            "ionic": {
                deps: [
                    "angular",
                    "cordova"
                ]
            },
            "appery-ui": {
                deps: [
                    "angular"
                ]
            },
            "lodash": {
                exports: "_"
            },
            "gmaps": {
                deps: [
                    "angular"
                ]
            },
            "angular-translate": {
                deps: [
                    "angular"
                ]
            },
            "x2js": {
                exports: "X2JS"
            },
            'jasmine_f/boot': {
                deps: ['jasmine_f/jasmine-html']
            },
            'jasmine_f/jasmine-html': {
                deps: ['jasmine_f/jasmine']
            },
            'angular-mocks': {
                deps: ['angular', 'jasmine_f/boot']
            }
        }
    });
    define('angular', [], function() {
        return window.angular;
    });
    window.__APPLICATION_NAME = "AppModule_Eventure";
    if (window.location.href.indexOf('tests.html') > -1) {
        require(["require", "angular", "app", '../test/tests_asset'], function() {});
    } else {
        require([
            "require",
            "angular",
            "app",
            "ionic",
            "appery-ui"
        ], function(require, angular) {
            // Run APP
            angular.bootstrap(document.documentElement, [window.__APPLICATION_NAME]);
        });
    }
})(this);