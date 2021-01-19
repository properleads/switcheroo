export var json = {
    showProgressBar: "top",
    goNextPageAutomatic: true,
    showNavigationButtons: false,
    showDescription: true,
    showCompletedPage: false,
    showQuestionNumbers : 'off',
    pages: [
        {
            elements: [
                {
                    "type": "imagepicker",
                    "name": "brand_provider",
                    title: "Who is your current broadband provider?",
                    description: "If you don't currently have a provider or you are unsure, please select 'other'",
                    colCount: 4,
                    choices: [
                        {
                            "value": "TalkTalk",
                            "imageLink": "/images/talktalk-logo-2019.png"
                        },{
                            "value": "BT",
                            "imageLink": "/images/bt-3.300px.png"
                        },{
                            "value": "Plusnet",
                            "imageLink": "/images/Plusnet-Logo.wine.png"
                        },{
                            "value": "Sky",
                            "imageLink": "/images/5842ab6da6515b1e0ad75b0a.png"
                        },{
                            "value": "Virgin",
                            "imageLink": "/images/kisspng-virgin-media-ireland-logo915276328330659.png"
                        },{
                            "value": "Vodafone",
                            "imageLink": "/images/1200px-Vodafone_2017_logo.svg.png"
                        },{
                            "value": "Origin",
                            "imageLink": "/images/220-origin-broadband.png"
                        },{
                            "value": "Other",
                            "imageLink": "/images/other.png"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "speed",
                    title: "Which broadband speed would you like to compare?",
                    colCount: 3,
                    showLabel:true,
                    choices: [
                        {
                            "value": "I Don't Mind",
                            "imageLink": "/images/Fish-Icon-Don_t-Know.png"
                        },
                        {
                            "value": "Fast",
                            "imageLink": "/images/Fish-Icon-Fast.png"
                        },
                        {
                            "value": "Super Fast",
                            "imageLink": "/images/Fish-Icon--Super-Fast.png"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "home",
                    title: "Is anyone in your household currently working from home?",
                    colCount: 2,
                    showLabel:true,
                    choices: [
                        {
                            "value": "Yes",
                            "imageLink": "/images/Fish-Icon-Yes.png"
                        },
                        {
                            "value": "No",
                            "imageLink": "/images/Fish-Icon-No.png"
                        }
                    ]
                }
            ]
        }
    ]
};