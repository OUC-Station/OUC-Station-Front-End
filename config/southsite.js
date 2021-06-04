//这里用来存储地名
const site = 
[
    //二五广场
    {
      id: 0,
      cover: 'https://i.loli.net/2021/05/24/uBw3DCrihakYtpo.jpg',
      info:'二五广场位于西门正前方，因其两侧为第二和第五教学区，得名为“二五广场”。二五广场场地宽阔，需要较大空间的校园活动往往会在这里举行。夜晚降临时，会有许多学生在这里练习轮滑，滑板。二五广场的后面为凯旋门，每每新生到来，凯旋门上一定早早张贴好迎新横幅，是陪伴学生成长的回忆之一。',  
      iconPath: "https://i.loli.net/2021/06/02/Tuvh6zalPSgrVpd.png",
      latitude: 36.16381384970564, 
      longitude: 120.49716213967224,
      width: 50,  //图片显示宽度
      height: 50, //图片显示高度
      callout: {
        display:'ALWAYS',// 常显气泡
        content: '二五广场',  //名称文本
        color: '#000000',  //文本颜色
        borderRadius: 5,  //边框圆角
        borderWidth: 1,  //边框宽度
        borderColor: '#ffffff',  //边框颜色
        bgColor: '#ffffff',  //背景色
        padding: 5,  //文本边缘留白
        textAlign: 'center'  //文本对齐方式。有效值: left, right, center
      }
    },
      //体育馆
      {
        id: 1,
        cover: 'https://i.loli.net/2021/05/24/ltnJDrw7fyWVoR1.jpg',
        info:'中国海洋大学体育馆位于青岛市松岭路238号，毗邻青岛滨海大道，建筑面积21520平方米，场地面积1944平方米，观众坐席4145平方米，是学校文体活动、院校晚会、重大典礼举办的主要场所。',  
        iconPath: "https://i.loli.net/2021/05/28/NH7WRUQbtsgLJPz.png",
        latitude: 36.16480697129505,
        longitude: 120.49734357232705,
        width: 50,
        height: 50,
        callout: {
          display:'ALWAYS',// 常显气泡
          content: '体育馆',  //名称文本
          color: '#000000',  //文本颜色
          borderRadius: 5,  //边框圆角  //文本边缘留白
          textAlign: 'center'  //文本对齐方式。有效值: left, right, center
        }
      },
    //二餐
      {
        id: 2,
        cover: 'https://i.loli.net/2021/05/26/9mkV8WchKTtGnPr.jpg',
        info:'第二食堂有三层。一层食物中规中矩吧，不太推荐这里的自选菜，性价比稍微低一些。二层风味餐厅有更多选择，麻辣烫、麻辣香锅、烤鱼、黄焖鸡、湖南菜、米粉、旋转小火锅等等，味道还可以价格也比较美丽。温馨提示一下，这里的奶茶有点甜腻，更推荐果茶。三层为潮音餐厅，有较多美食，价格小贵。',  
        iconPath: "../../images/circle.png",
        latitude: 36.16478452164275,
        longitude: 120.50029453366119,
        width: 50,
        height: 50,
        callout: {
          display:'ALWAYS',// 常显气泡
          content: '第二食堂',  //名称文本
          color: '#000000',  //文本颜色
          borderRadius: 5,  //边框圆角
          borderWidth: 1,  //边框宽度
          borderColor: '#ffffff',  //边框颜色
          bgColor: '#ffffff',  //背景色
          padding: 5,  //文本边缘留白
          textAlign: 'center'  //文本对齐方式。有效值: left, right, center
        }
      },
       //一餐
       {
        id: 3,
        cover: 'https://i.loli.net/2021/05/24/IWH4eA5sDMdLRGc.jpg',
        info:'第一食堂有三层。一层主要是快餐水饺、牛肉汤等。二层有自选菜，称斤算钱，菜色齐全，价格实惠。此外二层现在也开了多个美食窗口，给顾客提供多重选择。三层是海澜餐厅，许多教师在这里就餐，主要为自选菜，菜品色香味俱全，价格很美丽，感觉是海大校园里就餐性价比最高的地方了。',  
        iconPath: "../../images/circle.png",
        latitude: 36.164501246853945,
        longitude: 120.50107789061155,
        width: 50,
        height: 50,
        callout: {
          display:'ALWAYS',// 常显气泡
          content: '第一食堂',  //名称文本
          color: '#000000',  //文本颜色
          borderRadius: 5,  //边框圆角
          borderWidth: 1,  //边框宽度
          borderColor: '#ffffff',  //边框颜色
          bgColor: '#ffffff',  //背景色
          padding: 5,  //文本边缘留白
          textAlign: 'center'  //文本对齐方式。有效值: left, right, center
        }
      },
        //海韵
        {
          id: 4,
          cover: 'https://i.loli.net/2021/05/24/c9FsUJoKWOCibGH.jpg',
          info:'海韵面包房位于第一食堂旁，提供面包、蛋糕、甜品、饮品等美食。价格实惠，是糕点控足不出校的首选去处。',  
          iconPath: "../../images/circle.png",
          latitude: 36.16426947961999,
          longitude: 120.50088970040133,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '海韵面包房',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
         //樱花大道
         {
          id: 5,
          cover: 'https://i.loli.net/2021/05/01/x1HvTL2ByFEmzCX.jpg',
          info:
          "樱花大道为中国海洋大学崂山校区五子顶西侧公路，是校园内最具特色的道路之一。每年春天樱花绽放的时节，道路旁便会开满樱花，美景宜人。有两排樱花树的树枝相连在一起，组成了一条天然的“樱花隧道”，格外抢眼。该路包括原海源南路、海源中路、敏行中路。途经南门、图书馆直到北门。",     
          iconPath: "https://i.loli.net/2021/05/29/EQTWOZ21UpRJeBa.png",
          latitude: 36.1635904692104,
          longitude: 120.50027829643796,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '樱花大道',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
         //五子顶
         {
          id: 6,
          cover: 'https://i.loli.net/2021/05/31/jIDkcalSnV9B2X3.jpg',
          info:'五子顶是崂山校区校园内的一座小山，寓意“五子登科”。山上有防空洞，环绕五子顶的小路也恰巧为一个“心”形，为校园添加了几分神秘而浪漫的气息。可朝登五子顶，看校园霞光万丈，俯瞰海大红瓦绿树。可约三两好友，在这里一同探访秋日里肆意绽放的甘菊，或是找寻春夏盛开的香甜槐花。',  
          iconPath: "https://i.loli.net/2021/05/29/aefhqO4p39PLHkU.png",
          latitude: 36.160832734158454,
          longitude: 120.50035263631457,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '五子顶',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
        //图书馆
        {
          id: 7,
          cover: 'https://i.loli.net/2021/05/23/QzIYLT5HrthcfER.jpg',
          info:'位于南门附近的地标建筑，是学生借阅书籍和自习的最佳去处。2007年崂山图书馆投入使用，功能布局科学，设备配置先进，自动化程度较高，馆藏纸质图书报刊文献约250万册、中外文电子书刊500余万册、数据库303个。图书馆一贯秉承“一切为了读者”的服务理念，致力于为读者提供温馨、便捷的服务。',  
          iconPath: "https://i.loli.net/2021/06/03/PEtR2hOxIWzAUTw.png",
          latitude: 36.15823549315137,
          longitude: 120.49697844312811,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '图书馆',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
        
         //南门
         {
          id: 8,
          cover: 'https://i.loli.net/2021/05/24/XHqcWjFNUt1Ggdr.jpg',
          info:'中国海洋大学崂山校区南门公交站：海大路、海大路、新源路、株洲路东站(S293)、海大崂山校区、株州路东站、海大崂山校区、海大崂山校园、枯桃花卉市场  附近的公交车：110路、125路、381路、386路环线、世园专线7路、382路环线、311路、619路、628路、383路、384路环线、385路、387路、388路环线、617路、世园快线2路、世园专线5路、114路区间、114路、119路、119路支路、126路定点延长',       
          iconPath: "../../images/circle.png",
          latitude: 36.15815548604038,
          longitude: 120.49325050010543,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '南门',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
         //树下空间
         {
          id: 9,
          cover: 'https://i.loli.net/2021/06/01/U81xoV43z5XMCBu.jpg',
          info:'树下空间，是在崂山校区原第八教学区及外部平台基础上建立的，以学习、生活、交流为主要功能的公共开放空间。空间特设讲座空间，多功能展示厅，讨论空间，预约讨论室，微型图书馆，工作坊，接待室，学术报告厅，满足学校师生开放性学习交流的需求。此外，树下空间将教学区和咖啡厅结合，使得师生在紧张的学习氛围下能够品尝优质咖啡等饮品，放松心情。',  
          iconPath: "https://i.loli.net/2021/06/02/P2vTV7gJHLdYmNc.png",
          latitude: 36.1618045408195,
          longitude: 120.49785989968382,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '树下空间',  //名称文本
            color: '#000000',  //文本颜色
            borderRadius: 5,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#ffffff',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
          //映月湖
          {
            id: 10,
            cover: 'https://i.loli.net/2021/05/31/htR7SmcDkoipq64.jpg',
            info:'映月湖位于图书馆前方。秋夜可闻寒蝉凄切，夏日可赏出水芙蓉。天气放晴时，可在湖边亭看云卷云舒。夜晚漫步湖边，可赏荡漾水波，品一轮风月。',  
            iconPath: "https://i.loli.net/2021/05/29/EHmy1ODp9AkwFlC.png",
            latitude: 36.158395995280245,
            longitude: 120.49575118836287,
            width: 50,
            height: 50,
            callout: {
              display:'ALWAYS',// 常显气泡
              content: '映月湖',  //名称文本
              color: '#000000',  //文本颜色
              borderRadius: 5,  //边框圆角
              borderWidth: 1,  //边框宽度
              borderColor: '#ffffff',  //边框颜色
              bgColor: '#ffffff',  //背景色
              padding: 5,  //文本边缘留白
              textAlign: 'center'  //文本对齐方式。有效值: left, right, center
            }
          },
           //九球广场
           {
            id: 11,
            cover: 'https://i.loli.net/2021/05/24/FRle7x1OJGz29Sf.jpg',
            info:'九球广场因正中有九个圆圆的石球而得名。环形长廊和它上面的紫藤萝围绕着整个广场。当樱花的光辉随着天气变热悄悄褪去的时候，紫藤萝便在九球广场怒放了。在长廊里闻着花香，看着紫色的紫藤萝瀑布可谓心旷神怡。',
            iconPath: "../../images/circle.png",
            latitude: 36.16322479303451,
            longitude: 120.49811982677102,
            width: 50,
            height: 50,
            callout: {
              display:'ALWAYS',// 常显气泡
              content: '九球广场',  //名称文本
              color: '#000000',  //文本颜色
              borderRadius: 5,  //边框圆角
              borderWidth: 1,  //边框宽度
              borderColor: '#ffffff',  //边框颜色
              bgColor: '#ffffff',  //背景色
              padding: 5,  //文本边缘留白
              textAlign: 'center'  //文本对齐方式。有效值: left, right, center
            }
          },
          //海洋科技楼
          {
           id: 12,
           cover: 'https://i.loli.net/2021/05/23/fA7kiZXHWYrdu6E.jpg',
           info:'海洋科技中心大楼项目位于学校崂山校区西门南侧，建筑面积约36000㎡，建筑高度76.50米，地上14层，地下2层。主要包含实验室、教研室、科研办公室、会议中心等，是一栋集科研、教学、办公、会议等为一体的综合性建筑。位于学校滨海大道校门主入口，与综合体育馆遥相呼应，是学校崂山校区标志性建筑之一。大楼的投入使用，使学校拥有了集海洋环境、海洋化学、海洋地球和海洋工程为一体的，特色显著、多元化的海洋科技研发试验平台，为学校建设世界一流的海洋科技研发团队提供支撑。',  
           iconPath: "https://i.loli.net/2021/05/29/IYCOziJ41DFaymM.png",
           latitude: 36.16388476288154,
           longitude: 120.4961677786165,
           width: 50,
           height: 50,
           callout: {
             display:'ALWAYS',// 常显气泡
             content: '海洋科技楼',  //名称文本
             color: '#000000',  //文本颜色
             borderRadius: 5,  //边框圆角
             borderWidth: 1,  //边框宽度
             borderColor: '#ffffff',  //边框颜色
             bgColor: '#ffffff',  //背景色
             padding: 5,  //文本边缘留白
             textAlign: 'center'  //文本对齐方式。有效值: left, right, center
           }
         },
          //孔子雕像
          {
           id: 13,
           cover: 'https://i.loli.net/2021/05/24/EkjqaeF1WX8Yr2z.jpg',
           info:'孔子雕像位于樱花大道和梧桐大道的交叉路口处，图书馆前的映月湖旁，是于2009年由俄罗斯国际基金会《文化交流·同一世界》与中国孔子基金会联合馈赠。孔子雕像高约2米，下面有一个高约半米的花岗岩底座。孔子雕像双手作揖，面目和蔼可亲。整座雕像采用青铜铸造，不加底座雕像本身重达0.4吨。这尊孔子像是校园人文教育的标志性景点，弘扬中华文明的同时也时刻鞭策海大学生投入到学习中。',  
           iconPath: "https://i.loli.net/2021/05/29/u5QawdLJf8zlcI1.png",
           latitude: 36.1584450000000,
           longitude: 120.4950660000000,
           width: 50,
           height: 50,
           callout: {
             display:'ALWAYS',// 常显气泡
             content: '孔子雕像',  //名称文本
             color: '#000000',  //文本颜色
             borderRadius: 5,  //边框圆角
             borderWidth: 1,  //边框宽度
             borderColor: '#ffffff',  //边框颜色
             bgColor: '#ffffff',  //背景色
             padding: 5,  //文本边缘留白
             textAlign: 'center'  //文本对齐方式。有效值: left, right, center
           }
         }
    ]


module.exports = {
    site
}