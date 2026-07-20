import { AiOutlineClockCircle, AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import SectionTitle from "../../components/SectionTitle";
import { TiMicrophoneOutline } from "react-icons/ti";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";

export default function book () {
    return (
        <div className="book flex p-[32px] mt-[8px]">
            <div className="book__left w-3/4">
                <h1 className="mb-[16px]">How to Win Friends and Influence People in the Digital Age</h1>
                <p className="font-bold mb-[16px]">Dale Carnegie</p>
                <p className="border-bottom mb-[16px] text-[20px] pb-[16px]">Time-tested advice for the digital age</p>
                <div className="flex justify pb-[16px]">
                    <div className="left text-[14px] font-bold flex items-center w-[200px]"><AiOutlineStar />4.4 (608 ratings)</div>
                    <div className="right text-[14px] font-bold flex items-center w-[200px]"><AiOutlineClockCircle />03:24</div>
                </div>
                <div className="flex border-bottom  pb-[16px]">
                    <div className="left text-[14px] font-bold flex items-center w-[200px]"><TiMicrophoneOutline />Audio & Text</div>
                    <div className="right text-[14px] font-bold flex items-center w-[200px]"><HiOutlineLightBulb />8 Key ideas</div>
                </div>
                <div className="flex mt-[24px]">
                    <button className="flex items-center justify-center text-[16px] text-[white] mr-[16px]"><AiOutlineRead />Read</button><button className="flex items-center justify-center text-[16px] text-[white]"><TiMicrophoneOutline />Listen</button>
                </div>
                 <div className="saved flex items-center text-[blue] font-bold mt-[24px] mb-[32px]"><FaRegBookmark />Add title to My Library</div>
                <SectionTitle title="What's it about?" />
                <div className="flex font-bold">
                    <div className="tag mr-[16px]">Communication Skills</div><div className="tag">Technology & the Future</div>
                </div>
                <p className="mt-[16px] mb-[16px]">"How to Win Friends and Influence People" is a self-help book written by Dale Carnegie and first published in 1936. The book provides practical advice and techniques for improving one's communication and social skills, with the goal of building better relationships and becoming more influential in both personal and professional settings. The book covers topics such as the importance of smiling, listening actively, giving honest and sincere appreciation, avoiding criticism, and becoming genuinely interested in others. It also emphasizes the power of empathy and understanding other people's perspectives. "How to Win Friends and Influence People" has been widely read and praised for its timeless and practical advice, and is considered a classic in the field of self-improvement.</p>
                <SectionTitle title="About the author" />
                <p>Dale Carnegie (1888-1955) was an American author, lecturer, and developer of self-improvement courses. He is best known for his book "How to Win Friends and Influence People," which has sold over 30 million copies worldwide and is considered a classic in the self-help genre. Carnegie's teachings focused on improving interpersonal skills, communication, and leadership, and his courses and books were aimed at helping individuals become more confident, successful, and influential in both their personal and professional lives. He also founded the Dale Carnegie Training program, which is still in operation today and has helped millions of people around the world improve their communication and leadership skills.</p>
            </div>
            <div className="book__right w-1/4">
                <img width={300} height={300}></img>
            </div>
        </div>
    )
}