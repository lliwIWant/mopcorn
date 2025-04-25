import React, {useState} from 'react'
import { useReviews } from '../../../../hooks/useReview';
import '../Reviews/Reviews.style.css'

const Reviews = ({id}) => {
    const { data, isLoading, isError, error } = useReviews(id);
    
    const [folded, setFolded] = useState({}); // true 접은 상태
    const [active, setActive] = useState("active"); // 더보기 display

    const toggleFold = (index) => {
        setFolded((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };

    if (isLoading) {
       return <h1>Loading...</h1>
     }
     if (isError) {
       return <Alert variant="danger">{error.message}</Alert>
     }
     console.log('ddd', data);
  return (
    <div className='reviews-area'>
        <h2 style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin:"20px 0"
        }}>Review</h2>
        {data && data.length > 0 ?(
            data.map((review, index)=>{
                const words = review.content.split(' ');
                const isLong = words.length > 50;
                const isFolded = folded[index] !== false; // 기본값 true (접힘)
        
                const displayedContent = isLong && isFolded
                  ? words.slice(0, 50).join(' ') + '...'
                  : review.content;
                  
                return(
                <div key={index} className='review-wrap'>
                    <div>{review.author}</div>
                    <div className="review-content">{displayedContent}</div>
                    {isLong && (
                        <div
                            className="more-button"
                            onClick={() => toggleFold(index)}
                        >
                            {isFolded ? '더보기' : '접기'}
                        </div>
                    )}
                </div>
            )})    
        ):(
            <div className='no-reivew'>작성된 리뷰가 없습니다. 😢</div>
        )}
        
    </div>
  )
}

export default Reviews