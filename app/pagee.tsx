import Image from "next/image";



export default function Home() {
  return (
    // <div className="w-full h-auto bg-black container px-4 md:px-16 mx-auto overflow-x-hidden">
    <div className="bg-black">
      <div className="w-full flex items-center justify-center mt-12 ">
        <div className="w-[500px] flex flex-col">
          <div className="w-full bg-[#007070] text-white rounded-md px-4 py-2">
            <p className="font-semibold text-md">Step into Solgacy</p>
            <p className="py-2 text-sm">
              Your Solana legacy await!, pick a game, dive in, and claim your
              reward
            </p>
          </div>
          <div className="px-5 relative ">
            {/* <Image src="/illustratoroo1.png" alt="hro" /> */}
            <button className="absolute bottom-0 left-20 px-6 py-2 bg-[#FFFFE3] text-black text-sm font-semibold rounded-md text-center">
              Read whitepaper
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-16 place-content-center gap-x-8 md:gap-y-0 gap-y-4">
        <div className="w-full rounded-md border-2 border-[#30302B] px-4 py-2">
          <div className="w-full flex justify-between items-center px-4">
            <div className="flex flex-col">
              <div className="text-white font-semibold py-4">Community</div>

              <div className="text-[#8E8E8E] text-md">
                join the fun, be part of the <br />
                movement
              </div>

              <div className="mt-8">
                <button className="rounded-md text-white bg-[#30302B] px-5 py-2 text-md font-light">
                  Join Now!
                </button>
              </div>
            </div>

            <div>
              {/* <Image src="/discord.png" alt="" /> */}
            </div>
          </div>
        </div>

        <div className="w-full rounded-md border-2 border-[#30302B] px-4 py-2">
          <div className="w-full flex justify-between items-center px-4">
            <div className="flex flex-col">
              <div className="text-white font-semibold py-4">
                Airdrop Allocation
              </div>

              <div className="text-[#8E8E8E] text-md">
                Sign in to your account to view <br />
                your $Solgacy allocation
              </div>

              <div className="mt-8">
                <button className="rounded-md px-5 text-white bg-[#30302B] py-2 text-md font-light">
                  Check your profile
                </button>
              </div>
            </div>

            <div>
              {/* <Image src="/gift.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-x-8">
          <div className="text-lg font-bold text-white">Top Players</div>
          <button className="px-5 py-2 text-md bg-[#191815] text-[#8E8E8E] rounded-md">
            Weekly Stats{" "}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-x-8 mt-8">
          <div>
            <div className="flex w-full justify-between items-center ">
              <div>Player</div>
              <div>Rank</div>
            </div>

            <div className="flex flex-col space-y-2 my-4">
              <div className="flex flex-col gap-y-5  w-full">
                <div className="w-full flex items-center justify-between py-2">
                  <div className="inline-flex items-center gap-x-3">
                    <span className="text-[#8E8E8E] text-md font-semibold">
                      01
                    </span>{" "}
                    <p>0x5xdge...789</p>
                  </div>
                  {/* <Image src="/medal-first-place.png" alt="" /> */}
                </div>
                <div className="w-full flex items-center justify-between py-2">
                  <div className="inline-flex items-center gap-x-3">
                    <span className="text-[#8E8E8E] text-md font-semibold">
                      01
                    </span>{" "}
                    <p>0x78exdge...789</p>
                  </div>
                  {/* <Image src="/medal-second-place.png" alt="" /> */}
                </div>
                <div className="w-full flex items-center justify-between py-2">
                  <div className="inline-flex items-center gap-x-3">
                    <span className="text-[#8E8E8E] text-md font-semibold">
                      01
                    </span>{" "}
                    <p>0x5xdge...789</p>
                  </div>
                  {/* <Image src="/medal-third-place.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex w-full justify-between items-center ">
              <div>Player</div>
              <div>Rank</div>
            </div>

            <div className="flex flex-col space-y-2 my-4">
              <div className="flex flex-col gap-y-5  w-full">
                <div className="w-full flex items-center justify-between py-2">
                  <div className="inline-flex items-center gap-x-3">
                    <span className="text-[#8E8E8E] text-md font-semibold">
                      01
                    </span>{" "}
                    <p>0x5xdge...789</p>
                  </div>
                  {/* <Image src="/medal-06.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex  items-ecnter justify-center mt-14">
        <div className="md:w-[43%] w-full px-5 py-2 flex flex-col items-center">
          <div className="text-white font-bold text-xl text-center">
            you can access gaming campaigns through mobile and web
          </div>
          <div className="mt-4 text-sm text-center">
            please open the Solgacy website on your PC or Phone by visiting
            www.solgacy.com in your web browser
          </div>

          <div className="mt-2 text-sm font-light text-gray-400 text-center">
            Mobile App launching soon on Play Store and Apple Store
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-x-5 mt-12">
          {/* <Image src="/Xbtn.png" alt="" /> */}
          {/* <Image src="/discordbtn.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
