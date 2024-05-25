import Image from "next/image";
import Genie from "../public/assets/genie.png";
import Text from "../public/assets/text-box.png";
import TextMobile from "../public/assets/text-mobile.png";
import DiscordStroke from "../public/assets/discord-stroke.png";
import Gift from "../public/assets/gift.png";
import Leaderboard from "@/components/leaderboard";
import Discordbtn from "../public/assets/discord btn.png";
import Xbtn from "../public/assets/X btn.png";


export default function Home() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles-bg.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat">
        <section className="bg-[#10100E] w-full max-w-full lg:max-w-[820px] p-4 shadow-lg">
          {/* hero image */}
          <div className="flex flex-col justify-center items-center relative">
            <Image
              src={Text}
              alt=""
              className="animate-bounce hidden xl:block"
            />
            <Image
              src={TextMobile}
              alt=""
              className="animate-bounce absolute top-0 xl:hidden"
            />
            <Image src={Genie} alt="" className="mt-16 w-60 h-60 z-10" />
            <button className="bg-[#FFFFE3] px-8 py-3 rounded-lg text-sm font-semibold">
              Read Whitepaper
            </button>
          </div>

          {/* cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-16 place-content-center gap-x-8 md:gap-y-0 gap-y-4">
            <div className="w-full rounded-md border-2 border-[#30302B] px-4 py-2">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-white font-semibold py-4">Community</div>

                  <div className="text-[#8E8E8E] text-sm xl:text-md">
                    Join the fun, be part of the <br />
                    movement
                  </div>

                  <div className="mt-8">
                    <button className="rounded-md text-white bg-[#30302B] px-10 py-3 text-sm xl:text-md font-light">
                      Join Now!
                    </button>
                  </div>
                </div>

                <div>
                  <Image src={DiscordStroke} alt="" className="w-24 h-24" />
                </div>
              </div>
            </div>

            <div className="w-full rounded-md border-2 border-[#30302B] px-4 py-2">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-white font-semibold py-4">
                    Airdrop Allocation
                  </div>

                  <div className="text-[#8E8E8E] text-sm xl:text-md">
                    Sign in to your account to view <br />
                    your $Solgacy allocation
                  </div>

                  <div className="mt-8">
                    <button className="rounded-md text-white bg-[#30302B] px-3 py-3 text-sm xl:text-md font-light">
                      Check your profile
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
          <div className="flex items-center justify-center mt-10 text-[#FFFFE3]">
            <div className="px-1 py-2 flex flex-col items-center">
              <p className="text-center px-4 xl:px-0">
                You can access gaming campaigns through mobile and web
              </p>
              <p className="mt-4 text-xs text-center">
                Please open the Solgacy website on your phone or PC by visiting
                www.solgacy.com in your web browser.
              </p>
              <p className="mt-4 text-xs text-[#8E8E8E] text-center">
                Mobile App launching soon on Play Store and Apple Store
              </p>
            </div>
          </div>

          {/* socials section */}
          <div className="w-full justify-center flex items-center gap-x-5 mt-10">
            <Image src={Xbtn} alt="" className="w-12 h-12" />
            <Image src={Discordbtn} alt="" className="w-12 h-12" />
          </div>
        </section>
      </main>
    </>
  );
}
