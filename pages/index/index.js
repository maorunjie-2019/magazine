//index.js
//获取应用实例
import {Data} from "../../utils/data";
const app = getApp()

Page({
  data: {
    magazineId:"0"
  },
  _showLoading:function(){
    wx.showLoading({
      title:""
    });
  },
  _hideLoading:function(){
    wx.hideLoading();
  },
  onLoad:function(){
    this.setPageData(0,0);
  },
  onShow:function(){
    this.setPageData(0,0);
    this.setData({
      magazineId:"0"
    });
  },
  onnavtap:function(e){
    if(this.data.magazineId == e.detail.index){
      return;
    }
    this.setData({
      magazineId:e.detail.index
    });
    this.setPageData(e.detail.index,0);
  },
  
  setPageData:function(magazineId,start){
    this.setData({
      articleList:null,
      recommend:null,
      markList:null
    });
    let that = this;
    that._showLoading();
    let getArticleList = new Data().getIndexArticleList(magazineId,start);
    let recommend = new Data().getIndexRecomment(magazineId);
    let markList = new Data().getMarkTypeList(magazineId);
    Promise.all([getArticleList,recommend,markList]).then(
      function(res){
        that._hideLoading();
        that.setData({
          articleList:res[0].data.data,
          recommend:res[1].data.data,
          markList:res[2].data.data
        });
      }
    );
  }
})
