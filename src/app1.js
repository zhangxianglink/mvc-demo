import $ from 'jquery'
import './app1.css'

const eventBus = $(window);

const m = {
    data: {
        n : parseInt(localStorage.getItem('n'))
    },
    updateNumber(data){
        Object.assign(m.data,data);
        eventBus.trigger('m:updated');
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
        eventBus.on('m:updated', () => {
            v.render(m.data.n);
        })
    },
    events : {
        "click,#add1" : "add",
        "click,#subtract2" : "subtract",
        "click,#mulitply3" : "mulitply",
        "click,#divide4" : "divide"
    },
    add(){
        m.updateNumber({n : m.data.n += 2});
    },
    subtract(){
        m.updateNumber({n : m.data.n -= 2});
    },
    mulitply(){
        m.updateNumber({n : m.data.n *= 2});
    },
    divide(){
        m.updateNumber({n : m.data.n /= 2});
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