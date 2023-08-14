import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../components/Button';

export const DUMMY_PRODUCTS = [
  {
    title: ' iPhone 13 ',
    price: 57700,
    id: 'e1ndaskxe',
    description: `
    Тип	OLED
    Размер	6.1 дюймов
    Разрешение	1170 x 2532 пикселей
    Соотношение сторон	19.5:9
    Плотность пикселей	460 точек на дюйм
    Частота обновления	60 Гц
    Адаптивная частота обновления	Нет
    Макс. заявленная яркость	800 нит
    Макс. заявленная яркость в HDR	1200 нит
    Поддержка HDR	Да, Dolby Vision
    Защита дисплея	Ceramic Shield
    Соотношение экрана к корпусу	86%
    Особенности	- DCI-P3
    `,
    image:
      'https://katensa.com/store/wp-content/uploads/2021/10/iPhone-13-128-GB-katensa-celulares-credito-oferta-la-mejor-tienda-en-linea-barranquilla-colombia-azul.jpg',
  },
  {
    title: 'iPhone 11',
    price: 30700,
    id: 'e242kjkx',
    image:
      'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750622733533l.jpg',
    description: `Тип	IPS LCD
      Размер	6.1 дюймов
      Разрешение	828 x 1792 пикселей
      Соотношение сторон	19.5:9
      Плотность пикселей	326 точек на дюйм
      Частота обновления	60 Гц
      Адаптивная частота обновления	Нет
      Макс. заявленная яркость	625 нит
      Поддержка HDR	Да, Dolby Vision
      Защита дисплея	Закаленное стекло
      Соотношение экрана к корпусу	79%
      Особенности	- DCI-P3`,
  },
  {
    title: ' iPhone 14 Pro Max ',
    price: 107700,
    id: 'e3fpso1m',
    description: `
    экран 6,7″, Super Retina XDR OLED, 1290 × 2796 точек, 460 ppi, 120 Гц, HDR10, Dolby Vision, пиковая яркость — 2000 нит;
шестиядерный процессор Apple A16 Bionic, 4 нм, 3,46 ГГц;
оперативная память 6 ГБ;
встроенная память 128, 256, 512 ГБ или 1 ТБ;
карта памяти — нет;
две SIM-карты (SIM + eSIM);
основная камера 48 Мп, f/1,8, 24 мм (экв.), Dual Pixel PDAF, sensor-shift OIS, LED-вспышка + 12 Мп, f/2,2, 13 мм (экв.), Dual Pixel PDAF + 12 Мп, f/2,8, 77 мм (экв.), 3x зум, фазовый автофокус (PDAF), OIS;
фронтальная камера: 12 Мп, 23 мм (экв.), f/1,9;
поддержка 4G и 5G, Wi-Fi 6, Bluetooth 5.0, Lightning;
A-GPS, ГЛОНАСС, GALILEO, BDS, QZSS;
аккумулятор 4323 мА·ч, несъёмный, поддерживается быстрая проводная зарядка 18 Вт, беспроводная зарядка MagSafe 15 Вт.
    `,
    image:
      'https://media-cdn.bnn.in.th/234767/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_1-square_medium.jpg',
  },
];

export const Products = () => {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <PhoneContainer>
        <MiniContainer>
          {DUMMY_PRODUCTS.map((phone) => {
            return (
              <Phone
                style={{ cursor: 'pointer' }}
                onClick={() => clickHandler(phone.id)}
                key={phone.id}
              >
                <img src={phone.image} alt="" />
                <h1>{phone.title}</h1>
                <h1>{phone.price} сом</h1>
              </Phone>
            );
          })}
        </MiniContainer>
        <Button></Button>
      </PhoneContainer>
    </>
  );
};
const MiniContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #dfdfdf;
  width: 100%;
  height: 70vh;
  padding: 40px 0;
`;
const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 350px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 1px 6px 35px 2px rgba(34, 60, 80, 0.2);
  & > img {
    width: 100%;
  }
`;
