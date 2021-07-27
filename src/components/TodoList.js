import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ items }) {


  return (
    <div className={`todo-list-wrapper`}>

      <ul className="list" >
        {
          items.map(({ title }, index) => {
            return (
              <TodoItem key={index} title={title} />
            )
          })
        }

      </ul>
    </div>
  )
}
