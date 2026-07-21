import SectionTitle from "@/app/components/SectionTitle";
import SectionSubTitle from "@/app/components/SectionSubTitle";


export default function library () {
    return (
        <>
            <div className="library flex flex-col p-[32px] mt-[8px]">
                <SectionTitle title={"Saved Books"} />
                <SectionSubTitle subTitle={"1 item"} />

                <SectionTitle title={"Finished"} />
                <SectionSubTitle subTitle={"13 item"} />
                <div className="flex">

                </div>
            </div>
        </>
    )
}