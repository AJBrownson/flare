"use client";
import Image from "next/image";
import Genie from "../public/assets/genie.png";
import Text from "../public/assets/text-box.png";
import TextMobile from "../public/assets/textm.png";
import DiscordStroke from "../public/assets/discord-stroke.png";
import Gift from "../public/assets/gift.png";
import Leaderboard from "@/components/leaderboard";
import Discordbtn from "../public/assets/discord btn.png";
import Xbtn from "../public/assets/X btn.png";
import ExtLink from "../public/assets/icons/link.png";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";



export default function Home() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-[#10100E] xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px] px-4">
          <NavBar />
          {/* <SlideDownDialog /> */}
          {/* hero image */}
          <div className="flex flex-col justify-center items-center relative mt-8">
            <Image
              src={Text}
              alt=""
              className="animate-bounce hidden ml-24 xl:block"
            />

            <Image
              src={TextMobile}
              alt=""
              className="animate-bounce absolute top-0 xl:hidden"
            />
            <Image
              src={Genie}
              alt=""
              className="mt-16 xl:-mt-10 w-60 h-60 z-10"
            />
            <button className="bg-[#FFFFE3] px-8 py-3 xl:px-14 rounded-lg text-[13px] font-semibold">
              Read Whitepaper
            </button>
          </div>

          {/* cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-16 place-content-center gap-x-8 md:gap-y-0 gap-y-4">
            <div className="w-full rounded-xl border-2 border-[#30302B] bg-[#191815] px-4 py-2">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-white font-montserrat font-bold py-4">
                    Community
                  </div>

                  <div className="text-[#8E8E8E] text-[13px] xl:text-md font-medium">
                    Join the fun, be part of the <br />
                    movement
                  </div>

                  <div className="mt-8 xl:mb-4">
                    <button className="rounded-md text-white font-medium bg-[#30302B] w-40 xl:w-44 px-10 py-3 text-[13px] xl:text-md hover:bg-[#191815] border border-transparent hover:border-[#30302B]">
                      Join Now!
                    </button>
                  </div>
                </div>

                <div>
                  <Image src={DiscordStroke} alt="" className="w-24 h-24" />
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl border-2 border-[#30302B] bg-[#191815] px-4 py-2">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-white font-montserrat font-bold py-4">
                    Airdrop Allocation
                  </div>

                  <div className="text-[#8E8E8E] text-[13px] xl:text-md font-medium">
                    Sign in to your account to view <br />
                    your $Solgacy allocation
                  </div>

                  <div className="mt-8 xl:mb-4">
                    <button className="flex gap-2 justify-center items-center rounded-md font-medium text-white bg-[#30302B] w-40 xl:w-44 px-3 py-3 text-[13px] hover:bg-[#191815] border border-transparent hover:border-[#30302B]">
                      Check your profile
                      <Image src={ExtLink} alt="" />
                    </button>
                  </div>
                </div>

                <div>
                  <Image src={Gift} alt="" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>

          {/* leaderboard */}
          <Leaderboard />

          {/* contact section */}
          <div className="flex items-center justify-center mt-10 xl:mt-20 text-[#FFFFE3]">
            <div className="px-1 py-2 flex flex-col items-center">
              <p className="text-center xl:text-xl px-4 xl:px-48 font-montserrat font-bold">
                You can access gaming campaigns through mobile and web
              </p>
              <p className="mt-4 xl:px-44 text-xs xl:text-sm text-center font-normal">
                Please open the Solgacy website on your phone or PC by visiting
                www.solgacy.com in your web browser.
              </p>
              <p className="mt-4 text-xs xl:text-sm text-[#8E8E8E] text-center font-semibold">
                Mobile App launching soon on Play Store and Apple Store
              </p>
            </div>
          </div>

          {/* socials section */}
          <div className="w-full justify-center flex items-center gap-x-5 mt-10">
            <Image src={Xbtn} alt="" className="w-12 h-12" />
            <Image src={Discordbtn} alt="" className="w-12 h-12" />
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}
