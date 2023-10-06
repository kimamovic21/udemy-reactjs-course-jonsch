import { useSelector } from "react-redux";

const Customer = () => {
    const customer = useSelector((store) => {
      // console.log(store);
      return store.customer.fullName;
    });
    console.log(customer);

    return (
      <h2>👋 Welcome, {customer}</h2>
    );
};

export default Customer;