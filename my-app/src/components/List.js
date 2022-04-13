import React from 'react'

export default function List(props) {
  return (
	<div>
		{props.data.map((book, index) => (
			<div className='card'>
				<p key={index}>{book.title}</p>
				<p> author {book.authorName}</p>
			</div>	
			))}
	</div>
  )
}
