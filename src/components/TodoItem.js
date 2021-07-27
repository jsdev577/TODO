import React, { useState } from 'react'

export default function TodoItem({ title }) {
  return (
    <>
      <li className={`todo-item`}>
        <div className="description">
          <div className="item-check-wrapper">
            <div className={`item-check completed`}></div>
          </div>
          <span>{title}</span>
        </div>
      </li>
    </>
  )
}
