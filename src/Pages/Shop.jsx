import React from 'react'
import { Hero } from '../Compponents/Hero/Hero'
import { Popular } from '../Compponents/Popular/Popular'
import { Offer } from '../Compponents/Offers/Offer'
import { NewCollections } from '../Compponents/NewCollections/NewCollections'
import { NewsLetter } from '../Compponents/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
