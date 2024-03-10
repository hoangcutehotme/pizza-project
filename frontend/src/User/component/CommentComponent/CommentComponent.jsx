import React from 'react'
import StarRating from '../StarRating/StarRating'
import './CommentStyle.css'

const CommentComponent = ({ imgSrc, rating, name, comment }) => {
    return (
        <div className='cover-item'>
            <div className='comment-item'>
                <img className='avatar' src={imgSrc} alt={imgSrc} />
                <div className='info'>
                    <div className='star-rating'>
                        <StarRating rating={rating} />
                    </div>

                    <p className='name'>{name}</p>
                    <p className='text-comment m-0 text-line-4'>
                        {comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentComponent
