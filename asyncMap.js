/**
 * Created by dllo on 2017/5/2.
 */
var async = require('async');

var class1217 = [
    {name: '文冠龙', age: 999,delay:500},
    {name: '李青', age: 998,delay:200},
    {name: '刁刁', age: 997,delay:1000},
    {name: '班长', age: 996,delay:500},
    {name: '于谦义', age: 995,delay:1000}

];


// map与each相同都是对列表中每个元素进行处理，不过map有返回。
//each: 如果想对同一个集合中的所有元素都执行同一个异步操作。
// map: 对集合中的每一个元素，执行某个异步操作，得到结果。所有的结果将汇总到最终的callback里。与each的区别是，each只关心操作不管最后的值，而map关心的最后产生的值。
//我的理解是,如果在map里面做运算,map最后会返回运算后的结果
//同样的代码改成each 是undefind,这就证明了each只关心过程,但是他并不会返回结果
//map会返回最后产生的值





//map
async.map(class1217, function (item, callback) {

    console.log(item);
}, function done(error,results) {
    console.log(results);
});
// 执行结果:
//文冠龙1493723962902
// 李青1493723962923
// 刁刁1493723962925
// 班长1493723962925
// 于谦义1493723962925



// mapLimit 比map 多了一个参数,可以写个数,比如上面的那个数组,如果写4的话
//就只执行四个,第五个元素就不执行了,但是如果写超过数组的数,比如说6个
//也只返回数组里所有元素,不会返回再多的数据
async.mapLimit(class1217,4, function (item, callback) {

    var date = new Date();
    var time = date.getTime();
    // console.log( item.name + time);
}, function done(error) {
    // console.log(error);
});


//mapSeries 和map一样 但是逐个执行的
async.mapSeries(class1217, function (item, callback) {

    var date = new Date();
    var time = date.getTime();
    // console.log( item.name + time);
    callback(null,item);
}, function done(error,results) {
    console.log(error,results);
});




//mapValues 看起来和map的执行顺序一样,但是它输出的是obj对象,把整个元素都输出来
//并没有只返回value值
async.mapValues(class1217, function (file, key, callback) {
   // console.log(file);
}, function(err, result) {

});
//{ name: '文冠龙', age: 999, delay: 500 }
// { name: '李青', age: 998, delay: 200 }
// { name: '刁刁', age: 997, delay: 1000 }
// { name: '班长', age: 996, delay: 500 }
// { name: '于谦义', age: 995, delay: 1000 }


//mapValuesLimit
//和上面的功能一样,但是他只返回第二个参数,规定数量的元素,如果规定数量超过了原数组
//就只显示原数组的所有元素,不会有重复
async.mapValuesLimit(class1217,1, function (file, key, callback) {
    // console.log(file);
}, function(err, result) {

});








//mapValuesSeries顺序执行异步处理函数。
async.mapValuesSeries(class1217, function (item, callback) {

    var date = new Date();
    var time = date.getTime();
    console.log( item.name + time);

}, function done(error,results) {
    console.log(error,results);
});

