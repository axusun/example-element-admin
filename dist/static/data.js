



const _baseUrl = 'https://cdn1.maicheme.com/';


const indexData = {
    priceSection: [
        { value: '2万以下' ,id : 1 },
        { value: '2-4万' ,id : 2 },
        { value: '4-6万' ,id : 3 },
        { value: '6-8万' ,id : 4 },
        { value: '8-10万' ,id : 5 },
        { value: '10-12万' ,id : 6 },
        { value: '12-14万' ,id : 7 },
        { value: '14-16万' ,id : 8 },
        { value: '16万以上' ,id : 9 },
    ],
    carClass: [{ img: `${_baseUrl}index_tip_pic.jpg`, id: 0 }, { value: '准新车', id: 1 }, { value: '练手车', id: 2 }, { value: 'SUV', id: 3 }, { value: '紧凑车型', id: 4 }, { value: '小型车', id: 5 }, { value: 'MPV', id: 6 }, { value: '中型车', id: 7 }, { value: '中大型车', id: 8 }],
    banners: [
        `${_baseUrl}banner_pic2.jpg`,
        `${_baseUrl}banner_pic1.jpg`,
        `${_baseUrl}banner_pic3.jpg`,
    ],

    good: [ 
        {
            image: `${_baseUrl}-e-good_car_mvp.jpg`,
            title: 'MVP',
            subTit: '精英商务的优选',
            index: 6
        },
        {
            image: `${_baseUrl}-e-good_car_city.jpg`,
            title: '都市精灵',
            subTit: '上班代步有它就够',
            index: 9
        },
        {
            image: `${_baseUrl}-e-good_car_luxurious.jpg`,
            title: '高端奢华',
            subTit: '万元也能开豪车',
            index: 10
        },
        {
            image: `${_baseUrl}-e-good_car_practical.jpg`,
            title: '经济实惠',
            subTit: '省钱省油又实用',
            index: 11
        }
    ],
    ad: [
        {
            icon: 'icon-tubiaozhizuomoban1',
            value: '90天回购'
        },
        {
            icon: 'icon-tubiaozhizuomoban2',
            value: '免费验车'
        },
        {
            icon: 'icon-icon12',
            value: '365项检测'
        },
        {
            icon: 'icon-tubiaozhizuomoban',
            value: '优质金融方案'
        },
    ],
    
    instal: [
        {
            type: '有娃家庭',
            img: `${_baseUrl}-e-stages_mod_suv.jpg`,
            index:10,
            list: [
                {
                    src: `${_baseUrl}index_car_pic1.jpg`,
                    name: '现代 胜达',
                    price: 3.48,
                    id: '1'
                },
                {
                    src: `${_baseUrl}index_car_pic2.jpg`,
                    name: '现代 胜达',
                    price: 3.48,
                    id: '2'
                },
            ]
        },
        {
            type: '上班代步',
            img: `${_baseUrl}-e-stages_mod_small.jpg`,
            index:11,
            list: [
                {
                    src: `${_baseUrl}index_car_pic3.jpg`,
                    name: '大众 POLO',
                    price: 0.84,
                    id: '3'
                },
                {
                    src: `${_baseUrl}index_car_pic4.jpg`,
                    name: '本田 飞度',
                    price: 1.40,
                    id: '4'
                },
            ]
        },
        {
            type: '商务出行',
            img: `${_baseUrl}-e-stages_mod_large.jpg`,
            index:12,
            list: [
                {
                    src: `${_baseUrl}index_car_pic5.jpg`,
                    name: '开瑞 K50',
                    price: 0.92
                },
                {
                    src: `${_baseUrl}index_car_pic6.jpg`,
                    name: '东风 帅客',
                    price: 2.72
                },
            ]
        }
    ],
    process_bg: `${_baseUrl}-e-process-bg.jpg`,
    process: [
        {
            class: `${_baseUrl}-e-liucheng_icon1.png`,
            value: '在线咨询',
        },
        {
            class: `${_baseUrl}-e-liucheng_icon2.png`,
            value: '专业荐车',
        },
        {
            class: `${_baseUrl}-e-liucheng_icon3.png`,
            value: '陪您看车',
        },
        {
            class: `${_baseUrl}-e-liucheng_icon4.png`,
            value: '专业检测',
        },
        {
            class: `${_baseUrl}-e-liucheng_icon5.png`,
            value: '金融方案',
        },
        {
            class: `${_baseUrl}-e-liucheng_icon6.png`,
            value: '当天提车',
        },
    ],

    partner: [
        {
            link: 'http://www.icbc.com.cn/icbc/',
            pic: `${_baseUrl}foot_pic_icbc.png`,
        },
        {
            link: 'http://www.picc.com.cn/',
            pic: `${_baseUrl}foot_pic_picc.png`,
        },
        {
            link: 'https://www.che168.com/dealer/348280.html#pvareaid=102118',
            pic: `${_baseUrl}foot_pic_qczhij.png`,
        },
        {
            link: 'https://cheshop.58.com/p/10430328246989291',
            pic: `${_baseUrl}foot_pic_58.png`,
        },
        {
            link: 'http://china.baixing.com/',
            pic: `${_baseUrl}foot_pic_baixing.png`,
        },
        {
            link: 'https://www.chaboshi.cn/',
            pic: `${_baseUrl}foot_pic_cbs.png`,
        },
        {
            link: 'https://www.che300.com/',
            pic: `${_baseUrl}foot_pic_che300.png`,
        },
        {
            link: 'https://www.taoche.com/?from=2103093',
            pic: `${_baseUrl}foot_pic_taoche.png`,
        },
    ],// hezuohuoban
    
    guys_bg: `${_baseUrl}-e-user_said_bg.jpg`,
    guys_imgs:[ `${_baseUrl}index_admin_pics1.jpg`,`${_baseUrl}index_admin_pics2.jpg`,`${_baseUrl}index_admin_pics4.jpg`,`${_baseUrl}index_admin_pics3.jpg`  ],
    guys: [          
        {
            car: `${_baseUrl}index_admin_pic.jpg`,
            status: '小学老师',
            comment: '作为汽车小白想买台二手车练手，铺天盖地的二手车平台宣传推广看晕了我，最后一个业内朋友推荐了买车吧，说可以帮买带看，靠谱！反正免费我就试试，顾问小王真的蛮专业的，一沟通就知道我想要什么，推荐的车都很符合我心意，最后买车成功真要感谢他，服务很周到，强烈表扬！',
            person: '张女士',
        },

        {
            car: `${_baseUrl}index_admin_pic.jpg`,
            status: '自由职业 ',
            comment: '买车时囊中羞涩，还好买车吧可以分期付款，简单直接不玩套路。其他平台搞什么什么直租、什么0首付，都是噱头！最后还是羊毛出在羊身上，这些忽悠不到我。买车吧的贷款方案手续简单、门槛低，放款也快，挺适合我的，适合自己的就是最好的！',
            person: '孙先生',
        },
        {
            car: `${_baseUrl}index_admin_pic.jpg`,
            status: '设计师 ',
            comment: '不想因为买车降低了自己的生活品质，贷款买车最合适啦！买车吧的顾问小哥哥给我推荐的购车方案还不错，可以36个月内还完，减轻了我很大压力，利率也帮我做到了最低。现在车开了快三个月了，不用早起倒腾转车，假期还能去自驾游，感觉重新爱上了人间~',
            person: '季女士',
        },
        {
            // tup
            car: `${_baseUrl}index_admin_pic.jpg`,
            // 用户职位        
            status: '私企职工',
            // 用户评论
            comment: '都说二手车水深，买车之前很忐忑，做了很多功课，对比了近十家买车平台，最后选了买车吧，果然没失望！顾问小姐姐超级贴心，了解到我的需求之后就给我找了很多车源，全程带我看车帮我选车，省了我很多时间和精力，车的性价比还很高！高兴坏了迫不及待来推荐了~',
            // 人名
            person: '刘先生',
        },
    ],
   
}
const listData = {
    option:[
        {
            title:'品牌',
            type:1,
            class:'normal',
            state:'brand',
            id:'carBrand',
            isAll: true,
            active:0,
            maxlength:10,
            content:[{ value: '不限' ,id : 0 }],
            moreContent:[],
        },
        {
            title:'车系',
            type:1,
            class:'normal',
            state:'series',
            id:'carSeries',
            isAll: true,
            active:0,
            maxlength:7,
            content:[{ value: '不限' ,id : 0 }],
        },
        {
            title:'价格',
            type:2,
            class:'normal',
            id:'price',
            active:0,
            content:[
                { value: '不限' ,id : 0 },
                { value: '2万以下' ,id : 1 },
                { value: '2-4万' ,id : 2 },
                { value: '4-6万' ,id : 3 },
                { value: '6-8万' ,id : 4 },
                { value: '8-10万' ,id : 5 },
                { value: '10-12万' ,id : 6 },
                { value: '12万以上' ,id : 7 },
            ],
        },
        {
            title:'标签',
            type:0,
            class:'tag',
            id:'tags',
            active:false,
            content:[
                { value: '优选' ,id : 8 },
                { value: '准新车' ,id : 0 },
                { value: '练手车' ,id : 1 },
                { value: 'SUV' ,id : 2 },
                { value: '紧凑车型' ,id : 3 },
                { value: '小型车' ,id : 4 },
                { value: 'MVP' ,id : 5 },
                // { value: '中型车' ,id : 6 },
                // { value: '中大型车' ,id : 11 },
                { value: '都市精灵' ,id : 7 },
                { value: '高端奢华' ,id : 9 },
                { value: '经济实惠' ,id : 10 },
                { value: '有娃家庭' ,id : 10 },
                { value: '上班代步' ,id : 11 },
                { value: '商务出行' ,id : 12 }
            ],
        },
        {
            title:'更多',
            type:0,
            class:'more',
            content:[
                { value: '车龄' ,id : 0 },
                // { value: '变速箱' ,id : 1 },
                // { value: '车型' ,id : 2 },
                { value: '里程' ,id : 3 },
                // { value: '排量' ,id : 4 },
                // { value: '排放标准' ,id : 5 },
                // { value: '座位数' ,id : 6 },
                { value: '颜色' ,id : 7 },
                // { value: '燃油类型' ,id : 8 }
            ],
        },
        {
            id:"keyWords"
        },
        {
            title:'当前已选',
            type:3,
            class:'choose',
            id:'choose',
            content:[],
        },
        
        
    ],
    tab:[
        {
            title:'全部',
            id : 0
        },
        // {
        //     title:'今日新上车源',
        //     id : 1
        // },
        // {
        //     title:'买车吧严选车',
        //     id : 2
        // },
        // {
        //     title:'买车吧优选车',
        //     id : 3
        // }
    ],
    sort:[
        {
            value:'最新',
            id:''
        },
        {
            value:'价格',
            id:'second_hand_car_price'
        },
        {
            value:'里程',
            id:'table_mileage'
        },
        {
            value:'车龄',
            id:'car_license_time'
        }
    ],
    more:[
        {   
            title:'车龄',
            id:'year',
            active:0,
            content:['不限','2年以下','2-4年','4-6年','6-8年','8年以上']
        },
        {
            title:'里程',
            id:'mileage',
            active:0,
            content:['不限','2万公里以下','2-4万公里','4-6万公里','6-8万公里','8万以上']
        },
        {   
            title:'颜色',
            id:'color',
            active:0,
            content:['不限','黑色','深灰色','银灰色','白色','香槟色','黄色','橙色','红色','蓝色','粉红色','紫色','咖啡色','绿色','多彩色','其他']
        }
    ],

}

