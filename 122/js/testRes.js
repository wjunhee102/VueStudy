

class TestRes {
    constructor( middle, end, rep, att, name){
        if(!name) {
            this.middle = 100;
            this.end = 100;
            this.rep = 100;
            this.att = 100;
            this.name = "error";
            return
        }
        this.middle = middle;
        this.end = end;
        this.rep = rep;
        this.att = att;
        this.name = name;
    } 

    sum() {
        const sumScore = this.middle + this.end + this.rep + this.att;
        return sumScore;
    }

    record() {
        const score = this.sum();
        let res;
        const record = ["error", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

        let TScore = Math.floor(score/5) - 10;

        let order = ()=>{
            let num = record.length - TScore 
            if(score >= 100) {
                if(score > 100) {
                    num = 0;
                } else {
                    num = 1;
                }
            } else if(TScore < 1) {
                num = record.length -1;
            } else {
                num = record.length - TScore 
            } 
            return num;
        }
        
        if(score <= 100 && score >= 95) {
            res = "A+";
        } else if(score <= 94 && score >= 90) {
            res = "A";
        } else if(score <= 89 && score >= 85) {
            res = "B+";
        } else if(score <= 84 && score >= 80) {
            res = "B";
        } else if(score <= 79 && score >= 75) {
            res = "C+";
        } else if(score <= 74 && score >= 70) {
            res = "C";
        } else if(score <= 69 && score >= 65) {
            res = "D+";
        } else if(score <= 64 && score >= 60) {
            res = "D";
        } else if(score <= 59) {
            res = "F";
        } else {
            res = "error";
        }
        res = record[order()];

        return res
    }
}

class AllTestRes {
    constructor(){
        this.AllScore = arguments;
    }

    sum() {
        let AllScore = this.AllScore;
        let scoreSum = 0;
        for(let i = 0; i < AllScore.length; i++) {
            scoreSum += AllScore[i];
        }
        return scoreSum;
    }

    avg() {
        let Avg = this.sum()/this.AllScore.length
        return Avg;
    }
}

const classA = ["Kim", "Choi", "Park", "Lee", "Han"];

const Kim = new TestRes(22, 32, 12, 10, classA[0]);
const Choi = new TestRes(25, 35, 19, 10, classA[1]);
const Park = new TestRes(28, 36, 17, 10, classA[2]);
const Lee = new TestRes(21, 33, 20, 9, classA[3]);
const Han = new TestRes(27, 37, 15, 10, classA[4]);
const ex = new TestRes(30, 40, 20, 10, "ex");
const fa = new TestRes(39, 10, 5, 5, "fa");

const AClass = new AllTestRes(Kim.sum(), Choi.sum(), Park.sum(), Lee.sum(), Han.sum());

console.log(Kim.sum() ,Kim.record());
console.log(Choi.sum() ,Choi.record());
console.log(Park.sum() ,Park.record());
console.log(Lee.sum() ,Lee.record());
console.log(Han.sum() ,Han.record());
console.log(ex.sum(), ex.record());
console.log(fa.sum(), fa.record());
console.log(AClass.avg());



let Test = new Vue({
    el : "#APP",
    data() {
        return {
            items : [

            ]
        }
    },
    render: function (createElement) {
        return createElement('div',
          Array.apply(null, { length: 20 }).map(function () {
            return createElement('p', 'hi')
          })
        )
    }
})


function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
  }
  
  // 1초 지체 후 bloom 선언
  LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.declare.bind(this), 1000);
  };
  
  LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
      this.petalCount + ' petals!');
  };
  
  var flower = new LateBloomer();
  flower.bloom();


