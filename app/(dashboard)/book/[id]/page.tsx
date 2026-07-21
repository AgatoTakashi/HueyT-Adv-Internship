import { AiOutlineClockCircle, AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle";
import { TiMicrophoneOutline } from "react-icons/ti";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";

export default async function Book ({ params }: BookPageProps) {
    const { id } = await params;
    const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    const raw = await res.text();
    if (!raw) {
        throw new Error("API returned empty response.");
    }

    const book = JSON.parse(raw);
    const tags = book.tags

    return (
        <div className="book flex p-[32px] mt-[8px]">
            <div className="book__left w-3/4">
                <h1 className="mb-[16px]">{book.title}e</h1>
                <p className="font-bold mb-[16px]">{book.author}</p>
                <p className="border-bottom mb-[16px] text-[20px] pb-[16px]">{book.subTitle}</p>
                <div className="flex justify pb-[16px]">
                    <div className="left text-[14px] font-bold flex items-center w-[200px]"><AiOutlineStar />{book.averageRating} ({book.totalRating} ratings)</div>
                    <div className="right text-[14px] font-bold flex items-center w-[200px]"><AiOutlineClockCircle />03:24</div> {/*where? */}
                </div>
                <div className="flex border-bottom  pb-[16px]">
                    <div className="left text-[14px] font-bold flex items-center w-[200px]"><TiMicrophoneOutline />{book.type}</div>
                    <div className="right text-[14px] font-bold flex items-center w-[200px]"><HiOutlineLightBulb />{book.keyIdeas} Key ideas</div>
                </div>
                <div className="flex mt-[24px]">
                    <button className="flex items-center justify-center text-[16px] text-[white] mr-[16px]"><AiOutlineRead />Read</button><button className="flex items-center justify-center text-[16px] text-[white]"><TiMicrophoneOutline />Listen</button>
                </div>
                 <div className="saved flex items-center text-[blue] font-bold mt-[24px] mb-[32px]"><FaRegBookmark />Add title to My Library</div>
                <SectionTitle title="What's it about?" />
                <div className="flex font-bold">
                    {tags.map((tag: string) => {
                        return (
                            <div key={tag} className="tag mr-[16px]">
                            {tag}
                            </div>
                        );
                        })}
                </div>
                <p className="mt-[16px] mb-[16px]">{book.bookDescription}</p>
                <SectionTitle title="About the author" />
                <p>{book.authorDescription}</p>
            </div>
            <div className="book__right w-1/4">
                <Image src={book.imageLink} width={300} height={300} alt="book image" />
            </div>
        </div>
    )
}