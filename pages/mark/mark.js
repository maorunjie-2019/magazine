// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userinfo:null,
      isSetted:false,
      scrollTop:0
  },

  getuserinfo:function(e){
    if(!e.detail.rawData){
      return;
    }
    const userinfo = e.detail.userInfo;
    this.setData({
      userinfo,
      isSetted:true
    });
  },
  initUserInfo:function(){
    let that = this;
    new Promise(function(resolve,reject){
      wx.getSetting({
        success:function(res){
          resolve(res)
        }
      });
    }).then(function(res){
      let isSetted = res.authSetting["scope.userInfo"];
      if(isSetted){
        that.setData({
          isSetted:true
        });
        return new Promise(function(resolve,reject){
          wx.getUserInfo({
            success:function(res){
              resolve(res);
            }
          });
        });
      }
    }).then(function(res){
      if(!res){
        return;
      };
      that.setData({
        userinfo:res.userInfo
      });
    });
  },
  setDataArticleList:function(){
    let likeArticleList = wx.getStorageSync("like");
    this.setData({
      likeArticleList
    });
  },
  resetArticleList:function(e){
    let articleUnLike = e.detail.article;
    let likeArticleList = this.data.likeArticleList;
    likeArticleList.forEach((item,index)=>{
      if(item.artId == articleUnLike.artId){
        likeArticleList.splice(index,1);
        console.log(likeArticleList);
        this.setData({
          likeArticleList:likeArticleList
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("loadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadloadload");
    this.initUserInfo();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      scrollTop:0
    });
    this.setDataArticleList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})