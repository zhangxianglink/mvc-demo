import $ from 'jquery';
import './app3.css';

const $app3 = $('#app3 .sequare');
$app3.on('click',(e) => {
    $app3.toggleClass('active')
});