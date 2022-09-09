Vue.component('Global', {
    template: '<div>This is global</div>',
});
var component1 = {
    template: '<div><global></global>This is component 1</div>',
};  
var component2 = {
    template: '<div><component1></component1>This is component 2</div>',
};
var app = new Vue({
    el: '#app',
    data:{
        text: 'Hello Vue',
    },
    components: {
        component1,
        component2,
}
})

