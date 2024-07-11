import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Compponents/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Compponents/ProductDisplay/ProductDisplay'
import { RelatedProducts } from '../Compponents/RelatedProducts/RelatedProducts'

export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { prductId } = useParams();
  const product = all_product.find((e) => e.id === Number(prductId));
  return (
    <div>
   <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <RelatedProducts/>
    </div>
  )
}
