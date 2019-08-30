// components/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article:Object
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    like:false
  },
  lifetimes:{
    attached:function(){
      let that = this;
      const likeList = wx.getStorageSync("like");
      likeList.forEach((item,index)=>{
        if(item.artId == that.properties.article.artId){
          that.setData({
            like:true
          });
        }
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onlike:function(e){
      let likeLocalStorage = wx.getStorageSync("like");
      likeLocalStorage = (likeLocalStorage==""?[]:likeLocalStorage);
      if(e.detail.like){
        likeLocalStorage.unshift(this.properties.article);
      }else{
        likeLocalStorage.forEach(
          (item,index)=>{
            if(item.artId == this.properties.article.artId){
              likeLocalStorage.splice(index,1);
              this.triggerEvent("changeArticleList",{article:this.properties.article});
              return;
            }
          }
        );
      }
      wx.setStorageSync("like",likeLocalStorage);
    }
  }
})
