import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from './CabinTable';
import Modal from "../../ui/Modal";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens='table'>
          <Button>Show table</Button>
          </Modal.Open>
          <Modal.Window name='table'>
          <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  );
};

export default AddCabin;
