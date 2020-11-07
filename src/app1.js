import $ from 'jquery'
import './app1.css'

const $button1 = $('#add1');
const $button2 = $('#subtract2');
const $button3 = $('#mulitply3');
const $button4 = $('#divide4');
const $number = $('#number');
const n = localStorage.getItem('n');
$number.text(n || 100);

$button1.on('click', () => {
    let n = parseInt($number.text());
    n += 2;
    localStorage.setItem('n',n);
    $number.text(n);
});

$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 2;
    localStorage.setItem('n',n);
    $number.text(n);
});

$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n',n);
    $number.text(n);
});

$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n',n);
    $number.text(n);
});