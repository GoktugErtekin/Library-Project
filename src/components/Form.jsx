import React, { useContext } from 'react'
import "../style/form.scss"
import DataContext from '../context/DataContext'

const Form = () => {

const {
    state,
    dispatch,
    handleSubmit
} = useContext(DataContext);
  
  return (
    <form onSubmit={handleSubmit}>
        <h3>{state.secilenKitap?"Kitabı Düzenle":"Kitap Ekle"}</h3>
        <select value={state.kitapKategori} onChange={e=>dispatch({type:"kitapKategori",payload:e.target.value})}>
          <option>Kategori Seçiniz</option>
          <option>Yazılım</option>
          <option>Edebiyat</option>
          <option>Tarih</option>
          <option>Diğer</option>
        </select>
        <input value={state.kitapAdi} onChange={e=>dispatch({type:"kitapAdi",payload:e.target.value})} type="text" placeholder='Kitap Adı'/>
        <input value={state.kitapYazari} onChange={e=>dispatch({type:"kitapYazari",payload:e.target.value})} type="text" placeholder='Kitap Yazarı'/>
        <input value={state.sayfaSayisi} onChange={e=>dispatch({type:"sayfaSayisi",payload:e.target.value})} type="number" placeholder='Kitap Sayfa Sayısı'/>
        <input value={state.kitapResim} onChange={e=>dispatch({type:"kitapResim",payload:e.target.value})} type="text" placeholder='Kitap Resimi(URL)'/>
        <textarea value={state.kitapAciklama} onChange={e=>dispatch({type:"kitapAciklama",payload:e.target.value})} placeholder='Kitap Açıklaması'></textarea>
        <input disabled={
          state.kitapKategori==="Kategori Seçiniz" ||
          !state.kitapAdi.trim() ||
          !state.kitapYazari.trim() ||
          !state.kitapResim.trim() ||
          !state.kitapAciklama.trim() ||
          !state.sayfaSayisi
          } type="submit" value={state.secilenKitap?"Düzenle":"Ekle"}/>
    </form>
  )
}

export default Form