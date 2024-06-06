import Link from "next/link";

type User = {
  name: string;
  username: string;
//   email: string;
};

const users: User[] = [
  { name: "John Doe", username: "johndoe" },
  { name: "Jane Smith", username: "janesmith" },
  {
    name: "Alice Johnson",
    username: "alicejohnson",
  },
];

const Users: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users List</h1>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.username} className="mb-2">
            <Link href={`/profile/${user.username}`}>
              <p className="cursor-pointer text-blue-500 hover:underline">
                {user.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
