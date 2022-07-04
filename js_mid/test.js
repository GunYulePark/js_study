const user = {
    name:"Mike",
    showName: function(){
        console.log(`hello, ${this.name}`);
    },
};
// user.showName();

let fn = user.showName;
// this가 지워진다. 왜??
// 왜 바로 fn()하면 this.name이 발동이 안되지?
fn(); //error