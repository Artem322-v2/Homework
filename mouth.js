const mouth = Number(prompt('Введи номер месяца'));
let mouthName;

switch (mouth) {
    case 1:
        mouthName = 'Январь';
        break;
    case 2:
        mouthName = 'Февраль';
        break;
    case 3:
        mouthName = 'Март';
        break;
    case 4:
        mouthName = 'Апрель';
        break;
    case 5:
        mouthName = 'Май';
        break;
    case 6:
        mouthName = 'Июнь';
        break;
    case 7:
        mouthName = 'Июль';
        break;
    case 8:
        mouthName = 'Август';
        break;
    case 9:
        mouthName = 'Сентябрь';
        break;
    case 10:
        mouthName = 'Октярь';
        break;
    case 11:
        mouthName = 'Ноябрь';
        break;
    case 12:
        mouthName = 'Декабрь';
        break;
    default:
        mouthName = 'Неверный месяц';
}

console.log(mouthName); 