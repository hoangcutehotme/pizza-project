import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                    fontSize='12px'
                    key={index}
                    icon={index < rating ? solidStar : regularStar}
                    style={{ color: index < rating ? '#FD5901' : '#DEDDDD', marginInline: '2px' }}
                />
            ))}
        </div>
    );
};

export default StarRating;