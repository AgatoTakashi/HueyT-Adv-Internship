import SectionSubTitle from "@/app/components/SectionSubTitle";
import SectionTitle from "@/app/components/SectionTitle";

export default function settings () {
    return (
        <>
            <div className="settings flex flex-col p-[32px]">
                <h1 className="settings__title w-full text-[32px] text-[#032b41] pb-[16px] mb-[32px]">Settings</h1>
                <div className="plan pb-[16px] mb-[32px]">
                    <SectionTitle title="Your subscription plan" />
                    <SectionSubTitle subTitle="premium" />
                </div>
                <div className="email">
                    <SectionTitle title="Email" />
                    <SectionSubTitle subTitle="hanna@gmail.com" />
                </div>
            </div>
        </>
    )
}