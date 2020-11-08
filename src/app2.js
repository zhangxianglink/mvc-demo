import $ from 'jquery';
import './app2.css'

const $tarBar =  $('#app2 .tar-bar');
const $tarContent =  $('#app2 .tar-content');
const key = "app2 index";
const localKey = localStorage.getItem(key)  || 1;

$tarBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('pink').siblings().removeClass('pink');
    const index = $li.index();
    localStorage.setItem(key,index);
    $tarContent.children().eq(index).addClass('active')
    .siblings().removeClass('active');
});

$tarBar.children().eq(localKey).trigger('click');
