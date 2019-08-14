let sleep=function(ms){
    let resolve=function(){
        console.log('呵呵呵')
    };
    let fn = function(){
        setTimeout(()=>{
            resolve()
        },ms)
        return fn
    } 
    Function.prototype.then=function(fun){
        resolve=fun;
    }
    return fn();
}
sleep(3000).then(()=>{console.log('哈哈哈')})