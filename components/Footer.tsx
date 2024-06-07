import Link from "next/link"


export default function Footer() {
  return (
    <footer className="font-space font-light bg-[#10100E] text-[#FFFFE3] py-3 text-xs mt-10 border border-transparent border-t-[#2F3336]">
      <div className="flex items-center justify-center gap-x-2">
        <p>&copy; 2024 Solgacy</p>
        <p className="text-[#2F3336]">|</p>
        <Link
          href="https://solgacy.gitbook.io/whitepaper"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>Read Whitepaper</p>
        </Link>
      </div>
    </footer>
  );
}
