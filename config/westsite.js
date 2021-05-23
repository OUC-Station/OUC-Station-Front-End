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
          }
    ]


module.exports = {
    site
}