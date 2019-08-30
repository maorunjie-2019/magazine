// components/recommend/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:"11月4日"
  },
  lifetimes:{
    attached:function(){
      this.getNowDate();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getNowDate:function(){
      let nowDate = new Date();
      let month = nowDate.getMonth()+1;
      let date = nowDate.getDate();
      this.setData({
        date:month+"月"+date+"日"
      });
    }
  }
})
