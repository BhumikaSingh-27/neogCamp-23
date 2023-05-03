import React, { useContext } from 'react'
import { TodoContext } from './TodoContext';

 const Open = () => {
    const { data } = useContext(TodoContext);
  return (
    <>
    {data.map(({ id, title, description, isCompleted }) => ( !isCompleted &&
       <> <div key={id}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div></>
      ))}
      </>
  )
}
export default Open;