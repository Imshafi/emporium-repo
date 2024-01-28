import React from 'react'
import Slider from '../components/Slider/Slider';
import Collections from '../components/Collections/Collections';
import '../assets/css/style.css'
import ProductsGroup from '../components/ProductsGroup/ProductsGroup';
import Header from '../common/Header';



const Home = () => {
  const slidesData = [
    {
      img:'https://www.seasonsemporium.com/cdn/shop/files/Holiday_Solmar_Dress_1920_x_800_f37e1501-9b63-41ce-8035-1e14be15a5b5_1944x.png?v=1692778585',
      url:'/sfsdfsdfsdf',
      heading:'Holiday',
      content:'Shop the latest range'
    },
    {
      img:'https://www.seasonsemporium.com/cdn/shop/files/Website_Banners_1_f99982b1-e68d-4ffe-9048-b3649b7fd620_1944x.png?v=1665471932',
      url:'/sfsdfsdfsdf',
      heading:'Holiday',
      content:'Shop the latest range'
    }
  ];

  const group = [
    {
      img:'https://www.seasonsemporium.com/cdn/shop/collections/Lifestyle_171x.jpg?v=1621556316',
      label:'life style',
      url:'/sdfsfsdfsdf'
    },
    {
      img:'https://www.seasonsemporium.com/cdn/shop/collections/Fashioon_180x.jpg?v=1635902635',
      label:'fashion',
      url:'/sdfsfsdfsdf'
    },
    {
      img:'https://www.seasonsemporium.com/cdn/shop/collections/Beauty_180x.jpg?v=1621554569',
      label:'Beauty & body',
      url:'/sdfsfsdfsdf'
    },
    {
      img:'https://www.seasonsemporium.com/cdn/shop/collections/Jewellery_180x.jpg?v=1605480800',
      label:'Jewellery',
      url:'/sdfsfsdfsdf'
    },
  ]
  return (
    <>
      <Header />
      <Slider slides={slidesData}/>
      <Collections data={group}/>
      <ProductsGroup />
    </>
  )
}

export default Home