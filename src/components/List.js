import React from 'react'

export default function List(props) {
  return (
	<div className='list'>
		<h3>{props.pick} books</h3>
		{props.data.map((book, index) => (
			<div className='card'>
				<p key={index}>{book.title}</p>
				<p> author {book.authorName}</p>
			</div>	
			))}
	</div>
  )
}
