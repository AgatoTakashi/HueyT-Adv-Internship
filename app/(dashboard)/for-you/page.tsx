import { FaCirclePlay } from "react-icons/fa6";
import SectionTitle from "@/app/components/SectionTitle";
import SectionSubTitle from "@/app/components/SectionSubTitle";
import BookCard from "@/app/components/BookCard";
import SelectedBook from "@/app/components/SelectedBook";

export default function forYou () {
    return (
        <>  
            <div className="for-you flex flex-col p-[32px] mt-[8px]">
                <SectionTitle title={"Selected just for you"} />
                    <SelectedBook />
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