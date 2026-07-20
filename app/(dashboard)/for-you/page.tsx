import SectionTitle from "@/app/components/SectionTitle";
import SectionSubTitle from "@/app/components/SectionSubTitle";
import BookCard from "@/app/components/BookCard";
import SelectedBook from "@/app/components/SelectedBook";
import RecommendedBooks from "@/app/components/RecommendedBooks";
import SuggestedBooks from "@/app/components/SuggestedBooks";

export default function forYou () {
    return (
        <>  
            <div className="for-you flex flex-col p-[32px] mt-[8px]">
                <SectionTitle title={"Selected just for you"} />
                    <SelectedBook />
                <SectionTitle title={"Recommended For You"} />
                <SectionSubTitle subTitle={"We think you'll like these"} />
                    <RecommendedBooks />
                <SectionTitle title={"Suggested Books"} />
                <SectionSubTitle subTitle={"Browse those books"} />
                    <SuggestedBooks />
            </div>
        </>
    )
}