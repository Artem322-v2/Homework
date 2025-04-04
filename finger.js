const finger = Number(prompt('Введи номер пальца правой руки, смотря на ладонь'));

let fingerName;

switch (finger) {
    case 1:
        fingerName = 'Мизинец';
        break;
    case 2:
        fingerName = 'Безымянный палец';
        break;
    case 3:
        fingerName = 'Средний палец';
        break;
    case 4:
        fingerName = 'Указательный палец';
        break;
    case 5:
        fingerName = 'Большой палец';
        break;
    default:
        fingerName = 'Неверный номер пальца';
}

console.log(fingerName)
