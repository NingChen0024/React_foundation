import React from 'react'

function Columns () {
  const items = [
    {
      id: 1,
      title: 'title_one'
    },
    {
      id: 2,
      title: 'title_two'
    }
  ]

  return (
    <>
      <>
        {
          items.map(item => (
            <React.Fragment key={item.id}>
              <td>Title</td>
              <td>{item.title}</td>
            </React.Fragment>
          ))
        }
        <td>Name</td>
        <td>Ning</td>
      </>
    </>
  )
}

export default Columns
