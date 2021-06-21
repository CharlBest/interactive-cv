/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['comfortaa, sans-serif']='<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "height",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background',
                type: 'rect',
                rect: ['0px', '0px','auto','100%','auto', 'auto']
            },
            {
                id: 'Main',
                type: 'group',
                rect: ['-484', '0px','9975','733','auto', 'auto'],
                c: [
                {
                    id: 'music',
                    type: 'group',
                    rect: ['0px', '46px','913','343','auto', 'auto'],
                    c: [
                    {
                        id: 'back_1',
                        type: 'rect',
                        rect: ['516px', '139px','397px','95px','auto', 'auto'],
                        borderRadius: ["50px 50px", "50px 50px", "50px 50px", "50px 50px"],
                        fill: ["rgba(58,58,58,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'play_button1',
                        type: 'image',
                        rect: ['528px', '151px','70px','70px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"play_button2.png",'0px','0px']
                    },
                    {
                        id: 'back_2',
                        type: 'rect',
                        rect: ['516px', '248px','397px','95px','auto', 'auto'],
                        borderRadius: ["50px 50px", "50px 50px", "50px 50px", "50px 50px"],
                        fill: ["rgba(58,58,58,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'play_button2',
                        type: 'image',
                        rect: ['528px', '260px','70px','70px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"play_button2.png",'0px','0px']
                    },
                    {
                        id: 'wilde_cv_soundtrack',
                        type: 'audio',
                        tag: 'audio',
                        rect: ['-8110px', '-2957px','320px','45px','auto', 'auto'],
                        loop: 'loop',
                        source: ['media/wilde_cv_soundtrack.mp3']
                    },
                    {
                        id: 'chilled_cv_soundtrack',
                        type: 'audio',
                        tag: 'audio',
                        rect: ['-8110px', '-2725px','320px','45px','auto', 'auto'],
                        loop: 'loop',
                        source: ['media/chilled_cv_soundtrack.mp3']
                    },
                    {
                        id: 'music_Text_1',
                        type: 'text',
                        rect: ['618px', '165px','268px','79px','auto', 'auto'],
                        text: "Pumping music",
                        align: "center",
                        font: ['comfortaa, sans-serif', 32, "rgba(236,82,98,1)", "bold", "none", "normal"]
                    },
                    {
                        id: 'music_Text_2',
                        type: 'text',
                        rect: ['606px', '283px','280px','70px','auto', 'auto'],
                        text: "Chilled music",
                        align: "center",
                        font: ['comfortaa, sans-serif', 32, "rgba(236,82,98,1)", "bold", "none", "normal"]
                    }]
                },
                {
                    id: 'hover_over',
                    type: 'rect',
                    rect: ['1153px', '127','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_1',
                    type: 'rect',
                    rect: ['543px', '34','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_2',
                    type: 'rect',
                    rect: ['2743px', '197','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_3',
                    type: 'rect',
                    rect: ['4419px', '143','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_4',
                    type: 'rect',
                    rect: ['6382px', '0','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_5',
                    type: 'rect',
                    rect: ['8438px', '40px','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_6',
                    type: 'rect',
                    rect: ['1493px', '100px','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_7',
                    type: 'rect',
                    rect: ['12221', '110','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_8',
                    type: 'rect',
                    rect: ['14545px', '197px','auto','auto','auto', 'auto']
                },
                {
                    id: 'slide_9',
                    type: 'rect',
                    rect: ['16044px', '20','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'menu2',
                display: 'none',
                type: 'rect',
                rect: ['228px', '638px','auto','auto','auto', 'auto'],
                autoOrient: false,
                cursor: ['pointer']
            },
            {
                id: 'character_sym',
                type: 'rect',
                rect: ['66px', '501px','auto','auto','auto', 'auto']
            },
            {
                id: 'buttons',
                type: 'group',
                rect: ['402px', '651px','222px','181px','auto', 'auto'],
                transform: [[],['180']],
                c: [
                {
                    id: 'left_back',
                    type: 'rect',
                    rect: ['105px', '65px','111px','113px','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(58,58,58,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    boxShadow: ["inset", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'right_back',
                    type: 'rect',
                    rect: ['-6px', '65px','111px','113px','auto', 'auto'],
                    cursor: ['pointer'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(58,58,58,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    boxShadow: ["inset", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                },
                {
                    id: 'forward',
                    type: 'text',
                    rect: ['0px', '0px','111px','181px','auto', 'auto'],
                    cursor: ['pointer'],
                    text: "&lt;",
                    align: "left",
                    font: ['comfortaa, sans-serif', 188, "rgba(255,255,255,1.00)", "normal", "none", "normal"]
                },
                {
                    id: 'reverse',
                    type: 'text',
                    rect: ['111px', '0px','111px','181px','auto', 'auto'],
                    cursor: ['pointer'],
                    text: "&gt;",
                    align: "left",
                    font: ['comfortaa, sans-serif', 188, "rgba(255,255,255,1.00)", "normal", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                }]
            },
            {
                id: 'close_icon',
                display: 'none',
                type: 'image',
                rect: ['188px', '0px','79px','79px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"close-icon.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'menu2',
                symbolName: 'menu',
                autoPlay: {

                }
            },
            {
                id: 'slide_3',
                symbolName: 'flow_effect',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            },
            {
                id: 'slide_9',
                symbolName: 'slide_9',
                autoPlay: {

                }
            },
            {
                id: 'character_sym',
                symbolName: 'man_1',
                autoPlay: {

                }
            },
            {
                id: 'slide_8',
                symbolName: 'slide_8',
                autoPlay: {

                }
            },
            {
                id: 'slide_5',
                symbolName: 'slide_5',
                autoPlay: {

                }
            },
            {
                id: 'slide_4',
                symbolName: 'slide_4',
                autoPlay: {

                }
            },
            {
                id: 'hover_over',
                symbolName: 'hover_over',
                autoPlay: {

                }
            },
            {
                id: 'slide_7',
                symbolName: 'slide_7',
                autoPlay: {

                }
            },
            {
                id: 'background',
                symbolName: 'background',
                autoPlay: {

                }
            },
            {
                id: 'slide_2',
                symbolName: 'slide_2',
                autoPlay: {

                }
            },
            {
                id: 'slide_6',
                symbolName: 'slide_6',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_slide_4}": [
                ["style", "left", '6382px']
            ],
            "${_wilde_cv_soundtrack}": [
                ["style", "left", '-8110px'],
                ["style", "top", '-2957px']
            ],
            "${_slide_6}": [
                ["style", "top", '100px'],
                ["style", "left", '1493px']
            ],
            "${_music_Text_1}": [
                ["style", "top", '165px'],
                ["style", "text-align", 'center'],
                ["style", "height", '79px'],
                ["style", "font-size", '32px'],
                ["style", "left", '618px'],
                ["style", "width", '268px']
            ],
            "${_forward}": [
                ["style", "top", '0px'],
                ["style", "width", '111px'],
                ["style", "text-align", 'left'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '181px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '188px']
            ],
            "${_right_back}": [
                ["color", "background-color", 'rgba(58,58,58,0)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '-6px'],
                ["style", "width", '111px'],
                ["style", "top", '65px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "height", '113px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_hover_over}": [
                ["style", "left", '1153px'],
                ["style", "top", '125px']
            ],
            "${_slide_1}": [
                ["style", "left", '543px']
            ],
            "${_slide_2}": [
                ["style", "left", '2743px'],
                ["style", "top", '101px']
            ],
            "${_music_Text_2}": [
                ["style", "top", '283px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '32px'],
                ["style", "left", '606px'],
                ["style", "width", '280px']
            ],
            "${_left_back}": [
                ["color", "background-color", 'rgba(58,58,58,0.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '105px'],
                ["style", "width", '111px'],
                ["style", "top", '65px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "height", '113px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide_3}": [
                ["style", "left", '4419px']
            ],
            "${_play_button1}": [
                ["style", "top", '151px'],
                ["style", "height", '70px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '528px'],
                ["style", "width", '70px']
            ],
            "${_close_icon}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '79px'],
                ["style", "left", '188px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '79px']
            ],
            "${_Main}": [
                ["style", "left", '-484px']
            ],
            "${_buttons}": [
                ["style", "top", '651px'],
                ["style", "left", '402px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_slide_5}": [
                ["style", "left", '8438px'],
                ["style", "top", '40px']
            ],
            "${_background}": [
                ["style", "height", '100%'],
                ["style", "left", '0px']
            ],
            "${_back_1}": [
                ["style", "top", '139px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(58,58,58,1.00)'],
                ["style", "left", '516px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_back_2}": [
                ["color", "background-color", 'rgba(58,58,58,1.00)'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '516px'],
                ["style", "top", '248px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '0px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '10000px']
            ],
            "${_play_button2}": [
                ["style", "top", '260px'],
                ["style", "height", '70px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '528px'],
                ["style", "width", '70px']
            ],
            "${_character_sym}": [
                ["style", "left", '66px'],
                ["style", "top", '501px']
            ],
            "${_menu2}": [
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "cursor", 'pointer'],
                ["motion", "location", '300px 717.5px']
            ],
            "${_chilled_cv_soundtrack}": [
                ["style", "left", '-8110px'],
                ["style", "top", '-2725px']
            ],
            "${_reverse}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '111px'],
                ["style", "font-size", '188px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '181px'],
                ["style", "width", '111px'],
                ["style", "cursor", 'pointer'],
                ["subproperty", "filter.saturate", '1']
            ],
            "${_music}": [
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 132000,
            autoPlay: false,
            labels: {
                "home": 4000,
                "me": 12000,
                "academic": 25000,
                "skills": 33000,
                "set_char": 71000,
                "achievements": 85867,
                "work_exp": 95867,
                "projects": 111000,
                "things_i_love": 121000,
                "end": 131000
            },
            timeline: [
                { id: "eid369", tween: [ "style", "${_character_sym}", "left", '450px', { fromValue: '66px'}], position: 0, duration: 4000, easing: "easeInQuad" },
                { id: "eid737", tween: [ "style", "${_background}", "left", '-1821px', { fromValue: '0px'}], position: 4000, duration: 8000 },
                { id: "eid740", tween: [ "style", "${_background}", "left", '-3747px', { fromValue: '-1821px'}], position: 19000, duration: 6000 },
                { id: "eid742", tween: [ "style", "${_background}", "left", '-5666px', { fromValue: '-3747px'}], position: 26500, duration: 6500 },
                { id: "eid744", tween: [ "style", "${_background}", "left", '-7587px', { fromValue: '-5666px'}], position: 71000, duration: 14867 },
                { id: "eid745", tween: [ "style", "${_background}", "left", '-9508px', { fromValue: '-7587px'}], position: 90867, duration: 5000 },
                { id: "eid993", tween: [ "style", "${_background}", "left", '-11430px', { fromValue: '-9508px'}], position: 106000, duration: 5000 },
                { id: "eid995", tween: [ "style", "${_background}", "left", '-13845px', { fromValue: '-11430px'}], position: 116000, duration: 5000 },
                { id: "eid997", tween: [ "style", "${_background}", "left", '-15264px', { fromValue: '-13845px'}], position: 126000, duration: 5000 },
                { id: "eid1087", tween: [ "style", "${_menu2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInQuad" },
                { id: "eid1090", tween: [ "motion", "${_menu2}", [[300, 717.5, 0, 0],[335.35, 415.3, 169.56, -273.43, 205.05, -330.67],[634.2, 360.21, 0, 0]]], position: 131000, duration: 1000 },
                { id: "eid736", tween: [ "style", "${_Main}", "left", '-2305px', { fromValue: '-484px'}], position: 4000, duration: 8000 },
                { id: "eid739", tween: [ "style", "${_Main}", "left", '-4231px', { fromValue: '-2305px'}], position: 19000, duration: 6000 },
                { id: "eid741", tween: [ "style", "${_Main}", "left", '-6150px', { fromValue: '-4231px'}], position: 26500, duration: 6500 },
                { id: "eid743", tween: [ "style", "${_Main}", "left", '-8071px', { fromValue: '-6150px'}], position: 71000, duration: 14867 },
                { id: "eid746", tween: [ "style", "${_Main}", "left", '-9992px', { fromValue: '-8071px'}], position: 90867, duration: 5000 },
                { id: "eid992", tween: [ "style", "${_Main}", "left", '-11914px', { fromValue: '-9992px'}], position: 106000, duration: 5000 },
                { id: "eid994", tween: [ "style", "${_Main}", "left", '-14329px', { fromValue: '-11914px'}], position: 116000, duration: 5000 },
                { id: "eid996", tween: [ "style", "${_Main}", "left", '-15748px', { fromValue: '-14329px'}], position: 126000, duration: 5000 },
                { id: "eid1091", tween: [ "transform", "${_menu2}", "scaleX", '1.6', { fromValue: '1'}], position: 131000, duration: 1000 },
                { id: "eid1092", tween: [ "transform", "${_menu2}", "scaleY", '1.6', { fromValue: '1'}], position: 131000, duration: 1000 },
                { id: "eid1089", tween: [ "style", "${_close_icon}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid750", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide_2}', [] ], ""], position: 0 },
                { id: "eid748", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide_3}', [] ], ""], position: 0 },
                { id: "eid751", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide_4}', [] ], ""], position: 0 },
                { id: "eid752", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide_2}', [] ], ""], position: 12000 },
                { id: "eid753", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide_3}', [] ], ""], position: 25000 },
                { id: "eid754", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide_4}', [] ], ""], position: 33000 },
                { id: "eid749", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_slide_5}', [] ], ""], position: 85000 },
                { id: "eid998", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_slide_6}', [] ], ""], position: 95867 }            ]
        }
    }
},
"background": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'slide1_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(137,181,184,1.00)']
                },
                {
                    type: 'rect',
                    id: 'slide2_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['1920px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(234,182,82,1.00)']
                },
                {
                    type: 'rect',
                    id: 'slide3_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['3840px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(236,126,55,1.00)']
                },
                {
                    type: 'rect',
                    id: 'slide4_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['5760px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(111,102,131,1.00)']
                },
                {
                    type: 'rect',
                    id: 'slide5_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['7680px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(221,136,204,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(221,136,204,1.00)', 70], ['rgba(211,102,189,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'slide6_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['9600px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(97,97,97,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(135,135,135,1.00)', 70], ['rgba(97,97,97,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'slide7_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['11519px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(235,104,117,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(245,184,190,1.00)', 70], ['rgba(235,104,117,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'slide8_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['13439px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(114,168,134,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(166,200,178,1.00)', 70], ['rgba(114,168,134,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'slide9_background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['15359px', '0px', '1920px', '768px', 'auto', 'auto'],
                    fill: ['rgba(245,245,245,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(255,255,255,1.00)', 70], ['rgba(245,245,245,1.00)', 100]]]]
                },
                {
                    type: 'rect',
                    id: 'shadow_running_platform',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '77.8%', '17279px', '171px', 'auto', 'auto'],
                    fill: ['rgba(151,151,151,0.00)', [270, [['rgba(0,0,0,0.24)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                },
                {
                    rect: ['1823px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide1_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['3748px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide2_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['5668px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide3_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['7588px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide4_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['9508px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide5_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['11428px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide6_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['13347px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide7_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['15267px', '0px', '184px', '768px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'Slide8_seperator',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 127, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'ME',
                    text: 'M<br>E',
                    cursor: ['pointer'],
                    rect: ['19.2%', '31.8%', '110px', '280px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 70, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'ACADEMIC',
                    text: 'A<br>C<br>A<br>D<br>E<br>M<br>I<br>C',
                    align: 'center',
                    rect: ['39.1%', '7.7%', '110px', '651px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 70, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'SKILLS',
                    text: 'S<br>K<br>I<br>L<br>L<br>S',
                    align: 'center',
                    rect: ['58.9%', '17.6%', '110px', '498px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 50, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'ACHIEVEMENTS',
                    text: 'A<br>C<br>H<br>I<br>E<br>V<br>E<br>M<br>E<br>N<br>T<br>S',
                    align: 'center',
                    rect: ['78.7%', '3.9%', '110px', '710px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 40, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'WORK_EXPERIENCE',
                    text: 'W<br>O<br>R<br>K<br><br>E<br>X<br>P<br>E<br>R<br>I<br>E<br>N<br>C<br>E',
                    align: 'center',
                    rect: ['98.5%', '4.8%', '110px', '710px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 78, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'PROJECTS',
                    text: 'P<br>R<br>O<br>J<br>E<br>T<br>C<br>S',
                    align: 'center',
                    rect: ['118.3%', '4.8%', '110px', '710px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 58, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'THINGS_I_LOVE',
                    text: 'T<br>H<br>I<br>N<br>G<br>S<br><br>I<br><br>&lt;3',
                    align: 'center',
                    rect: ['138.1%', '4.8%', '110px', '710px', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 106, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'END',
                    text: 'E<br>N<br>D',
                    align: 'center',
                    rect: ['157.9%', '26.6%', '110px', '362px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_END}": [
                ["style", "top", '26.56%'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '106px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '362px'],
                ["style", "left", '157.9%'],
                ["style", "width", '110px']
            ],
            "${_Slide8_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(67,67,67,1.00)'],
                ["style", "left", '15267px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_slide6_background}": [
                ["color", "background-color", 'rgba(97,97,97,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(135,135,135,1.00)',70],['rgba(97,97,97,1.00)',100]]]],
                ["style", "left", '9600px'],
                ["style", "width", '1920px']
            ],
            "${_Slide2_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '3748px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)']
            ],
            "${_SKILLS}": [
                ["style", "top", '17.58%'],
                ["style", "text-align", 'center'],
                ["style", "width", '110px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '498px'],
                ["style", "left", '58.86%'],
                ["style", "font-size", '70px']
            ],
            "${_slide2_background}": [
                ["color", "background-color", 'rgba(234,182,82,1.00)'],
                ["style", "height", '768px'],
                ["style", "top", '0px'],
                ["style", "left", '1920px'],
                ["style", "width", '1920px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '9692px'],
                ["style", "overflow", 'visible']
            ],
            "${_ACHIEVEMENTS}": [
                ["style", "top", '3.91%'],
                ["style", "text-align", 'center'],
                ["style", "width", '110px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '710px'],
                ["style", "left", '78.65%'],
                ["style", "font-size", '50px']
            ],
            "${_THINGS_I_LOVE}": [
                ["style", "top", '4.82%'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '58px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '710px'],
                ["style", "left", '138.09%'],
                ["style", "width", '110px']
            ],
            "${_Slide6_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(67,67,67,1.00)'],
                ["style", "left", '11428px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_PROJECTS}": [
                ["style", "top", '4.82%'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '78px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '710px'],
                ["style", "left", '118.28%'],
                ["style", "width", '110px']
            ],
            "${_ME}": [
                ["style", "top", '31.77%'],
                ["style", "width", '110px'],
                ["style", "text-align", 'center'],
                ["style", "left", '19.19%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '280px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '127px']
            ],
            "${_shadow_running_platform}": [
                ["color", "background-color", 'rgba(151,151,151,0.00)'],
                ["style", "top", '77.82%'],
                ["gradient", "background-image", [270,[['rgba(0,0,0,0.24)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '17279px']
            ],
            "${_slide8_background}": [
                ["color", "background-color", 'rgba(114,168,134,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(166,200,178,1.00)',70],['rgba(114,168,134,1.00)',100]]]],
                ["style", "left", '13439px'],
                ["style", "width", '1920px']
            ],
            "${_Slide4_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '7588px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)']
            ],
            "${_Slide5_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '9508px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)']
            ],
            "${_ACADEMIC}": [
                ["style", "top", '7.68%'],
                ["style", "text-align", 'center'],
                ["style", "width", '110px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '650px'],
                ["style", "left", '39.06%'],
                ["style", "font-size", '70px']
            ],
            "${_WORK_EXPERIENCE}": [
                ["style", "top", '4.79%'],
                ["style", "text-align", 'center'],
                ["style", "width", '110px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '710px'],
                ["style", "left", '98.49%'],
                ["style", "font-size", '40px']
            ],
            "${_Slide7_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(67,67,67,1.00)'],
                ["style", "left", '13347px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_slide5_background}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(221,136,204,1.00)',70],['rgba(211,102,189,1.00)',100]]]],
                ["style", "left", '7680px'],
                ["style", "width", '1920px']
            ],
            "${_slide9_background}": [
                ["color", "background-color", 'rgba(245,245,245,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',70],['rgba(245,245,245,1.00)',100]]]],
                ["style", "left", '15359px'],
                ["style", "width", '1920px']
            ],
            "${_slide4_background}": [
                ["color", "background-color", 'rgba(111,102,131,1.00)'],
                ["style", "height", '768px'],
                ["style", "top", '0px'],
                ["style", "left", '5760px'],
                ["style", "width", '1920px']
            ],
            "${_slide3_background}": [
                ["color", "background-color", 'rgba(236,126,55,1.00)'],
                ["style", "height", '768px'],
                ["style", "top", '0px'],
                ["style", "left", '3840px'],
                ["style", "width", '1920px']
            ],
            "${_Slide1_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '1823px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)']
            ],
            "${_slide1_background}": [
                ["color", "background-color", 'rgba(137,181,184,1.00)'],
                ["style", "height", '768px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_slide7_background}": [
                ["color", "background-color", 'rgba(235,104,117,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '768px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(245,184,190,1.00)',70],['rgba(235,104,117,1.00)',100]]]],
                ["style", "left", '11519px'],
                ["style", "width", '1920px']
            ],
            "${_Slide3_seperator}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '5668px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"controls": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['141px', '0px', '111px', '181px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 188, 'rgba(255,255,255,1)', 'normal', 'none', 'normal'],
                    id: 'forward',
                    text: '&gt;',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '111px', '181px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 188, 'rgba(255,255,255,1)', 'normal', 'none', 'normal'],
                    id: 'reverse',
                    text: '&lt;',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_forward}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "width", '111px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '181px'],
                ["style", "left", '141px'],
                ["style", "font-size", '188px']
            ],
            "${_reverse}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '188px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '181px'],
                ["style", "left", '0px'],
                ["style", "width", '111px']
            ],
            "${symbolSelector}": [
                ["style", "height", '181px'],
                ["style", "width", '252px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "begin": 0
            },
            timeline: [
                { id: "eid9", tween: [ "color", "${_forward}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 2000 },
                { id: "eid14", tween: [ "color", "${_forward}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 2000 },
                { id: "eid7", tween: [ "color", "${_reverse}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 2000 },
                { id: "eid13", tween: [ "color", "${_reverse}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 2000, duration: 2000 }            ]
        }
    }
},
"hover_over": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '397px', '144px', 'auto', 'auto'],
                    borderRadius: ['100px 100px', '100px 100px', '100px 100px', '100px 100px'],
                    id: 'back',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(67,67,67,1.00)']
                },
                {
                    rect: ['0px', '4px', '397px', '144px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 55, 'rgba(255,255,255,1)', 'normal', 'none', 'normal'],
                    id: 'hover_text',
                    text: 'Hover over arrows to play',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_back}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(67,67,67,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '397px']
            ],
            "${_hover_text}": [
                ["style", "top", '1px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "font-size", '49px']
            ],
            "${symbolSelector}": [
                ["style", "height", '145px'],
                ["style", "width", '397px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "begin": 0
            },
            timeline: [
                { id: "eid19", tween: [ "style", "${_hover_text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_hover_text}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_back}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_back}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"slide_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'uitroepteken',
                    text: '!',
                    align: 'left',
                    rect: ['0px', '0px', '52px', '54px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(236,82,98,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'hallo',
                    text: 'HALLO',
                    align: 'left',
                    rect: ['17px', '0px', '143px', '54px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(236,82,98,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'cv',
                    text: 'Cirriculum Vitae',
                    align: 'left',
                    rect: ['648px', '0px', '321px', '54px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '969px']
            ],
            "${_cv}": [
                ["color", "color", 'rgba(236,82,98,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '648px'],
                ["style", "font-size", '40px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '54px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "width", '321px']
            ],
            "${_uitroepteken}": [
                ["style", "top", '0px'],
                ["style", "width", '52px'],
                ["style", "text-align", 'left'],
                ["style", "font-weight", '700'],
                ["style", "height", '54px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px']
            ],
            "${_hallo}": [
                ["color", "color", 'rgba(236,82,98,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '17px'],
                ["style", "width", '143px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "height", '54px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"slide_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'name',
                    text: 'N A M E',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'charl',
                    text: 'C<br>H<br>A<br>R<br>L',
                    clip: ['rect(0px 406px 267.148193359375px 0px)'],
                    rect: ['39px', '-102px', '406px', '269px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'charlCopy',
                    text: 'B<br>E<br>S<br>T',
                    clip: ['rect(0px 406px 267.148193359375px 0px)'],
                    rect: ['30px', '-51px', '406px', '269px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'born',
                    text: 'B O R N',
                    align: 'left',
                    rect: ['0px', '214px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'bornCopy',
                    text: '6 July 1993',
                    clip: ['rect(0px 406pxpx 169pxpx 0px)'],
                    rect: ['0px', '214px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 's',
                    text: 'S',
                    display: 'none',
                    rect: ['9px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 't',
                    text: 'T',
                    display: 'none',
                    rect: ['225px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'i',
                    text: 'I',
                    display: 'none',
                    rect: ['257px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'ee',
                    text: 'E',
                    display: 'none',
                    rect: ['59px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'l',
                    text: 'L',
                    display: 'none',
                    rect: ['89px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'll',
                    text: 'L',
                    display: 'none',
                    rect: ['116px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'e',
                    text: 'E',
                    display: 'none',
                    rect: ['141px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'n',
                    text: 'N',
                    display: 'none',
                    rect: ['167px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'b',
                    text: 'B',
                    display: 'none',
                    rect: ['198px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'a',
                    text: 'A',
                    display: 'none',
                    rect: ['198px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'o',
                    text: 'O',
                    display: 'none',
                    rect: ['116px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'oo',
                    text: 'O',
                    display: 'none',
                    rect: ['223px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'ss',
                    text: 'S',
                    display: 'none',
                    rect: ['257px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'c',
                    text: 'C',
                    display: 'none',
                    rect: ['159px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(107,157,161,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'h',
                    text: 'H',
                    display: 'none',
                    rect: ['325px', '328px', '406px', '169px', 'auto', 'auto']
                },
                {
                    id: 'spin_slideshow_3d',
                    type: 'rect',
                    rect: ['876px', '-51px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'spin_slideshow_3d',
                symbolName: 'spin_slideshow_3d',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_spin_slideshow_3d}": [
                ["style", "left", '876px'],
                ["style", "top", '-51px']
            ],
            "${_ss}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '257px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_n}": [
                ["color", "color", 'rgba(107,157,161,1)'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '312px'],
                ["style", "font-size", '40px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '406px']
            ],
            "${_ee}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '59px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_l}": [
                ["color", "color", 'rgba(107,157,161,1)'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '89px'],
                ["style", "font-size", '40px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '406px']
            ],
            "${_c}": [
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '40px'],
                ["style", "width", '406px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["motion", "location", '361.92942301431px 412.50000904224px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_h}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '325px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_tCopy}": [
                ["transform", "scaleX", '1'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '40px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '406px'],
                ["style", "height", '169px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["motion", "location", '428.4451429579px 412.49984854239px'],
                ["color", "color", 'rgba(107,157,161,1)']
            ],
            "${_charlCopy}": [
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '122px'],
                ["style", "font-size", '40px'],
                ["style", "top", '-51px'],
                ["style", "text-align", 'left'],
                ["style", "height", '269px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,7.888916015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '406px']
            ],
            "${_t}": [
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '40px'],
                ["style", "width", '406px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["motion", "location", '428.4451429579px 412.4998485424px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_name}": [
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["style", "width", '406px'],
                ["style", "height", '169px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_a}": [
                ["style", "opacity", '1'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '191px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["style", "text-align", 'left'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_e}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '141px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_s}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '9px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["style", "text-align", 'left'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_i}": [
                ["transform", "scaleX", '1'],
                ["style", "width", '406px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '257px'],
                ["style", "font-size", '40px'],
                ["style", "top", '328px'],
                ["motion", "location", '428.45px 412.5px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-weight", 'bold']
            ],
            "${_oo}": [
                ["style", "width", '406px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '271px'],
                ["style", "font-size", '40px'],
                ["style", "top", '328px'],
                ["style", "height", '169px'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '319px 412.5px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_o}": [
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '40px'],
                ["style", "width", '406px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '169px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["motion", "location", '319.00025685628px 412.4998485424px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_oCopy}": [
                ["transform", "scaleX", '1'],
                ["style", "font-weight", 'bold'],
                ["style", "font-size", '40px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '406px'],
                ["style", "height", '169px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["motion", "location", '319.00025685628px 412.49984854239px'],
                ["color", "color", 'rgba(107,157,161,1)']
            ],
            "${_b}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '198px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_bornCopy}": [
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px'],
                ["style", "top", '214px'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,0,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '406px']
            ],
            "${_charl}": [
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '39px'],
                ["style", "font-size", '40px'],
                ["style", "top", '-102px'],
                ["style", "text-align", 'left'],
                ["style", "height", '269px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,7.888916015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '406px']
            ],
            "${_ll}": [
                ["style", "opacity", '0'],
                ["style", "font-size", '40px'],
                ["color", "color", 'rgba(107,157,161,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '116px'],
                ["style", "width", '406px'],
                ["style", "top", '328px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'left'],
                ["style", "height", '169px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_born}": [
                ["color", "color", 'rgba(107,157,161,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '40px'],
                ["style", "top", '214px'],
                ["style", "text-align", 'left'],
                ["style", "width", '406px'],
                ["style", "height", '169px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,406,169,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '169px'],
                ["style", "width", '406px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: false,
            labels: {
                "begin": 0
            },
            timeline: [
                { id: "eid183", tween: [ "style", "${_b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid184", tween: [ "style", "${_b}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_h}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid177", tween: [ "style", "${_ll}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid178", tween: [ "style", "${_ll}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_ss}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid87", tween: [ "motion", "${_c}", [[361.93, 412.5, 0, 0],[424.35, 464.35, 94.5, 0, 91.56, 0],[486, 412.5, 0, 0]]], position: 6000, duration: 1000 },
                { id: "eid101", tween: [ "motion", "${_t}", [[428.45, 412.5, 0, 0],[329.44, 475.46, -133.99, 0, -156, 0],[234, 412.5, 0, 0]]], position: 6000, duration: 1000 },
                { id: "eid38", tween: [ "style", "${_charlCopy}", "clip", [0,406,267.148193359375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,406,7.888916015625,0]}], position: 1250, duration: 1000 },
                { id: "eid83", tween: [ "motion", "${_o}", [[319, 412.5, 0, 0],[374.43, 360.65, 82.5, 0, 76.25, 0],[425, 412.5, 0, 0]]], position: 6000, duration: 1000 },
                { id: "eid179", tween: [ "style", "${_e}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_e}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_born}", "clip", [0,406,169,406], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,406,169,0]}], position: 4500, duration: 1000 },
                { id: "eid167", tween: [ "style", "${_s}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_s}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid170", tween: [ "style", "${_t}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_ee}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid171", tween: [ "style", "${_i}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid172", tween: [ "style", "${_i}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid173", tween: [ "style", "${_ee}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid174", tween: [ "style", "${_ee}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_born}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 500 },
                { id: "eid69", tween: [ "style", "${_ll}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid33", tween: [ "style", "${_charl}", "clip", [0,406,267.148193359375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,406,7.888916015625,0]}], position: 0, duration: 1000 },
                { id: "eid75", tween: [ "style", "${_e}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid79", tween: [ "style", "${_s}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid185", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid186", tween: [ "style", "${_a}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_oo}", "left", '223px', { fromValue: '271px'}], position: 6000, duration: 1000 },
                { id: "eid175", tween: [ "style", "${_l}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_l}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid195", tween: [ "style", "${_h}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid196", tween: [ "style", "${_h}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid181", tween: [ "style", "${_n}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_n}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid191", tween: [ "style", "${_ss}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid192", tween: [ "style", "${_ss}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid106", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1000 },
                { id: "eid95", tween: [ "style", "${_a}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid193", tween: [ "style", "${_c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid194", tween: [ "style", "${_c}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid189", tween: [ "style", "${_oo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_oo}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid47", tween: [ "style", "${_name}", "clip", [0,406,169,155.5546875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,406,169,0]}], position: 2500, duration: 1000 },
                { id: "eid85", tween: [ "style", "${_n}", "left", '167px', { fromValue: '312px'}], position: 6000, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_bornCopy}", "clip", [0,406,169,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,169,0]}], position: 4500, duration: 1000 },
                { id: "eid187", tween: [ "style", "${_o}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid188", tween: [ "style", "${_o}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500 }            ]
        }
    }
},
"flow_effect": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.44986', '0.44986']],
                    id: 'bo',
                    type: 'group',
                    clip: ['rect(-484.93524169921875px 3913.128173828125px 393.3348388671875px 0px)'],
                    rect: ['-614px', '-158px', '2219', '574', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: '_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '179px', '329px', '217px', 'auto', 'auto'],
                        fill: ['rgba(248,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['328px', '179px', '186px', '217px', 'auto', 'auto'],
                        id: '_1_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['328px', '179px', '186px', '217px', 'auto', 'auto'],
                        id: '_1_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['328px', '-325px', '186px', '505px', 'auto', 'auto'],
                        id: 'shadow_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(228,228,228,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['513px', '111px', '535px', '353px', 'auto', 'auto'],
                        fill: ['rgba(248,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['1047px', '111px', '303px', '353px', 'auto', 'auto'],
                        id: '_2_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['1047px', '111px', '303px', '353px', 'auto', 'auto'],
                        id: '_2_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['1046px', '-329px', '303px', '440px', 'auto', 'auto'],
                        id: 'shadow_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(228,228,228,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['1348px', '0px', '871px', '574px', 'auto', 'auto'],
                        fill: ['rgba(248,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['2218px', '2px', '304px', '569px', 'auto', 'auto'],
                        id: '_3_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['2218px', '2px', '304px', '569px', 'auto', 'auto'],
                        id: '_3_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,5,252,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['2220px', '-320px', '303px', '321px', 'auto', 'auto'],
                        id: 'shadow_3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(228,228,228,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['2520px', '-106px', '1199px', '790px', 'auto', 'auto'],
                        fill: ['rgba(248,85,254,1.00)']
                    }]
                },
                {
                    transform: [[0, 0], [], [], ['0.44986', '0.44986']],
                    id: 'onder',
                    type: 'group',
                    clip: ['rect(178.6910858154297px 3913.128173828125px 703.0851440429688px 0px)'],
                    rect: ['-614px', '-62px', '2219', '574', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: '_1Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '179px', '329px', '217px', 'auto', 'auto'],
                        fill: ['rgba(85,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['328px', '179px', '186px', '217px', 'auto', 'auto'],
                        id: '_1_1Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['328px', '179px', '186px', '217px', 'auto', 'auto'],
                        id: '_1_2Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_2Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['513px', '111px', '535px', '353px', 'auto', 'auto'],
                        fill: ['rgba(85,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['1047px', '111px', '303px', '353px', 'auto', 'auto'],
                        id: '_2_1Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['1047px', '111px', '303px', '353px', 'auto', 'auto'],
                        id: '_2_2Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_3Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['1348px', '0px', '871px', '574px', 'auto', 'auto'],
                        fill: ['rgba(85,85,254,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-20']],
                        rect: ['2218px', '2px', '304px', '569px', 'auto', 'auto'],
                        id: '_3_1Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '20']],
                        rect: ['2218px', '2px', '304px', '569px', 'auto', 'auto'],
                        id: '_3_2Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(35,35,253,1.00)']
                    },
                    {
                        type: 'rect',
                        id: '_4Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['2520px', '-106px', '1199px', '790px', 'auto', 'auto'],
                        fill: ['rgba(85,85,254,1.00)']
                    }]
                },
                {
                    id: 'text',
                    type: 'group',
                    rect: ['-4', '-142', '1673', '543', 'auto', 'auto'],
                    c: [
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: '_2007',
                        text: '2007- 2011',
                        type: 'text',
                        rect: ['15px', '0px', '133px', '62px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: '_2012',
                        text: '2012',
                        type: 'text',
                        rect: ['317px', '0px', '82px', '88px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: '_2013',
                        text: '2013',
                        type: 'text',
                        rect: ['762px', '0px', '82px', '88px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        id: '_2014',
                        text: '2014',
                        type: 'text',
                        rect: ['1349px', '0px', '133px', '62px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_1_sem',
                        text: '1st semester',
                        align: 'left',
                        rect: ['2px', '192px', '148px', '30px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_sem',
                        text: '2de semester',
                        align: 'left',
                        rect: ['0px', '416px', '161px', '30px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 15, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy',
                        text: 'Paul Roos <br>Gymnasium<br><br><br><br>Maths, Economics, Science, Biology',
                        align: 'left',
                        rect: ['0px', '237px', '148px', '178px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 16, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy2',
                        text: 'Economics<br>Financial Accounting<br>Business Management<br>Statistics<br>Industrial Phycology',
                        align: 'left',
                        rect: ['231px', '192px', '241px', '127px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 16, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy3',
                        text: 'Economics<br>Financial Accounting<br>Statistics<br>Industrial Phycology<br>Supply Chain Management<br>Business Communication',
                        align: 'left',
                        rect: ['231px', '318px', '241px', '127px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy4',
                        text: 'Marketing Management<br>Entrepreneurship and Innovation Phython coding<br>Financial Management',
                        align: 'left',
                        rect: ['608px', '145px', '390px', '173px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy5',
                        text: 'Marketing Advertising and promotions (Integrated Branding) Entrepreneurship and Innovation HTML/CSS/JavaScript coding Investment Management',
                        align: 'left',
                        rect: ['608px', '318px', '390px', '173px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy6',
                        text: 'Marketing (Retail Management)<br>Marketing (Services)<br>Information system management<br>(Database Systems, mySQL coding)<br>Information system management<br>(Business Analyst, UML coding)<br>Corporate Social Responsability',
                        align: 'left',
                        rect: ['1134px', '95px', '539px', '223px', 'auto', 'auto']
                    },
                    {
                        font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text',
                        id: '_2_semCopy7',
                        text: '...',
                        align: 'left',
                        rect: ['1134px', '320px', '539px', '223px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bo}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.44986'],
                ["transform", "scaleX", '0.44986'],
                ["style", "clip", [-484.93524169921875,3913.128173828125,393.3348388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-614px']
            ],
            "${__2012}": [
                ["style", "height", '88px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '317px'],
                ["style", "top", '0px']
            ],
            "${__2}": [
                ["style", "top", '111px'],
                ["color", "background-color", 'rgba(50,160,38,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '353px'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '513px'],
                ["style", "width", '535px']
            ],
            "${_onder}": [
                ["style", "top", '-62px'],
                ["transform", "scaleY", '0.44986'],
                ["transform", "scaleX", '0.44986'],
                ["style", "clip", [178.6910858154297,3913.128173828125,703.0851440429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-614px']
            ],
            "${_shadow_1}": [
                ["color", "background-color", 'rgba(0,0,0,0.22)'],
                ["transform", "scaleX", '0'],
                ["style", "left", '328px'],
                ["style", "width", '186px'],
                ["style", "top", '-325px'],
                ["transform", "skewY", '-20deg'],
                ["style", "height", '505px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__2_semCopy}": [
                ["style", "top", '237px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '15px'],
                ["style", "height", '178px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '148px']
            ],
            "${__2_semCopy6}": [
                ["style", "top", '95px'],
                ["style", "text-align", 'left'],
                ["style", "width", '539px'],
                ["style", "height", '223px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '1134px'],
                ["style", "font-size", '24px']
            ],
            "${__2013}": [
                ["style", "height", '88px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '762px'],
                ["style", "top", '0px']
            ],
            "${__2Copy}": [
                ["style", "top", '111px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(85,85,254,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "height", '353px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '513px'],
                ["style", "width", '535px']
            ],
            "${__2_2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["transform", "skewY", '20deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '353px'],
                ["style", "top", '111px'],
                ["style", "left", '1047px'],
                ["style", "width", '303px']
            ],
            "${__1Copy}": [
                ["color", "background-color", 'rgba(85,85,254,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.sepia", '0'],
                ["style", "top", '179px'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ],
            "${__1_1Copy2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["transform", "skewY", '-20deg'],
                ["style", "top", '179px'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '328px'],
                ["style", "width", '186px']
            ],
            "${_text}": [
                ["style", "clip", [0,0,543,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__1_1}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '179px'],
                ["transform", "skewY", '-20deg'],
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '328px'],
                ["style", "width", '186px']
            ],
            "${__2_1Copy2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["transform", "skewY", '-20deg'],
                ["style", "height", '353px'],
                ["transform", "scaleX", '0'],
                ["style", "top", '111px'],
                ["style", "left", '1047px'],
                ["style", "width", '303px']
            ],
            "${__2_semCopy2}": [
                ["style", "top", '192px'],
                ["style", "text-align", 'left'],
                ["style", "width", '241px'],
                ["style", "height", '127px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '231px'],
                ["style", "font-size", '16px']
            ],
            "${__2014}": [
                ["style", "top", '0px'],
                ["style", "height", '62px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '1349px'],
                ["style", "width", '133px']
            ],
            "${__3Copy2}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(85,85,254,1.00)'],
                ["style", "height", '574px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '1348px'],
                ["style", "width", '871px']
            ],
            "${__3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(50,160,38,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '574px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '1348px'],
                ["style", "width", '871px']
            ],
            "${__2_semCopy7}": [
                ["style", "top", '320px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '24px'],
                ["style", "height", '223px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '1134px'],
                ["style", "width", '539px']
            ],
            "${symbolSelector}": [
                ["style", "height", '599px'],
                ["style", "width", '1690px']
            ],
            "${__2_sem}": [
                ["style", "top", '416px'],
                ["style", "text-align", 'left'],
                ["style", "height", '30px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '161px']
            ],
            "${_shadow_3}": [
                ["color", "background-color", 'rgba(0,0,0,0.22)'],
                ["transform", "scaleX", '0'],
                ["style", "left", '2220px'],
                ["style", "width", '303px'],
                ["style", "top", '-320px'],
                ["transform", "skewY", '-20deg'],
                ["style", "height", '321px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__2_2Copy2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["transform", "skewY", '20deg'],
                ["style", "height", '353px'],
                ["transform", "scaleX", '0'],
                ["style", "top", '111px'],
                ["style", "left", '1047px'],
                ["style", "width", '303px']
            ],
            "${__4Copy}": [
                ["style", "top", '-106px'],
                ["color", "background-color", 'rgba(85,85,254,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '790px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '2520px'],
                ["style", "width", '1199px']
            ],
            "${__2007}": [
                ["style", "top", '0px'],
                ["style", "height", '62px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '15px'],
                ["style", "width", '133px']
            ],
            "${__1_2}": [
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '20deg'],
                ["style", "top", '179px'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '328px'],
                ["style", "width", '186px']
            ],
            "${_shadow_2}": [
                ["color", "background-color", 'rgba(0,0,0,0.22)'],
                ["transform", "scaleX", '0'],
                ["style", "left", '1046px'],
                ["style", "width", '303px'],
                ["style", "top", '-329px'],
                ["transform", "skewY", '-20deg'],
                ["style", "height", '440px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__4}": [
                ["style", "top", '-106px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(50,160,38,1.00)'],
                ["style", "height", '790px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '2520px'],
                ["style", "width", '1199px']
            ],
            "${__3_1}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["transform", "skewY", '-20deg'],
                ["style", "height", '569px'],
                ["transform", "scaleX", '0'],
                ["style", "top", '2px'],
                ["style", "left", '2218px'],
                ["style", "width", '304px']
            ],
            "${__2007Copy3}": [
                ["style", "height", '88px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '762px'],
                ["style", "top", '-142px']
            ],
            "${__2_semCopy5}": [
                ["style", "top", '318px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '20px'],
                ["style", "height", '173px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '608px'],
                ["style", "width", '390px']
            ],
            "${__3_2}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["transform", "skewY", '20deg'],
                ["style", "height", '569px'],
                ["transform", "scaleX", '0'],
                ["style", "top", '2px'],
                ["style", "left", '2218px'],
                ["style", "width", '304px']
            ],
            "${__2_semCopy4}": [
                ["style", "top", '145px'],
                ["style", "text-align", 'left'],
                ["style", "width", '390px'],
                ["style", "height", '173px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '608px'],
                ["style", "font-size", '20px']
            ],
            "${__1}": [
                ["color", "background-color", 'rgba(50,160,38,1.00)'],
                ["style", "top", '179px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.sepia", '0'],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ],
            "${__1_sem}": [
                ["style", "top", '192px'],
                ["style", "text-align", 'left'],
                ["style", "height", '30px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '2px'],
                ["style", "width", '148px']
            ],
            "${__3_2Copy}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["transform", "skewY", '20deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '569px'],
                ["style", "top", '2px'],
                ["style", "left", '2218px'],
                ["style", "width", '304px']
            ],
            "${__2_semCopy3}": [
                ["style", "top", '318px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '16px'],
                ["style", "height", '127px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '231px'],
                ["style", "width", '241px']
            ],
            "${__3_1Copy}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["transform", "skewY", '-20deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '569px'],
                ["style", "top", '2px'],
                ["style", "left", '2218px'],
                ["style", "width", '304px']
            ],
            "${__1_2Copy}": [
                ["color", "background-color", 'rgba(35,35,253,1.00)'],
                ["style", "top", '179px'],
                ["transform", "skewY", '20deg'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '328px'],
                ["style", "width", '186px']
            ],
            "${__2_1}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(28,92,21,1.00)'],
                ["transform", "skewY", '-20deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '353px'],
                ["style", "top", '111px'],
                ["style", "left", '1047px'],
                ["style", "width", '303px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5750,
            autoPlay: false,
            timeline: [
                { id: "eid100", tween: [ "transform", "${__2_1Copy2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid52", tween: [ "transform", "${__1_2}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid92", tween: [ "transform", "${_shadow_3}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid787", tween: [ "color", "${_shadow_2}", "background-color", 'rgba(0,0,0,0.22)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.22)'}], position: 5750, duration: 0 },
                { id: "eid43", tween: [ "transform", "${__1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid802", tween: [ "color", "${__2_2}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid59", tween: [ "transform", "${__3}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid801", tween: [ "color", "${__1_2}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid788", tween: [ "color", "${_shadow_3}", "background-color", 'rgba(0,0,0,0.22)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.22)'}], position: 5750, duration: 0 },
                { id: "eid90", tween: [ "transform", "${__3_1}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid799", tween: [ "color", "${__3_1}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid103", tween: [ "transform", "${__1_2Copy}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid99", tween: [ "transform", "${__2_2Copy2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid794", tween: [ "color", "${__2}", "background-color", 'rgba(50,160,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,160,38,1.00)'}], position: 3500, duration: 0 },
                { id: "eid785", tween: [ "style", "${_text}", "clip", [0,160,543.00006103516,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,543,0]}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid789", tween: [ "style", "${_text}", "clip", [0,468,543.00006103516,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,160,543.00006103516,0]}], position: 500, duration: 1000, easing: "easeInQuad" },
                { id: "eid790", tween: [ "style", "${_text}", "clip", [0,999,543.00006103516,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,468,543.00006103516,0]}], position: 1500, duration: 1000, easing: "easeInQuad" },
                { id: "eid791", tween: [ "style", "${_text}", "clip", [0,1673.0003842213,543.00012006916,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,999,543.00006103516,0]}], position: 2500, duration: 1000, easing: "easeInQuad" },
                { id: "eid45", tween: [ "transform", "${__1_1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid803", tween: [ "color", "${__1_1}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid798", tween: [ "color", "${__2_1}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid89", tween: [ "transform", "${__3_2}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid57", tween: [ "transform", "${__2_1}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid77", tween: [ "transform", "${_shadow_1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid786", tween: [ "color", "${_shadow_1}", "background-color", 'rgba(0,0,0,0.22)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.22)'}], position: 5750, duration: 0 },
                { id: "eid104", tween: [ "transform", "${__1_1Copy2}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid58", tween: [ "transform", "${__2_2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid96", tween: [ "transform", "${__3_1Copy}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid800", tween: [ "color", "${__3_2}", "background-color", 'rgba(28,92,21,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,92,21,1.00)'}], position: 3500, duration: 0 },
                { id: "eid101", tween: [ "transform", "${__2Copy}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid797", tween: [ "color", "${__3}", "background-color", 'rgba(50,160,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,160,38,1.00)'}], position: 3500, duration: 0 },
                { id: "eid91", tween: [ "transform", "${__4}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500 },
                { id: "eid97", tween: [ "transform", "${__3Copy2}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid88", tween: [ "transform", "${_shadow_2}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500 },
                { id: "eid95", tween: [ "transform", "${__3_2Copy}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 500 },
                { id: "eid796", tween: [ "color", "${__4}", "background-color", 'rgba(50,160,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,160,38,1.00)'}], position: 3500, duration: 0 },
                { id: "eid105", tween: [ "transform", "${__1Copy}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid795", tween: [ "color", "${__1}", "background-color", 'rgba(50,160,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,160,38,1.00)'}], position: 3500, duration: 0 },
                { id: "eid93", tween: [ "transform", "${__4Copy}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 500 },
                { id: "eid56", tween: [ "transform", "${__2}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 }            ]
        }
    }
},
"man": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'dude_animation_sheet',
                    rect: ['0px', '0px', '1024px', '1024px', 'auto', 'auto'],
                    clip: ['rect(0px 140px 140px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/dude_animation_sheet.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dude_animation_sheet}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,135,149,4], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '1024px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2367,
            autoPlay: false,
            labels: {
                "begin": 0,
                "reverse": 1500
            },
            timeline: [
                { id: "eid2", tween: [ "style", "${_dude_animation_sheet}", "clip", [0,135,149,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135,149,4]}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_dude_animation_sheet}", "clip", [0,135,149,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135,149,4]}], position: 1500, duration: 0 },
                { id: "eid24", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 33, duration: 0 },
                { id: "eid26", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,0]}], position: 67, duration: 0 },
                { id: "eid27", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,0]}], position: 100, duration: 0 },
                { id: "eid23", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,0]}], position: 133, duration: 0 },
                { id: "eid28", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,0]}], position: 167, duration: 0 },
                { id: "eid29", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 200, duration: 0 },
                { id: "eid31", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,0]}], position: 233, duration: 0 },
                { id: "eid32", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-147]}], position: 267, duration: 0 },
                { id: "eid36", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-151]}], position: 300, duration: 0 },
                { id: "eid37", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-151]}], position: 333, duration: 0 },
                { id: "eid38", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-151]}], position: 367, duration: 0 },
                { id: "eid39", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-151]}], position: 400, duration: 0 },
                { id: "eid40", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-151]}], position: 433, duration: 0 },
                { id: "eid42", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-151]}], position: 467, duration: 0 },
                { id: "eid43", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-299]}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-299]}], position: 533, duration: 0 },
                { id: "eid46", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-299]}], position: 567, duration: 0 },
                { id: "eid47", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-299]}], position: 600, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-299]}], position: 633, duration: 0 },
                { id: "eid49", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-299]}], position: 667, duration: 0 },
                { id: "eid50", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-299]}], position: 700, duration: 0 },
                { id: "eid51", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-454]}], position: 733, duration: 0 },
                { id: "eid52", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-454]}], position: 767, duration: 0 },
                { id: "eid53", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-454]}], position: 800, duration: 0 },
                { id: "eid54", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-454]}], position: 833, duration: 0 },
                { id: "eid205", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-454]}], position: 1500, duration: 0 },
                { id: "eid206", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1533, duration: 0 },
                { id: "eid207", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,0]}], position: 1567, duration: 0 },
                { id: "eid208", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,0]}], position: 1600, duration: 0 },
                { id: "eid209", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,0]}], position: 1633, duration: 0 },
                { id: "eid210", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,0]}], position: 1667, duration: 0 },
                { id: "eid211", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 1700, duration: 0 },
                { id: "eid212", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,0]}], position: 1733, duration: 0 },
                { id: "eid213", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-151]}], position: 1767, duration: 0 },
                { id: "eid214", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-151]}], position: 1800, duration: 0 },
                { id: "eid215", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-151]}], position: 1833, duration: 0 },
                { id: "eid216", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-151]}], position: 1867, duration: 0 },
                { id: "eid217", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-151]}], position: 1900, duration: 0 },
                { id: "eid218", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-151]}], position: 1933, duration: 0 },
                { id: "eid219", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-151]}], position: 1967, duration: 0 },
                { id: "eid220", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-299]}], position: 2000, duration: 0 },
                { id: "eid221", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-299]}], position: 2033, duration: 0 },
                { id: "eid222", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-299]}], position: 2067, duration: 0 },
                { id: "eid223", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-299]}], position: 2100, duration: 0 },
                { id: "eid224", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-299]}], position: 2133, duration: 0 },
                { id: "eid225", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-299]}], position: 2167, duration: 0 },
                { id: "eid226", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-299]}], position: 2200, duration: 0 },
                { id: "eid227", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-454]}], position: 2233, duration: 0 },
                { id: "eid228", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-454]}], position: 2267, duration: 0 },
                { id: "eid229", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-454]}], position: 2300, duration: 0 },
                { id: "eid230", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-454]}], position: 2333, duration: 0 }            ]
        }
    }
},
"spin_slideshow_3d": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'slideshow1',
                    type: 'group',
                    rect: ['0px', '0px', '100', '300', 'auto', 'auto'],
                    c: [
                    {
                        userClass: ' container perspective_1000',
                        rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                        id: 'container',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,0,0,0.00)'],
                        c: [
                        {
                            userClass: 'cube cube3d spiny',
                            rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                            id: 'cube',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                id: '_1',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/1.jpg', '0px', '0px']
                            },
                            {
                                id: '_12',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/12.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        }]
                    }]
                },
                {
                    id: 'slideshow2',
                    type: 'group',
                    rect: ['100px', '0px', '100', '300', 'auto', 'auto'],
                    c: [
                    {
                        userClass: ' container perspective_1000',
                        rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                        id: 'containerCopy4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,0,0,0.00)'],
                        c: [
                        {
                            userClass: 'cube cube3d spiny',
                            rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                            id: 'cubeCopy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                id: '_2',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/2.jpg', '0px', '0px']
                            },
                            {
                                id: '_22',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/22.jpg', '0px', '0px']
                            },
                            {
                                id: '_13',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/13.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        }]
                    }]
                },
                {
                    id: 'slideshow3',
                    type: 'group',
                    rect: ['200px', '0px', '100', '300', 'auto', 'auto'],
                    c: [
                    {
                        userClass: ' container perspective_1000',
                        rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                        id: 'containerCopy5',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,0,0,0.00)'],
                        c: [
                        {
                            userClass: 'cube cube3d spiny',
                            rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                            id: 'cubeCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                id: '_3',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/3.jpg', '0px', '0px']
                            },
                            {
                                id: '_32',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/32.jpg', '0px', '0px']
                            },
                            {
                                id: '_23',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/23.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy11',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        }]
                    }]
                },
                {
                    id: 'slideshow4',
                    type: 'group',
                    rect: ['300px', '0px', '100', '300', 'auto', 'auto'],
                    c: [
                    {
                        userClass: ' container perspective_1000',
                        rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                        id: 'containerCopy6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,0,0,0.00)'],
                        c: [
                        {
                            userClass: 'cube cube3d spiny',
                            rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                            id: 'cubeCopy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                id: '_4',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/4.jpg', '0px', '0px']
                            },
                            {
                                id: '_42',
                                type: 'image',
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/42.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy16',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'eenCopy15',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1.00)']
                            }]
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_eenCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${__22}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_slideshow4}": [
                ["style", "left", '300px'],
                ["style", "top", '0px']
            ],
            "${_containerCopy6}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_cubeCopy10}": [
                ["color", "background-color", 'rgba(255,0,0,0)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_eenCopy7}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_cube}": [
                ["color", "background-color", 'rgba(255,0,0,0)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_slideshow1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_eenCopy15}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${__23}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_eenCopy16}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_slideshow2}": [
                ["style", "left", '100px'],
                ["style", "top", '0px']
            ],
            "${__13}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '400px']
            ],
            "${__4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_cubeCopy12}": [
                ["color", "background-color", 'rgba(255,0,0,0)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${__42}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_slideshow3}": [
                ["style", "left", '200px'],
                ["style", "top", '0px']
            ],
            "${__1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_containerCopy4}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_eenCopy11}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_containerCopy5}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_cubeCopy11}": [
                ["color", "background-color", 'rgba(255,0,0,0)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_eenCopy6}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '300px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${__2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Music": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '397px', '95px', 'auto', 'auto'],
                    borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                    id: 'back_1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(58,58,58,1.00)']
                },
                {
                    type: 'image',
                    id: 'stop_button1',
                    rect: ['92px', '12px', '70px', '70px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/stop_button.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'play_button1',
                    rect: ['12px', '12px', '70px', '70px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/play_button2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '109px', '397px', '95px', 'auto', 'auto'],
                    borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                    id: 'back_2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(58,58,58,1.00)']
                },
                {
                    type: 'image',
                    id: 'stop_button2',
                    rect: ['92px', '121px', '70px', '70px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/stop_button.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'play_button2',
                    rect: ['12px', '121px', '70px', '70px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/play_button2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_stop_button2}": [
                ["style", "top", '121px'],
                ["style", "height", '70px'],
                ["style", "left", '92px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_back_1}": [
                ["style", "top", '0px'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(58,58,58,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '95px'],
                ["style", "width", '397px']
            ],
            "${_play_button2}": [
                ["style", "top", '121px'],
                ["style", "height", '70px'],
                ["style", "left", '12px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_stop_button1}": [
                ["style", "top", '12px'],
                ["style", "height", '70px'],
                ["style", "left", '92px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_back_2}": [
                ["style", "top", '109px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "background-color", 'rgba(58,58,58,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_play_button1}": [
                ["style", "top", '12px'],
                ["style", "height", '70px'],
                ["style", "left", '12px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"adobe_info": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'photoshop',
                    text: 'After Effects',
                    type: 'text',
                    rect: ['0px', '0px', '310px', '81px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'ps',
                    text: 'Ae',
                    align: 'center',
                    rect: ['86px', '93px', '137px', '137px', 'auto', 'auto']
                },
                {
                    rect: ['99px', '81px', '89px', '89px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'container',
                    stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['223px', '120px', '500px', '30px', 'auto', 'auto'],
                    borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                    type: 'rect',
                    id: 'bar_back',
                    stroke: [10, 'rgb(81, 186, 197)', 'none'],
                    display: 'none',
                    fill: ['rgba(191,191,191,1.00)']
                },
                {
                    rect: ['223px', '120px', '30px', '30px', 'auto', 'auto'],
                    borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                    type: 'rect',
                    id: 'bar_start',
                    stroke: [10, 'rgb(81, 186, 197)', 'none'],
                    display: 'none',
                    fill: ['rgba(81,186,197,1.00)']
                },
                {
                    rect: ['238px', '120px', '485px', '30px', 'auto', 'auto'],
                    borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                    type: 'rect',
                    id: 'bar',
                    stroke: [10, 'rgb(81, 186, 197)', 'none'],
                    display: 'none',
                    fill: ['rgba(81,186,197,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_photoshop}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '310px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '81px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '65px']
            ],
            "${_bar_start}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '30px'],
                ["style", "top", '120px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '223px']
            ],
            "${_bar}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '485px'],
                ["style", "top", '120px'],
                ["style", "height", '30px'],
                ["style", "display", 'none'],
                ["style", "left", '238px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '190px'],
                ["style", "width", '723px']
            ],
            "${_photoshopCopy}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '310px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '81px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '65px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_container}": [
                ["style", "top", '81px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-width", '10px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '89px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "left", '99px'],
                ["style", "width", '89px']
            ],
            "${_bar_back}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '120px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '223px']
            ],
            "${_ps}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '93px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '86px'],
                ["style", "text-align", 'center']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
                { id: "eid23", tween: [ "style", "${_bar_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_bar_back}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_bar_start}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_bar_start}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid14", tween: [ "transform", "${_ps}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_bar_back}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "transform", "${_photoshop}", "scaleX", '0', { fromValue: '1'}], position: 250, duration: 500, easing: "easeInQuad" },
                { id: "eid13", tween: [ "transform", "${_ps}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "transform", "${_photoshop}", "scaleY", '0', { fromValue: '1'}], position: 250, duration: 500, easing: "easeInQuad" },
                { id: "eid16", tween: [ "transform", "${_bar}", "scaleX", '0.83', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_photoshop}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_bar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${_bar}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"slide_4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'adobe_stats_sym',
                    type: 'rect',
                    rect: ['-711px', '-59px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'office_group',
                    type: 'group',
                    rect: ['428', '523', '183', '88', 'auto', 'auto'],
                    c: [
                    {
                        id: 'Word_group',
                        type: 'group',
                        rect: ['-26', '-410px', '52', '52', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_1',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-95px', '269px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_2',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '232px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_3',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '212px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_5',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'container',
                            stroke: [10, 'rgb(81, 186, 197)', 'solid'],
                            clip: ['rect(0px 42px 52px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['17px', '14px', '52px', '25px', 'auto', 'auto'],
                            font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            id: 'word_text',
                            text: 'Word',
                            align: 'center',
                            type: 'text'
                        }]
                    },
                    {
                        id: 'Excel_group',
                        type: 'group',
                        rect: ['49px', '-410px', '52', '52', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_3Copy2',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_4Copy2',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_5Copy2',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'containerCopy2',
                            stroke: [10, 'rgb(81, 186, 197)', 'solid'],
                            clip: ['rect(0px 42px 52px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['17px', '14px', '52px', '25px', 'auto', 'auto'],
                            font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            id: 'word_textCopy2',
                            text: 'Excel',
                            align: 'center',
                            type: 'text'
                        }]
                    },
                    {
                        id: 'Visio_group',
                        type: 'group',
                        rect: ['131px', '-410px', '52', '52', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_2Copy3',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_3Copy3',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_4Copy3',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_5Copy3',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'containerCopy3',
                            stroke: [10, 'rgb(81, 186, 197)', 'solid'],
                            clip: ['rect(0px 42px 52px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['17px', '14px', '52px', '25px', 'auto', 'auto'],
                            font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            id: 'word_textCopy3',
                            text: 'Visio',
                            align: 'center',
                            type: 'text'
                        }]
                    },
                    {
                        id: 'Outlook_group',
                        type: 'group',
                        rect: ['208px', '-410px', '52', '52', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_1Copy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_2Copy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_3Copy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_4Copy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_5Copy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'containerCopy4',
                            stroke: [10, 'rgb(81, 186, 197)', 'solid'],
                            clip: ['rect(0px 42px 52px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['17px', '14px', '52px', '25px', 'auto', 'auto'],
                            font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            id: 'word_textCopy4',
                            text: 'Outlook',
                            align: 'center',
                            type: 'text'
                        }]
                    },
                    {
                        id: 'Powerpoint_group',
                        type: 'group',
                        rect: ['277px', '-410px', '52', '52', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_3Copy5',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_4Copy5',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['-94px', '271px', '12px', '12px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: '_5Copy5',
                            stroke: [10, 'rgb(81, 186, 197)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(81,186,197,1)']
                        },
                        {
                            rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'containerCopy5',
                            stroke: [10, 'rgb(81, 186, 197)', 'solid'],
                            clip: ['rect(0px 42px 52px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['17px', '14px', '52px', '25px', 'auto', 'auto'],
                            font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                            id: 'word_textCopy5',
                            text: 'Powerpoint',
                            align: 'center',
                            type: 'text'
                        }]
                    },
                    {
                        rect: ['58px', '-515px', '183px', '88px', 'auto', 'auto'],
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                        id: 'office',
                        text: 'Office',
                        align: 'left',
                        type: 'text'
                    }]
                },
                {
                    rect: ['954px', '531px', '183px', '88px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Coding',
                    text: 'Coding',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1349px', '8px', '274px', '88px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Languages',
                    text: 'Languages',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'pie_chart',
                    type: 'rect',
                    transform: [[], [], [], ['0.93393', '0.93393']],
                    rect: ['1278px', '63px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['923px', '94px', '235px', '299px', 'auto', 'auto'],
                    font: ['comfortaa, sans-serif', 26, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    align: 'center',
                    id: 'Text6',
                    text: 'Python<br>C#<br>MySQL<br>UML<br>HTML<br>CSS<br>JavaScript',
                    display: 'none',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'adobe_stats_sym',
                symbolName: 'adobe_stats_sym',
                autoPlay: {

               }
            },
            {
                id: 'pie_chart',
                symbolName: 'pie_chart',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_photoshopCopy2}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '17px']
            ],
            "${__5Copy4}": [
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "width", '12px']
            ],
            "${_Excel_group}": [
                ["style", "top", '-410px'],
                ["style", "left", '49px']
            ],
            "${__2Copy4}": [
                ["style", "top", '124px'],
                ["motion", "location", '-88.16px 277.45px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__2}": [
                ["style", "top", '124px'],
                ["motion", "location", '-88.155979269803px 277.4532px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__5}": [
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["motion", "location", '-87.861328125px 277.28128369818px'],
                ["style", "width", '12px']
            ],
            "${_Word_group}": [
                ["style", "top", '-410px']
            ],
            "${__4Copy3}": [
                ["style", "top", '85px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__3Copy5}": [
                ["style", "top", '105px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__3}": [
                ["style", "top", '105px'],
                ["motion", "location", '-87.86px 277.28141437191px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${_word_text}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,55,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '1']
            ],
            "${_office}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "font-size", '50px'],
                ["style", "top", '-515px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '58px'],
                ["style", "width", '183px']
            ],
            "${_Powerpoint_group}": [
                ["style", "top", '-410px'],
                ["style", "left", '277px']
            ],
            "${_containerCopy4}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,40,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${_Outlook_group}": [
                ["style", "top", '-410px'],
                ["style", "left", '208px']
            ],
            "${_containerCopy2}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,40,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${_Languages}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "font-size", '50px'],
                ["style", "top", '8px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '1349px'],
                ["style", "width", '274px']
            ],
            "${_word_textCopy2}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,55,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(255,255,255,1)']
            ],
            "${__5Copy2}": [
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "width", '12px']
            ],
            "${_containerCopy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,40,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '32px']
            ],
            "${_photoshopCopy}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '17px']
            ],
            "${_Coding}": [
                ["style", "top", '8px'],
                ["style", "width", '183px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '954px'],
                ["style", "font-size", '50px']
            ],
            "${__3Copy3}": [
                ["style", "top", '105px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__3Copy2}": [
                ["style", "top", '105px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__4Copy5}": [
                ["style", "top", '85px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${_word_textCopy3}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '20px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,55,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "text-align", 'center']
            ],
            "${__5Copy5}": [
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "width", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '733px'],
                ["style", "width", '1670px']
            ],
            "${_psCopy4}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '20px']
            ],
            "${_container}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,40,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '32px']
            ],
            "${_word_textCopy5}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,120.71484375,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '1']
            ],
            "${_pie_chart}": [
                ["transform", "scaleX", '0.93393'],
                ["style", "left", '1278px'],
                ["transform", "scaleY", '0.93393'],
                ["style", "top", '63px']
            ],
            "${_word_textCopy4}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '20px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "clip", [0,80.56849670410156,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(255,255,255,1)']
            ],
            "${_psCopy3}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '20px']
            ],
            "${__4}": [
                ["style", "top", '85px'],
                ["motion", "location", '-87.86px 277.28136602723px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__1Copy4}": [
                ["style", "top", '144px'],
                ["motion", "location", '-87.86px 276.73px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__3Copy4}": [
                ["style", "top", '105px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${_adobe_stats_sym}": [
                ["style", "opacity", '1']
            ],
            "${__2Copy3}": [
                ["style", "top", '124px'],
                ["motion", "location", '-88.16px 277.45px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${_Text6}": [
                ["style", "top", '94px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["style", "left", '923px'],
                ["style", "font-size", '26px']
            ],
            "${__1}": [
                ["style", "top", '144px'],
                ["motion", "location", '-87.86px 276.73px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${_word_textCopy}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '17px'],
                ["style", "width", '52px'],
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '25px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(255,255,255,1)']
            ],
            "${_Visio_group}": [
                ["style", "top", '-410px'],
                ["style", "left", '131px']
            ],
            "${_containerCopy5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,40,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '32px']
            ],
            "${__4Copy2}": [
                ["style", "top", '85px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__4Copy4}": [
                ["style", "top", '85px'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '12px']
            ],
            "${__5Copy3}": [
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["motion", "location", '-87.86px 277.28px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 44465,
            autoPlay: false,
            timeline: [
                { id: "eid711", tween: [ "motion", "${__4Copy5}", [[-87.86, 277.28, 0, 0],[6.14, 201.94, 96.4, -72.91, 92.53, -69.98],[26, 91, 0, 0]]], position: 37441, duration: 524, easing: "easeOutBounce" },
                { id: "eid679", tween: [ "style", "${_containerCopy3}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,52,0]}], position: 29931, duration: 1000, easing: "easeOutQuad" },
                { id: "eid642", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 24500, duration: 76, easing: "easeOutQuad" },
                { id: "eid678", tween: [ "style", "${_word_textCopy3}", "opacity", '1', { fromValue: '0'}], position: 28599, duration: 250, easing: "easeOutQuad" },
                { id: "eid647", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 24832, duration: 76, easing: "easeOutQuad" },
                { id: "eid732", tween: [ "style", "${_word_textCopy5}", "clip", [0,12.1435546875,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,120.71484375,25,0]}], position: 35691, duration: 1106, easing: "easeOutQuad" },
                { id: "eid694", tween: [ "style", "${_containerCopy4}", "opacity", '1', { fromValue: '0'}], position: 31917, duration: 250, easing: "easeOutQuad" },
                { id: "eid693", tween: [ "style", "${_containerCopy4}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,52,0]}], position: 33249, duration: 1000, easing: "easeOutQuad" },
                { id: "eid592", tween: [ "transform", "${_Languages}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 39079, duration: 886, easing: "easeOutElastic" },
                { id: "eid645", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 24674, duration: 76, easing: "easeOutQuad" },
                { id: "eid581", tween: [ "style", "${_word_text}", "clip", [0,19,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,25,0]}], position: 22750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid576", tween: [ "style", "${_word_text}", "opacity", '1', { fromValue: '0'}], position: 22000, duration: 250, easing: "easeOutQuad" },
                { id: "eid680", tween: [ "style", "${_containerCopy3}", "opacity", '1', { fromValue: '0'}], position: 28599, duration: 250, easing: "easeOutQuad" },
                { id: "eid616", tween: [ "motion", "${__2}", [[-88.16, 277.45, 0, 0],[6.14, 240.94, 96.4, -72.91, 92.53, -69.98],[26, 130, 0, 0]]], position: 24832, duration: 486, easing: "easeOutBounce" },
                { id: "eid691", tween: [ "style", "${_word_textCopy4}", "clip", [0,19,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80.56849670410156,25,0]}], position: 32667, duration: 221, easing: "easeOutQuad" },
                { id: "eid720", tween: [ "style", "${_word_textCopy4}", "clip", [0,17.5712890625,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,19,25,0]}], position: 32888, duration: 785, easing: "easeOutQuad" },
                { id: "eid615", tween: [ "motion", "${__1}", [[-87.86, 276.73, 0, 0],[6.14, 260.94, 96.4, -72.91, 92.53, -69.98],[26, 150, 0, 0]]], position: 25000, duration: 473, easing: "easeOutBounce" },
                { id: "eid683", tween: [ "motion", "${__4Copy3}", [[-87.86, 277.28, 0, 0],[6.14, 201.94, 96.4, -72.91, 92.53, -69.98],[26, 91, 0, 0]]], position: 31099, duration: 524, easing: "easeOutBounce" },
                { id: "eid665", tween: [ "style", "${_containerCopy2}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,52,0]}], position: 26805, duration: 1000, easing: "easeOutQuad" },
                { id: "eid707", tween: [ "style", "${_containerCopy5}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,52,0]}], position: 36273, duration: 1000, easing: "easeOutQuad" },
                { id: "eid542", tween: [ "transform", "${_office}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 21114, duration: 886, easing: "easeOutElastic" },
                { id: "eid667", tween: [ "motion", "${__5Copy2}", [[-87.86, 277.28, 0, 0],[6.14, 181.94, 96.4, -72.91, 92.53, -69.98],[26, 71, 0, 0]]], position: 27805, duration: 576, easing: "easeOutBounce" },
                { id: "eid664", tween: [ "style", "${_word_textCopy2}", "opacity", '1', { fromValue: '0'}], position: 25473, duration: 250, easing: "easeOutQuad" },
                { id: "eid686", tween: [ "style", "${__3Copy3}", "opacity", '1', { fromValue: '0'}], position: 31273, duration: 76, easing: "easeOutQuad" },
                { id: "eid735", tween: [ "transform", "${_Coding}", "rotateZ", '-90deg', { fromValue: '90deg'}], position: 37965, duration: 114, easing: "easeOutQuad" },
                { id: "eid590", tween: [ "transform", "${_Coding}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 38079, duration: 886, easing: "easeOutElastic" },
                { id: "eid670", tween: [ "style", "${__4Copy2}", "opacity", '1', { fromValue: '0'}], position: 27973, duration: 76, easing: "easeOutQuad" },
                { id: "eid591", tween: [ "style", "${_Languages}", "opacity", '1', { fromValue: '0'}], position: 38965, duration: 114, easing: "easeInQuad" },
                { id: "eid666", tween: [ "style", "${_containerCopy2}", "opacity", '1', { fromValue: '0'}], position: 25473, duration: 250, easing: "easeOutQuad" },
                { id: "eid684", tween: [ "style", "${__4Copy3}", "opacity", '1', { fromValue: '0'}], position: 31099, duration: 76, easing: "easeOutQuad" },
                { id: "eid712", tween: [ "style", "${__4Copy5}", "opacity", '1', { fromValue: '0'}], position: 37441, duration: 76, easing: "easeOutQuad" },
                { id: "eid695", tween: [ "motion", "${__5Copy4}", [[-87.86, 277.28, 0, 0],[6.14, 181.94, 96.4, -72.91, 92.53, -69.98],[26, 71, 0, 0]]], position: 34249, duration: 576, easing: "easeOutBounce" },
                { id: "eid698", tween: [ "style", "${__4Copy4}", "opacity", '1', { fromValue: '0'}], position: 34417, duration: 76, easing: "easeOutQuad" },
                { id: "eid582", tween: [ "style", "${_container}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,40,52,0]}], position: 23332, duration: 1000, easing: "easeOutQuad" },
                { id: "eid713", tween: [ "motion", "${__3Copy5}", [[-87.86, 277.28, 0, 0],[6.14, 221.94, 96.4, -72.91, 92.53, -69.98],[26, 111, 0, 0]]], position: 37615, duration: 452, easing: "easeOutBounce" },
                { id: "eid671", tween: [ "motion", "${__3Copy2}", [[-87.86, 277.28, 0, 0],[6.14, 221.94, 96.4, -72.91, 92.53, -69.98],[26, 111, 0, 0]]], position: 28147, duration: 452, easing: "easeOutBounce" },
                { id: "eid668", tween: [ "style", "${__5Copy2}", "opacity", '1', { fromValue: '0'}], position: 27805, duration: 76, easing: "easeOutQuad" },
                { id: "eid644", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 24332, duration: 76, easing: "easeOutQuad" },
                { id: "eid714", tween: [ "style", "${__3Copy5}", "opacity", '1', { fromValue: '0'}], position: 37615, duration: 76, easing: "easeOutQuad" },
                { id: "eid574", tween: [ "style", "${_container}", "opacity", '1', { fromValue: '0'}], position: 22000, duration: 250, easing: "easeOutQuad" },
                { id: "eid696", tween: [ "style", "${__5Copy4}", "opacity", '1', { fromValue: '0'}], position: 34249, duration: 76, easing: "easeOutQuad" },
                { id: "eid1093", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 37965, duration: 0 },
                { id: "eid681", tween: [ "motion", "${__5Copy3}", [[-87.86, 277.28, 0, 0],[6.14, 181.94, 96.4, -72.91, 92.53, -69.98],[26, 71, 0, 0]]], position: 30931, duration: 576, easing: "easeOutBounce" },
                { id: "eid618", tween: [ "motion", "${__4}", [[-87.86, 277.28, 0, 0],[6.14, 201.94, 96.4, -72.91, 92.53, -69.98],[26, 91, 0, 0]]], position: 24500, duration: 524, easing: "easeOutBounce" },
                { id: "eid709", tween: [ "motion", "${__5Copy5}", [[-87.86, 277.28, 0, 0],[6.14, 181.94, 96.4, -72.91, 92.53, -69.98],[26, 71, 0, 0]]], position: 37273, duration: 576, easing: "easeOutBounce" },
                { id: "eid685", tween: [ "motion", "${__3Copy3}", [[-87.86, 277.28, 0, 0],[6.14, 221.94, 96.4, -72.91, 92.53, -69.98],[26, 111, 0, 0]]], position: 31273, duration: 452, easing: "easeOutBounce" },
                { id: "eid669", tween: [ "motion", "${__4Copy2}", [[-87.86, 277.28, 0, 0],[6.14, 201.94, 96.4, -72.91, 92.53, -69.98],[26, 91, 0, 0]]], position: 27973, duration: 524, easing: "easeOutBounce" },
                { id: "eid687", tween: [ "motion", "${__2Copy3}", [[-88.16, 277.45, 0, 0],[6.14, 240.94, 96.4, -72.91, 92.53, -69.98],[26, 130, 0, 0]]], position: 31431, duration: 486, easing: "easeOutBounce" },
                { id: "eid596", tween: [ "motion", "${__5}", [[-87.86, 277.28, 0, 0],[6.14, 181.94, 96.4, -72.91, 92.53, -69.98],[26, 71, 0, 0]]], position: 24332, duration: 576, easing: "easeOutBounce" },
                { id: "eid682", tween: [ "style", "${__5Copy3}", "opacity", '1', { fromValue: '0'}], position: 30931, duration: 76, easing: "easeOutQuad" },
                { id: "eid541", tween: [ "style", "${_office}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 114, easing: "easeInQuad" },
                { id: "eid708", tween: [ "style", "${_containerCopy5}", "opacity", '1', { fromValue: '0'}], position: 34941, duration: 250, easing: "easeOutQuad" },
                { id: "eid617", tween: [ "motion", "${__3}", [[-87.86, 277.28, 0, 0],[6.14, 221.94, 96.4, -72.91, 92.53, -69.98],[26, 111, 0, 0]]], position: 24674, duration: 452, easing: "easeOutBounce" },
                { id: "eid663", tween: [ "style", "${_word_textCopy2}", "clip", [0,13.28515625,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,25,0]}], position: 26223, duration: 1000, easing: "easeOutQuad" },
                { id: "eid688", tween: [ "style", "${__2Copy3}", "opacity", '1', { fromValue: '0'}], position: 31431, duration: 76, easing: "easeOutQuad" },
                { id: "eid672", tween: [ "style", "${__3Copy2}", "opacity", '1', { fromValue: '0'}], position: 28148, duration: 76, easing: "easeOutQuad" },
                { id: "eid706", tween: [ "style", "${_word_textCopy5}", "opacity", '1', { fromValue: '0'}], position: 34941, duration: 250, easing: "easeOutQuad" },
                { id: "eid589", tween: [ "style", "${_Coding}", "opacity", '1', { fromValue: '0'}], position: 37965, duration: 114, easing: "easeInQuad" },
                { id: "eid677", tween: [ "style", "${_word_textCopy3}", "clip", [0,19,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,25,0]}], position: 29349, duration: 266, easing: "easeOutQuad" },
                { id: "eid719", tween: [ "style", "${_word_textCopy3}", "clip", [0,16.857421875,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,19,25,0]}], position: 29614, duration: 668, easing: "easeOutQuad" },
                { id: "eid648", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 76, easing: "easeOutQuad" },
                { id: "eid710", tween: [ "style", "${__5Copy5}", "opacity", '1', { fromValue: '0'}], position: 37273, duration: 76, easing: "easeOutQuad" },
                { id: "eid692", tween: [ "style", "${_word_textCopy4}", "opacity", '1', { fromValue: '0'}], position: 31917, duration: 250, easing: "easeOutQuad" },
                { id: "eid697", tween: [ "motion", "${__4Copy4}", [[-87.86, 277.28, 0, 0],[6.14, 201.94, 96.4, -72.91, 92.53, -69.98],[26, 91, 0, 0]]], position: 34417, duration: 524, easing: "easeOutBounce" },
                { id: "eid757", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pie_chart}', [] ], ""], position: 0 },
                { id: "eid758", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_adobe_stats_sym}', [] ], ""], position: 0 },
                { id: "eid759", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pie_chart}', [] ], ""], position: 39965 }            ]
        }
    }
},
"man_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'dude_animation_sheet',
                    rect: ['0px', '0px', '1024px', '1024px', 'auto', 'auto'],
                    clip: ['rect(0px 140px 140px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/dude_animation_sheet2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_dude_animation_sheet}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,135,149,4], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1024px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1867,
            autoPlay: false,
            labels: {
                "begin": 0,
                "stance_right": 267,
                "links": 1000,
                "stance_left": 1267
            },
            timeline: [
                { id: "eid2", tween: [ "style", "${_dude_animation_sheet}", "clip", [0,135,149,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135,149,4]}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_dude_animation_sheet}", "clip", [0,135,149,4], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,135,149,4]}], position: 1000, duration: 0 },
                { id: "eid24", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 33, duration: 0 },
                { id: "eid26", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,0]}], position: 67, duration: 0 },
                { id: "eid27", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,0]}], position: 100, duration: 0 },
                { id: "eid23", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,0]}], position: 133, duration: 0 },
                { id: "eid28", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,0]}], position: 167, duration: 0 },
                { id: "eid29", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 200, duration: 0 },
                { id: "eid31", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,0]}], position: 233, duration: 0 },
                { id: "eid32", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-147]}], position: 267, duration: 0 },
                { id: "eid36", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-151]}], position: 300, duration: 0 },
                { id: "eid37", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-151]}], position: 333, duration: 0 },
                { id: "eid38", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-151]}], position: 367, duration: 0 },
                { id: "eid39", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-151]}], position: 400, duration: 0 },
                { id: "eid40", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-151]}], position: 433, duration: 0 },
                { id: "eid42", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-151]}], position: 467, duration: 0 },
                { id: "eid43", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-299]}], position: 500, duration: 0 },
                { id: "eid44", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-299]}], position: 533, duration: 0 },
                { id: "eid46", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-299]}], position: 567, duration: 0 },
                { id: "eid47", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-299]}], position: 600, duration: 0 },
                { id: "eid48", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-299]}], position: 633, duration: 0 },
                { id: "eid49", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-299]}], position: 667, duration: 0 },
                { id: "eid50", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-299]}], position: 700, duration: 0 },
                { id: "eid51", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-454]}], position: 733, duration: 0 },
                { id: "eid52", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-454]}], position: 767, duration: 0 },
                { id: "eid53", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-454]}], position: 800, duration: 0 },
                { id: "eid54", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-454]}], position: 833, duration: 0 },
                { id: "eid130", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-454]}], position: 1000, duration: 0 },
                { id: "eid131", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1033, duration: 0 },
                { id: "eid132", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,0]}], position: 1067, duration: 0 },
                { id: "eid133", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,0]}], position: 1100, duration: 0 },
                { id: "eid134", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,0]}], position: 1133, duration: 0 },
                { id: "eid135", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,0]}], position: 1167, duration: 0 },
                { id: "eid136", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,0]}], position: 1200, duration: 0 },
                { id: "eid137", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,0]}], position: 1233, duration: 0 },
                { id: "eid138", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-151]}], position: 1267, duration: 0 },
                { id: "eid139", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-151]}], position: 1300, duration: 0 },
                { id: "eid140", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-151]}], position: 1333, duration: 0 },
                { id: "eid141", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-151]}], position: 1367, duration: 0 },
                { id: "eid142", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-151]}], position: 1400, duration: 0 },
                { id: "eid143", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-151], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-151]}], position: 1433, duration: 0 },
                { id: "eid144", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-151]}], position: 1467, duration: 0 },
                { id: "eid145", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-299]}], position: 1500, duration: 0 },
                { id: "eid146", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-299]}], position: 1533, duration: 0 },
                { id: "eid147", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-299]}], position: 1567, duration: 0 },
                { id: "eid148", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-299]}], position: 1600, duration: 0 },
                { id: "eid149", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-650,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-520,-299]}], position: 1633, duration: 0 },
                { id: "eid150", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-780,-299], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-650,-299]}], position: 1667, duration: 0 },
                { id: "eid151", tween: [ "style", "${_dude_animation_sheet}", "background-position", [0,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-780,-299]}], position: 1700, duration: 0 },
                { id: "eid152", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-130,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-454]}], position: 1733, duration: 0 },
                { id: "eid153", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-260,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-130,-454]}], position: 1767, duration: 0 },
                { id: "eid154", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-390,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-260,-454]}], position: 1800, duration: 0 },
                { id: "eid155", tween: [ "style", "${_dude_animation_sheet}", "background-position", [-520,-454], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-390,-454]}], position: 1833, duration: 0 },
                { id: "eid184", tween: [ "style", "${_dude_animation_sheet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid180", tween: [ "style", "${_dude_animation_sheet}", "left", '-891px', { fromValue: '0px'}], position: 1000, duration: 0 },
                { id: "eid183", tween: [ "style", "${_dude_animation_sheet}", "width", '1024px', { fromValue: '1024px'}], position: 0, duration: 0 },
                { id: "eid179", tween: [ "style", "${_dude_animation_sheet}", "width", '1024px', { fromValue: '1024px'}], position: 1000, duration: 0 },
                { id: "eid182", tween: [ "transform", "${_dude_animation_sheet}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "transform", "${_dude_animation_sheet}", "scaleX", '-1', { fromValue: '1'}], position: 1000, duration: 0 }            ]
        }
    }
},
"adobe_stats_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'photoshop_group',
                    type: 'group',
                    rect: ['686px', '554px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['-86px', '0px', '310px', '26px', 'auto', 'auto'],
                        id: 'photoshop',
                        text: 'Photoshop',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'ps',
                        text: 'Ps',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'container',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_back',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_start',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'bar',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'after_effects',
                    type: 'group',
                    rect: ['686px', '499px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy3',
                        text: 'After Effects',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy',
                        text: 'Ae',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'animate',
                    type: 'group',
                    rect: ['686px', '444px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy4',
                        text: 'Edge Animate',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy2',
                        text: 'An',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy2',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy2',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy2',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy2',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'illustrator',
                    type: 'group',
                    rect: ['686px', '388px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy12',
                        text: 'Illustrator',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy12',
                        text: 'Ai',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy12',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy12',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy12',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy12',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'dreamweaver',
                    type: 'group',
                    rect: ['686px', '331px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy5',
                        text: 'Dreamweaver',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy5',
                        text: 'Dw',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy5',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy5',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy5',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy5',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'code',
                    type: 'group',
                    rect: ['686px', '274px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy6',
                        text: 'Code',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy6',
                        text: 'Co',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy6',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy6',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy6',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy6',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'muse',
                    type: 'group',
                    rect: ['686px', '217px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy7',
                        text: 'Muse',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy7',
                        text: 'Mu',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy7',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy7',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy7',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy7',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'web_fonts',
                    type: 'group',
                    rect: ['686px', '160px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy8',
                        text: 'Web Fonts',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy8',
                        text: 'Wf',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy8',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy8',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy8',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy8',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'encore',
                    type: 'group',
                    rect: ['686px', '103px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy9',
                        text: 'Encore',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy9',
                        text: 'En',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy9',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy9',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy9',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy9',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    id: 'reflow',
                    type: 'group',
                    rect: ['686px', '49px', '300px', '70px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'text',
                        rect: ['4px', '0px', '127px', '26px', 'auto', 'auto'],
                        id: 'photoshopCopy10',
                        text: 'Reflow',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '12px', '137px', '137px', 'auto', 'auto'],
                        id: 'psCopy10',
                        text: 'Rf',
                        align: 'center',
                        font: ['comfortaa, sans-serif', 65, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                    },
                    {
                        rect: ['41px', '26px', '32px', '32px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'containerCopy10',
                        stroke: [10, 'rgba(81,186,197,1.00)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['25px 25px', '25px 25px', '25px 25px', '25px 25px'],
                        rect: ['100px', '48px', '200px', '12px', 'auto', 'auto'],
                        id: 'bar_backCopy10',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(191,191,191,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['263px 263px', '263px 263px', '263px 263px', '263px 263px'],
                        rect: ['99px', '48px', '12px', '12px', 'auto', 'auto'],
                        id: 'bar_startCopy10',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    },
                    {
                        type: 'rect',
                        borderRadius: ['0px', '263px 263px', '263px 263px', '0px'],
                        rect: ['105px', '48px', '193px', '12px', 'auto', 'auto'],
                        id: 'barCopy10',
                        stroke: [10, 'rgb(81, 186, 197)', 'none'],
                        display: 'none',
                        fill: ['rgba(81,186,197,1.00)']
                    }]
                },
                {
                    type: 'text',
                    rect: ['794px', '607px', '183px', '88px', 'auto', 'auto'],
                    id: 'adobe',
                    text: 'Adobe',
                    align: 'left',
                    font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bar_startCopy}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '99px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_adobe}": [
                ["style", "top", '607px'],
                ["style", "width", '183px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '88px'],
                ["style", "opacity", '0'],
                ["style", "left", '794px'],
                ["style", "font-size", '50px']
            ],
            "${_bar_backCopy12}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '100px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_reflow}": [
                ["style", "height", '70px'],
                ["style", "top", '49px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_web_fonts}": [
                ["style", "height", '70px'],
                ["style", "top", '160px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_bar_startCopy6}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '99px']
            ],
            "${_containerCopy}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-width", '10px'],
                ["style", "opacity", '0']
            ],
            "${_barCopy9}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_containerCopy8}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "opacity", '0'],
                ["style", "border-width", '10px']
            ],
            "${_psCopy6}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px']
            ],
            "${_bar_backCopy5}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '100px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_bar_startCopy7}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '99px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_bar}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "left", '105px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_photoshopCopy9}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_psCopy}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "font-size", '20px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_containerCopy7}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-width", '10px'],
                ["style", "opacity", '0']
            ],
            "${_dreamweaver}": [
                ["style", "top", '331px'],
                ["style", "height", '70px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_psCopy5}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "font-size", '20px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_psCopy8}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px']
            ],
            "${_bar_startCopy5}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '99px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_photoshop_group}": [
                ["style", "height", '70px'],
                ["style", "top", '554px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_muse}": [
                ["style", "top", '217px'],
                ["style", "height", '70px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_animate}": [
                ["style", "height", '70px'],
                ["style", "top", '444px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_psCopy12}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "font-size", '20px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar_start}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '99px']
            ],
            "${_illustrator}": [
                ["style", "top", '388px'],
                ["style", "height", '70px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_psCopy2}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px']
            ],
            "${_bar_startCopy2}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '99px']
            ],
            "${_after_effects}": [
                ["style", "top", '499px'],
                ["style", "height", '70px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_containerCopy10}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "opacity", '0'],
                ["style", "border-width", '10px']
            ],
            "${_barCopy6}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "left", '105px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_psCopy7}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "font-size", '20px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_ps}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px']
            ],
            "${_photoshopCopy12}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar_backCopy9}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '100px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_bar_backCopy8}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '100px']
            ],
            "${_barCopy10}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "left", '105px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_barCopy}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_bar_startCopy9}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '99px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_barCopy12}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_containerCopy2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "opacity", '0'],
                ["style", "border-width", '10px']
            ],
            "${_bar_startCopy12}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '99px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'none']
            ],
            "${_containerCopy6}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "opacity", '0'],
                ["style", "border-width", '10px']
            ],
            "${_photoshopCopy5}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar_back}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '100px']
            ],
            "${_bar_startCopy10}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '99px']
            ],
            "${_photoshopCopy7}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar_backCopy6}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '100px']
            ],
            "${_photoshop}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["style", "text-align", 'center']
            ],
            "${_encore}": [
                ["style", "top", '103px'],
                ["style", "height", '70px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ],
            "${_containerCopy12}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-width", '10px'],
                ["style", "opacity", '0']
            ],
            "${_photoshopCopy6}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["style", "text-align", 'center']
            ],
            "${_bar_backCopy10}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '100px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '10px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "left", '41px'],
                ["style", "opacity", '0']
            ],
            "${_barCopy5}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_barCopy7}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_photoshopCopy10}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["style", "text-align", 'center']
            ],
            "${_psCopy9}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["style", "font-size", '20px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar_backCopy2}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "left", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '643px'],
                ["style", "width", '998px']
            ],
            "${_containerCopy9}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-width", '10px'],
                ["style", "opacity", '0']
            ],
            "${_bar_backCopy}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '100px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_bar_startCopy8}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-top-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '12px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '99px']
            ],
            "${_photoshopCopy8}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["style", "text-align", 'center']
            ],
            "${_photoshopCopy4}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["style", "text-align", 'center']
            ],
            "${_bar_backCopy7}": [
                ["color", "background-color", 'rgba(191,191,191,1.00)'],
                ["style", "border-top-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '200px'],
                ["style", "top", '48px'],
                ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '12px'],
                ["style", "left", '100px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_barCopy8}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "left", '105px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_psCopy10}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "left", '53px'],
                ["style", "width", '25px'],
                ["style", "top", '40px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '23px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '20px']
            ],
            "${_containerCopy5}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '41px'],
                ["style", "width", '32px'],
                ["style", "top", '26px'],
                ["style", "height", '32px'],
                ["color", "border-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-width", '10px'],
                ["style", "opacity", '0']
            ],
            "${_barCopy2}": [
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "border-bottom-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0'],
                ["style", "border-style", 'none'],
                ["style", "border-top-right-radius", [263,263], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '193px'],
                ["style", "top", '48px'],
                ["style", "height", '12px'],
                ["style", "display", 'none'],
                ["style", "left", '105px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_photoshopCopy3}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "height", '26px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "font-size", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_code}": [
                ["style", "height", '70px'],
                ["style", "top", '274px'],
                ["style", "left", '686px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: false,
            timeline: [
                { id: "eid511", tween: [ "style", "${_containerCopy10}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 250, easing: "easeInQuad" },
                { id: "eid531", tween: [ "style", "${_psCopy12}", "top", '40px', { fromValue: '40px'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid505", tween: [ "transform", "${_barCopy10}", "scaleX", '0.5', { fromValue: '0'}], position: 20750, duration: 250, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_psCopy}", "font-size", '20px', { fromValue: '20px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid430", tween: [ "style", "${_bar_startCopy6}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0 },
                { id: "eid431", tween: [ "style", "${_bar_startCopy6}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0 },
                { id: "eid264", tween: [ "style", "${_bar}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid265", tween: [ "style", "${_bar}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0, easing: "easeOutQuad" },
                { id: "eid520", tween: [ "style", "${_photoshopCopy10}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 250, easing: "easeInQuad" },
                { id: "eid418", tween: [ "transform", "${_psCopy5}", "scaleY", '1', { fromValue: '0'}], position: 9750, duration: 500, easing: "easeOutQuad" },
                { id: "eid494", tween: [ "transform", "${_psCopy9}", "scaleY", '1', { fromValue: '0'}], position: 17750, duration: 500, easing: "easeOutQuad" },
                { id: "eid534", tween: [ "transform", "${_psCopy12}", "scaleX", '1', { fromValue: '0'}], position: 7750, duration: 500, easing: "easeOutQuad" },
                { id: "eid484", tween: [ "style", "${_barCopy9}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid485", tween: [ "style", "${_barCopy9}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0, easing: "easeOutQuad" },
                { id: "eid487", tween: [ "style", "${_bar_startCopy9}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid488", tween: [ "style", "${_bar_startCopy9}", "display", 'block', { fromValue: 'none'}], position: 18750, duration: 0 },
                { id: "eid439", tween: [ "style", "${_psCopy6}", "height", '23px', { fromValue: '23px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_psCopy}", "width", '25px', { fromValue: '25px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_barCopy}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid327", tween: [ "style", "${_barCopy}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeOutQuad" },
                { id: "eid491", tween: [ "style", "${_bar_backCopy9}", "opacity", '1', { fromValue: '0'}], position: 18250, duration: 500, easing: "easeOutQuad" },
                { id: "eid257", tween: [ "transform", "${_adobe}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 114, duration: 886, easing: "easeOutElastic" },
                { id: "eid358", tween: [ "style", "${_psCopy2}", "height", '23px', { fromValue: '23px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid423", tween: [ "style", "${_psCopy5}", "font-size", '20px', { fromValue: '20px'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid442", tween: [ "style", "${_psCopy6}", "font-size", '20px', { fromValue: '20px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid495", tween: [ "style", "${_psCopy9}", "height", '23px', { fromValue: '23px'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid355", tween: [ "style", "${_psCopy2}", "top", '40px', { fromValue: '40px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid474", tween: [ "style", "${_psCopy8}", "top", '40px', { fromValue: '40px'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "transform", "${_barCopy}", "scaleX", '0.66', { fromValue: '0'}], position: 4750, duration: 250, easing: "easeOutQuad" },
                { id: "eid535", tween: [ "style", "${_psCopy12}", "width", '25px', { fromValue: '25px'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid425", tween: [ "style", "${_photoshopCopy5}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250, easing: "easeInQuad" },
                { id: "eid472", tween: [ "style", "${_bar_backCopy8}", "opacity", '1', { fromValue: '0'}], position: 16250, duration: 500, easing: "easeOutQuad" },
                { id: "eid463", tween: [ "style", "${_photoshopCopy7}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInQuad" },
                { id: "eid532", tween: [ "transform", "${_psCopy12}", "scaleY", '1', { fromValue: '0'}], position: 7750, duration: 500, easing: "easeOutQuad" },
                { id: "eid496", tween: [ "transform", "${_psCopy9}", "scaleX", '1', { fromValue: '0'}], position: 17750, duration: 500, easing: "easeOutQuad" },
                { id: "eid465", tween: [ "style", "${_barCopy8}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeOutQuad" },
                { id: "eid466", tween: [ "style", "${_barCopy8}", "display", 'block', { fromValue: 'none'}], position: 16750, duration: 0, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "transform", "${_photoshopCopy3}", "scaleY", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeInQuad" },
                { id: "eid267", tween: [ "style", "${_bar_start}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid268", tween: [ "style", "${_bar_start}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid503", tween: [ "style", "${_barCopy10}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0, easing: "easeOutQuad" },
                { id: "eid504", tween: [ "style", "${_barCopy10}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0, easing: "easeOutQuad" },
                { id: "eid533", tween: [ "style", "${_psCopy12}", "height", '23px', { fromValue: '23px'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid497", tween: [ "style", "${_psCopy9}", "font-size", '20px', { fromValue: '20px'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid338", tween: [ "style", "${_psCopy}", "height", '23px', { fromValue: '23px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid538", tween: [ "transform", "${_photoshopCopy12}", "scaleX", '0', { fromValue: '1'}], position: 7250, duration: 500, easing: "easeInQuad" },
                { id: "eid351", tween: [ "style", "${_bar_backCopy2}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutQuad" },
                { id: "eid352", tween: [ "style", "${_bar_backCopy2}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid524", tween: [ "transform", "${_barCopy12}", "scaleX", '0.1', { fromValue: '0'}], position: 8750, duration: 250, easing: "easeOutQuad" },
                { id: "eid513", tween: [ "transform", "${_psCopy10}", "scaleY", '1', { fromValue: '0'}], position: 19750, duration: 500, easing: "easeOutQuad" },
                { id: "eid357", tween: [ "transform", "${_psCopy2}", "scaleX", '1', { fromValue: '0'}], position: 5750, duration: 500, easing: "easeOutQuad" },
                { id: "eid501", tween: [ "style", "${_photoshopCopy9}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 250, easing: "easeInQuad" },
                { id: "eid446", tween: [ "transform", "${_barCopy7}", "scaleX", '0.8', { fromValue: '0'}], position: 14750, duration: 250, easing: "easeOutQuad" },
                { id: "eid493", tween: [ "style", "${_psCopy9}", "top", '40px', { fromValue: '40px'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "style", "${_psCopy2}", "width", '25px', { fromValue: '25px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid346", tween: [ "style", "${_barCopy2}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutQuad" },
                { id: "eid347", tween: [ "style", "${_barCopy2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid460", tween: [ "style", "${_psCopy7}", "left", '53px', { fromValue: '53px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid321", tween: [ "style", "${_ps}", "font-size", '20px', { fromValue: '20px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid437", tween: [ "transform", "${_psCopy6}", "scaleY", '1', { fromValue: '0'}], position: 11750, duration: 500, easing: "easeOutQuad" },
                { id: "eid348", tween: [ "transform", "${_barCopy2}", "scaleX", '0.95', { fromValue: '0'}], position: 6750, duration: 250, easing: "easeOutQuad" },
                { id: "eid492", tween: [ "style", "${_containerCopy9}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 250, easing: "easeInQuad" },
                { id: "eid467", tween: [ "transform", "${_barCopy8}", "scaleX", '0.8', { fromValue: '0'}], position: 16750, duration: 250, easing: "easeOutQuad" },
                { id: "eid486", tween: [ "transform", "${_barCopy9}", "scaleX", '0.15', { fromValue: '0'}], position: 18750, duration: 250, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_bar_backCopy2}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 500, easing: "easeOutQuad" },
                { id: "eid427", tween: [ "transform", "${_barCopy6}", "scaleX", '1.02', { fromValue: '0'}], position: 12750, duration: 250, easing: "easeOutQuad" },
                { id: "eid441", tween: [ "style", "${_psCopy6}", "left", '53px', { fromValue: '53px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid498", tween: [ "style", "${_psCopy9}", "left", '53px', { fromValue: '53px'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid517", tween: [ "style", "${_psCopy10}", "left", '53px', { fromValue: '53px'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid274", tween: [ "transform", "${_photoshop}", "scaleX", '0', { fromValue: '1'}], position: 1250, duration: 500, easing: "easeInQuad" },
                { id: "eid529", tween: [ "style", "${_bar_backCopy12}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 500, easing: "easeOutQuad" },
                { id: "eid512", tween: [ "style", "${_psCopy10}", "top", '40px', { fromValue: '40px'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid510", tween: [ "style", "${_bar_backCopy10}", "opacity", '1', { fromValue: '0'}], position: 20250, duration: 500, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_bar_backCopy}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid332", tween: [ "style", "${_bar_backCopy}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid515", tween: [ "transform", "${_psCopy10}", "scaleX", '1', { fromValue: '0'}], position: 19750, duration: 500, easing: "easeOutQuad" },
                { id: "eid478", tween: [ "transform", "${_psCopy8}", "scaleX", '1', { fromValue: '0'}], position: 15750, duration: 500, easing: "easeOutQuad" },
                { id: "eid444", tween: [ "style", "${_photoshopCopy6}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250, easing: "easeInQuad" },
                { id: "eid536", tween: [ "style", "${_psCopy12}", "left", '53px', { fromValue: '53px'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid266", tween: [ "transform", "${_bar}", "scaleX", '0.83', { fromValue: '0'}], position: 2750, duration: 250, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_ps}", "top", '40px', { fromValue: '40px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid440", tween: [ "style", "${_psCopy6}", "width", '25px', { fromValue: '25px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid537", tween: [ "style", "${_psCopy12}", "font-size", '20px', { fromValue: '20px'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid530", tween: [ "style", "${_containerCopy12}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250, easing: "easeInQuad" },
                { id: "eid514", tween: [ "style", "${_psCopy10}", "width", '25px', { fromValue: '25px'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid416", tween: [ "style", "${_containerCopy5}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250, easing: "easeInQuad" },
                { id: "eid413", tween: [ "style", "${_bar_backCopy5}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeOutQuad" },
                { id: "eid414", tween: [ "style", "${_bar_backCopy5}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid409", tween: [ "style", "${_barCopy5}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeOutQuad" },
                { id: "eid410", tween: [ "style", "${_barCopy5}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0, easing: "easeOutQuad" },
                { id: "eid458", tween: [ "style", "${_psCopy7}", "height", '23px', { fromValue: '23px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid489", tween: [ "style", "${_bar_backCopy9}", "display", 'none', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeOutQuad" },
                { id: "eid490", tween: [ "style", "${_bar_backCopy9}", "display", 'block', { fromValue: 'none'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid457", tween: [ "transform", "${_psCopy7}", "scaleX", '1', { fromValue: '0'}], position: 13750, duration: 500, easing: "easeOutQuad" },
                { id: "eid434", tween: [ "style", "${_bar_backCopy6}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 500, easing: "easeOutQuad" },
                { id: "eid519", tween: [ "transform", "${_photoshopCopy10}", "scaleX", '0', { fromValue: '1'}], position: 19250, duration: 500, easing: "easeInQuad" },
                { id: "eid475", tween: [ "transform", "${_psCopy8}", "scaleY", '1', { fromValue: '0'}], position: 15750, duration: 500, easing: "easeOutQuad" },
                { id: "eid419", tween: [ "transform", "${_psCopy5}", "scaleX", '1', { fromValue: '0'}], position: 9750, duration: 500, easing: "easeOutQuad" },
                { id: "eid525", tween: [ "style", "${_bar_startCopy12}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid526", tween: [ "style", "${_bar_startCopy12}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0 },
                { id: "eid361", tween: [ "style", "${_psCopy2}", "font-size", '20px', { fromValue: '20px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid462", tween: [ "transform", "${_photoshopCopy7}", "scaleX", '0', { fromValue: '1'}], position: 13250, duration: 500, easing: "easeInQuad" },
                { id: "eid436", tween: [ "style", "${_psCopy6}", "top", '40px', { fromValue: '40px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid421", tween: [ "style", "${_psCopy5}", "width", '25px', { fromValue: '25px'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid454", tween: [ "style", "${_containerCopy7}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInQuad" },
                { id: "eid356", tween: [ "transform", "${_psCopy2}", "scaleY", '1', { fromValue: '0'}], position: 5750, duration: 500, easing: "easeOutQuad" },
                { id: "eid354", tween: [ "style", "${_containerCopy2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 250, easing: "easeInQuad" },
                { id: "eid516", tween: [ "style", "${_psCopy10}", "height", '23px', { fromValue: '23px'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid324", tween: [ "style", "${_ps}", "left", '53px', { fromValue: '53px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid364", tween: [ "transform", "${_photoshopCopy4}", "scaleY", '0', { fromValue: '1'}], position: 5250, duration: 500, easing: "easeInQuad" },
                { id: "eid271", tween: [ "style", "${_bar_back}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutQuad" },
                { id: "eid415", tween: [ "style", "${_bar_backCopy5}", "opacity", '1', { fromValue: '0'}], position: 10250, duration: 500, easing: "easeOutQuad" },
                { id: "eid432", tween: [ "style", "${_bar_backCopy6}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0, easing: "easeOutQuad" },
                { id: "eid433", tween: [ "style", "${_bar_backCopy6}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeOutQuad" },
                { id: "eid464", tween: [ "transform", "${_photoshopCopy7}", "scaleY", '0', { fromValue: '1'}], position: 13250, duration: 500, easing: "easeInQuad" },
                { id: "eid411", tween: [ "style", "${_bar_startCopy5}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid412", tween: [ "style", "${_bar_startCopy5}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
                { id: "eid334", tween: [ "style", "${_psCopy}", "top", '40px', { fromValue: '40px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_psCopy2}", "left", '53px', { fromValue: '53px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid259", tween: [ "style", "${_adobe}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 114, easing: "easeInQuad" },
                { id: "eid426", tween: [ "transform", "${_photoshopCopy5}", "scaleY", '0', { fromValue: '1'}], position: 9250, duration: 500, easing: "easeInQuad" },
                { id: "eid500", tween: [ "transform", "${_photoshopCopy9}", "scaleX", '0', { fromValue: '1'}], position: 17250, duration: 500, easing: "easeInQuad" },
                { id: "eid506", tween: [ "style", "${_bar_startCopy10}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0 },
                { id: "eid507", tween: [ "style", "${_bar_startCopy10}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0 },
                { id: "eid473", tween: [ "style", "${_containerCopy8}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 250, easing: "easeInQuad" },
                { id: "eid420", tween: [ "style", "${_psCopy5}", "height", '23px', { fromValue: '23px'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid449", tween: [ "style", "${_bar_startCopy7}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid450", tween: [ "style", "${_bar_startCopy7}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid344", tween: [ "style", "${_container}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInQuad" },
                { id: "eid273", tween: [ "transform", "${_ps}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutQuad" },
                { id: "eid470", tween: [ "style", "${_bar_backCopy8}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeOutQuad" },
                { id: "eid471", tween: [ "style", "${_bar_backCopy8}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid275", tween: [ "style", "${_photoshop}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInQuad" },
                { id: "eid335", tween: [ "transform", "${_psCopy}", "scaleY", '1', { fromValue: '0'}], position: 3750, duration: 500, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_bar_backCopy}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutQuad" },
                { id: "eid445", tween: [ "transform", "${_photoshopCopy6}", "scaleY", '0', { fromValue: '1'}], position: 11250, duration: 500, easing: "easeInQuad" },
                { id: "eid422", tween: [ "style", "${_psCopy5}", "left", '53px', { fromValue: '53px'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid518", tween: [ "style", "${_psCopy10}", "font-size", '20px', { fromValue: '20px'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid539", tween: [ "style", "${_photoshopCopy12}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250, easing: "easeInQuad" },
                { id: "eid468", tween: [ "style", "${_bar_startCopy8}", "display", 'none', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid469", tween: [ "style", "${_bar_startCopy8}", "display", 'block', { fromValue: 'none'}], position: 16750, duration: 0 },
                { id: "eid417", tween: [ "style", "${_psCopy5}", "top", '40px', { fromValue: '40px'}], position: 10250, duration: 0, easing: "easeOutQuad" },
                { id: "eid435", tween: [ "style", "${_containerCopy6}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250, easing: "easeInQuad" },
                { id: "eid408", tween: [ "transform", "${_barCopy5}", "scaleX", '0.85', { fromValue: '0'}], position: 10750, duration: 250, easing: "easeOutQuad" },
                { id: "eid499", tween: [ "style", "${_psCopy9}", "width", '25px', { fromValue: '25px'}], position: 18250, duration: 0, easing: "easeOutQuad" },
                { id: "eid428", tween: [ "style", "${_barCopy6}", "display", 'none', { fromValue: 'none'}], position: 11000, duration: 0, easing: "easeOutQuad" },
                { id: "eid429", tween: [ "style", "${_barCopy6}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0, easing: "easeOutQuad" },
                { id: "eid521", tween: [ "transform", "${_photoshopCopy10}", "scaleY", '0', { fromValue: '1'}], position: 19250, duration: 500, easing: "easeInQuad" },
                { id: "eid276", tween: [ "transform", "${_photoshop}", "scaleY", '0', { fromValue: '1'}], position: 1250, duration: 500, easing: "easeInQuad" },
                { id: "eid315", tween: [ "style", "${_ps}", "height", '23px', { fromValue: '23px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_photoshopCopy3}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid455", tween: [ "style", "${_psCopy7}", "top", '40px', { fromValue: '40px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid269", tween: [ "style", "${_bar_back}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "style", "${_bar_back}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid540", tween: [ "transform", "${_photoshopCopy12}", "scaleY", '0', { fromValue: '1'}], position: 7250, duration: 500, easing: "easeInQuad" },
                { id: "eid337", tween: [ "transform", "${_psCopy}", "scaleX", '1', { fromValue: '0'}], position: 3750, duration: 500, easing: "easeOutQuad" },
                { id: "eid479", tween: [ "style", "${_psCopy8}", "left", '53px', { fromValue: '53px'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid527", tween: [ "style", "${_bar_backCopy12}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid528", tween: [ "style", "${_bar_backCopy12}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid476", tween: [ "style", "${_psCopy8}", "font-size", '20px', { fromValue: '20px'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid522", tween: [ "style", "${_barCopy12}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid523", tween: [ "style", "${_barCopy12}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0, easing: "easeOutQuad" },
                { id: "eid349", tween: [ "style", "${_bar_startCopy2}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid350", tween: [ "style", "${_bar_startCopy2}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
                { id: "eid453", tween: [ "style", "${_bar_backCopy7}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 500, easing: "easeOutQuad" },
                { id: "eid482", tween: [ "style", "${_photoshopCopy8}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 250, easing: "easeInQuad" },
                { id: "eid477", tween: [ "style", "${_psCopy8}", "height", '23px', { fromValue: '23px'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid447", tween: [ "style", "${_barCopy7}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutQuad" },
                { id: "eid448", tween: [ "style", "${_barCopy7}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutQuad" },
                { id: "eid438", tween: [ "transform", "${_psCopy6}", "scaleX", '1', { fromValue: '0'}], position: 11750, duration: 500, easing: "easeOutQuad" },
                { id: "eid461", tween: [ "style", "${_psCopy7}", "width", '25px', { fromValue: '25px'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid316", tween: [ "style", "${_ps}", "width", '25px', { fromValue: '25px'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid508", tween: [ "style", "${_bar_backCopy10}", "display", 'none', { fromValue: 'none'}], position: 19000, duration: 0, easing: "easeOutQuad" },
                { id: "eid509", tween: [ "style", "${_bar_backCopy10}", "display", 'block', { fromValue: 'none'}], position: 20250, duration: 0, easing: "easeOutQuad" },
                { id: "eid483", tween: [ "transform", "${_photoshopCopy8}", "scaleY", '0', { fromValue: '1'}], position: 15250, duration: 500, easing: "easeInQuad" },
                { id: "eid451", tween: [ "style", "${_bar_backCopy7}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutQuad" },
                { id: "eid452", tween: [ "style", "${_bar_backCopy7}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0, easing: "easeOutQuad" },
                { id: "eid502", tween: [ "transform", "${_photoshopCopy9}", "scaleY", '0', { fromValue: '1'}], position: 17250, duration: 500, easing: "easeInQuad" },
                { id: "eid456", tween: [ "transform", "${_psCopy7}", "scaleY", '1', { fromValue: '0'}], position: 13750, duration: 500, easing: "easeOutQuad" },
                { id: "eid272", tween: [ "transform", "${_ps}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutQuad" },
                { id: "eid481", tween: [ "transform", "${_photoshopCopy8}", "scaleX", '0', { fromValue: '1'}], position: 15250, duration: 500, easing: "easeInQuad" },
                { id: "eid362", tween: [ "transform", "${_photoshopCopy4}", "scaleX", '0', { fromValue: '1'}], position: 5250, duration: 500, easing: "easeInQuad" },
                { id: "eid480", tween: [ "style", "${_psCopy8}", "width", '25px', { fromValue: '25px'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "style", "${_bar_startCopy}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid330", tween: [ "style", "${_bar_startCopy}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0 },
                { id: "eid443", tween: [ "transform", "${_photoshopCopy6}", "scaleX", '0', { fromValue: '1'}], position: 11250, duration: 500, easing: "easeInQuad" },
                { id: "eid424", tween: [ "transform", "${_photoshopCopy5}", "scaleX", '0', { fromValue: '1'}], position: 9250, duration: 500, easing: "easeInQuad" },
                { id: "eid341", tween: [ "transform", "${_photoshopCopy3}", "scaleX", '0', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeInQuad" },
                { id: "eid339", tween: [ "style", "${_psCopy}", "left", '53px', { fromValue: '53px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid345", tween: [ "style", "${_containerCopy}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeInQuad" },
                { id: "eid363", tween: [ "style", "${_photoshopCopy4}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 250, easing: "easeInQuad" },
                { id: "eid459", tween: [ "style", "${_psCopy7}", "font-size", '20px', { fromValue: '20px'}], position: 14250, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"pie_chart": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['22px', '23px', '200', '200', 'auto', 'auto'],
                    id: 'circle',
                    type: 'group',
                    transform: [[0, 0], ['-15']],
                    c: [
                    {
                        rect: ['0px', '0px', '200', '200', 'auto', 'auto'],
                        id: 'top',
                        clip: ['rect(0px 200px 100px 0px)'],
                        type: 'group',
                        c: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: ['rect(0px 200px 100px 0px)'],
                            fill: ['rgba(81,186,197,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(185,227,231,1.00)', 0], ['rgba(81,186,197,1.00)', 67]]]]
                        }]
                    },
                    {
                        rect: ['0px', '0px', '200', '200', 'auto', 'auto'],
                        id: 'topCopy2',
                        clip: ['rect(0px 200px 100px 0px)'],
                        type: 'group',
                        c: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: ['rect(0px 200px 100px 0px)'],
                            fill: ['rgba(81,186,197,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(185,227,231,1.00)', 0], ['rgba(81,186,197,1.00)', 67]]]]
                        }]
                    }]
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: '95% Afrikaans',
                    type: 'text',
                    rect: ['249px', '36px', '165px', '31px', 'auto', 'auto']
                },
                {
                    rect: ['122px', '61px', '286px', '1px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'Line',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['22px', '250px', '200', '200', 'auto', 'auto'],
                    id: 'circleCopy',
                    type: 'group',
                    transform: [[0, 0], ['-15']],
                    c: [
                    {
                        rect: ['0px', '0px', '200', '200', 'auto', 'auto'],
                        id: 'topCopy4',
                        clip: ['rect(0px 200px 100px 0px)'],
                        type: 'group',
                        c: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: ['rect(0px 200px 100px 0px)'],
                            fill: ['rgba(81,186,197,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(185,227,231,1.00)', 0], ['rgba(81,186,197,1.00)', 67]]]]
                        }]
                    },
                    {
                        rect: ['0px', '0px', '200', '200', 'auto', 'auto'],
                        id: 'topCopy3',
                        clip: ['rect(0px 200px 100px 0px)'],
                        type: 'group',
                        c: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: ['rect(0px 200px 100px 0px)'],
                            fill: ['rgba(81,186,197,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(185,227,231,1.00)', 0], ['rgba(81,186,197,1.00)', 67]]]]
                        }]
                    }]
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'TextCopy',
                    text: '75% English',
                    type: 'text',
                    rect: ['249px', '263px', '165px', '31px', 'auto', 'auto']
                },
                {
                    rect: ['122px', '288px', '269px', '1px', 'auto', 'auto'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'LineCopy',
                    opacity: 1,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_topCopy4}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_LineCopy}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '122px'],
                ["style", "width", '269px'],
                ["style", "top", '288px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_topCopy2}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Line}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '122px'],
                ["style", "width", '286px'],
                ["style", "top", '61px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '1px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '200px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(185,227,231,1.00)',0],['rgba(81,186,197,1.00)',67]]]],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '200px']
            ],
            "${_circleCopy}": [
                ["style", "top", '250px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '-15deg']
            ],
            "${_Text}": [
                ["style", "top", '36px'],
                ["style", "height", '31px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '249px'],
                ["style", "width", '165px']
            ],
            "${_circle}": [
                ["style", "top", '23px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '-15deg']
            ],
            "${_EllipseCopy4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '200px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(185,227,231,1.00)',0],['rgba(81,186,197,1.00)',67]]]],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${symbolSelector}": [
                ["style", "height", '473px'],
                ["style", "width", '414px']
            ],
            "${_topCopy3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_EllipseCopy5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '200px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(185,227,231,1.00)',0],['rgba(81,186,197,1.00)',67]]]],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ],
            "${_TextCopy}": [
                ["style", "top", '263px'],
                ["style", "height", '31px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '249px'],
                ["style", "width", '165px']
            ],
            "${_EllipseCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(81,186,197,1.00)'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '200px'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(185,227,231,1.00)',0],['rgba(81,186,197,1.00)',67]]]],
                ["style", "clip", [0,200,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: false,
            timeline: [
                { id: "eid49", tween: [ "transform", "${_Line}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 375 },
                { id: "eid30", tween: [ "style", "${_topCopy2}", "clip", [0,200,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_topCopy2}", "clip", [0,200,200,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 1091, duration: 0 },
                { id: "eid23", tween: [ "transform", "${_Ellipse}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 1091 },
                { id: "eid56", tween: [ "style", "${_EllipseCopy4}", "clip", [0,200,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 2250, duration: 0 },
                { id: "eid33", tween: [ "transform", "${_EllipseCopy3}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 0, duration: 1091 },
                { id: "eid38", tween: [ "transform", "${_EllipseCopy3}", "rotateZ", '-172deg', { fromValue: '0deg'}], position: 1091, duration: 909 },
                { id: "eid57", tween: [ "transform", "${_EllipseCopy4}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 2250, duration: 1091 },
                { id: "eid58", tween: [ "transform", "${_EllipseCopy4}", "rotateZ", '-100deg', { fromValue: '0deg'}], position: 3341, duration: 909 },
                { id: "eid32", tween: [ "style", "${_EllipseCopy3}", "clip", [0,200,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "transform", "${_LineCopy}", "scaleY", '1', { fromValue: '0'}], position: 4000, duration: 375 },
                { id: "eid59", tween: [ "transform", "${_EllipseCopy5}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 2250, duration: 1091 },
                { id: "eid52", tween: [ "transform", "${_LineCopy}", "scaleX", '1', { fromValue: '0'}], position: 4000, duration: 375 },
                { id: "eid53", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 4106, duration: 394 },
                { id: "eid40", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1856, duration: 394 },
                { id: "eid54", tween: [ "style", "${_topCopy3}", "clip", [0,200,100,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 2250, duration: 0 },
                { id: "eid55", tween: [ "style", "${_topCopy3}", "clip", [0,200,200,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,100,0]}], position: 3341, duration: 0 },
                { id: "eid50", tween: [ "transform", "${_Line}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 375 }            ]
        }
    }
},
"slide_5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: '_1',
                    type: 'group',
                    rect: ['0', '0', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_back',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_in',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'Text',
                        text: 'Scuba',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_2',
                    type: 'group',
                    rect: ['697px', '0', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '1px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy',
                        text: 'Entreprenerial competition',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 28, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_3',
                    type: 'group',
                    rect: ['0', '126px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy2',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy2',
                        text: 'Photography',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_4',
                    type: 'group',
                    rect: ['704px', '126px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy3',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '0px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy3',
                        text: 'Provincial <br>hockey',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 28, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_5',
                    type: 'group',
                    rect: ['0', '251px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy4',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy4',
                        text: 'Licences',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_6',
                    type: 'group',
                    rect: ['704px', '251px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy5',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy5',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy5',
                        text: 'Hockey coach',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_7',
                    type: 'group',
                    rect: ['0', '375px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy6',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy6',
                        text: '...',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: '_8',
                    type: 'group',
                    rect: ['704px', '375px', '500', '70', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '500px', '70px', 'auto', 'auto'],
                        borderRadius: ['50px 50px', '50px 50px', '50px 50px', '50px 50px'],
                        id: 'ach_backCopy7',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(94,94,94,1.00)']
                    },
                    {
                        rect: ['7px', '5px', '60px', '60px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'back_fade_inCopy7',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(221,136,204,1.00)']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '5px', '365px', '70px', 'auto', 'auto'],
                        id: 'TextCopy7',
                        text: '...',
                        align: 'left',
                        font: ['comfortaa, sans-serif', 50, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal']
                    }]
                },
                {
                    id: 'boat',
                    type: 'image',
                    rect: ['14px', '278px', '42px', '12px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/boat.png', '0px', '0px']
                },
                {
                    id: 'motorfiets',
                    type: 'image',
                    rect: ['20px', '291px', '34px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/motorfiets.png', '0px', '0px']
                },
                {
                    id: 'car',
                    type: 'image',
                    rect: ['22px', '258px', '35px', '21px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/car.png', '0px', '0px']
                },
                {
                    id: 'scuba',
                    type: 'image',
                    rect: ['11px', '17px', '48px', '39px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scuba.png', '0px', '0px']
                },
                {
                    id: 'lightbulv',
                    type: 'image',
                    rect: ['717px', '10px', '33px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lightbulv.png', '0px', '0px']
                },
                {
                    id: 'camera',
                    type: 'image',
                    rect: ['15px', '142px', '45px', '36px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/camera.png', '0px', '0px']
                },
                {
                    id: 'hokkie',
                    type: 'image',
                    rect: ['713px', '137px', '52px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hokkie.png', '0px', '0px']
                },
                {
                    id: 'coach',
                    type: 'image',
                    rect: ['716px', '265px', '50px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/coach.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_camera}": [
                ["style", "height", '36px'],
                ["style", "top", '142px'],
                ["style", "left", '15px'],
                ["style", "width", '45px']
            ],
            "${_lightbulv}": [
                ["style", "height", '50px'],
                ["style", "top", '10px'],
                ["style", "left", '717px'],
                ["style", "width", '33px']
            ],
            "${__6}": [
                ["style", "left", '704px'],
                ["style", "top", '251px']
            ],
            "${__5}": [
                ["style", "top", '251px']
            ],
            "${_car}": [
                ["style", "height", '21px'],
                ["style", "top", '258px'],
                ["style", "left", '22px'],
                ["style", "width", '35px']
            ],
            "${_boat}": [
                ["style", "height", '12px'],
                ["style", "top", '278px'],
                ["style", "left", '14px'],
                ["style", "width", '42px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${_coach}": [
                ["style", "height", '38px'],
                ["style", "top", '265px'],
                ["style", "left", '716px'],
                ["style", "width", '50px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${__3}": [
                ["style", "top", '126px']
            ],
            "${_ach_backCopy5}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_back_fade_inCopy2}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_TextCopy}": [
                ["style", "top", '1px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '28px']
            ],
            "${_back_fade_inCopy3}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_ach_backCopy7}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_back_fade_inCopy5}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_hokkie}": [
                ["style", "height", '42px'],
                ["style", "top", '137px'],
                ["style", "left", '713px'],
                ["style", "width", '52px']
            ],
            "${_ach_backCopy4}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_ach_backCopy}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_motorfiets}": [
                ["style", "height", '22px'],
                ["style", "top", '291px'],
                ["style", "left", '20px'],
                ["style", "width", '34px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${_ach_back}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_ach_backCopy6}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_scuba}": [
                ["style", "height", '39px'],
                ["style", "top", '17px'],
                ["style", "left", '11px'],
                ["style", "width", '48px']
            ],
            "${_back_fade_in}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '28px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${__4}": [
                ["style", "left", '704px'],
                ["style", "top", '126px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${symbolSelector}": [
                ["style", "height", '492px'],
                ["style", "width", '1537px']
            ],
            "${__2}": [
                ["style", "left", '697px']
            ],
            "${_back_fade_inCopy}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${__7}": [
                ["style", "top", '375px']
            ],
            "${_ach_backCopy2}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ],
            "${_Text}": [
                ["style", "top", '5px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '70px'],
                ["style", "left", '81px'],
                ["style", "font-size", '50px']
            ],
            "${__8}": [
                ["style", "left", '704px'],
                ["style", "top", '375px']
            ],
            "${_back_fade_inCopy6}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_back_fade_inCopy7}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_back_fade_inCopy4}": [
                ["color", "background-color", 'rgba(221,136,204,1.00)'],
                ["style", "height", '60px'],
                ["style", "top", '5px'],
                ["style", "left", '7px'],
                ["style", "width", '60px']
            ],
            "${_ach_backCopy3}": [
                ["color", "background-color", 'rgba(94,94,94,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '70px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"work_exp_sym": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: '_1',
                    type: 'group',
                    rect: ['8679px', '183px', '496px', '232px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'begin_1',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        rect: ['62px', '92px', '320px', '100px', 'auto', 'auto'],
                        fill: ['rgba(38,150,237,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-30']],
                        rect: ['514px', '169px', '400px', '100px', 'auto', 'auto'],
                        id: 'einde_1',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(93,176,241,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '30']],
                        rect: ['382px', '92px', '132px', '100px', 'auto', 'auto'],
                        id: 'middel_1',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(17,123,206,1.00)']
                    },
                    {
                        rect: ['-2px', '83px', '122', '122', 'auto', 'auto'],
                        id: 'driehoek_container_2Copy',
                        transform: [[0, 0], ['90'], [], ['0.81967', '1.50321']],
                        clip: ['rect(0px 121.61666870117188px 59.616668701171875px 0px)'],
                        type: 'group',
                        c: [
                        {
                            transform: [[0, 0], ['45']],
                            rect: ['17px', '18px', '87px', '85px', 'auto', 'auto'],
                            id: 'driehoek_2Copy',
                            stroke: [5, 'rgba(224,98,98,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,135,135,1.00)']
                        }]
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        transform: [[0, 0], [], ['0', '30']],
                        align: 'center',
                        id: 'begin_text',
                        text: 'Website design',
                        type: 'text',
                        rect: ['386px', '161px', '126px', '57px', 'auto', 'auto']
                    },
                    {
                        rect: ['524px', '111px', '180px', '57px', 'auto', 'auto'],
                        transform: [[0, 0], [], ['0', '-30']],
                        id: 'middel_text',
                        text: 'roostmtbapparel.co.za<br>sips.co.za<br>kwikiki.com<br>and more ...',
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text'
                    }]
                },
                {
                    id: '_2',
                    type: 'group',
                    rect: ['8697px', '41px', '496px', '232px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'begin_2',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        rect: ['44px', '137px', '320px', '100px', 'auto', 'auto'],
                        fill: ['rgba(241,223,56,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-30']],
                        rect: ['495px', '213px', '400px', '100px', 'auto', 'auto'],
                        id: 'einde_2',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(243,229,96,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '30']],
                        rect: ['364px', '137px', '132px', '100px', 'auto', 'auto'],
                        id: 'middel_2',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(210,191,14,1.00)']
                    },
                    {
                        rect: ['-21px', '126px', '122', '122', 'auto', 'auto'],
                        id: 'driehoek_container_2',
                        transform: [[0, 0], ['90'], [], ['0.81967', '1.50179']],
                        clip: ['rect(0px 121.61666870117188px 59.616668701171875px 0px)'],
                        type: 'group',
                        c: [
                        {
                            transform: [[0, 0], ['45']],
                            rect: ['17px', '18px', '87px', '85px', 'auto', 'auto'],
                            id: 'driehoek_2',
                            stroke: [5, 'rgba(224,98,98,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,135,135,1)']
                        }]
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        transform: [[0, 0], [], ['0', '30']],
                        align: 'center',
                        id: 'begin_textCopy2',
                        text: 'Newspaper delivery',
                        type: 'text',
                        rect: ['371px', '198px', '116px', '33px', 'auto', 'auto']
                    },
                    {
                        rect: ['506px', '177px', '180px', '70px', 'auto', 'auto'],
                        transform: [[0, 0], [], ['0', '-30']],
                        id: 'middel_textCopy2',
                        text: 'Die Burger<br>Eikestad Nuus<br>',
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text'
                    }]
                },
                {
                    id: '_3',
                    type: 'group',
                    rect: ['8763px', '-172px', '496px', '232px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'begin_3',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        rect: ['-22px', '251px', '320px', '100px', 'auto', 'auto'],
                        fill: ['rgba(245,111,111,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-30']],
                        rect: ['429px', '326px', '400px', '100px', 'auto', 'auto'],
                        id: 'einde_3',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(246,135,135,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '30']],
                        rect: ['298px', '251px', '132px', '100px', 'auto', 'auto'],
                        id: 'middel_3',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(242,81,81,1.00)']
                    },
                    {
                        rect: ['-86px', '242px', '122', '122', 'auto', 'auto'],
                        id: 'driehoek_container_3',
                        transform: [[0, 0], ['90'], [], ['0.81967', '1.48644']],
                        clip: ['rect(0px 121.61666870117188px 59.616668701171875px 0px)'],
                        type: 'group',
                        c: [
                        {
                            transform: [[0, 0], ['45']],
                            rect: ['17px', '18px', '87px', '85px', 'auto', 'auto'],
                            id: 'driehoek_3',
                            stroke: [5, 'rgba(224,98,98,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,135,135,1.00)']
                        }]
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        transform: [[0, 0], [], ['0', '30']],
                        align: 'center',
                        id: 'begin_textCopy3',
                        text: 'Waiter',
                        type: 'text',
                        rect: ['306px', '326px', '116px', '33px', 'auto', 'auto']
                    },
                    {
                        rect: ['440px', '283px', '180px', '70px', 'auto', 'auto'],
                        transform: [[0, 0], [], ['0', '-30']],
                        id: 'middel_textCopy3',
                        text: 'M Stafing and Events<br>Stias',
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text'
                    }]
                },
                {
                    id: '_4',
                    type: 'group',
                    rect: ['8763px', '-242px', '496px', '232px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'begin_4',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        rect: ['-23px', '223px', '320px', '100px', 'auto', 'auto'],
                        fill: ['rgba(59,191,45,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '-30']],
                        rect: ['429px', '298px', '400px', '100px', 'auto', 'auto'],
                        id: 'einde_4',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(108,217,96,1.00)']
                    },
                    {
                        transform: [[0, 0], [], ['0', '30']],
                        rect: ['297px', '223px', '132px', '100px', 'auto', 'auto'],
                        id: 'middel_4',
                        stroke: [5, 'rgb(224, 98, 98)', 'none'],
                        type: 'rect',
                        fill: ['rgba(50,160,38,1.00)']
                    },
                    {
                        rect: ['-86px', '213px', '122', '122', 'auto', 'auto'],
                        id: 'driehoek_container_4',
                        transform: [[0, 0], ['90'], [], ['0.81967', '1.48644']],
                        clip: ['rect(0px 121.61666870117188px 59.616668701171875px 0px)'],
                        type: 'group',
                        c: [
                        {
                            transform: [[0, 0], ['45']],
                            rect: ['17px', '18px', '87px', '85px', 'auto', 'auto'],
                            id: 'driehoek_4',
                            stroke: [5, 'rgba(224,98,98,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,135,135,1.00)']
                        }]
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        transform: [[0, 0], [], ['0', '30']],
                        align: 'center',
                        id: 'begin_textCopy4',
                        text: 'Job Shadow /<br>Internship',
                        type: 'text',
                        rect: ['307px', '271px', '116px', '94px', 'auto', 'auto']
                    },
                    {
                        rect: ['440px', '190px', '381px', '120px', 'auto', 'auto'],
                        transform: [[0, 0], [], ['0', '-30']],
                        id: 'middel_textCopy4',
                        text: 'Metropolitan/Momentum<br>FireID<br>SIPS Photography School',
                        font: ['Arial, Helvetica, sans-serif', 22, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_driehoek_container_3}": [
                ["style", "top", '242px'],
                ["transform", "scaleY", '1.48644'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.81967'],
                ["style", "clip", [0,121.61666870117188,59.616668701171875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-86px']
            ],
            "${_begin_textCopy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '371px'],
                ["style", "font-size", '22px'],
                ["style", "top", '198px'],
                ["transform", "skewY", '30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '33px'],
                ["style", "width", '116px'],
                ["style", "text-align", 'center']
            ],
            "${__2}": [
                ["style", "top", '41px'],
                ["style", "left", '8697px']
            ],
            "${_einde_4}": [
                ["style", "top", '298px'],
                ["color", "background-color", 'rgba(108,217,96,1.00)'],
                ["transform", "skewY", '-30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '429px'],
                ["style", "width", '400px']
            ],
            "${_begin_4}": [
                ["color", "background-color", 'rgba(59,191,45,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100px'],
                ["style", "top", '223px'],
                ["style", "left", '-23px'],
                ["style", "width", '320px']
            ],
            "${_driehoek_container_2Copy}": [
                ["style", "top", '83px'],
                ["transform", "scaleY", '1.50321'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.81967'],
                ["style", "left", '-2px'],
                ["style", "clip", [0,121.61666870117,59.616668701172,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_middel_textCopy4}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '440px'],
                ["style", "font-size", '22px'],
                ["style", "top", '190px'],
                ["transform", "skewY", '-30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '120px'],
                ["style", "width", '381px']
            ],
            "${__3}": [
                ["style", "top", '-172px'],
                ["style", "left", '8763px']
            ],
            "${_begin_text}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '386px'],
                ["style", "font-size", '22px'],
                ["style", "top", '161px'],
                ["transform", "skewY", '30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '57px'],
                ["style", "width", '126px'],
                ["style", "text-align", 'center']
            ],
            "${_middel_text}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '524px'],
                ["style", "width", '180px'],
                ["style", "top", '111px'],
                ["transform", "skewY", '-30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '57px'],
                ["style", "font-size", '22px']
            ],
            "${_middel_4}": [
                ["color", "background-color", 'rgba(50,160,38,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "top", '223px'],
                ["style", "left", '297px'],
                ["style", "width", '132px']
            ],
            "${_begin_1}": [
                ["style", "top", '92px'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100px'],
                ["color", "background-color", 'rgba(38,150,237,1.00)'],
                ["style", "left", '62px'],
                ["style", "width", '320px']
            ],
            "${_begin_3}": [
                ["style", "top", '251px'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100px'],
                ["color", "background-color", 'rgba(245,111,111,1.00)'],
                ["style", "left", '-22px'],
                ["style", "width", '320px']
            ],
            "${_begin_textCopy4}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '307px'],
                ["style", "font-size", '22px'],
                ["style", "top", '271px'],
                ["transform", "skewY", '30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '94px'],
                ["style", "width", '116px'],
                ["style", "text-align", 'center']
            ],
            "${symbolSelector}": [
                ["style", "height", '442px'],
                ["style", "width", '497px']
            ],
            "${_driehoek_2Copy}": [
                ["style", "top", '18px'],
                ["transform", "rotateZ", '45deg'],
                ["color", "background-color", 'rgba(135,135,135,1.00)'],
                ["color", "border-color", 'rgba(224,98,98,1.00)'],
                ["style", "left", '17px'],
                ["style", "border-style", 'none']
            ],
            "${_middel_textCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '440px'],
                ["style", "width", '180px'],
                ["style", "top", '283px'],
                ["transform", "skewY", '-30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '70px'],
                ["style", "font-size", '22px']
            ],
            "${_driehoek_container_4}": [
                ["style", "top", '213px'],
                ["transform", "scaleY", '1.48644'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.81967'],
                ["style", "left", '-86px'],
                ["style", "clip", [0,121.61666870117,59.616668701172,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_middel_3}": [
                ["color", "background-color", 'rgba(242,81,81,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "top", '251px'],
                ["style", "left", '298px'],
                ["style", "width", '132px']
            ],
            "${_middel_textCopy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '506px'],
                ["style", "font-size", '22px'],
                ["style", "top", '177px'],
                ["transform", "skewY", '-30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '70px'],
                ["style", "width", '180px']
            ],
            "${__4}": [
                ["style", "top", '-242px'],
                ["style", "left", '8763px']
            ],
            "${_middel_1}": [
                ["color", "background-color", 'rgba(17,123,206,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "top", '92px'],
                ["style", "left", '382px'],
                ["style", "width", '132px']
            ],
            "${_middel_2}": [
                ["color", "background-color", 'rgba(210,191,14,1.00)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "top", '137px'],
                ["style", "left", '364px'],
                ["style", "width", '132px']
            ],
            "${_einde_1}": [
                ["style", "top", '169px'],
                ["color", "background-color", 'rgba(93,176,241,1.00)'],
                ["transform", "skewY", '-30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '514px'],
                ["style", "width", '400px']
            ],
            "${_driehoek_3}": [
                ["color", "background-color", 'rgba(135,135,135,1.00)'],
                ["transform", "rotateZ", '45deg'],
                ["style", "border-style", 'none'],
                ["color", "border-color", 'rgba(224,98,98,1.00)'],
                ["style", "left", '17px'],
                ["style", "top", '18px']
            ],
            "${_driehoek_4}": [
                ["style", "top", '18px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "border-style", 'none'],
                ["color", "border-color", 'rgba(224,98,98,1.00)'],
                ["style", "left", '17px'],
                ["color", "background-color", 'rgba(135,135,135,1.00)']
            ],
            "${__1}": [
                ["style", "top", '183px'],
                ["style", "left", '8679px']
            ],
            "${_driehoek_2}": [
                ["style", "top", '18px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "border-style", 'none'],
                ["color", "border-color", 'rgba(224,98,98,1.00)'],
                ["style", "left", '17px'],
                ["color", "background-color", 'rgba(135,135,135,1.00)']
            ],
            "${_einde_3}": [
                ["color", "background-color", 'rgba(246,135,135,1.00)'],
                ["style", "top", '326px'],
                ["transform", "skewY", '-30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '429px'],
                ["style", "width", '400px']
            ],
            "${_begin_textCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '0'],
                ["style", "left", '306px'],
                ["style", "font-size", '22px'],
                ["style", "top", '326px'],
                ["transform", "skewY", '30deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '33px'],
                ["style", "text-align", 'center'],
                ["style", "width", '116px']
            ],
            "${_begin_2}": [
                ["color", "background-color", 'rgba(241,223,56,1.00)'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100px'],
                ["style", "top", '137px'],
                ["style", "left", '44px'],
                ["style", "width", '320px']
            ],
            "${_driehoek_container_2}": [
                ["style", "top", '126px'],
                ["transform", "scaleY", '1.50179'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.81967'],
                ["style", "left", '-21px'],
                ["style", "clip", [0,121.61666870117,59.616668701172,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_einde_2}": [
                ["style", "top", '213px'],
                ["color", "background-color", 'rgba(243,229,96,1.00)'],
                ["transform", "skewY", '-30deg'],
                ["transform", "scaleX", '0'],
                ["style", "height", '100px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '495px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: false,
            timeline: [
                { id: "eid949", tween: [ "transform", "${_begin_3}", "scaleX", '1', { fromValue: '0'}], position: 4000, duration: 1000 },
                { id: "eid973", tween: [ "style", "${_begin_textCopy3}", "opacity", '1', { fromValue: '0'}], position: 5831, duration: 169 },
                { id: "eid969", tween: [ "style", "${_begin_textCopy4}", "opacity", '1', { fromValue: '0'}], position: 7831, duration: 169 },
                { id: "eid943", tween: [ "transform", "${_begin_2}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
                { id: "eid945", tween: [ "transform", "${_begin_4}", "scaleX", '1', { fromValue: '0'}], position: 6000, duration: 1000 },
                { id: "eid981", tween: [ "transform", "${_einde_2}", "scaleX", '1', { fromValue: '0'}], position: 4000, duration: 1000 },
                { id: "eid947", tween: [ "transform", "${_begin_1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid989", tween: [ "style", "${_middel_text}", "opacity", '1', { fromValue: '0'}], position: 2653, duration: 347 },
                { id: "eid991", tween: [ "style", "${_middel_textCopy3}", "opacity", '1', { fromValue: '0'}], position: 6653, duration: 347 },
                { id: "eid983", tween: [ "transform", "${_einde_4}", "scaleX", '1', { fromValue: '0'}], position: 8000, duration: 1000 },
                { id: "eid951", tween: [ "transform", "${_middel_3}", "scaleX", '1', { fromValue: '0'}], position: 5000, duration: 1000 },
                { id: "eid971", tween: [ "style", "${_begin_text}", "opacity", '1', { fromValue: '0'}], position: 1831, duration: 169 },
                { id: "eid979", tween: [ "transform", "${_einde_1}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
                { id: "eid975", tween: [ "style", "${_begin_textCopy2}", "opacity", '1', { fromValue: '0'}], position: 3831, duration: 169 },
                { id: "eid955", tween: [ "transform", "${_middel_1}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid985", tween: [ "style", "${_middel_textCopy4}", "opacity", '1', { fromValue: '0'}], position: 8653, duration: 347 },
                { id: "eid987", tween: [ "style", "${_middel_textCopy2}", "opacity", '1', { fromValue: '0'}], position: 4653, duration: 347 },
                { id: "eid953", tween: [ "transform", "${_middel_4}", "scaleX", '1', { fromValue: '0'}], position: 7000, duration: 1000 },
                { id: "eid957", tween: [ "transform", "${_middel_2}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 1000 },
                { id: "eid977", tween: [ "transform", "${_einde_3}", "scaleX", '1', { fromValue: '0'}], position: 6000, duration: 1000 }            ]
        }
    }
},
"slide_6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'work_exp_sym',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'work_exp_sym',
                symbolName: 'work_exp_sym',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_work_exp_sym}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '442px'],
                ["style", "width", '497px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: false,
            timeline: [
                { id: "eid999", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_work_exp_sym}', [] ], ""], position: 0 }            ]
        }
    }
},
"slide_7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'projects_slide2',
                    type: 'rect',
                    rect: ['-69px', '-47px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'projects_slide2',
                symbolName: 'projects_slide',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '1444px']
            ],
            "${_projects_slide2}": [
                ["style", "left", '-69px'],
                ["style", "top", '-47px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"piechart_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    id: 'pers_container',
                    clip: ['rect(0px 300px 150px 0px)'],
                    rect: ['0px', '0px', '300', '300', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], ['-90']],
                        rect: ['0px', '0px', '240px', '240px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'pers_wedge',
                        stroke: [30, 'rgba(107,66,232,1.00)', 'solid'],
                        clip: ['rect(0px 300px 150px 0px)'],
                        fill: ['rgba(192,192,192,0.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'rooi_container',
                    clip: ['rect(0px 300px 150px 0px)'],
                    rect: ['0px', '0px', '300', '300', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], ['90']],
                        rect: ['0px', '0px', '240px', '240px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'rooi_wedge',
                        stroke: [30, 'rgba(205,36,36,1.00)', 'solid'],
                        clip: ['rect(0px 300px 150px 0px)'],
                        fill: ['rgba(192,192,192,0.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'groen_container',
                    clip: ['rect(150px 300px 300px 0px)'],
                    rect: ['0px', '0px', '300', '300', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], ['-90']],
                        rect: ['0px', '0px', '240px', '240px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'groen_wedge',
                        stroke: [30, 'rgba(65,217,141,1.00)', 'solid'],
                        clip: ['rect(0px 300px 150px 0px)'],
                        fill: ['rgba(192,192,192,0.00)']
                    }]
                },
                {
                    type: 'group',
                    id: 'pienk_container',
                    clip: ['rect(150px 300px 300px 0px)'],
                    rect: ['0px', '0px', '300', '300', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], ['90']],
                        rect: ['0px', '0px', '240px', '240px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        type: 'ellipse',
                        id: 'oienk_wedge',
                        stroke: [30, 'rgba(167,41,171,1.00)', 'solid'],
                        clip: ['rect(0px 300px 150px 0px)'],
                        fill: ['rgba(192,192,192,0.00)']
                    }]
                },
                {
                    type: 'rect',
                    id: 'pienk_punt',
                    stroke: [0, 'rgb(167, 41, 171)', 'solid'],
                    rect: ['243px', '234px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(167,41,171,1.00)']
                },
                {
                    type: 'rect',
                    id: 'groen_punt',
                    stroke: [0, 'rgb(167, 41, 171)', 'solid'],
                    rect: ['31px', '240px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(65,217,141,1.00)']
                },
                {
                    type: 'rect',
                    id: 'rooi_punt',
                    stroke: [0, 'rgb(167, 41, 171)', 'solid'],
                    rect: ['243px', '37px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(205,36,36,1.00)']
                },
                {
                    type: 'rect',
                    id: 'pers_punt',
                    stroke: [0, 'rgb(167, 41, 171)', 'solid'],
                    rect: ['31px', '30px', '30px', '30px', 'auto', 'auto'],
                    fill: ['rgba(107,66,232,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_groen_punt}": [
                ["color", "background-color", 'rgba(65,217,141,1.00)'],
                ["style", "top", '240px'],
                ["style", "height", '30px'],
                ["style", "left", '31px'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_groen_container}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [150,300,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_rooi_punt}": [
                ["color", "background-color", 'rgba(205,36,36,1.00)'],
                ["style", "top", '37px'],
                ["style", "height", '30px'],
                ["style", "left", '243px'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_groen_wedge}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '30px'],
                ["style", "width", '240px'],
                ["style", "top", '0px'],
                ["style", "height", '240px'],
                ["color", "border-color", 'rgba(65,217,141,1.00)'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_rooi_container}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_pienk_punt}": [
                ["color", "background-color", 'rgba(167,41,171,1.00)'],
                ["style", "top", '234px'],
                ["style", "height", '30px'],
                ["style", "border-width", '0px'],
                ["style", "left", '243px'],
                ["style", "width", '30px']
            ],
            "${_rooi_wedge}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '30px'],
                ["style", "width", '240px'],
                ["style", "top", '0px'],
                ["style", "height", '240px'],
                ["color", "border-color", 'rgba(205,36,36,1.00)'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_pienk_container}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [150,300,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_pers_wedge}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '30px'],
                ["style", "width", '240px'],
                ["style", "top", '0px'],
                ["style", "height", '240px'],
                ["color", "border-color", 'rgba(107,66,232,1.00)'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_pers_punt}": [
                ["color", "background-color", 'rgba(107,66,232,1.00)'],
                ["style", "top", '30px'],
                ["style", "height", '30px'],
                ["style", "left", '31px'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_pers_container}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${_oienk_wedge}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["transform", "rotateZ", '90deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '30px'],
                ["style", "width", '240px'],
                ["style", "top", '0px'],
                ["style", "height", '240px'],
                ["color", "border-color", 'rgba(167,41,171,1.00)'],
                ["style", "clip", [0,300,150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"slide_8": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'multi_color_pie_chart',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'multi_color_pie_chart',
                symbolName: 'multi_color_pie_chart'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"projects_slide": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    display: 'block',
                    id: 'websites',
                    rect: ['0px', '0px', '337', '41', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'line',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['123px', '14px', '199px', '2px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['319px', '7px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circle',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1)']
                    },
                    {
                        rect: ['317px', '5px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circle_border',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0.00)']
                    },
                    {
                        font: ['comfortaa, sans-serif', 19, 'rgba(0,0,0,1)', '400', 'underline', 'normal'],
                        type: 'text',
                        id: 'Text',
                        text: 'www.roostapparel.co.za<br>(co-creator)<br>www.charlbest.com<br>www.sips.co.za<br>www.sipsstock.com',
                        align: 'center',
                        rect: ['285px', '-40px', '354px', '157px', 'auto', 'auto']
                    },
                    {
                        rect: ['335px', '-109px', '249px', '249px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'border',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0)']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'websitesCopy',
                    rect: ['0px', '110px', '337', '41', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'lineCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['150px', '14px', '199px', '2px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['346px', '7px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circleCopy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1)']
                    },
                    {
                        rect: ['344px', '5px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circle_borderCopy',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0.00)']
                    },
                    {
                        font: ['comfortaa, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'underline', 'normal'],
                        type: 'text',
                        id: 'TextCopy5',
                        text: 'DigiTrans<br>Kwikiki<br>Drive thru everything<br>Fondue Restaurant<br>Computer aid<br>Video production',
                        align: 'center',
                        rect: ['313px', '-58px', '354px', '126px', 'auto', 'auto']
                    },
                    {
                        rect: ['362px', '-109px', '249px', '249px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'borderCopy',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0)']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'websitesCopy2',
                    rect: ['0px', '208px', '337', '41', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'lineCopy2',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['200px', '46px', '199px', '2px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['396px', '39px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circleCopy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1)']
                    },
                    {
                        rect: ['394px', '37px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circle_borderCopy2',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0.00)']
                    },
                    {
                        font: ['comfortaa, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'underline', 'normal'],
                        type: 'text',
                        id: 'TextCopy6',
                        text: 'Soon',
                        align: 'center',
                        rect: ['363px', '-16px', '354px', '126px', 'auto', 'auto']
                    },
                    {
                        rect: ['412px', '-77px', '249px', '249px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'borderCopy2',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0)']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'websitesCopy3',
                    rect: ['0px', '352px', '337', '41', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'lineCopy3',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['135px', '22px', '199px', '2px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,1.00)']
                    },
                    {
                        rect: ['331px', '15px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circleCopy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,1)']
                    },
                    {
                        rect: ['329px', '13px', '16px', '16px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'circle_borderCopy3',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0.00)']
                    },
                    {
                        font: ['comfortaa, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'underline', 'normal'],
                        type: 'text',
                        id: 'TextCopy7',
                        text: 'Telecommunication<br>Presentations',
                        align: 'center',
                        rect: ['298px', '-7px', '354px', '126px', 'auto', 'auto']
                    },
                    {
                        rect: ['347px', '-101px', '249px', '249px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'borderCopy3',
                        stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                        type: 'ellipse',
                        fill: ['rgba(0,0,0,0)']
                    }]
                },
                {
                    font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'websites_text',
                    text: 'WEBSITES',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '137px', '41px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'companies',
                    text: 'BUSINESSES',
                    cursor: ['pointer'],
                    rect: ['0px', '110px', '147px', '41px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'innovative',
                    text: 'INNOVATIVE BRAINSTORMING FACILITATION',
                    cursor: ['pointer'],
                    rect: ['0px', '208px', '199px', '88px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'movie',
                    text: 'MOVIE PROJECTS',
                    cursor: ['pointer'],
                    rect: ['0px', '352px', '199px', '88px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 30, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7',
                    text: 'Click to access',
                    align: 'left',
                    rect: ['82px', '-58px', '315px', '52px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_circle_borderCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '1.5'],
                ["style", "border-style", 'solid'],
                ["style", "left", '394px'],
                ["style", "width", '16px'],
                ["style", "top", '37px'],
                ["transform", "scaleY", '1.5'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "border-width", '2px']
            ],
            "${_Text7}": [
                ["style", "top", '-58px'],
                ["style", "text-align", 'left'],
                ["style", "text-decoration", 'none'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '700'],
                ["style", "left", '82px'],
                ["style", "font-size", '30px']
            ],
            "${_line}": [
                ["style", "top", '14px'],
                ["transform", "scaleX", '0'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '2px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '123px'],
                ["style", "width", '199px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0'],
                ["style", "text-align", 'center'],
                ["style", "text-decoration", 'underline'],
                ["transform", "scaleX", '0'],
                ["style", "height", '126px'],
                ["style", "left", '359px'],
                ["style", "font-size", '18px']
            ],
            "${_circle_borderCopy}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '1.5'],
                ["style", "border-style", 'solid'],
                ["style", "left", '344px'],
                ["style", "width", '16px'],
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.5'],
                ["style", "height", '16px'],
                ["style", "border-width", '2px'],
                ["style", "opacity", '0']
            ],
            "${_circleCopy}": [
                ["style", "top", '7px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '346px'],
                ["style", "width", '16px']
            ],
            "${_borderCopy3}": [
                ["style", "top", '-102px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '249px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '343px'],
                ["style", "width", '249px']
            ],
            "${_circle_borderCopy3}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '1.5'],
                ["style", "border-style", 'solid'],
                ["style", "left", '329px'],
                ["style", "width", '16px'],
                ["style", "top", '13px'],
                ["transform", "scaleY", '1.5'],
                ["style", "height", '16px'],
                ["style", "border-width", '2px'],
                ["style", "opacity", '0']
            ],
            "${_borderCopy2}": [
                ["style", "top", '-78px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '249px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '408px'],
                ["style", "width", '249px']
            ],
            "${_circle}": [
                ["style", "top", '7px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '319px'],
                ["style", "width", '16px']
            ],
            "${_circle_border}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["transform", "scaleX", '1.5'],
                ["style", "border-style", 'solid'],
                ["style", "left", '317px'],
                ["style", "width", '16px'],
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.5'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "border-width", '2px']
            ],
            "${_lineCopy}": [
                ["style", "top", '14px'],
                ["transform", "scaleX", '0'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '150px'],
                ["style", "width", '199px']
            ],
            "${_websites_text}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '41px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '137px']
            ],
            "${_innovative}": [
                ["style", "top", '208px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '88px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '199px']
            ],
            "${_websites}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_border}": [
                ["style", "top", '-109px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '249px'],
                ["style", "left", '335px'],
                ["style", "width", '249px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0'],
                ["style", "text-align", 'center'],
                ["style", "left", '309px'],
                ["transform", "scaleX", '0'],
                ["style", "height", '126px'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-size", '18px']
            ],
            "${_borderCopy}": [
                ["style", "top", '-110px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '249px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '358px'],
                ["style", "width", '249px']
            ],
            "${_websitesCopy3}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '352px']
            ],
            "${_Text}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '285px'],
                ["style", "font-size", '19px'],
                ["style", "top", '-40px'],
                ["style", "width", '354px'],
                ["transform", "scaleY", '0'],
                ["style", "text-align", 'center'],
                ["style", "height", '157px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "text-decoration", 'underline'],
                ["style", "cursor", 'auto']
            ],
            "${_lineCopy3}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '0'],
                ["style", "top", '22px'],
                ["style", "height", '2px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '135px'],
                ["style", "width", '199px']
            ],
            "${_movie}": [
                ["style", "top", '352px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '88px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '199px']
            ],
            "${_lineCopy2}": [
                ["style", "top", '46px'],
                ["transform", "scaleX", '0'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '2px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '200px'],
                ["style", "width", '199px']
            ],
            "${_circleCopy3}": [
                ["style", "top", '15px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '331px'],
                ["style", "width", '16px']
            ],
            "${_companies}": [
                ["style", "top", '110px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '41px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '147px']
            ],
            "${_circleCopy2}": [
                ["style", "top", '39px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '396px'],
                ["style", "width", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '440px'],
                ["style", "width", '419px']
            ],
            "${_websitesCopy}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '110px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '-8px'],
                ["transform", "scaleY", '0'],
                ["style", "text-align", 'center'],
                ["style", "left", '294px'],
                ["transform", "scaleX", '0'],
                ["style", "height", '126px'],
                ["style", "text-decoration", 'underline'],
                ["style", "font-size", '18px']
            ],
            "${_websitesCopy2}": [
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "top", '208px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            labels: {
                "begin": 0,
                "websites": 2500,
                "businesses": 3250,
                "facilitation": 4000,
                "movies": 4750
            },
            timeline: [
                { id: "eid86", tween: [ "style", "${_borderCopy2}", "top", '-77px', { fromValue: '-78px'}], position: 4435, duration: 210 },
                { id: "eid34", tween: [ "transform", "${_border}", "scaleY", '1', { fromValue: '0'}], position: 2935, duration: 210 },
                { id: "eid4", tween: [ "transform", "${_circle_border}", "scaleY", '1', { fromValue: '1.5'}], position: 2750, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_circle_border}", "scaleY", '0.85', { fromValue: '1'}], position: 3000, duration: 145 },
                { id: "eid113", tween: [ "transform", "${_lineCopy}", "scaleX", '0.3', { fromValue: '0'}], position: 1000, duration: 375, easing: "easeInOutQuad" },
                { id: "eid114", tween: [ "transform", "${_lineCopy}", "scaleX", '0', { fromValue: '0.3'}], position: 1375, duration: 375, easing: "easeInOutQuad" },
                { id: "eid94", tween: [ "transform", "${_lineCopy}", "scaleX", '1', { fromValue: '0'}], position: 3250, duration: 250 },
                { id: "eid32", tween: [ "transform", "${_border}", "scaleX", '1', { fromValue: '0'}], position: 2935, duration: 210 },
                { id: "eid9", tween: [ "transform", "${_circle_borderCopy}", "scaleX", '1', { fromValue: '1.5'}], position: 3500, duration: 250 },
                { id: "eid10", tween: [ "transform", "${_circle_borderCopy}", "scaleX", '0.85', { fromValue: '1'}], position: 3750, duration: 145 },
                { id: "eid54", tween: [ "transform", "${_borderCopy3}", "scaleY", '1', { fromValue: '0'}], position: 5185, duration: 210 },
                { id: "eid84", tween: [ "style", "${_borderCopy2}", "left", '412px', { fromValue: '408px'}], position: 4435, duration: 210 },
                { id: "eid105", tween: [ "style", "${_circleCopy3}", "opacity", '1', { fromValue: '0'}], position: 4989, duration: 11 },
                { id: "eid48", tween: [ "transform", "${_borderCopy}", "scaleX", '1', { fromValue: '0'}], position: 3685, duration: 210 },
                { id: "eid102", tween: [ "style", "${_circle}", "opacity", '1', { fromValue: '0'}], position: 2739, duration: 11 },
                { id: "eid76", tween: [ "style", "${_borderCopy3}", "left", '347px', { fromValue: '343px'}], position: 5185, duration: 210 },
                { id: "eid44", tween: [ "transform", "${_TextCopy5}", "scaleX", '1', { fromValue: '0'}], position: 3685, duration: 210 },
                { id: "eid50", tween: [ "transform", "${_borderCopy}", "scaleY", '1', { fromValue: '0'}], position: 3685, duration: 210 },
                { id: "eid115", tween: [ "transform", "${_line}", "scaleX", '0.3', { fromValue: '0'}], position: 1500, duration: 375, easing: "easeInOutQuad" },
                { id: "eid116", tween: [ "transform", "${_line}", "scaleX", '0', { fromValue: '0.3'}], position: 1875, duration: 375, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "transform", "${_line}", "scaleX", '1', { fromValue: '0'}], position: 2500, duration: 250 },
                { id: "eid103", tween: [ "style", "${_circle_border}", "opacity", '1', { fromValue: '0'}], position: 2739, duration: 11 },
                { id: "eid7", tween: [ "style", "${_circle_border}", "opacity", '0', { fromValue: '1'}], position: 3145, duration: 0 },
                { id: "eid68", tween: [ "style", "${_TextCopy5}", "left", '313px', { fromValue: '309px'}], position: 3685, duration: 210 },
                { id: "eid36", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 2935, duration: 210 },
                { id: "eid58", tween: [ "transform", "${_TextCopy6}", "scaleY", '1', { fromValue: '0'}], position: 4435, duration: 210 },
                { id: "eid60", tween: [ "transform", "${_borderCopy2}", "scaleX", '1', { fromValue: '0'}], position: 4435, duration: 210 },
                { id: "eid56", tween: [ "transform", "${_TextCopy6}", "scaleX", '1', { fromValue: '0'}], position: 4435, duration: 210 },
                { id: "eid82", tween: [ "style", "${_TextCopy6}", "top", '-16px', { fromValue: '-17px'}], position: 4435, duration: 210 },
                { id: "eid134", tween: [ "style", "${_websitesCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid160", tween: [ "style", "${_websitesCopy}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid140", tween: [ "style", "${_websitesCopy}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_websitesCopy}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid80", tween: [ "style", "${_TextCopy6}", "left", '363px', { fromValue: '359px'}], position: 4435, duration: 210 },
                { id: "eid46", tween: [ "transform", "${_TextCopy5}", "scaleY", '1', { fromValue: '0'}], position: 3685, duration: 210 },
                { id: "eid74", tween: [ "style", "${_borderCopy}", "top", '-109px', { fromValue: '-110px'}], position: 3685, duration: 210 },
                { id: "eid40", tween: [ "transform", "${_TextCopy7}", "scaleX", '1', { fromValue: '0'}], position: 5185, duration: 210 },
                { id: "eid107", tween: [ "style", "${_circleCopy}", "opacity", '1', { fromValue: '0'}], position: 3489, duration: 11 },
                { id: "eid137", tween: [ "style", "${_websites}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid161", tween: [ "style", "${_websites}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid138", tween: [ "style", "${_websites}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid139", tween: [ "style", "${_websites}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "style", "${_TextCopy5}", "top", '-58px', { fromValue: '-59px'}], position: 3685, duration: 210 },
                { id: "eid112", tween: [ "style", "${_circle_borderCopy}", "opacity", '1', { fromValue: '0'}], position: 3489, duration: 11 },
                { id: "eid12", tween: [ "style", "${_circle_borderCopy}", "opacity", '0', { fromValue: '1'}], position: 3895, duration: 0 },
                { id: "eid13", tween: [ "transform", "${_circle_borderCopy}", "scaleY", '1', { fromValue: '1.5'}], position: 3500, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_circle_borderCopy}", "scaleY", '0.85', { fromValue: '1'}], position: 3750, duration: 145 },
                { id: "eid42", tween: [ "transform", "${_TextCopy7}", "scaleY", '1', { fromValue: '0'}], position: 5185, duration: 210 },
                { id: "eid23", tween: [ "transform", "${_circle_borderCopy2}", "scaleY", '1', { fromValue: '1.5'}], position: 4250, duration: 250 },
                { id: "eid24", tween: [ "transform", "${_circle_borderCopy2}", "scaleY", '0.85', { fromValue: '1'}], position: 4500, duration: 145 },
                { id: "eid136", tween: [ "style", "${_websitesCopy3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid158", tween: [ "style", "${_websitesCopy3}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid144", tween: [ "style", "${_websitesCopy3}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "style", "${_websitesCopy3}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "transform", "${_circle_borderCopy3}", "scaleY", '1', { fromValue: '1.5'}], position: 5000, duration: 250 },
                { id: "eid26", tween: [ "transform", "${_circle_borderCopy3}", "scaleY", '0.85', { fromValue: '1'}], position: 5250, duration: 145 },
                { id: "eid15", tween: [ "transform", "${_circle_borderCopy2}", "scaleX", '1', { fromValue: '1.5'}], position: 4250, duration: 250 },
                { id: "eid16", tween: [ "transform", "${_circle_borderCopy2}", "scaleX", '0.85', { fromValue: '1'}], position: 4500, duration: 145 },
                { id: "eid78", tween: [ "style", "${_borderCopy3}", "top", '-101px', { fromValue: '-102px'}], position: 5185, duration: 210 },
                { id: "eid108", tween: [ "style", "${_circle_borderCopy2}", "opacity", '1', { fromValue: '0'}], position: 4239, duration: 11 },
                { id: "eid20", tween: [ "style", "${_circle_borderCopy2}", "opacity", '0', { fromValue: '1'}], position: 4645, duration: 0 },
                { id: "eid2", tween: [ "transform", "${_circle_border}", "scaleX", '1', { fromValue: '1.5'}], position: 2750, duration: 250 },
                { id: "eid5", tween: [ "transform", "${_circle_border}", "scaleX", '0.85', { fromValue: '1'}], position: 3000, duration: 145 },
                { id: "eid72", tween: [ "style", "${_borderCopy}", "left", '362px', { fromValue: '358px'}], position: 3685, duration: 210 },
                { id: "eid119", tween: [ "transform", "${_lineCopy2}", "scaleX", '0.3', { fromValue: '0'}], position: 500, duration: 375, easing: "easeInOutQuad" },
                { id: "eid120", tween: [ "transform", "${_lineCopy2}", "scaleX", '0', { fromValue: '0.3'}], position: 875, duration: 375, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "transform", "${_lineCopy2}", "scaleX", '1', { fromValue: '0'}], position: 4000, duration: 250, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "transform", "${_borderCopy3}", "scaleX", '1', { fromValue: '0'}], position: 5185, duration: 210 },
                { id: "eid111", tween: [ "style", "${_circleCopy2}", "opacity", '1', { fromValue: '0'}], position: 4239, duration: 11 },
                { id: "eid38", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 2935, duration: 210 },
                { id: "eid66", tween: [ "style", "${_TextCopy7}", "top", '-7px', { fromValue: '-8px'}], position: 5185, duration: 210 },
                { id: "eid62", tween: [ "transform", "${_borderCopy2}", "scaleY", '1', { fromValue: '0'}], position: 4435, duration: 210 },
                { id: "eid135", tween: [ "style", "${_websitesCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_websitesCopy2}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid142", tween: [ "style", "${_websitesCopy2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid143", tween: [ "style", "${_websitesCopy2}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "transform", "${_circle_borderCopy3}", "scaleX", '1', { fromValue: '1.5'}], position: 5000, duration: 250 },
                { id: "eid18", tween: [ "transform", "${_circle_borderCopy3}", "scaleX", '0.85', { fromValue: '1'}], position: 5250, duration: 145 },
                { id: "eid64", tween: [ "style", "${_TextCopy7}", "left", '298px', { fromValue: '294px'}], position: 5185, duration: 210 },
                { id: "eid117", tween: [ "transform", "${_lineCopy3}", "scaleX", '0.3', { fromValue: '0'}], position: 0, duration: 375, easing: "easeInOutQuad" },
                { id: "eid118", tween: [ "transform", "${_lineCopy3}", "scaleX", '0', { fromValue: '0.3'}], position: 375, duration: 375, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "transform", "${_lineCopy3}", "scaleX", '1', { fromValue: '0'}], position: 4750, duration: 250 },
                { id: "eid109", tween: [ "style", "${_circle_borderCopy3}", "opacity", '1', { fromValue: '0'}], position: 4989, duration: 11 },
                { id: "eid22", tween: [ "style", "${_circle_borderCopy3}", "opacity", '0', { fromValue: '1'}], position: 5395, duration: 0 }            ]
        }
    }
},
"multi_color_pie_chart": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bo',
                    type: 'group',
                    rect: ['49px', '-120px', '240', '240', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy2',
                        type: 'group',
                        clip: ['rect(0px 240px 120px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            id: '_1',
                            stroke: [20, 'rgba(81,81,81,1.00)', 'solid'],
                            clip: ['rect(0px 240px 120px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy3',
                        type: 'group',
                        clip: ['rect(0px 240px 120px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['65']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_2',
                            stroke: [20, 'rgba(102,104,145,1.00)', 'solid'],
                            clip: ['rect(0px 240px 120px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy4',
                        type: 'group',
                        clip: ['rect(0px 240px 120px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['105']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_3',
                            stroke: [20, 'rgba(81,81,81,1.00)', 'solid'],
                            clip: ['rect(0px 240px 120px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy5',
                        type: 'group',
                        clip: ['rect(0px 240px 120px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['149']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_4',
                            stroke: [20, 'rgba(102,104,145,1.00)', 'solid'],
                            clip: ['rect(0px 240px 120px 0px)'],
                            fill: ['rgba(192,192,192,0)']
                        }]
                    }]
                },
                {
                    id: 'onder',
                    type: 'group',
                    rect: ['49px', '-120px', '240px', '240px', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy11',
                        type: 'group',
                        clip: ['rect(120px 240px 240px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['360']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_8',
                            stroke: [20, 'rgba(102,104,145,1.00)', 'solid'],
                            clip: ['rect(120px 240px 240px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy12',
                        type: 'group',
                        clip: ['rect(120px 240px 240px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['290']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_7',
                            stroke: [20, 'rgba(81,81,81,1.00)', 'solid'],
                            clip: ['rect(120px 240px 240px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy13',
                        type: 'group',
                        clip: ['rect(120px 240px 240px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['247']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_6',
                            stroke: [20, 'rgba(102,104,145,1.00)', 'solid'],
                            clip: ['rect(120px 240px 240px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    },
                    {
                        transform: [[0, 0], [], [], ['1.58333', '1.58333']],
                        id: 'GroupCopy14',
                        type: 'group',
                        clip: ['rect(120px 240px 240px 0px)'],
                        rect: ['70px', '70px', '240px', '240px', 'auto', 'auto'],
                        c: [
                        {
                            transform: [[0, 0], ['221']],
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: '_5',
                            stroke: [20, 'rgba(81,81,81,1.00)', 'solid'],
                            clip: ['rect(120px 240px 240px 0px)'],
                            fill: ['rgba(192,192,192,0.00)']
                        }]
                    }]
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'tech',
                    text: 'Technology',
                    type: 'text',
                    rect: ['-181px', '-70px', '250px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy8',
                    text: 'Predicting the future',
                    type: 'text',
                    rect: ['-174px', '-192px', '421px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy',
                    text: 'Field Hockey/Squash/Wakeboard',
                    type: 'text',
                    rect: ['365px', '-150px', '661px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy9',
                    text: 'Poker',
                    type: 'text',
                    rect: ['450px', '-9px', '161px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy4',
                    text: 'Travel',
                    type: 'text',
                    rect: ['442px', '129px', '250px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy5',
                    text: 'Computers',
                    type: 'text',
                    rect: ['-164px', '164px', '250px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy6',
                    text: 'Cars and Bikes',
                    type: 'text',
                    rect: ['365px', '238px', '327px', '59px', 'auto', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 40, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'techCopy7',
                    text: 'Product inventing',
                    type: 'text',
                    rect: ['-91px', '280px', '354px', '59px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], ['-19']],
                    rect: ['395px', '124px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(81,81,81,1.00)']
                },
                {
                    transform: [[0, 0], ['12']],
                    rect: ['334px', '205px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(102,104,145,1.00)']
                },
                {
                    transform: [[0, 0], ['43']],
                    rect: ['232px', '241px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy2',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(81,81,81,1.00)']
                },
                {
                    transform: [[0, 0], ['100']],
                    rect: ['71px', '162px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy3',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(102,104,145,1.00)']
                },
                {
                    transform: [[0, 0], ['165']],
                    rect: ['60px', '-37px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy4',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(81,81,81,1.00)']
                },
                {
                    transform: [[0, 0], ['219']],
                    rect: ['211px', '-133px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy5',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(102,104,145,1.00)']
                },
                {
                    transform: [[0, 0], ['262']],
                    rect: ['334px', '-96px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy6',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(81,81,81,1.00)']
                },
                {
                    transform: [[0, 0], ['302']],
                    rect: ['406px', '8px', '30px', '30px', 'auto', 'auto'],
                    id: 'Rectangle2Copy7',
                    stroke: [0, 'rgb(48, 192, 48)', 'none'],
                    type: 'rect',
                    fill: ['rgba(102,104,145,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bo}": [
                ["style", "left", '49px'],
                ["style", "top", '-120px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(81,81,81,1.00)'],
                ["style", "left", '395px'],
                ["style", "top", '124px'],
                ["transform", "rotateZ", '-19deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_GroupCopy3}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["style", "height", '240px'],
                ["transform", "scaleX", '1.58333'],
                ["style", "left", '70px'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_techCopy6}": [
                ["style", "top", '238px'],
                ["style", "width", '327px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '365px'],
                ["style", "font-size", '40px']
            ],
            "${__6}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '247deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(102,104,145,1.00)'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${__5}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '221deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(81,81,81,1.00)'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_GroupCopy5}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["style", "height", '240px'],
                ["transform", "scaleX", '1.58333'],
                ["style", "left", '70px'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "top", '-133px'],
                ["color", "background-color", 'rgba(102,104,145,1.00)'],
                ["style", "border-width", '0px'],
                ["transform", "rotateZ", '219deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "left", '211px'],
                ["style", "width", '30px']
            ],
            "${_techCopy5}": [
                ["style", "top", '164px'],
                ["style", "font-size", '40px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '-164px'],
                ["style", "width", '250px']
            ],
            "${_GroupCopy2}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["style", "height", '240px'],
                ["transform", "scaleX", '1.58333'],
                ["style", "left", '70px'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_GroupCopy13}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["transform", "scaleX", '1.58333'],
                ["style", "height", '240px'],
                ["style", "left", '70px'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${__3}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '105deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(81,81,81,1.00)'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_techCopy7}": [
                ["style", "top", '280px'],
                ["style", "font-size", '40px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '-91px'],
                ["style", "width", '354px']
            ],
            "${_GroupCopy14}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["style", "height", '240px'],
                ["transform", "scaleX", '1.58333'],
                ["style", "left", '70px'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_Rectangle2Copy6}": [
                ["style", "top", '-96px'],
                ["color", "background-color", 'rgba(81,81,81,1.00)'],
                ["style", "left", '334px'],
                ["transform", "rotateZ", '262deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_Rectangle2Copy4}": [
                ["style", "top", '-37px'],
                ["color", "background-color", 'rgba(81,81,81,1.00)'],
                ["style", "left", '60px'],
                ["transform", "rotateZ", '165deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${_techCopy}": [
                ["style", "top", '-150px'],
                ["style", "font-size", '40px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '365px'],
                ["style", "width", '661px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '162px'],
                ["color", "background-color", 'rgba(102,104,145,1.00)'],
                ["style", "border-width", '0px'],
                ["transform", "rotateZ", '100deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "left", '71px'],
                ["style", "width", '30px']
            ],
            "${_GroupCopy12}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["transform", "scaleX", '1.58333'],
                ["style", "height", '240px'],
                ["style", "left", '70px'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_GroupCopy4}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["style", "height", '240px'],
                ["transform", "scaleX", '1.58333'],
                ["style", "left", '70px'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '240px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '241px'],
                ["color", "background-color", 'rgba(81,81,81,1.00)'],
                ["style", "left", '232px'],
                ["transform", "rotateZ", '43deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '339px'],
                ["style", "width", '339px']
            ],
            "${__4}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '149deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(102,104,145,1.00)'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_techCopy4}": [
                ["style", "top", '129px'],
                ["style", "width", '250px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '442px'],
                ["style", "font-size", '40px']
            ],
            "${__2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '65deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(102,104,145,1.00)'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '205px'],
                ["color", "background-color", 'rgba(102,104,145,1.00)'],
                ["style", "border-width", '0px'],
                ["transform", "rotateZ", '12deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "left", '334px'],
                ["style", "width", '30px']
            ],
            "${_onder}": [
                ["style", "top", '-120px'],
                ["style", "left", '49px']
            ],
            "${__7}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '290deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(81,81,81,1.00)'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${__1}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(81,81,81,1.00)'],
                ["style", "clip", [0,240,120,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_GroupCopy11}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1.58333'],
                ["transform", "scaleX", '1.58333'],
                ["style", "height", '240px'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '70px'],
                ["style", "width", '240px']
            ],
            "${__8}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '360deg'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '200px'],
                ["style", "top", '0px'],
                ["style", "height", '200px'],
                ["color", "border-color", 'rgba(102,104,145,1.00)'],
                ["style", "clip", [120,240,240,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-width", '20px']
            ],
            "${_Rectangle2Copy7}": [
                ["style", "top", '8px'],
                ["color", "background-color", 'rgba(102,104,145,1.00)'],
                ["style", "border-width", '0px'],
                ["transform", "rotateZ", '302deg'],
                ["style", "height", '30px'],
                ["style", "border-style", 'none'],
                ["style", "left", '406px'],
                ["style", "width", '30px']
            ],
            "${_tech}": [
                ["style", "top", '-70px'],
                ["style", "width", '250px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '-181px'],
                ["style", "font-size", '40px']
            ],
            "${_techCopy8}": [
                ["style", "top", '-192px'],
                ["style", "font-size", '40px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '-174px'],
                ["style", "width", '421px']
            ],
            "${_techCopy9}": [
                ["style", "top", '-9px'],
                ["style", "width", '161px'],
                ["style", "height", '59px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "left", '450px'],
                ["style", "font-size", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"menu": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-36px', '-11px', '71px', '30px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,0.00)']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'menu_button',
                    text: 'MENU',
                    cursor: ['pointer'],
                    rect: ['auto', '-9px', '62px', '24px', '108px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'home_menu',
                    text: 'HOME',
                    cursor: ['pointer'],
                    rect: ['auto', '-9px', '62px', '24px', '108px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'me_menu',
                    text: 'ME',
                    cursor: ['pointer'],
                    rect: ['auto', '13px', '160px', '14px', '144px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'academic_menu',
                    text: 'ACADEMIC',
                    cursor: ['pointer'],
                    rect: ['auto', '31px', '160px', '14px', '144px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'skills_menu',
                    text: 'SKILLS',
                    cursor: ['pointer'],
                    rect: ['auto', '50px', '160px', '13px', '144px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'achievements_menu',
                    text: 'ACHIEVEMENTS',
                    cursor: ['pointer'],
                    rect: ['auto', '68px', '160px', '15px', '144px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'work_exp_menu',
                    text: 'WORK EXPERIENCE',
                    cursor: ['pointer'],
                    rect: ['auto', '14px', '188px', '15px', '-50px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'projects_menu',
                    text: 'PROJECTS',
                    cursor: ['pointer'],
                    rect: ['auto', '32px', '188px', '17px', '-50px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'things_i_love_menu',
                    text: 'THINGS I &lt;3',
                    cursor: ['pointer'],
                    rect: ['auto', '50px', '188px', '13px', '-50px', 'auto']
                },
                {
                    font: ['comfortaa, sans-serif', 20, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'end_menu',
                    text: 'END',
                    cursor: ['pointer'],
                    rect: ['auto', '68px', '188px', '13px', '-50px', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(102, 104, 145)', 'solid'],
                    rect: ['-24px', '15px', '54px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy',
                    stroke: [0, 'rgb(102, 104, 145)', 'solid'],
                    rect: ['3px', '11px', '1px', '81px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_home_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '108px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '-9px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'left'],
                ["style", "width", '62px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_work_exp_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '-50px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '14px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'left'],
                ["style", "width", '188px'],
                ["style", "height", '15px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_end_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '-50px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '68px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'left'],
                ["style", "width", '188px'],
                ["style", "height", '13px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_things_i_love_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '-50px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '50px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'left'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '13px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "width", '188px']
            ],
            "${_skills_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '144px'],
                ["style", "left", 'auto'],
                ["style", "width", '160px'],
                ["style", "top", '50px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'right'],
                ["style", "font-size", '20px'],
                ["style", "height", '13px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_academic_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '144px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '31px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'right'],
                ["style", "width", '160px'],
                ["style", "height", '14px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_menu_button}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '108px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '-9px'],
                ["style", "cursor", 'pointer'],
                ["style", "text-align", 'left'],
                ["style", "opacity", '1'],
                ["style", "height", '24px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "width", '62px'],
                ["style", "font-weight", '400']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '1px'],
                ["style", "border-width", '0px'],
                ["transform", "scaleX", '0'],
                ["style", "top", '15px'],
                ["style", "left", '-24px'],
                ["style", "width", '54px']
            ],
            "${_Ellipse}": [
                ["style", "top", '-11px'],
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '-36px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '30px'],
                ["style", "opacity", '1'],
                ["style", "border-width", '2px'],
                ["style", "width", '71px']
            ],
            "${symbolSelector}": [
                ["style", "height", '159px'],
                ["style", "width", '144px']
            ],
            "${_projects_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '-50px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '32px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'left'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '17px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "width", '188px']
            ],
            "${_achievements_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '144px'],
                ["style", "left", 'auto'],
                ["style", "font-size", '20px'],
                ["style", "top", '68px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'right'],
                ["style", "width", '160px'],
                ["style", "height", '15px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_me_menu}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '144px'],
                ["style", "left", 'auto'],
                ["style", "width", '160px'],
                ["style", "top", '13px'],
                ["style", "font-weight", '400'],
                ["style", "text-align", 'right'],
                ["style", "font-size", '20px'],
                ["style", "height", '14px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle3Copy}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '81px'],
                ["style", "left", '3px'],
                ["style", "border-width", '0px'],
                ["style", "width", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1616,
            autoPlay: true,
            labels: {
                "begin": 0,
                "einde": 1616
            },
            timeline: [
                { id: "eid1030", tween: [ "style", "${_home_menu}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 535 },
                { id: "eid1043", tween: [ "transform", "${_Rectangle3Copy}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid1026", tween: [ "style", "${_projects_menu}", "opacity", '1', { fromValue: '0'}], position: 1035, duration: 336 },
                { id: "eid1033", tween: [ "style", "${_achievements_menu}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 366 },
                { id: "eid1028", tween: [ "style", "${_end_menu}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 366 },
                { id: "eid1025", tween: [ "style", "${_skills_menu}", "opacity", '1', { fromValue: '0'}], position: 1151, duration: 349 },
                { id: "eid1032", tween: [ "style", "${_academic_menu}", "opacity", '1', { fromValue: '0'}], position: 1035, duration: 336 },
                { id: "eid1031", tween: [ "style", "${_things_i_love_menu}", "opacity", '1', { fromValue: '0'}], position: 1151, duration: 349 },
                { id: "eid1046", tween: [ "style", "${_menu_button}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 535 },
                { id: "eid1029", tween: [ "style", "${_work_exp_menu}", "opacity", '1', { fromValue: '0'}], position: 905, duration: 345 },
                { id: "eid1027", tween: [ "style", "${_me_menu}", "opacity", '1', { fromValue: '0'}], position: 905, duration: 345 },
                { id: "eid1039", tween: [ "transform", "${_Rectangle3}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 1000 },
                { id: "eid1047", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 563 }            ]
        }
    }
},
"slide_9": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['comfortaa, sans-serif', 70, 'rgba(0,0,0,1)', '900', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'Thank You<br>Dankie',
                    align: 'center',
                    rect: ['0px', '0px', '446px', '177px', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'gmail',
                    rect: ['182px', '391px', '47px', '36px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/gmail.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'google',
                    rect: ['85px', '391px', '44px', '46px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/google%2B.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'face',
                    rect: ['142px', '391px', '25px', '45px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/face.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'yahoo',
                    rect: ['301px', '389px', '37px', '33px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/yahoo.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'linkedin',
                    rect: ['244px', '389px', '46px', '40px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/linkedin.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '177px'],
                ["style", "width", '446px']
            ],
            "${_yahoo}": [
                ["style", "top", '389px'],
                ["style", "left", '301px'],
                ["style", "cursor", 'pointer']
            ],
            "${_linkedin}": [
                ["style", "top", '389px'],
                ["style", "left", '244px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text3}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "width", '446px'],
                ["style", "height", '177px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '70px']
            ],
            "${_gmail}": [
                ["style", "top", '391px'],
                ["style", "left", '182px'],
                ["style", "cursor", 'pointer']
            ],
            "${_google}": [
                ["style", "top", '391px'],
                ["style", "left", '85px'],
                ["style", "cursor", 'pointer']
            ],
            "${_face}": [
                ["style", "top", '391px'],
                ["style", "left", '142px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-340225873");
