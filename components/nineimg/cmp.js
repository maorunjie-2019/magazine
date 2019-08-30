// components/nineimg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:Array,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap:function(e){
      console.log(e.currentTarget.dataset.index);
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls:this.properties.imgSrc,
        current:this.properties.imgSrc[index]
      });
    }
  }
})
