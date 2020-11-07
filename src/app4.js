import $ from 'jquery';
import './app4.css';

const $app4 = $("#app4 .cricle");
$app4.on('mouseenter',() => {
    $app4.addClass('active');
})