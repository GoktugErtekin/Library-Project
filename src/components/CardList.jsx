import React, { useContext } from 'react'
import Card from './Card'
import "../style/cardlist.scss"
import DataContext from '../context/DataContext'

const CardList = () => {

  const { state } = useContext(DataContext)

  return (
    <div className='cardList'>
      {state.kitaplar.map(kitap=>
        kitap.kitapAdi.toLowerCase().startsWith(state.search.toLowerCase())&&
        <Card kitap={kitap} />
        )}
    </div>
  )
}

export default CardList