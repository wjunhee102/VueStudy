var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello Vue.js!',
        list : ['사과', '딸기', '바나나'],
        btn : "버튼",
        show : true,
        btn2 : "트랜지션",
        scroll : 0,
        count : 0
    },
    mounted: function() {
        this.scroll = 100 // 요소의 스크롤 양 조작하기
        const ol = document.querySelectorAll("li");
            for(let i = 0; i < ol.length; i++) {
                if(ol.classList == "on") {
                    ol.classList.remove("on");
                }
            }
        console.log(ol);
    },
    methods: {
        handleClick : function() {
            let msg = this.message;
            if(msg === 'Hello Vue.js!') {
                this.message = "눌러따!";
            } else {
                this.message = "Hello Vue.js!";
            }
            
        },
        addEle : function() {
            let list = this.list;
            list.push(this.message); 
            this.message = "";   
            // console.log(list.length);
        },
        increment: function() {
            this.count += 1;
        },
        AudioParam: function() {
            setTimeout(()=> {this.count++}, 100); 
        },
        onClickEvent: function(e) {
            const on = e.target.classList
            if(e.target.classList == "on") {
                on.remove("on");
            } else {
                on.add("on");
            }
            // console.log(e.target.innerHTML, on);
        },
        removeList: function() {
            const li = document.querySelectorAll(".on");
            
            // console.log(li);
            for(let i = 0; i < li.length; i++) {
                const p = li[i].querySelector("p");
                // console.log(p.innerHTML);
                for(let num = 0; num < this.list.length; num++) {
                    if(this.list[num] === p.innerHTML) {
                        this.list.splice(num, 1);
                        num = this.list.length;
                    }
                }
            }
            const ol = document.querySelectorAll("li");
            for(let i = 0; i < ol.length; i++) {
                if(ol.classList == "on") {
                    ol.classList.remove("on");
                }
            }
        }
    }
})




// class Number {
//     constructor() {
//         this.number = 273
//     }
//     print(){
//         console.log(this.number)
//     }
// }

// function foo() {
//     console.log(this.aa);
// }
// let roo = {
//     aa : 123,
//     bb : foo()
// }
// roo.bb;
// foo.call(roo);
// foo.apply(roo);

// var number = new Number();

// number.print();
// number.print();
// number.print();
