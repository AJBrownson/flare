import useSWR from "swr";
import { fetcher, gamesKey } from "@/lib/utils";
import { OUTCOME } from "./hgbdjbhjdvhjdvag";

type Spin = {
  address: string;
  outcome: OUTCOME;
  name: string;
};



export default function RecentSpin() {
  const { data, isLoading } = useSWR(gamesKey, fetcher);

  const skeletonLoader = (
    <div className="animate-pulse mb-1 px-5 pb-1 bg-[#10100E]">
      <div className="flex justify-between items-center w-full py-2 rounded-md">
        <div className="h-4 bg-[#30302B] rounded w-1/3"></div>
        <div className="px-5 flex items-center gap-1">
          <div className="h-4 bg-[#30302B] rounded w-16"></div>
        </div>
        <div className="h-4 bg-[#30302B] rounded w-1/3"></div>
      </div>
    </div>
  );

  if (!data || !data.data) {
    return (
      <div>
        {skeletonLoader}
        {skeletonLoader}
        {skeletonLoader}
        {skeletonLoader}
      </div>
    );
  }

  return (
    <>
      <div className="w-[320px] h-[400px] xl:max-w-[380px] overflow-y-auto">
        {isLoading && !data?.data ? (
          <>
            {skeletonLoader}
            {skeletonLoader}
            {skeletonLoader}
            {skeletonLoader}
            {skeletonLoader}
            {skeletonLoader}
          </>
        ) : (
          data.data.map((spin: Spin, i: number) => (
            <div
              key={i}
              className={`px-5 pb-1 ${
                i % 2 === 0 ? "bg-[#10100E]" : "bg-[#191815]"
              }`}
            >
              <div className="flex justify-between items-center w-full py-2 rounded-md">
                <p className="text-xs text-white w-1/3">
                  {spin.address.slice(0, 5)}...{spin.address.slice(-4)}
                </p>

                <div className="px-5 border border-transparent border-x-[#30302B] flex items-center gap-1">
                  <p
                    className={`text-xs font-semibold text-center rounded-3xl ${
                      spin.outcome === OUTCOME.WIN
                        ? "bg-[#8DD6AF] text-[#1B874D] py-[2px] px-3 w-16"
                        : "bg-[#FFD6C5] text-[#FF4E00] py-[2px] px-3 w-16"
                    }`}
                  >
                    {spin.outcome}
                  </p>
                </div>

                <p className="ml-4 text-xs text-white">{spin.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
