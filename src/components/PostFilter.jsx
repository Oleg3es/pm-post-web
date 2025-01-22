import React from 'react'
import MySelect from './UI/select/MySelect'
import InputSelection from './UI/input/InputSelection'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column',}}>
        <label htmlFor="" style={{ color: '#FFFFFF', padding: '0 0 16px 0'}}>Марка</label>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
          defaultValue="Выбрать марку"
          option={[{ value: 'title', name: 'по названию' }]}
        />
      </div>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column',}}>
        <label htmlFor="" style={{ color: '#FFFFFF', padding: '0 0 16px 0'}}>Модель</label>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
          defaultValue="Выбрать модель"
          option={[{ value: 'title', name: 'по названию' }]}
        />
      </div>
    </div>
  )
}

export default PostFilter