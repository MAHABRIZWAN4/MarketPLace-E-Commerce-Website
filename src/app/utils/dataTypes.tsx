import { StaticImageData } from "next/image";


//   Product Data  Type


export type productType = {

  id: number;

  src: string;

  title: string;

  price: number;

  rating: number;

  reviews: number;

  star: number;

  HalfStar: number;

  qty: number;

  color: string[];

  size: string[];

  image1: string;

  image2: string;

  image3: string;

  originalPrice?: number;

  discount?: number;

};


  


//   Cart Data  Types


export type Cart = {
    id:number;
    title:string;
    src: string[] | StaticImageData | string;
    slug:string;
    price: number;
    size:string[];
    color:string[];
    qty:number;
    discount?: number;
    uuid: string | number | undefined

}