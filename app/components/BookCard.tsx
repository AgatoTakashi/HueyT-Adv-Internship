import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { TfiTime } from "react-icons/tfi";
import Image from "next/image";

export default function BookCard({ bookData }) {
    if (!bookData) return null;
  return (
    <Link className="relative" href={`/book/${bookData.id}`}>
      <div className="bookCard max-w-[175px] text-[14px] text-[#6b757b] mr-[40px] mb-[40px] mt-[40px]">
        {bookData.subscriptionRequired? <div className="book__pill absolute text-[10px]">Premium</div> : "" }
        <Image
          src={bookData.imageLink}
          width={172}
          height={172}
          alt={bookData.title}
          className="mb-[8px]"
        />

        <div className="bookTitle text-[16px] text-[#032b41] mb-[8px]">
          {bookData.title}
        </div>

        <div className="authorName mb-[8px]">
          {bookData.author}
        </div>

        <div className="bookSubTitle mb-[8px] text-[#394547]">
          {bookData.subTitle}
        </div>

        <div className="bookCard_bottom flex">
          <div className="duration flex items-center mr-[8px]">
            <TfiTime className="mr-[4px]" />
            03:24 {/*where is the data?*/}
          </div>

          <div className="flex items-center">
            <AiOutlineStar className="mr-[4px]" />
            {bookData.averageRating}
          </div>
        </div>
      </div>
    </Link>
  );
}
