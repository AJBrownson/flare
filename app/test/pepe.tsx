import Link from "next/link";

type User = {
  walletAddress: string;
};

const users: User[] = [
  { walletAddress: "0xc574...A578" },
  { walletAddress: "0x82A9...B24C" },
  { walletAddress: "0xD10A...7A81" },
  { walletAddress: "0x1E32...5D09" },
  { walletAddress: "0x9B87...F1A5" },
];

const Users: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users List</h1>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.walletAddress} className="mb-2">
            <Link href={`/profile/${user.walletAddress}`}>
              <p className="cursor-pointer text-blue-500 hover:underline">
                {user.walletAddress}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
