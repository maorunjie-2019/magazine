import {Request} from "./request";
export class Data extends Request{
    getIndexArticleList(magazineId,start){
        let that = this;
        return new Promise(function(resolve,reject){
            that.getData({
                url:`/getIndexArticleList/${magazineId}/${start}`,
                success:function(res){
                    resolve(res);
                },
                fail:function(error){
                    reject(error);
                }
            });
        });
    }

    getIndexRecomment(magazineId){
        let that = this;
        return new Promise(function(resolve,reject){
            that.getData({
                url:`/getRecommendInfo/${magazineId}`,
                success:function(res){
                    resolve(res);
                },
                fail:function(error){
                    reject(error);
                }
            });
        });
    }

    getMarkTypeList(magazineId){
        let that = this;
        return new Promise(function(resolve,reject){
            that.getData({
                url:`/getMarkTypeList/${magazineId}`,
                success:function(res){
                    resolve(res);
                },
                fail:function(error){
                    reject(error);
                }
            });
        });
    }

}