// new Vue({
//     el: '#app',
//     data() {
//         return {
//            userId: '',
//            userPw: '' 
//         }
//     }
// })

let app = new Vue({
    el: '#app',
    data() {
        return {
            dropdown: {
                on : true,
                off : false
            },
            items: [
               {
                   id: 1,
                   image: 'https://picsum.photos/210/118/?image=1',
                   title: '컴퓨터'
               },
               {
                   id: 2,
                   image: 'https://picsum.photos/210/118/?image=100',
                   title: '해변'
               },
               {
                   id: 3,
                   image: 'https://picsum.photos/210/118/?image=160',
                   title: '휴대폰'
               },
               {
                   id: 4,
                   image: 'https://picsum.photos/210/118/?image=200',
                   title: '황소'
               }
           ]
        }
    }
})
