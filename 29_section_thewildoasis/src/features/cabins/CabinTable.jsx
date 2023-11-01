import { useSearchParams } from "react-router-dom";

import { useCabins } from "./useCabins.js";

import Spinner from '../../ui/Spinner.jsx';
import CabinRow from "./CabinRow.jsx";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import Empty from '../../ui/Empty.jsx';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) {
    return (
      <Spinner />
    );
  }
  if (!cabins.length) {
    return (
      <Empty resourceName='cabins' />
    );
  }

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;

  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount') filteredCabins= cabins.filter((cabin) => {
    return cabin.discount === 0;
  });
  if (filterValue === 'with-discount') filteredCabins = cabins.filter((cabin) => {
    return cabin.discount > 0;
  });

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';

  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header role='row'>
          <div>Image</div>
          <div>Cabin name</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body 
            // data={cabins} 
            // data={filteredCabins}
            data={sortedCabins}
            render={(cabin) => {
              // console.log(cabin);
              return (
                <CabinRow key={cabin.id} cabin={cabin} />
              )
          }}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;