//这里用来存储地名
const site = 
[
    //二五广场
    {
      id: 0,
      iconPath: "../../images/default.png",
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
        iconPath: "../../images/default.png",
        latitude: 36.16480697129505,
        longitude: 120.49734357232705,
        width: 50,
        height: 50,
        callout: {
          display:'ALWAYS',// 常显气泡
          content: '体育馆',  //名称文本
          color: '#000000',  //文本颜色
          borderRadius: 5,  //边框圆角
          borderWidth: 1,  //边框宽度
          borderColor: '#ffffff',  //边框颜色
          bgColor: '#ffffff',  //背景色
          padding: 5,  //文本边缘留白
          textAlign: 'center'  //文本对齐方式。有效值: left, right, center
        }
      },
    //二餐
      {
        id: 2,
        iconPath: "../../images/default.png",
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
        iconPath: "../../images/default.png",
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
          iconPath: "../../images/default.png",
          latitude: 36.16426947961999,
          longitude: 120.50088970040133,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '海韵面包坊',  //名称文本
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
          iconPath: "../../images/default.png",
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
          iconPath: "../../images/default.png",
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
          iconPath: "../../images/default.png",
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
         //西门
         {
          id: 8,
          cover: 'https://i.loli.net/2021/05/01/x1HvTL2ByFEmzCX.jpg',
          info:'中国海洋大学（Ocean University of China，OUC），位于山东省青岛市，是中华人民共和国教育部直属的综合性全国重点大学，位列世界一流大学建设高校（A类）、985工程、211工程，入选2011计划、111计划、强基计划、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家大学生创新性实验计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校，为中欧精英大学联盟、北极大学、国际南极学院、国际涉海大学联盟成员，全国首批博士、硕士学位授予单位。',     
          iconPath: "../../images/default.png",
          latitude: 36.16503530159414,
          longitude: 120.49546740029018,
          width: 50,
          height: 50,
          callout: {
            display:'ALWAYS',// 常显气泡
            content: '西门',  //名称文本
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
          iconPath: "../../images/default.png",
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
            iconPath: "../../images/default.png",
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
            iconPath: "../../images/default.png",
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
           //海洋科技大楼
           {
            id: 12,
            iconPath: "../../images/default.png",
            latitude: 36.16388476288154,
            longitude: 120.4961677786165,
            width: 50,
            height: 50,
            callout: {
              display:'ALWAYS',// 常显气泡
              content: '海洋科技大楼',  //名称文本
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
            iconPath: "../../images/default.png",
            latitude: 36.15830821844382,
            longitude: 120.4949309462146,
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