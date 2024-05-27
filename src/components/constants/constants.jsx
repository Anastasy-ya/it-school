import laptopIcon from '../../images/laptop-icon.svg';
import paletteIcon from '../../images/palette-icon.svg';
import movieIcon from '../../images/movie-icon.svg';
import busIcon from '../../images/bus-icon.svg';
import coffeeIcon from '../../images/coffee-icon.svg';
import moneyIcon from '../../images/money-icon.svg';

export const options = [
{
  id: 1,
  value: '',
  text: 'Выберите офис'
},
{
  id: 2,
  value: 'Офис 1',
  text: 'Офис 1'
},
{
  id: 3,
  value: 'Офис 2',
  text: 'Офис 2'
},
{
  id: 4,
  value: 'Офис 3',
  text: 'Офис 3'
}];

export const images = [
  {
    name: laptopIcon,
    id: 1,
    title: 'ОБУЧЕНИЕ',
    subtitle: `с понедельника 
по четверг`,
  },
  {
    name: paletteIcon,
    id: 2,
    title: 'МАСТЕР-КЛАССЫ',
    subtitle: `от профессионалов`,
  },
  {
    name: busIcon,
    id: 3,
    title: 'ЭКСКУРСИИ',
    subtitle: `по пятницам`,
  },
  {
    name: coffeeIcon,
    id: 4,
    title: 'ОБЕДЫ',
    subtitle: `В «Крыльях»
и «Гончаров»`,
  },
  {
    name: movieIcon,
    id: 5,
    title: 'РАЗВЛЕЧЕНИЯ',
    subtitle: `отдых после занятий`,
  },
  {
    name: moneyIcon,
    id: 6,
    title: 'ОТ 11 000 ₽',
    subtitle: `За 3-х
недельную смену`,
  }
];

// export default {
//   images,
// }