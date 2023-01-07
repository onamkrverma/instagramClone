import React, { useContext } from 'react'
import { FaComment } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import ImageUpload from '../../components/imageUpload/ImageUpload'
import Navbar from '../../components/navbar/Navbar'
import firebaseContex from '../../context/FirebaseContex'
import './Explore.css'
import ExploreCardSkeleton from './ExploreCardSkeleton'


const Explore = () => {
  const { posts, loading } = useContext(firebaseContex)


  return (
    <div className='explore-page-container'>
      <div className="top-instagram-logo">
        <img
          src="/images/Instagram_logo.svg"
          alt="instagram logo"
          className='instagram-logo'
        />
      </div>
      <Navbar />
      <ImageUpload />


      <div className="explore-section">
        {
          loading ? <ExploreCardSkeleton />
            :
            posts.map((post) =>

              <div className="explore-post-container cur-point" key={post.id}>
                <div className="explore-post-image">
                  <img src={post.data().imageUrl} alt="post" />
                </div>
                <div className="like-comments-wrapper ">
                  <div className="like-wrapper align-center">
                    <div className="like-icon absolute-center">
                      <FiHeart style={{ width: '85%', height: '85%', fill: 'white' }} />
                    </div>
                    <div className="like-counts">
                      {post.data().likes}
                    </div>
                  </div>
                  <div className="comments-wrapper align-center">
                    <div className="comments-icon absolute-center ">
                      <FaComment style={{ width: '85%', height: '85%', fill: 'white' }} />
                    </div>
                    <div className="commets-counts">
                      89
                    </div>
                  </div>
                </div>
              </div>


            )}
      </div>
      
    </div>
  )
}

export default Explore