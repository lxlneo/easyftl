/**
 * Created by neo on 2016/8/26.
 * 初始化模板引擎
 */
var fs = require('fs');
var template = {};
template.hbs = function(){
    console.log('----------hbs------------');


}
template.ftl = function(){
    console.log('----------ftl------------');
}

module.exports =  template;
