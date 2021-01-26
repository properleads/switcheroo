export var json = {
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
                    "name": "plan",
                    title: "What type of contract?",
                    colCount: 2,
                    choices: [
                        {
                            "value": "Mobile",
                            "imageLink": "/images/talktalk-logo-2019.png"
                        },{
                            "value": "Sim",
                            "imageLink": "/images/bt-3.300px.png"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "credit",
                    title: "What is Your credit like?",
                    colCount: 2,
                    showLabel:true,
                    choices: [
                        {
                            "value": "I Don't Mind",
                            "imageLink": "/images/Switchy-Dunno.png"
                        },
                        {
                            "value": "Fast",
                            "imageLink": "/images/Switchy-Fast.png"
                        },
                        {
                            "value": "Super Fast",
                            "imageLink": "/images/Switchy-Super-Fast.png"
                        },
                        {
                            "value": "Super Fast",
                            "imageLink": "/images/Switchy-Super-Fast.png"
                        }
                    ]
                }
            ]
        }
    ]
};