const PENDING = Symbol('pending')
 const FULFILLED = Symbol('resolved')
 const REJECTED = Symbol('reject')
 function MyPromise(fn){
     if(typeof fn!=='function'){
         throw new Error('fn must be a function')
     }
     let state = PENDING
     let value = null
     let handler = {}
     function resolve(result){
         try{
             state=FULFILLED
             value=result
             handler.onFulfill(value)
         }catch(err){
             reject(err)
         }
     }
     function reject(error){
         state=REJECTED;
         value=error;
     }
     this.then=(onFulfill,onReject)=>{
         switch(state){
             case FULFILLED:onFulfill(value) 
                 break
             case REJECTED:onReject(value)
                 break
             case PENDING:handler = { onFulfill,onReject }
         }
     }
     fn(resolve,reject)
 }
 let p=new MyPromise((resolve,reject)=>{
     setTimeout(()=>{
         console.log(3,' setTimeout ')
         resolve('hello promise')
     },3000)
 })
 console.log(1,p)
 p.then((val)=>{
     console.log(4,val)
 })
 console.log(2,'哈哈')