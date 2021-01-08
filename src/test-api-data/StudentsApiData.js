const students = [
    {
        "id": 0,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Foley",
        "classRoom": 4,
        "email": "foley@gmail.ca",
        "phone": "+1 (931) 455-3854"
    },
    {
        "id": 1,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Carmella",
        "classRoom": 0,
        "email": "carmella@gmail.biz",
        "phone": "+1 (837) 533-2225"
    },
    {
        "id": 2,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Staci",
        "classRoom": 1,
        "email": "staci@gmail.name",
        "phone": "+1 (868) 481-3135"
    },
    {
        "id": 3,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Molina",
        "classRoom": 0,
        "email": "molina@gmail.me",
        "phone": "+1 (885) 403-3060"
    },
    {
        "id": 4,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Gregory",
        "classRoom": 0,
        "email": "gregory@gmail.co.uk",
        "phone": "+1 (972) 472-3854"
    },
    {
        "id": 5,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Key",
        "classRoom": 2,
        "email": "key@gmail.com",
        "phone": "+1 (949) 439-3658"
    },
    {
        "id": 6,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Padilla",
        "classRoom": 4,
        "email": "padilla@gmail.info",
        "phone": "+1 (930) 499-2251"
    },
    {
        "id": 7,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "Kate",
        "classRoom": 4,
        "email": "kate@gmail.org",
        "phone": "+1 (824) 429-3353"
    },
    {
        "id": 8,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Shelley",
        "classRoom": 1,
        "email": "shelley@gmail.us",
        "phone": "+1 (899) 453-3687"
    },
    {
        "id": 9,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Suarez",
        "classRoom": 0,
        "email": "suarez@gmail.net",
        "phone": "+1 (803) 508-2873"
    },
    {
        "id": 10,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Jarvis",
        "classRoom": 1,
        "email": "jarvis@gmail.tv",
        "phone": "+1 (840) 432-2879"
    },
    {
        "id": 11,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Nadia",
        "classRoom": 3,
        "email": "nadia@gmail.io",
        "phone": "+1 (819) 520-3017"
    },
    {
        "id": 12,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Nell",
        "classRoom": 5,
        "email": "nell@gmail.ca",
        "phone": "+1 (861) 588-2706"
    },
    {
        "id": 13,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Lorraine",
        "classRoom": 0,
        "email": "lorraine@gmail.biz",
        "phone": "+1 (944) 568-3343"
    },
    {
        "id": 14,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "April",
        "classRoom": 1,
        "email": "april@gmail.name",
        "phone": "+1 (981) 597-3512"
    },
    {
        "id": 15,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Vanessa",
        "classRoom": 3,
        "email": "vanessa@gmail.me",
        "phone": "+1 (850) 501-3541"
    },
    {
        "id": 16,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "Eloise",
        "classRoom": 3,
        "email": "eloise@gmail.co.uk",
        "phone": "+1 (952) 519-3276"
    },
    {
        "id": 17,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Blevins",
        "classRoom": 0,
        "email": "blevins@gmail.com",
        "phone": "+1 (876) 405-3366"
    },
    {
        "id": 18,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Ellis",
        "classRoom": 4,
        "email": "ellis@gmail.info",
        "phone": "+1 (951) 488-2913"
    },
    {
        "id": 19,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Ora",
        "classRoom": 4,
        "email": "ora@gmail.org",
        "phone": "+1 (941) 431-3032"
    },
    {
        "id": 20,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Earline",
        "classRoom": 4,
        "email": "earline@gmail.us",
        "phone": "+1 (916) 584-3534"
    },
    {
        "id": 21,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": "Paul",
        "classRoom": 3,
        "email": "paul@gmail.net",
        "phone": "+1 (988) 519-3374"
    },
    {
        "id": 22,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Haney",
        "classRoom": 5,
        "email": "haney@gmail.tv",
        "phone": "+1 (804) 493-3217"
    },
    {
        "id": 23,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Hubbard",
        "classRoom": 2,
        "email": "hubbard@gmail.io",
        "phone": "+1 (836) 425-3987"
    },
    {
        "id": 24,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Deanna",
        "classRoom": 3,
        "email": "deanna@gmail.ca",
        "phone": "+1 (899) 479-3730"
    },
    {
        "id": 25,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Winters",
        "classRoom": 3,
        "email": "winters@gmail.biz",
        "phone": "+1 (931) 533-3292"
    },
    {
        "id": 26,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Sandy",
        "classRoom": 1,
        "email": "sandy@gmail.name",
        "phone": "+1 (963) 457-3320"
    },
    {
        "id": 27,
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Stark",
        "classRoom": 1,
        "email": "stark@gmail.me",
        "phone": "+1 (922) 526-2071"
    },
    {
        "id": 28,
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Rich",
        "classRoom": 3,
        "email": "rich@gmail.co.uk",
        "phone": "+1 (821) 593-2400"
    },
    {
        "id": 29,
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Rhea",
        "classRoom": 5,
        "email": "rhea@gmail.com",
        "phone": "+1 (829) 437-2359"
    },
    {
        "id": 30,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Krista",
        "classRoom": 2,
        "email": "krista@gmail.info",
        "phone": "+1 (913) 532-3194"
    },
    {
        "id": 31,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Kaufman",
        "classRoom": 2,
        "email": "kaufman@gmail.org",
        "phone": "+1 (802) 523-3134"
    },
    {
        "id": 32,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": "Katy",
        "classRoom": 3,
        "email": "katy@gmail.us",
        "phone": "+1 (957) 401-2465"
    },
    {
        "id": 33,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Callahan",
        "classRoom": 3,
        "email": "callahan@gmail.net",
        "phone": "+1 (899) 412-2932"
    },
    {
        "id": 34,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Tanner",
        "classRoom": 5,
        "email": "tanner@gmail.tv",
        "phone": "+1 (906) 580-3183"
    },
    {
        "id": 35,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Bailey",
        "classRoom": 5,
        "email": "bailey@gmail.io",
        "phone": "+1 (987) 472-3320"
    },
    {
        "id": 36,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Rosemary",
        "classRoom": 3,
        "email": "rosemary@gmail.ca",
        "phone": "+1 (878) 497-2758"
    },
    {
        "id": 37,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Cindy",
        "classRoom": 4,
        "email": "cindy@gmail.biz",
        "phone": "+1 (805) 470-3868"
    },
    {
        "id": 38,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Sharon",
        "classRoom": 3,
        "email": "sharon@gmail.name",
        "phone": "+1 (955) 493-2150"
    },
    {
        "id": 39,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "name": "Mia",
        "classRoom": 3,
        "email": "mia@gmail.me",
        "phone": "+1 (805) 436-3223"
    },
    {
        "id": 40,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": "Lynda",
        "classRoom": 4,
        "email": "lynda@gmail.co.uk",
        "phone": "+1 (802) 557-2521"
    },
    {
        "id": 41,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": "Fowler",
        "classRoom": 5,
        "email": "fowler@gmail.com",
        "phone": "+1 (864) 543-3244"
    },
    {
        "id": 42,
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "Conrad",
        "classRoom": 1,
        "email": "conrad@gmail.info",
        "phone": "+1 (965) 587-3764"
    },
    {
        "id": 43,
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Reva",
        "classRoom": 4,
        "email": "reva@gmail.org",
        "phone": "+1 (963) 433-3336"
    },
    {
        "id": 44,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Serena",
        "classRoom": 2,
        "email": "serena@gmail.us",
        "phone": "+1 (890) 430-2796"
    },
    {
        "id": 45,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Molly",
        "classRoom": 3,
        "email": "molly@gmail.net",
        "phone": "+1 (921) 502-2306"
    },
    {
        "id": 46,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Vaughan",
        "classRoom": 3,
        "email": "vaughan@gmail.tv",
        "phone": "+1 (967) 592-3652"
    },
    {
        "id": 47,
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "name": "Bettye",
        "classRoom": 4,
        "email": "bettye@gmail.io",
        "phone": "+1 (836) 463-3154"
    },
    {
        "id": 48,
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Winnie",
        "classRoom": 1,
        "email": "winnie@gmail.ca",
        "phone": "+1 (853) 407-2993"
    },
    {
        "id": 49,
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "name": "Ashley",
        "classRoom": 4,
        "email": "ashley@gmail.biz",
        "phone": "+1 (955) 489-2255"
    },
    {
        "id": 50,
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "name": "Kaitlin",
        "classRoom": 2,
        "email": "kaitlin@gmail.name",
        "phone": "+1 (999) 576-2759"
    },
    {
        "id": 51,
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": "Jodi",
        "classRoom": 1,
        "email": "jodi@gmail.me",
        "phone": "+1 (839) 452-3220"
    },
    {
        "id": 52,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Rosario",
        "classRoom": 3,
        "email": "rosario@gmail.co.uk",
        "phone": "+1 (864) 451-2597"
    }
]


export default students