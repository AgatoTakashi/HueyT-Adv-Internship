import SectionTitle from "@/app/components/SectionTitle";
import SectionSubTitle from "@/app/components/SectionSubTitle";
// import BookCard from "@/app/components/BookCard";

export default function library () {
    return (
        <>
            <div className="library flex flex-col p-[32px] mt-[8px]">
                <SectionTitle title={"Saved Books"} />
                <SectionSubTitle subTitle={"1 item"} />
                {/* <BookCard /> */}
                <SectionTitle title={"Finished"} />
                <SectionSubTitle subTitle={"13 item"} />
                <div className="flex">
                    {/* <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard /> */}
                </div>
            </div>
        </>
    )
}