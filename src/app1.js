import $ from 'jquery'
import './app1.css'

const m = {
    data: {
        n : parseInt(localStorage.getItem('n'))
    }
}

const v = {
    el : null,
    app1Html : `<div>
        <div class="output">
            <span id='number'>{{n}}</span>
        </div>
        <div class="actions">
            <button id='add1'>+2</button>
            <button id='subtract2'>-2</button>
            <button id='mulitply3'>*2</button>
            <button id = 'divide4'>/2</button>
        </div>
        </div>
        `,
    init(container,n){
        //将事件绑定在index.html<section/> 
        v.el = $(container);
        //<section/> 填充页面
        v.render(n);
    },
    render(n){
        if(v.el.children().length !== 0){
            v.el.empty();
        }
        $(v.app1Html.replace('{{n}}',n)).appendTo(v.el);
    }
}


const c = {
    init(container){
        v.init(container,m.data.n);
        c.autoBindEvents();
    },
    events : {
        "click,#add1" : "add",
        "click,#subtract2" : "subtract",
        "click,#mulitply3" : "mulitply",
        "click,#divide4" : "divide"
    },
    add(){
        m.data.n += 2;
        v.render(m.data.n);
    },
    subtract(){
        m.data.n -= 2;
        v.render(m.data.n);
    },
    mulitply(){
        m.data.n *= 2;
        v.render(m.data.n);
    },
    divide(){
        m.data.n /= 2;
        v.render(m.data.n);
    },
    autoBindEvents(){
        for(let key in this.events){
            const value = c[c.events[key]];
            const index = key.indexOf(',');
            v.el.on(key.slice(0,index), key.slice(index + 1), value);
        }
    }
}


export default c;