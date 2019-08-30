// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeItem:{
      type:String,
      value:"0",
      observer:function(newValue){
        console.log(this.properties.activeItem);
        this.setData({
          viewId:"magazine"+this.properties.activeItem
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineTypeArr:["轻芒","兴趣","物质","世界","心事","灵魂"],
    viewId:"magazine0"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap:function(e){
      this.setData({
        activeItem:e.target.dataset.index,
        viewId:"magazine"+e.target.dataset.index
      });

      this.triggerEvent("nav",
        {index:this.data.activeItem},
        {
          
        });
    }
  }
})
