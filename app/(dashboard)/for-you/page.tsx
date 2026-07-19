import { FaCirclePlay } from "react-icons/fa6";
import SectionTitle from "@/app/components/SectionTitle";
import SectionSubTitle from "@/app/components/SectionSubTitle";
import BookCard from "@/app/components/BookCard";

export default function forYou () {
    return (
        <>
            <div className="for-you flex flex-col p-[32px]">
                <SectionTitle title={"Selected just for you"} />
                <div className="wrapper max-w-[681px]">
                    <a className="selected__book--card flex mb-[16] w-full p-[24px]">
                        <div className="selected__book--left w-1/3 pr-[32px]">
                            <p>How Constant Innovation Creates Radically Successful Businesses</p>
                        </div>
                        <div className="selected__books--right pl-[24px]">
                            <div className="selected__books--row flex">
                                <div className="img-wrapper">
                                    <img width={140} height={140}></img>
                                </div>
                                <div className="selected__books--column ml-[24px]">
                                    <div className="selected__books--text">
                                        <h2 className="text-[16px] text-[#032b41] mb-[8px]" >The Lean Startup</h2>
                                        <p className="selected__author mb-[16px]">Eric Ries</p>
                                        <div className="controls flex items-center">
                                            <FaCirclePlay/>
                                            <p className="text-[14px] text-[#032b41] ml-[8px]">3 mins 23 secs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <SectionTitle title={"Recommended For You"} />
                    <SectionSubTitle subTitle={"We think you'll like these"} />
                    <div className="flex mb-[32px] gap-[4px]">
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                <SectionTitle title={"Suggested Books"} />
                <SectionSubTitle subTitle={"Browse those books"} />
                <div className="flex mb-[32px] gap-[4px]">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </>
    )
}