const footerData = {
    icon:[
        {
            value:'90天回购',
            class:`${_baseUrl}-e-foot_icon1.png`,
        },
        {
            value:'免费验车',
            class:`${_baseUrl}-e-foot_icon2.png`,
        },
        {
            value:'365项专业检测',
            class:`${_baseUrl}-e-foot_icon3.png`,
        },
        {
            value:'一站式服务',
            class:`${_baseUrl}-e-foot_icon4.png`,
        }
    ],
    about:[
        {
            value:'关于我们',
            link:''
        },
        {
            value:'服务协议',
            link:''
        },
        {
            value:'人才招聘',
            link:''
        },
        {
            value:'联系我们',
            link:''
        },
        
    ],
    appdown:[
        {   
            value:'下载买车吧APP',
            class:`${_baseUrl}app_down.jpg`,
            link:''
        },
        
    ],
    wixin:[
        {   
            value:'关注微信',
            class:`${_baseUrl}foot_gongzh_pic.jpg`,
            link:''
        }
    ],
    links:[
        {
            value:'上饶城市店铺',
            link:'https://cheshop.58.com/p/10789241731258941'
        },
        {
            value:'厦门城市店铺',
            link:'https://cheshop.58.com/p/10784757716489461'
        },
        {
            value:'东莞城市店铺',
            link:'https://cheshop.58.com/p/10785925085119242'
        },
        {
            value:'抚州城市店铺',
            link:'https://cheshop.58.com/p/10789241492309442'
        },
        {
            value:'福州城市店铺',
            link:'https://cheshop.58.com/p/10784627745494261'
        },
        {
            value:'泉州城市店铺',
            link:'https://cheshop.58.com/p/10785924821423349'
        },
        {
            value:'温州城市店铺',
            link:'https://cheshop.58.com/p/10702547072026091'
        },
        {
            value:'肇庆城市店铺',
            link:'https://cheshop.58.com/p/10789294632127815'
        },
        {
            value:'绍兴城市店铺',
            link:'https://cheshop.58.com/p/10702544313180774'
        },
        {
            value:'清远城市店铺',
            link:'https://cheshop.58.com/p/10785713183512494'
        },
        {
            value:'金华城市店铺',
            link:'https://cheshop.58.com/p/10702550282220584'
        },
        {
            value:'南通城市店铺',
            link:'https://cheshop.58.com/p/10784627305385943'
        },
        {
            value:'南京城市店铺',
            link:'https://cheshop.58.com/p/10629901569585643'
        },
        {
            value:'佛山城市店铺',
            link:'https://cheshop.58.com/p/10785925722401832'
        },
        {
            value:'昆明城市店铺',
            link:'https://cheshop.58.com/p/10789240288334438'
        },
        {
            value:'苏州城市店铺',
            link:'https://cheshop.58.com/p/10608205926278307'
        }
    ]
}

