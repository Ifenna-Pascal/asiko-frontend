import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import PostCard from '../../components/cards/postCard'
import Trending from '../../components/cards/Trending';

const IndexPage = (props: any) => {
  console.log(props);
  return (
    <div className='flex'>
      <div className="lg:max-w-[720px] mx-3 lg:mx-0 my-4 w-full lg:mr-6">
      <PostCard 
        time="15mins"
        name="Ifenna Monanu"
        username="pascal"
        img='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
        postImg='https://plus.unsplash.com/premium_photo-1663047201632-4045f1e2d8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
        content='So, I read Star Wars novels. Lots of them. I mean LOTS of them. I started chronologically, but now I can skip around through eras and still know whats going on...'
       />
      <PostCard 
        time="15mins"
        name="Ifenna Monanu"
        username="pascal"
        img='https://lh3.googleusercontent.com/a/ALm5wu2vZ_7qfpjupoUOaBBizz6pJzvbKKqO6a3jY8uMDA=s96-c'
        postImg='https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' 
        content='So, I read Star Wars novels. Lots of them. I mean LOTS of them. I started chronologically, but now I can skip around through eras and still know whats going on...'
       />
       <PostCard 
        time="15mins"
        name="Ifenna Monanu"
        username="pascal"
        img='https://lh3.googleusercontent.com/a/ALm5wu2vZ_7qfpjupoUOaBBizz6pJzvbKKqO6a3jY8uMDA=s96-c'
        // postImg='https://plus.unsplash.com/premium_photo-1663047201632-4045f1e2d8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
        content='So, I read Star Wars novels. Lots of them. I mean LOTS of them. I started chronologically, but now I can skip around through eras and still know whats going on...'
       />
 </div>
 
    </div>
  )
}


export default IndexPage;


 

