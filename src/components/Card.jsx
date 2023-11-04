import React, { useContext } from 'react'
import "../style/card.css"
import {BsTrash, BsGearFill} from 'react-icons/bs'
import DataContext from '../context/DataContext'



const Card = ({kitap}) => {
  const {kitapSil,cardDuzenle} = useContext(DataContext);
  return (
      !kitap.isDeleted&&
      (
      <div key={kitap.id} className='card'>
        <button className='delete' onClick={()=>kitapSil(kitap.id)}><BsTrash/></button>
        <button className='edit' onClick={()=>cardDuzenle(kitap.id)}><BsGearFill/></button>
        <img src={kitap.kitapResim} alt="kitapResmi"/>
        <div className="card-body">
          <p>{kitap.kitapAdi}</p>
          <p>Kitap Kategorisi: {kitap.kitapKategori}</p>
          <p>Kitap yazarı : {kitap.kitapYazari}</p>
          <p>Sayfa Sayısı : {kitap.sayfaSayisi}</p>
          <p>Kitap Açıklaması : {kitap.kitapAciklama.substring(0,175)+"..."}</p>
        </div>
      </div>
      )  
  )
}


export default Card
