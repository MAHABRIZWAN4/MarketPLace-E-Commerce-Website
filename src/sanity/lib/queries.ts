import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "products"]{
    _id,
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url,
    tags,
    colors,
    }
`)




export const arrival_fourproducts = defineQuery(`
    *[_type == "products"][0..3]{
    _id,
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url,
    tags,
    colors
    }
`)



export const selling_fourproducts = defineQuery(`
    *[_type == "products"][13..16]{
    _id,
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url,
    tags,
    colors
    }
`)






export const like_fourproducts = defineQuery(`
    *[_type == "products"][4..7]{
    _id,
    name,
    price,
    description,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    "imageUrl": image.asset->url,
    tags,
    colors
    }
`)