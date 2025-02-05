import { Layout } from "lucide-react";
import { title } from "process";


export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
 {
    name:"firstName",
    title:"First Name",
    type:"string"
},
{
    name:"lastName",
    title:"Last Name",
    type:"string"
}, 
{
    name:"address",
    title:"Address",
    type:"string"
},
{
    name:"email",
    title:"Email",
    type:"string"
},
{
    name:"phone",
    title:"Phone",
    type:"string",
},
{
    name:"zipcode",
    title:"ZipCode",
    type:"string"
}, 
{
    name:"city",
    title:"City",
    type:"string"
},

{
    name:"cartItems",
    title:"Cart Items",
    type:"array",
    of:[{ type:"reference", to : { type: "products"} }]
},
{
    name:"total",
    title:"Total",
    type:"number"
},
{
    name:"discount",
    title:"Discount",
    type:"string"
},
// {
//     name:"satus",
//     title:"Order Status",
//     type:"string",
//     options:{
//         list : [
//             { title : "Pending" ,  value : "pending" },
//             { title : "Success" ,  value : "success" },
//             { title : "Dispatch" ,  value : "dispatch" },
//         ],
//         layout : "radio",
//     },
//     initialvalue:"pending" // ByDefault Value
// },


{
    name: "status",
    title: "Order Status",
    type: "string",
    options: {
      list: [
        { title: "Pending", value: "pending" },
        { title: "Success", value: "success" },
        { title: "Dispatch", value: "dispatch" },
      ],
      layout: "radio",
    },
    initialValue: "pending" // ✅ Corrected
  }
  
]
}
