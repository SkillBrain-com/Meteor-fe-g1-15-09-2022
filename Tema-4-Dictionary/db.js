/*PRODUSE
    {
        nume: string;
        brand: string;
        culori: string;
        dimensiuni: string;
        pret: number;
        procentReducere: number;
    }

*/



const BAZA_DE_DATE = [
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Stradivarius",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 922.8930115210222,
        "procentReducere": 26
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "Stradivarius",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 606.6464621402333,
        "procentReducere": 19
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER POLO",
        "brand": "Zara",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 817.2929266044661,
        "procentReducere": 26
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 920.8887945991116,
        "procentReducere": 6
    },
    {
        "nume": "PULOVER OVERSIZE DIN TRICOT",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 460.20133088074346,
        "procentReducere": 21
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "Versace",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 455.5385186517783,
        "procentReducere": 10
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "Stradivarius",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 287.3551346371934,
        "procentReducere": 11
    },
    {
        "nume": "SALOPETĂ SCURTĂ CU IMPRIMEU",
        "brand": "Zara",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 807.8996182342363,
        "procentReducere": 18
    },
    {
        "nume": "PULOVER OVERSIZE DIN TRICOT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 198.63751659151743,
        "procentReducere": 27
    },
    {
        "nume": "BLAZER PETRECUT CAMBRAT",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS"
        ],
        "pret": 124.67911781206445,
        "procentReducere": 14
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 648.1436199393395,
        "procentReducere": 7
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 1048.331176618718,
        "procentReducere": 2
    },
    {
        "nume": "BLAZER DREPT OVERSIZE",
        "brand": "Versace",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 112.50643432004672,
        "procentReducere": 26
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Stradivarius",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 558.0942745713448,
        "procentReducere": 3
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 951.6890351888062,
        "procentReducere": 22
    },
    {
        "nume": "PALTON CU LÂNĂ ȘI GULER ÎNALT",
        "brand": "Guess",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 489.2369261632873,
        "procentReducere": 10
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 588.2549605649027,
        "procentReducere": 7
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Berska",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 897.341255006851,
        "procentReducere": 5
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 1015.2589763404235,
        "procentReducere": 5
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 987.2578176508823,
        "procentReducere": 25
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 757.5912633363143,
        "procentReducere": 19
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 893.8686393956284,
        "procentReducere": 5
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Versace",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 656.2035353461403,
        "procentReducere": 22
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Tommy Hilfiger",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 929.6091120461862,
        "procentReducere": 2
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 889.4885548067856,
        "procentReducere": 24
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 898.7750045313034,
        "procentReducere": 30
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "Mojito",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 633.5569792784282,
        "procentReducere": 4
    },
    {
        "nume": "PULOVER OVERSIZE DIN TRICOT",
        "brand": "Nike",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 145.37293609647386,
        "procentReducere": 3
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 758.8692061979568,
        "procentReducere": 23
    },
    {
        "nume": "BLAZER PETRECUT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 433.60922548955864,
        "procentReducere": 1
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "Guess",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 1063.6273387730791,
        "procentReducere": 2
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 323.3631486530101,
        "procentReducere": 8
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "Mojito",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 1076.1376024356255,
        "procentReducere": 17
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 914.7981421113913,
        "procentReducere": 5
    },
    {
        "nume": "PALTON CAMBRAT CU LÂNĂ",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL",
            "4XL"
        ],
        "pret": 717.4566341814298,
        "procentReducere": 28
    },
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN",
            "ARGINTIU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 250.32701022335226,
        "procentReducere": 14
    },
    {
        "nume": "PANTALONI CU PENSE ȘI CUREA",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 594.6061233947673,
        "procentReducere": 7
    },
    {
        "nume": "BLAZER PETRECUT OVERSIZE PEPIT",
        "brand": "Gant",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 893.4891208047706,
        "procentReducere": 8
    },
    {
        "nume": "SALOPETĂ SCURTĂ CU IMPRIMEU",
        "brand": "Guess",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 138.8378969815837,
        "procentReducere": 7
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 958.6687876586765,
        "procentReducere": 14
    },
    {
        "nume": "PALTON CU LÂNĂ ȘI GULER ÎNALT",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN",
            "ARGINTIU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 907.7171834069974,
        "procentReducere": 1
    },
    {
        "nume": "PALTON CU LÂNĂ ȘI GULER ÎNALT",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 478.5863146365489,
        "procentReducere": 28
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Gant",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 361.11096955216163,
        "procentReducere": 19
    },
    {
        "nume": "PANTALONI PAPERBAG CU TALIE ELASTICĂ",
        "brand": "Guess",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 635.4798733685868,
        "procentReducere": 4
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Nike",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 668.2716749566171,
        "procentReducere": 15
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 1007.3218413875717,
        "procentReducere": 2
    },
    {
        "nume": "PANTALONI CU DUNGI FINE ȘI TIV ÎNTORS",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 537.6414890063982,
        "procentReducere": 29
    },
    {
        "nume": "JACHETĂ CAMBRATĂ DIN TRICOT",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 1021.9521019418476,
        "procentReducere": 13
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 941.7782362905648,
        "procentReducere": 1
    },
    {
        "nume": "JACHETĂ CAMBRATĂ DIN TRICOT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN",
            "ARGINTIU"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 779.5065721046884,
        "procentReducere": 29
    },
    {
        "nume": "PALTON OVERSIZE CU LÂNĂ",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 543.7291151681064,
        "procentReducere": 9
    },
    {
        "nume": "PANTALONI CU PENSE ȘI CUREA",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 722.4465093269044,
        "procentReducere": 25
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 832.054741306503,
        "procentReducere": 18
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 791.5955680821781,
        "procentReducere": 21
    },
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 151.8958758467649,
        "procentReducere": 3
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 992.3370614978203,
        "procentReducere": 30
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL",
            "4XL"
        ],
        "pret": 955.9015696119112,
        "procentReducere": 1
    },
    {
        "nume": "BLAZER DREPT OVERSIZE",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 276.52317464166265,
        "procentReducere": 19
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 832.7302574332681,
        "procentReducere": 1
    },
    {
        "nume": "BLAZER DREPT OVERSIZE",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 980.6159397306719,
        "procentReducere": 12
    },
    {
        "nume": "BLAZER PETRECUT OVERSIZE PEPIT",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 783.4304401574432,
        "procentReducere": 29
    },
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 111.66060358550402,
        "procentReducere": 13
    },
    {
        "nume": "BLAZER PETRECUT CU DUNGI FINE",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 518.536709887239,
        "procentReducere": 23
    },
    {
        "nume": "PALTON CU LÂNĂ ȘI GULER ÎNALT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS"
        ],
        "pret": 449.2504113231827,
        "procentReducere": 16
    },
    {
        "nume": "SALOPETĂ SCURTĂ CU IMPRIMEU",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 715.0375025126071,
        "procentReducere": 8
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 521.6160918035667,
        "procentReducere": 19
    },
    {
        "nume": "BLAZER DREPT OVERSIZE",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 203.0326952036189,
        "procentReducere": 22
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL",
            "4XL"
        ],
        "pret": 200.34605025943355,
        "procentReducere": 13
    },
    {
        "nume": "BLUZĂ ÎN CAROURI CU GULER ÎNALT",
        "brand": "Nike",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 856.7561701099393,
        "procentReducere": 17
    },
    {
        "nume": "BLAZER PETRECUT CAMBRAT",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS"
        ],
        "pret": 475.10973159964567,
        "procentReducere": 18
    },
    {
        "nume": "BLAZER PETRECUT CU DUNGI FINE",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL",
            "4XL"
        ],
        "pret": 968.7315783778769,
        "procentReducere": 22
    },
    {
        "nume": "PALTON CU LÂNĂ ȘI GULER ÎNALT",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 1058.199726085435,
        "procentReducere": 10
    },
    {
        "nume": "BLUZĂ ÎN CAROURI CU GULER ÎNALT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 439.96897408426594,
        "procentReducere": 21
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Adidas",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU"
        ],
        "dimensiuni": [
            "XS"
        ],
        "pret": 438.8581429341939,
        "procentReducere": 1
    },
    {
        "nume": "PANTALONI CU DUNGI FINE ȘI TIV ÎNTORS",
        "brand": "Versace",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 262.9710212676432,
        "procentReducere": 20
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 553.1441491298106,
        "procentReducere": 28
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 320.4780231894403,
        "procentReducere": 27
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 800.7608856683909,
        "procentReducere": 12
    },
    {
        "nume": "CERCEI MAXI CU PERLĂ",
        "brand": "Tommy Hilfiger",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN",
            "ARGINTIU"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 1016.4331214577057,
        "procentReducere": 28
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Gant",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL",
            "4XL"
        ],
        "pret": 493.75991195532237,
        "procentReducere": 22
    },
    {
        "nume": "FUSTĂ CARGO LOOSE RISE",
        "brand": "Gant",
        "culori": [
            "ROSU",
            "VERDE"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 1035.7757252529136,
        "procentReducere": 14
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 612.2560945914423,
        "procentReducere": 14
    },
    {
        "nume": "PALTON CAMBRAT CU LÂNĂ",
        "brand": "Guess",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 538.5714702083612,
        "procentReducere": 24
    },
    {
        "nume": "JACHETĂ CAMBRATĂ DIN TRICOT",
        "brand": "Stradivarius",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 160.19511574977642,
        "procentReducere": 12
    },
    {
        "nume": "PANTALONI DREPȚI CU TIV ÎNTORS",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 280.1715631012793,
        "procentReducere": 7
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 983.033706703044,
        "procentReducere": 29
    },
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 326.0104349726297,
        "procentReducere": 24
    },
    {
        "nume": "PANTALONI DREPȚI CU DUNGI FINE",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 873.5695270770018,
        "procentReducere": 10
    },
    {
        "nume": "BLAZER PETRECUT",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 446.3533042869458,
        "procentReducere": 10
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER POLO",
        "brand": "Pull&Bear",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "pret": 117.43565463028607,
        "procentReducere": 14
    },
    {
        "nume": "ROCHIE MINI DIN TRICOT",
        "brand": "Mojito",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M"
        ],
        "pret": 833.702221976607,
        "procentReducere": 6
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Versace",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 687.3427815907888,
        "procentReducere": 20
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "LCWaikiki",
        "culori": [
            "ROSU"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 375.74597863532244,
        "procentReducere": 7
    },
    {
        "nume": "JACHETĂ CAMBRATĂ DIN TRICOT",
        "brand": "Zara",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "pret": 1075.3571063305212,
        "procentReducere": 20
    },
    {
        "nume": "PANTALONI CARGO LOOSE RISE",
        "brand": "Tommy Hilfiger",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 873.6820928904715,
        "procentReducere": 17
    },
    {
        "nume": "PULOVER DIN TRICOT CU GULER PERKINS",
        "brand": "Guess",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL",
            "3XL"
        ],
        "pret": 272.50249165148875,
        "procentReducere": 1
    },
    {
        "nume": "PULOVER DIN TRICOT SOFT",
        "brand": "US Pollo",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 906.6347278039079,
        "procentReducere": 11
    },
    {
        "nume": "BLAZER PETRECUT",
        "brand": "Mango",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI"
        ],
        "dimensiuni": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "2XL"
        ],
        "pret": 376.85962010445485,
        "procentReducere": 19
    },
    {
        "nume": "PANTALONI CARGO STIL PARACHUTE",
        "brand": "Tommy Hilfiger",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET",
            "CORAL",
            "GALBEN"
        ],
        "dimensiuni": [
            "XS"
        ],
        "pret": 418.9173565091765,
        "procentReducere": 6
    },
    {
        "nume": "BLUZĂ ÎN CAROURI CU GULER ÎNALT",
        "brand": "Nike",
        "culori": [
            "ROSU",
            "VERDE",
            "GRI",
            "NEGRU",
            "ALB",
            "ALBASTRU",
            "FUCSIA",
            "MOV",
            "VIOLET"
        ],
        "dimensiuni": [
            "XS",
            "S"
        ],
        "pret": 738.7194656825401,
        "procentReducere": 15
    }
];

//console.log(BAZA_DE_DATE);