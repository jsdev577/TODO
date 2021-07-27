import React, { useState } from 'react'

export default function Form({ addItem }) {
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const item = {
      "title": text,
      "description": ""
    }
    addItem(item)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`input-wrapper`}>
        <input aria-label="Create a new todo..." type="text" value={text} placeholder="Create a new todo..." onChange={e => setText(e.target.value)} />
      </div>
    </form>
  )
}