const serverData = {
    banner:`${_baseUrl}server_banner.png`,
        
    point: [
        {
            baoz:`${_baseUrl}-e-server_baoz_pic1.png`,
            title: '90天回购',
            text:' 自检车日起90天内，如您发现重大事故车、泡水车、火烧车，买车吧将按照当日检测车价回购，让您理赔无忧。'
        },
        {
            baoz:`${_baseUrl}-e-server_baoz_pic2.png`,
            title: '免费验车',
            text:' 买车吧提供售前免费验车服务，并携手第三方检测机构查博士出具车辆车况保障协议，为您的选择提供专业支持。'
        },
        {
            baoz:`${_baseUrl}-e-server_baoz_pic3.png`,
            title: '365项专业检测',
            text:' 资深第三方检测师，严格执行标准化检测流程，包括重要部件检测，事故排查、外观内饰及电器检测、全车漆面检测，层层把关，排除隐患。'
        },
        {
            baoz:`${_baseUrl}-e-server_baoz_pic4.png`,
            title: '优质金融方案',
            text:'首付款（30%）   月供（36期）买车吧与蚂蚁金服、车秒贷、工商银行合作，为您量身定制二手车贷款方案，材料简单，放款迅速，助您轻松把车“贷”回家。'
        }
    ],
    advantage: [
        {
            titlepic:`${_baseUrl}-e-server_modeil_title1.png`,
            text1:'免费专业顾问',
            text2:'一对一全程指导',
            text3: '帮找车丨帮挑车丨帮砍价',
            image:`${_baseUrl}-e-server_modeil_pic1.png`,
            left: true,
        
        },
        {
            titlepic:`${_baseUrl}-e-server_modeil_title2.png`,
            text1:'第三方专业检测机构',
            text2:'90天回购丨365项售前检测',
            text3: '杜绝：事故车、泡水车、火烧车',
            image:`${_baseUrl}-e-server_modeil_pic2.png`,
            right: true,
        },
        {
            titlepic:`${_baseUrl}-e-server_modeil_title3.png`,
            text1:'最快当天可提车',
            text2:'多种金融购车方案任选',
            text3: '低门槛丨低首付丨低利率',
            image:`${_baseUrl}-e-server_modeil_pic3.png`,
            left: true,
        },
    

    ],
}
const downData = {

    iconpic: `${_baseUrl}down_phone_pic1.png`,
    
    phonepic: `${_baseUrl}down_phone_pic.png`,

    downexplain :[
        {
            modulepic: `${_baseUrl}down_phone_pic2.png`,
            wraptitle: '海量真实车源，你要的车，我们都有',
            wraptext1:'大众本田福特宝马奔驰五菱……',
            wraptext2:'家用商用中低高端……',
            left: true,
            sectionbg: `${_baseUrl}down_modil_bg1.jpg`,
        },
        {
            modulepic: `${_baseUrl}down_phone_pic3.png`,
            wraptitle: '专业顾问帮买带看，你担心的事，我们都懂',
            wraptext1:'免费带看，避免被坑',
            wraptext2:'车价透明，不赚价差',
            right: true,
            sectionbg: `${_baseUrl}down_modil_bg2.jpg`,
            titlecolor:'#fca900',
            textcolor:'#fff'
        },
        {
            modulepic: `${_baseUrl}down_phone_pic4.png`,
            wraptitle: '每辆车都提供检测，不售问题车，是我的承诺。',
            wraptext1:'独立第三方免费验车',
            wraptext2:'365项专业检测',
            wraptext3:'90天问题车回购',
            left: true,
            sectionbg:`${_baseUrl}down_modil_bg1.jpg`,
        },
        {
            modulepic: `${_baseUrl}down_phone_pic5.png`,
            wraptitle: '提供优质金融服务，轻松把车贷回家，是我的强项',
            wraptext1:'低首付，低利率',
            wraptext2:'多种分期购车方案',
            wraptext3:'钱少也能开好车',
            right: true,
            sectionbg: `${_baseUrl}down_modil_bg3.jpg`,
            titlecolor:'#fca900',
            textcolor:'#fff'
        },
    ],
    
    
    
}

const contentData = {
    contact: [
        {
            title:'公司简介',  
        },
        {
            title:'联系我们',  
        },
        {
            title:'服务协议',  
        },
        {
            title:'在招职位',  
        },
      
    ],

    
}

export default {
    indexData,
    listData,
    footerData,
    serverData,
    downData,
    contentData
}






