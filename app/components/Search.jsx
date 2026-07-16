import { AiOutlineSearch } from "react-icons/ai";

export default function search () {
    return (
        <div className="top__container flex justify-center items-center w-full">
            <div className="search__wrapper flex w-full h-full justify-center items-center">
                <div className="search__left w-2/3 h-full"></div>
                <div className="search__right w-1/3 h-full">
                    <div className="input__container w-full h-full flex justify-center items-center">
                        <div className="input__wrapper relative flex items-center justify-end w-full">
                            <input className="search__input w-full h-full" type="text" placeholder="Search for books" />
                            <div className="search__icon-wrapper absolute">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}