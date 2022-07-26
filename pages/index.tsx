import Link from 'next/link'
import PostCard from '../components/cards/postCard'

const IndexPage = () => (
 <div className="p-4 md:p-8">
  <h1 className="md:ml-6 hidden md:block  mb-3 text-[#6D7175] text-2xl font-semibold font-Poppins ">Latest Posts</h1>
   <div className='grid md:grid-cols-2 grid-cols-1 '>
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardFour.png' content='Eating with lovelies' />
    <PostCard name='Monanu Ifenna' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardThree.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardTwo.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/cardFive.png" postImg='/imgs/cardOne.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardFour.png' content='Eating with lovelies' />
    <PostCard name='Monanu Ifenna' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardThree.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardTwo.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardOne.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardFour.png' content='Eating with lovelies' />
    <PostCard name='Monanu Ifenna' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardThree.png' content='Eating with lovelies' />
    <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardTwo.png' content='Eating with lovelies' />
    {/* <PostCard name='Francisca Emmanuel' username='pascal@gmail.com' img="/imgs/user.png" postImg='/imgs/cardOne.png' content='Eating with lovelies' /> */}
  </div>
 </div>
)

export default IndexPage
