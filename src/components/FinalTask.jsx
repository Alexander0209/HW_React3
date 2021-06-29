import React from 'react'
import { ModalWindow } from './ModalWindow'
import { TableInfo } from './TableInfo';

export const FinalTask = () => {

  const [isModalOpen, setModalOpen] = React.useState(false)
  const [data, setData] = React.useState([])
  
  return (
    <div>
      <ModalWindow setData={setData} setModalOpen={setModalOpen} isOpen={isModalOpen}/>
      { (data.length === 0 ) ? <h3>Записей пока нет!</h3> : <TableInfo data={data}/> }
    </div>
  )      
}

