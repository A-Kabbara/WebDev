Vue.component('Global', {
    template: '<div>BMI is calculated using your weight and height!</div>',
});
var component1 = {
    template: '<div><global></global>BMI is used to estimate your risk of a heart attack, along with your blood pressure and other factors.</div>',
};  
var component2 = {
    template: '<div><component1></component1>Please note: This does not apply to people with large amount of muscle mass.</div>',
};

/* My vue global componenet adding text to each componenet */

var ComponentsWithVue = new Vue({
    el: '#ComponentsWithVue',
    data:{
        text: 'Dont Worry, What is nice about knowing your BMI is you can change it if you put in the work and effort! Think of it as a way to keep you accountable.',
    },
    components: {
        component1,
        component2,
}
})

/*Declating components plus adding a bit of text aswell  */


new Vue({
    el: '#Creatine',
    data: {
      show: false
    }
  })

/* This is my button ocmponent, the text dosent dispay on screen as show is set to fasle,
once the button is pressed and the fucntio is pressed my text shows */
  
/* 
 ====================================================================
var RandomQuote = new Vue({
    el:'#RandomQuote'
    data: {
        RandomNumber: null,
    },
    computed :{
        RandomNbmr: function(){
            var RandomNumber = Math.floor(Math.random(10))
            return RandomNumber;
        }
    }
})

====================================

I tried adding a random quote array of 10 random quotes and having the componenent using the math.random function to pick a random number out of 10 then 
select it in the array. Once that is done it prints out the quotein the array, however i was unable to get it to work due to the lack of vue resources +
i couldn't figure out what was wrong :( 
*/