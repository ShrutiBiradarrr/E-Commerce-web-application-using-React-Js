// const cart = [];

// const handleCart=(state=cart,action)=>{
//     const product = action.payload;
//     switch (action.type) {
//         case "ADDITEM":
//             //CHECK IF PRODCT IS ALREADY EXIST
//             const exist =state.find((x)=>x.id===product.id);
//             if(exist){
//                 //increase the quality
//                 return state.map((x)=>
//                 x.id===product.id ? {...x, qty : x.qty +1} :x
//                 );
//             }
//             else{
//                 const product = action.payload;
//                 return[
//                     ...state,
//                     {
//                         ...product,
//                         qty:1, 
//                     }
//                 ]
//             }
//             break;
            
//             case "DELITEM":
//                 //CHECK IF PRODCT IS ALREADY EXIST
//                 const exist1 =state.find((x)=>x.id===product.id);
//                 if(exist1.qty===1){
//                     return state.filter((x)=>x.id !== exist1.id);

//                 }else{
//                         //decrease the quality
//                     return state.map((x)=>
//                     x.id===product.id ? {...x, qty : x.qty - 1} :x
//                     );
//                 }
//                 break;
                
                
                
//         default:
//             return state;
//             break;
//     }
//     }
