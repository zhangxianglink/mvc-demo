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
    init(container){
        //将事件绑定在index.html<section/> 
        v.container = $(container);
        //<section/> 填充页面
        v.render();
    },
    render(){
        if(v.el === null){
            v.el = $(v.app1Html.replace('{{n}}',m.data.n)).appendTo(v.container);
        }else{
            const newElment = $(v.app1Html.replace('{{n}}',m.data.n));
            v.el.replaceWith(newElment);
            v.el = newElment;
        }
    }
}


const c = {
    init(container){
        v.init(container);
        c.bindEvents();
    },
    bindEvents(){
        v.container.on('click','#add1', () => {
            m.data.n += 2;
            v.render();
        }),
        v.container.on('click','#subtract2', () => {
            m.data.n -= 2;
            v.render();
        }),
       
        v.container.on('click','#mulitply3', () => {
            m.data.n *= 2;
            v.render();
        }),
        v.container.on('click','#divide4', () => {
            m.data.n /= 2;
            v.render();
        })
    }
}


export default c;