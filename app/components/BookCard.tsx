import { AiOutlineStar } from "react-icons/ai";
import { TfiTime } from "react-icons/tfi";

export default function BookCard () {
    return (
        <div className="bookCard max-w-[175px] max-h-[386] text-[14px] text-[#6b757b] m-[8px]">
            <img width={172} height={172}></img>
            <div className="bookTitle text-[16px] text-[#032b41] mb-[8px]">How to Win Friends and Influence People in the Digital Age</div>
            <div className="authorName mb-[8px]">Dale Carnegie</div>
            <div className="bookSubTitle mb-[8px] text-[#394547]">Time-tested advice for the digital age</div>
            <div className="bookCard_bottom flex">
                <div className="duration flex items-center mr-[8px]"><TfiTime className="mr-[4px]" />03:24</div>
                <div className="flex items-center"><AiOutlineStar className="mr-[4px]" />4.4</div>
            </div>
        </div>
    )
}