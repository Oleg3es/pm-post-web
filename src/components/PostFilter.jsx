import React from 'react'
import MySelect from './UI/select/MySelect'
import InputSelection from './UI/input/InputSelection'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Выбрать марку"
        option={[{ value: 'title', name: 'по названию' }]} 
        />
      <InputSelection
        placeholder="Поиск..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})} />
    </div>
  )
}

export default PostFilter