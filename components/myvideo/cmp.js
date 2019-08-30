// components/myvideo/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc:String,
    posterSrc:String,
    mainTitle:String,
    videoId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    posterShow:true
  },

  lifetimes:{
    attached:function(){
      const videoContext = wx.createVideoContext(this.properties.videoId,this);
      this.setData({
        videoContext:videoContext
      });
    }

  },
  /**
   * 组件的方法列表
   */
  methods: {
    ontap:function(){
      this.setData({
        posterShow:false
      });
      this.data.videoContext.play();
    }

  }
})
