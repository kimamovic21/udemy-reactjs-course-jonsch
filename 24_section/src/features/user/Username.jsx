import { useSelector } from "react-redux";

const Username = () => {
  const usernamme = useSelector((state) => {
    console.log(state);
    return state.user.username;
  });
  // console.log(usernamme);

  if(!usernamme) {
    return null;
  }

  return (
    <div className="hidden text-sm font-semibold md:block">
      {usernamme}
    </div>
  );
}

export default Username;