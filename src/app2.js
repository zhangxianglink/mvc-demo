import $ from 'jquery';
import './app2.css'

const $tarBar =  $('#app2 .tar-bar');
const $tarContent =  $('#app2 .tar-content');

$tarBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('pink').siblings().removeClass('pink');
    const index = $li.index();
    $tarContent.children().eq(index).addClass('active')
    .siblings().removeClass('active');
});

$tarBar.children().eq(1).trigger('click');
