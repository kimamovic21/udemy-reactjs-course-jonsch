import Counter from "../components/Counter";

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const users = await res.json(); 
  console.log(users);

  return (
    <div>
        <h2>Cabins page</h2>
        <ul>{users?.map((user) => 
            <li key={user.id}>{user.name}</li>)}
        </ul>
        <Counter users={users} />
    </div>
  )
}

export default Page