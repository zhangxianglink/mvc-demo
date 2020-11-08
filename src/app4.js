import $ from 'jquery';
import './app4.css';


const app4Html = `<section id="app4">
                    <div class="cricle">
                    </div>
                    </section>`;
$(app4Html).appendTo('body > .page');

const $app4 = $("#app4 .cricle");
$app4.on('mouseenter',() => {
    $app4.addClass('active');
}).on('mouseleave', () => {
    $app4.removeClass('active');
});