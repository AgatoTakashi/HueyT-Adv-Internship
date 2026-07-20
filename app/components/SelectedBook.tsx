import { FaCirclePlay } from "react-icons/fa6";
import Image from "next/image";

async function SelectedBook () {

    const data = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
    const books = await data.json();
    const selectedBook = books[0];

    return ( 
        <>
            <div className="max-w-[681px]">
                <a className="selected__book--card flex mb-[16] w-full p-[24px]">
                    <div className="selected__book--left w-2/5 pr-[32px]">
                        <p>{selectedBook.subTitle}</p>
                    </div>
                    <div className="selected__books--right pl-[24px]">
                        <div className="selected__books--row flex">
                            <div className="img-wrapper">
                                <Image src={selectedBook.imageLink} width={140} height={140} alt="book image" />
                            </div>
                            <div className="selected__books--column ml-[24px]">
                                <div className="selected__books--text">
                                    <h2 className="text-[16px] mb-[8px]" >{selectedBook.title}</h2>
                                    <p className="selected__author mb-[16px]">{selectedBook.author}</p>
                                    <div className="controls flex items-center">
                                        <FaCirclePlay/>
                                        <p className="text-[14px] ml-[8px]">3 mins 23 secs</p> {/* where is this comming from */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default SelectedBook;