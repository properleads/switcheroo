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
                    title: "Who is your current energy provider?",
                    colCount: 3,
                    choices: [
                        {
                            "value": "Shell Energy",
                            "imageLink": "/images/shell.jpg"
                        },{
                            "value": "Octopus Energy",
                            "imageLink": "/images/octo.jpg"
                        },{
                            "value": "British Gas",
                            "imageLink": "/images/brit.jpg"
                        },{
                            "value": "SSE",
                            "imageLink": "/images/sse.jpg"
                        },{
                            "value": "Scottishpower",
                            "imageLink": "/images/scotp.jpg"
                        },{
                            "value": "EDFEnergy",
                            "imageLink": "/images/edf.jpg"
                        },{
                            "value": "npower",
                            "imageLink": "/images/npower.jpg"
                        },{
                            "value": "e-on",
                            "imageLink": "/images/eon.jpg"
                        },{
                            "value": "other",
                            "imageLink": "/images/other_energy.jpg"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "bedrooms",
                    title: "How many bedrooms does your home have?",
                    colCount: 3,
                    showLabel:true,
                    choices: [
                        {
                            "value": "1-2 Bedrooms",
                            "imageLink": "/images/1-2bed.jpg"
                        },
                        {
                            "value": "3-4 Bedrooms",
                            "imageLink": "/images/3-4beds.jpg"
                        },
                        {
                            "value": "5+ Bedrooms",
                            "imageLink": "/images/5bed.jpg"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "energy_type",
                    title: "What type of energy do you need?",
                    colCount: 3,
                    showLabel:true,
                    choices: [
                        {
                            "value": "Gas and Electricity",
                            "imageLink": "/images/energi1.jpg"
                        },
                        {
                            "value": "Just Gas",
                            "imageLink": "/images/energi2.jpg"
                        },
                        {
                            "value": "Just Electricity",
                            "imageLink": "/images/energi3.jpg"
                        }
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    "type": "imagepicker",
                    "name": "payment_type",
                    title: "How do you pay for your energy?",
                    colCount: 2,
                    showLabel:true,
                    choices: [
                        {
                            "value": "Monthly Direct Debit",
                            "imageLink": "/images/monthly.jpg"
                        },{
                            "value": "Quarterly Direct Debit",
                            "imageLink": "/images/quarterly.jpg"
                        },
                        {
                            "value": "Pay On Receipt Of Bill",
                            "imageLink": "/images/receipt.jpg"
                        },
                        {
                            "value": "Prepayment Meter",
                            "imageLink": "/images/prepaid.jpg"
                        }
                    ]
                }
            ]
        }
    ]
};