import {observable, action, decorate} from 'mobx';

class Store{
constructor(){
    this.time= new Date()
    this.interval=setInterval(()=>{
        this.time = new Date()
    } , 1000)
}
pauseClock(){
    clearInterval(this.interval)

}
startClock(){
    this.interval=setInterval(()=>{
        this.time = new Date()
    } , 1000)

}

    
}
decorate(Store, {
    time: observable,
    pauseClock:action,
    startClock:action,
    
})

 const store = new Store()
 export default store