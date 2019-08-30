// components/articleList/cmp.js
import {Data} from "../../utils/data";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[]
    },
    magazineId:{
      type:String,
      value:"0",
      observer:function(){
        this.resetPageData();
      }
    },
    scrolltop:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    isNoMoreData:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeArticleList:function(e){
      this.triggerEvent("changeArticleList",{article:e.detail.article});
    },
    resetPageData:function(){
      this.setData({
        loading:false,
        isNoMoreData:false,
        articleList:[],
        scrolltop:0
      });
    },
    setDataArticleListWithMore:function(newData){
      this.setData({
        articleList:this.properties.articleList.concat(newData)
      });
    },
    showLoading:function(){
      this.setData({
        loading:true
      });
    },
    isNoMoreData:function(newData){
      if(newData == undefined){
        return true;
      }
      if(newData.length == 0){
        this.setData({
          isNoMoreData:true
        });
        return true;
      }else{
        this.setData({
          isNoMoreData:false
        });
        return false;
      }
    },
    isLoading:function(){
      if(this.data.loading){
        return true;
      }else{
        return false;
      }
    },
    hideLoading:function(){
      this.setData({
        loading:false
      });
    },
    loadMoreData:function(){
      if(this.isLoading() || this.data.isNoMoreData){
        return;
      }
      this.showLoading();
      let getArticleList = new Data().getIndexArticleList(this.properties.magazineId,this.properties.articleList.length);
      let that = this;
      getArticleList.then(function(res){
        that.hideLoading();
        if( that.isNoMoreData(res.data.data) ){
          return;
        }
        that.setDataArticleListWithMore(res.data.data);
      },function(error){
        // that.setData({
        //   loading:false
        // });
      });
    }
  }
})
