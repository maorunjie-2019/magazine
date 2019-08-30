export class Request{
    getData(options){
        const defaultOptions = {
            baseUrl:"https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine",
            url:"",
            success:function(res){
                console.log(res);
            },
            fail:function(error){
                console.log(error);
            }
        }
        const finalOptions = Object.assign({},defaultOptions,options);
        wx.request({
            url:finalOptions.baseUrl+finalOptions.url,
            success:finalOptions.success,
            fail:finalOptions.fail
        });
    }
}