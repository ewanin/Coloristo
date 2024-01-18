import { FaHandMiddleFinger } from "react-icons/fa6"
import Banner from "../Shared/Banner"
import BannerImg from '../assets/newsletter.png'

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl  mx-auto my-12">
        <Banner 
            banner={BannerImg}
            heading="Each student an share their discount code for friends"
            subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
            btn1="Get started"
            btn2=""
        />
    </div>
  )
}

export default Newsletter