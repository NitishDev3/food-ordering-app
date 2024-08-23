import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzM_oU_1q5B_rdcdVP81f-bFmvKq4BqR6Dg&s" alt="" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    return (
        <div className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h6>{avgRating} stars</h6>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    )
}

const Body = () => {
    const resList = [
        {
            "info": {
                "id": "326931",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Late GA Kulkarni Path",
                "areaName": "Kothrud",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "61955",
                "avgRatingString": "4.2",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹169"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chinese-wok-late-ga-kulkarni-path-kothrud-pune-326931",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5624",
                "name": "Subway",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/3c2c022a-d0ea-4f0a-aec5-52546292aa0a_5624.JPG",
                "locality": "F.C. Road",
                "areaName": "Prabhat Road",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "parentId": "2",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.9",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/subway-f-c-road-prabhat-road-pune-5624",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "485330",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "kkhxj0otcsgziyt7vnl5",
                "locality": "F.C. Road",
                "areaName": "F.C. Road",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "4961",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 02:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-f-c-road-pune-485330",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "506982",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fcc0c1ea-aef9-4c8d-8b43-568a3b2e0808_506982.jpg",
                "locality": "Narayan Peth",
                "areaName": "Shaniwar Peth",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "630",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 15,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 00:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-narayan-peth-shaniwar-peth-pune-506982",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "21001",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/1a74ecfe-ccf6-43b8-9288-eb91319bdce8_21001.jpg",
                "locality": "F.C. Road",
                "areaName": "Shivajinagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.2,
                "parentId": "721",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-f-c-road-shivajinagar-pune-21001",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "243625",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243625.JPG",
                "locality": "Deccan Gymkhana",
                "areaName": "Deccan Gymkhana",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Rolls & Wraps",
                    "Fast Food"
                ],
                "avgRating": 4.2,
                "parentId": "547",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "622143",
                "name": "MOJO Pizza - 2X Toppings",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1c21e4ed-37c9-45b2-9788-1fee96413482_622143.JPG",
                "locality": "Camp",
                "areaName": "Koregaon Park",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "parentId": "11329",
                "avgRatingString": "4.5",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-camp-koregaon-park-pune-622143",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "750337",
                "name": "Daily Kitchen - Homely Meals",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750337.JPG",
                "locality": "Dhole Patil Road",
                "areaName": "Kalyani Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Thalis"
                ],
                "avgRating": 4.2,
                "parentId": "444382",
                "avgRatingString": "4.2",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-dhole-patil-road-kalyani-nagar-pune-750337",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "456986",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                "locality": "Somwar Peth",
                "areaName": "Rasta Peth",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 3.9,
                "parentId": "2456",
                "avgRatingString": "3.9",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 01:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-somwar-peth-rasta-peth-pune-456986",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "862315",
                "name": "Olio - The Wood Fired Pizzeria",
                "cloudinaryImageId": "42cd72b7596ea4696d9fe9f302a06d09",
                "locality": "Ghole Road",
                "areaName": "SHIVAJI NAGAR",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Fast Food",
                    "Snacks",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "11633",
                "avgRatingString": "4.4",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-ghole-road-shivaji-nagar-pune-862315",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "11887",
                "name": "Samudra Veg",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/d0807ef7-cc68-4cca-8032-c9eb44c9925e_11887.jpg",
                "locality": "Erandwane",
                "areaName": "Erandwane",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Chinese",
                    "South Indian"
                ],
                "avgRating": 4.5,
                "parentId": "176775",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹150",
                    "discountTag": "SAVE BIG"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "5K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/samudra-veg-erandwane-pune-11887",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "386630",
                "name": "Grameen Kulfi",
                "cloudinaryImageId": "lxckywk7psobloagbpl7",
                "locality": "Prabhat Road",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹120 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "12175",
                "avgRatingString": "4.7",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 14,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "10-15 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/grameen-kulfi-prabhat-road-shivaji-nagar-pune-386630",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "402927",
                "name": "NH1 Bowls - Highway To North",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/2ea0f794-f01a-4e93-8acf-107acc58a183_402927.JPG",
                "locality": "Sangamvadi",
                "areaName": "Dhole Patil Road",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Punjabi",
                    "Home Food"
                ],
                "avgRating": 4.7,
                "parentId": "22452",
                "avgRatingString": "4.7",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-sangamvadi-dhole-patil-road-pune-402927",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "834978",
                "name": "Good Flippin' Burgers",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/7546a88a-776b-4d3d-8cda-61aefe868935_834978.JPG",
                "locality": "Senapati Bapat Road",
                "areaName": "Pavilion Mall",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Burger",
                    "American",
                    "Fast Food"
                ],
                "avgRating": 4.5,
                "parentId": "11748",
                "avgRatingString": "4.5",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 03:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/good-flippin-burgers-senapati-bapat-road-pavilion-mall-pune-834978",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "693690",
                "name": "Largo Pizzeria",
                "cloudinaryImageId": "1d1b64136e79e319e83857551fcb098f",
                "locality": "Deccan Gymkhana",
                "areaName": "Prabhat Road",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.2,
                "parentId": "123491",
                "avgRatingString": "4.2",
                "totalRatingsString": "50+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 2.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-23 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/largo-pizzeria-deccan-gymkhana-prabhat-road-pune-693690",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5297",
                "name": "Le Plaisir",
                "cloudinaryImageId": "jiiy0xlkxs9zmt8nqbbp",
                "locality": "Deccan Gymkhana",
                "areaName": "Deccan Gymkhana",
                "costForTwo": "₹1000 for two",
                "cuisines": [
                    "European"
                ],
                "avgRating": 4.6,
                "parentId": "124544",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 22:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Gourmet.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Gourmet.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.4",
                        "ratingCount": "10K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/le-plaisir-deccan-gymkhana-pune-5297",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5881",
                "name": "Nawab Asia",
                "cloudinaryImageId": "rtbrebcsq1zs3ix5poa1",
                "locality": "Camp",
                "areaName": "Bund Garden Road",
                "costForTwo": "₹1000 for two",
                "cuisines": [
                    "Indian",
                    "Chinese"
                ],
                "avgRating": 4.3,
                "parentId": "4171",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/nawab-asia-camp-bund-garden-road-pune-5881",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "639449",
                "name": "Dum Safar Biryani",
                "cloudinaryImageId": "fx0dti223czabpykykua",
                "locality": "Jangali Maharaj Rd",
                "areaName": "DECCAN MALL",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Kebabs",
                    "Tandoor",
                    "Indian",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "351013",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dum-safar-biryani-jangali-maharaj-rd-deccan-mall-pune-639449",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "507944",
                "name": "Great Indian Khichdi by EatFit",
                "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                "locality": "Ghole Road",
                "areaName": "Shivajinagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Indian",
                    "Home Food",
                    "Healthy Food",
                    "Snacks"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "319582",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 1.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:40:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ],
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-ghole-road-shivajinagar-pune-507944",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "29639",
                "name": "Eatsome- Wraps & Rolls",
                "cloudinaryImageId": "e56240a4b58956f47a5a1f8392470fbe",
                "locality": "J.M.Road",
                "areaName": "Shivajinagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Biryani",
                    "Street Food",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "471587",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 1.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-22 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹95"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/eatsome-wraps-and-rolls-j-m-road-shivajinagar-pune-29639",
                "type": "WEBLINK"
            }
        }
    ];
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="res-constainer">
                {/* <RestaurantCard resData={resList[0]} /> */}
                {resList.map(res =>
                    <RestaurantCard resData={res} />
                )}
            </div>
        </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);