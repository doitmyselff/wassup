import  { useState } from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import gallery_5 from '../../assets/gallery-5.png'
import gallery_6 from '../../assets/gallery-6.png'
import gallery_7 from '../../assets/gallery-7.png'
import gallery_8 from '../../assets/gallery-8.png'

const Campus = () => {
  // State to control whether more images are shown
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle showMore state when button is clicked
  }

  return (
    <div className='campus'>
        <div className="gallery">
            {/* Display first 4 images */}
            <img src={gallery_1} alt="Gallery 1" />
            <img src={gallery_2} alt="Gallery 2" />
            <img src={gallery_3} alt="Gallery 3" />
            <img src={gallery_4} alt="Gallery 4" />

            {/* Conditionally display more images based on showMore state */}
            {showMore && (
              <>
                <img src={gallery_5} alt="Gallery 5" />
                <img src={gallery_6} alt="Gallery 6" />
                <img src={gallery_7} alt="Gallery 7" />
                <img src={gallery_8} alt="Gallery 8" />

              </>
            )}
        </div>
        
        {/* Button to toggle showing more images */}
        <button className='btn dark-btn' onClick={handleShowMore}>
          {showMore ? "See less" : "See more here"} <img src={white_arrow} alt="Arrow" />
        </button>
    </div>
  )
}

export default Campus;
