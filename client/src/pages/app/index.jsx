import Explore from '@/components/Views/Explore'
import { authVerification } from '@/utils/verifyAuth'
import React from 'react'

const ExplorePage = () => {
  return (
    <div>
    <Explore/>
    </div>
  )
}

export const getServerSideProps = async(ctx)=>{
  const isAuth = authVerification(ctx.req);
  if (!isAuth.auth) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  
  return {
    props : {
      user : isAuth.user
    }
  }
}

export default ExplorePage