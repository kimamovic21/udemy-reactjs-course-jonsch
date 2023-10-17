import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  // console.log(dispatch);
  const navigate = useNavigate();
  // console.log(navigate);

  const handleSubmit = (e) => {
      e.preventDefault();

      if (!username) {
        return;
      }

      dispatch(updateName(username));
      navigate('/menu');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => {
            // console.log(e.target.value);
            setUsername(e.target.value);
          }}
          className='input w-72 mb-8'
      />

      {username !== '' && (
        <div>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;