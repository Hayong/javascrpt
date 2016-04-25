// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if (arr.constructor===Array){
    	return true;
    }else{
    	return false;
    }
}

function isArray(arr) {
	return Array.isArray(arr);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if(typeof(fn)==="function"){
    	return true;
    }else{
    	return false;
    }
}

//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式，并在util.js中实现以下方法：
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    //对非引用类型
    if(src==null||typeof src != 'object'){
        return src;
    }
    //对于日期类型
    if(src instanceof Date){
    	var clone = new Date(src.getDate());
    	return clone;
    }
    //对于Array
    if(src instanceof Array){
    	var clone=[];
    	for()
    }    
}
