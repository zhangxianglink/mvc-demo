import $ from 'jquery';
import './app3.css';

const $app3 = $('#app3 .sequare');
const key = 'app3 click';
const localKey = localStorage.getItem(key) === 'yes';

$app3.toggleClass('active',localKey);


$app3.on('click',(e) => {
    if($app3.hasClass('active')){
        $app3.removeClass('active');
        localStorage.setItem(key,'no');
    }else{
        $app3.addClass('active');
        localStorage.setItem(key,'yes');
    }
});