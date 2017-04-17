(function(angular) {
    'use strict';

    var data =  [{
            "rating": {
                "max": 10,
                "average": 7.3,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "犯罪"
            ],
            "title": "速度与激情8",
            "casts": [{
                "alt": "https://movie.douban.com/celebrity/1041020/",
                "avatars": {
                    "small": "https://img5.doubanio.com/img/celebrity/small/53186.jpg",
                    "large": "https://img5.doubanio.com/img/celebrity/large/53186.jpg",
                    "medium": "https://img5.doubanio.com/img/celebrity/medium/53186.jpg"
                },
                "name": "范·迪塞尔",
                "id": "1041020"
            }, {
                "alt": "https://movie.douban.com/celebrity/1044707/",
                "avatars": {
                    "small": "https://img5.doubanio.com/img/celebrity/small/196.jpg",
                    "large": "https://img5.doubanio.com/img/celebrity/large/196.jpg",
                    "medium": "https://img5.doubanio.com/img/celebrity/medium/196.jpg"
                },
                "name": "道恩·强森",
                "id": "1044707"
            }, {
                "alt": "https://movie.douban.com/celebrity/1018991/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/44470.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/44470.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/44470.jpg"
                },
                "name": "查理兹·塞隆",
                "id": "1018991"
            }],
            "collect_count": 62201,
            "original_title": "The Fate of the Furious",
            "subtype": "movie",
            "directors": [{
                "alt": "https://movie.douban.com/celebrity/1009396/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/4451.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/4451.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/4451.jpg"
                },
                "name": "F·加里·格雷",
                "id": "1009396"
            }],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2444256500.webp",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2444256500.webp",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2444256500.webp"
            },
            "alt": "https://movie.douban.com/subject/26260853/",
            "id": "26260853"
        }, {
            "rating": {
                "max": 10,
                "average": 9.1,
                "stars": "45",
                "min": 0
            },
            "genres": [
                "动作",
                "冒险",
                "喜剧"
            ],
            "title": "大话西游之大圣娶亲",
            "casts": [{
                "alt": "https://movie.douban.com/celebrity/1048026/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/47421.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/47421.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/47421.jpg"
                },
                "name": "周星驰",
                "id": "1048026"
            }, {
                "alt": "https://movie.douban.com/celebrity/1016771/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/45481.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/45481.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/45481.jpg"
                },
                "name": "吴孟达",
                "id": "1016771"
            }, {
                "alt": "https://movie.douban.com/celebrity/1041734/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/5539.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/5539.jpg"
                },
                "name": "朱茵",
                "id": "1041734"
            }],
            "collect_count": 584647,
            "original_title": "西遊記大結局之仙履奇緣",
            "subtype": "movie",
            "directors": [{
                "alt": "https://movie.douban.com/celebrity/1274431/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/45374.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/45374.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/45374.jpg"
                },
                "name": "刘镇伟",
                "id": "1274431"
            }],
            "year": "1995",
            "images": {
                "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p2455050536.webp",
                "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2455050536.webp",
                "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p2455050536.webp"
            },
            "alt": "https://movie.douban.com/subject/1292213/",
            "id": "1292213"
        }, {
            "rating": {
                "max": 10,
                "average": 6.6,
                "stars": "35",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "犯罪"
            ],
            "title": "攻壳机动队",
            "casts": [{
                "alt": "https://movie.douban.com/celebrity/1054453/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/37050.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/37050.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/37050.jpg"
                },
                "name": "斯嘉丽·约翰逊",
                "id": "1054453"
            }, {
                "alt": "https://movie.douban.com/celebrity/1032805/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/1366032638.59.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/1366032638.59.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1366032638.59.jpg"
                },
                "name": "皮鲁·埃斯贝克",
                "id": "1032805"
            }, {
                "alt": "https://movie.douban.com/celebrity/1054423/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/39452.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/39452.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/39452.jpg"
                },
                "name": "北野武",
                "id": "1054423"
            }],
            "collect_count": 61636,
            "original_title": "Ghost in the Shell",
            "subtype": "movie",
            "directors": [{
                "alt": "https://movie.douban.com/celebrity/1320096/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/52315.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/52315.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/52315.jpg"
                },
                "name": "鲁伯特·桑德斯",
                "id": "1320096"
            }],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2453176400.webp",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2453176400.webp",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2453176400.webp"
            },
            "alt": "https://movie.douban.com/subject/25818101/",
            "id": "25818101"
        }];

    var module = angular.module('moviecat.in_theaters', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatresController'
        });
    }]);

    module.controller('InTheatresController', ['$scope', function($scope) {
        $scope.dataList = data;
    }]);

})(angular)
