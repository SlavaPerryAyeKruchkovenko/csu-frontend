import Slide from '@Models/slide';
import car from '@Assets/images/s1.png';
import board from '@Assets/images/s2.png';
import Service from '@Models/service';
import Icon1 from '@Assets/images/ico1.svg';
import Icon2 from '@Assets/images/ico2.svg';
import Icon3 from '@Assets/images/ico3.svg';
import Icon4 from '@Assets/images/ico4.svg';
import Icon5 from '@Assets/images/ico5.svg';

export default class Mock {
    static slides() {
        return [
            new Slide(
                1,
                `Срочная доставка день в день`,
                'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
                car,
                true
            ),
            new Slide(
                2,
                `Подписание договора за 1 час`,
                'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
                board,
                false
            ),
        ];
    }
    static services() {
        return [
            new Service(
                'Расчетать стоимость',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon1
            ),
            new Service(
                'Вызвать курьера',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon2
            ),
            new Service(
                'Оплатить услуги',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon3
            ),
            new Service(
                'Заключить договор',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon4
            ),
            new Service(
                'Предоставить данные',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon5
            ),
        ];
    }
}
