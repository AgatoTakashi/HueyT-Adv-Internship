"use client";

import { useEffect } from "react";
import Image from "next/image";
import pricing from "../assets/pricing-top.png";
import { HiDocumentText } from "react-icons/hi";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import SectionSubTitle from "../components/SectionSubTitle";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/app/firebase/config";

export default function ChoosePlan() {

  const PRICE_ID_YEARLY = "price_1Txfei2OVMhobNG7vF4UgVIV";   // Premium Plus Yearly
  const PRICE_ID_MONTHLY = "price_1Txfkc2OVMhobNG7HRqiVtxN"; // Premium Monthly


  // Accordion logic
  useEffect(() => {
    const keys = document.querySelectorAll<HTMLDivElement>(".key");

    keys.forEach((key) => {
      const top = key.querySelector<HTMLDivElement>(".key__top");
      const bottom = key.querySelector<HTMLDivElement>(".key__bottom");
      const arrowIcon = key.querySelector(".icon-arrow");


      if (!top || !bottom || !arrowIcon) return;

      top.addEventListener("click", () => {
        keys.forEach((otherKey) => {
          if (otherKey !== key) {
            const otherBottom = otherKey.querySelector<HTMLDivElement>(".key__bottom");
            const otherArrowIcon = otherKey.querySelector<SVGElement>(".arrow svg");

            if (otherBottom) {
              otherBottom.classList.add("hidden");
              otherBottom.classList.remove("open");
            }

            if (otherArrowIcon) {
              otherArrowIcon.classList.remove("rotate-180");
            }
          }
        });

        bottom.classList.toggle("hidden");
        bottom.classList.toggle("open");
        arrowIcon.classList.toggle("rotate-180");
      });
    });
  }, []);

  // Plan selection logic + dynamic text update
  useEffect(() => {
    const options = document.querySelectorAll<HTMLDivElement>(".option");
    const trialText = document.getElementById("trial-text");
    const trialButton = document.getElementById("trial-button");

    options.forEach(option => {
      option.addEventListener("click", () => {
        options.forEach(o => o.classList.remove("selected"));
        option.classList.add("selected");

        const isYearly = option.innerText.includes("Yearly");

        if (trialText) {
          trialText.textContent = isYearly
            ? "Cancel your trial at any time before it ends, and you won’t be charged."
            : "30-day money back guarantee, no questions asked.";
        }

        if (trialButton) {
          trialButton.textContent = isYearly
            ? "Start your free 7-day trial"
            : "Start your first month";

          trialButton.setAttribute("data-plan", isYearly ? "yearly" : "monthly");
        }
      });
    });
  }, []);

  async function handleTrialClick() {
    const trialButton = document.getElementById("trial-button");
    if (!trialButton) return;

    const plan = trialButton.getAttribute("data-plan") || "yearly";

    const priceId =
      plan === "yearly" ? PRICE_ID_YEARLY : PRICE_ID_MONTHLY;

    const functions = getFunctions(app);
    const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

    const { data } = await createCheckoutSession({ priceId });

    window.location.href = data.url;
  }

  return (
    <div className="choose-plan w-full">
      <div className="hero flex">
        <div className="row flex flex-col items-center">
          <h1 className="mt-[48px] mb-[40px] text-[48px] text-center">
            Get unlimited access to many amazing books to read
          </h1>
          <h4 className="text-center text-[20px] mb-[24px]">
            Turn ordinary moments into amazing learning opportunities
          </h4>
          <div className="img-wrapper max-w-[340px]">
            <Image src={pricing} alt="pricing" />
          </div>
        </div>
      </div>

      <div className="hero-under">
        <div className="flex items-center mt-[30px]">
          <div className="box">
            <div className="icon text-center">
              <HiDocumentText />
            </div>
            <div className="text">
              <p className="text-center">
                <span className="font-bold">Key ideas in few min</span> with many books to read
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon text-center">
              <RiPlantFill />
            </div>
            <div className="text">
              <p className="text-center">
                <span className="font-bold">3 million</span> people growing with Summarist everyday
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon text-center">
              <FaHandshake />
            </div>
            <div className="text">
              <p className="text-center">
                <span className="font-bold">Precise recommendations</span> collections curated by experts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="select-options flex flex-col items-center">
        <h1 className="text-center mt-[20px] mb-[30]">Choose the plan the fits you</h1>

        {/* Option 1 */}
        <div className="option flex justify-between p-[24px] selected mb-[16px]">
          <div className="circle-container w-1/10">
            <div className="circle">
              <div className="dot"></div>
            </div>
          </div>
          <div className="text w-9/10">
            <div className="text-top font-bold text-[18px]">Premium Plus Yearly</div>
            <div className="text-middle font-bold text-[24px] mt-[8px] mb-[8px]">$99.99/year</div>
            <div className="text-bottom text-[14px]">7-day free trial included</div>
          </div>
        </div>

        {/* SEPARATOR */}
          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>

        {/* Option 2 */}
        <div className="option flex justify-between p-[24px] mt-[16px]">
          <div className="circle-container w-1/10">
            <div className="circle">
              <div className="dot"></div>
            </div>
          </div>
          <div className="text w-9/10">
            <div className="text-top font-bold text-[18px]">Premium Monthly</div>
            <div className="text-middle font-bold text-[24px] mt-[8px] mb-[8px]">$9.99/month</div>
            <div className="text-bottom text-[14px]">No trial included</div>
          </div>
        </div>
      </div>

      <div className="trial-button sticky flex flex-col items-center pt-[32px]">
        <button
          id="trial-button"
          className="plan-btn text-[16px] w-[300px] h-[40px] mb-[16px]"
          onClick={handleTrialClick}
        >
          Start your free 7-day trial
        </button>

        <p
          id="trial-text"
          className="font-normal text-[12px] text-center mb-[60px]"
        >
          Cancel your trial at any time before it ends, and you won’t be charged.
        </p>
      </div>

      {/* Accordion */}
      <div className="accordion row">
        <div className="key">
          <div className="key__top flex justify-between">
            <SectionTitle title={"How does the free 7-day trial work?"} />
            <div className="arrow">
              <MdKeyboardArrowDown className="icon-arrow transform transition-transform duration-300 ease" />
            </div>
          </div>
          <div className="key__bottom hidden">
            <SectionSubTitle subTitle="Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial." />
          </div>
        </div>

        <div className="key">
          <div className="key__top flex justify-between">
            <SectionTitle title={"Can I switch subscriptions from monthly to yearly, or yearly to monthly?"} />
            <div className="arrow">
              <MdKeyboardArrowDown className="icon-arrow transform transition-transform duration-300" />
            </div>
          </div>
          <div className="key__bottom hidden">
            <SectionSubTitle subTitle="While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option." />
          </div>
        </div>

        <div className="key">
          <div className="key__top flex justify-between">
            <SectionTitle title={"What's included in the Premium plan?"} />
            <div className="arrow">
              <MdKeyboardArrowDown className="icon-arrow transform transition-transform duration-300" />
            </div>
          </div>
          <div className="key__bottom hidden">
            <SectionSubTitle subTitle="Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle." />
          </div>
        </div>

        <div className="key">
          <div className="key__top flex justify-between">
            <SectionTitle title={"Can I cancel during my trial or subscription?"} />
            <div className="arrow">
              <MdKeyboardArrowDown className="icon-arrow transform transition-transform duration-300" />
            </div>
          </div>
          <div className="key__bottom hidden">
            <SectionSubTitle subTitle="You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day." />
          </div>
        </div>
      </div>

      <div className="footer p-[40px]">
        <div className="row">
          <div className="link__container flex">
            <div className="w-1/4">
              <div className="link__title">Actions</div>
              <div className="link">Summarist Magazine</div>
              <div className="link">Cancel Subscription</div>
              <div className="link">Help</div>
              <div className="link">Contact Us</div>
            </div>

            <div className="w-1/4">
              <div className="link__title">Useful Links</div>
              <div className="link">Pricing</div>
              <div className="link">Summarist Business</div>
              <div className="link">Gift Cards</div>
              <div className="link">Authors & Publishers</div>
            </div>

            <div className="w-1/4">
              <div className="link__title">Company</div>
              <div className="link">About</div>
              <div className="link">Careers</div>
              <div className="link">Partners</div>
              <div className="link">Code of Conduct</div>
            </div>

            <div className="w-1/4">
              <div className="link__title">Other</div>
              <div className="link">Sitemap</div>
              <div className="link">Legal Notice</div>
              <div className="link">Terms of Service</div>
              <div className="link">Privacy Policies</div>
            </div>
          </div>

          <div className="copyright text-center pt-[80px]">
            Copyright © 2023 Summarist.
          </div>
        </div>
      </div>
    </div>
  );
}
