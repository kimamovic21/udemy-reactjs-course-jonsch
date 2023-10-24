import { useForm } from 'react-hook-form';
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
// import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const CreateCabinForm = ({ cabinToEdit = {} }) => {
  const { isCreating, createCabin} = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);

    const image = typeof data.image === 'string' ? data.iamge : data.image[0];

    if (isEditSession) 
      editCabin({ newCabinData: { ... data, image }, id: editId }, 
      {
        onSuccess: (data) => { 
          // console.log(data);
          reset();
        },
      },
    );
    else 
      createCabin({ ...data, image: image }, 
      {
        onSuccess: (data) => { 
          // console.log(data);
          reset();
        },
      });
  };

  const onError = (errors) => {
    console.error(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* <FormRow 
        label='Cabin name' 
        error={errors?.name?.message}
      >
      <Input 
            type="text" 
            id="name" 
            {...register('name', {
              required: 'This field is required',
            })} 
        />
      </FormRow> */}

      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input 
            type="text" 
            id="name" 
            disabled={isWorking}
            {...register('name', {
              required: 'This field is required',
            })} 
        />
        {errors?.name?.message && (
          <Error>{errors.name.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input 
            type="number" 
            id="maxCapacity" 
            disabled={isWorking}
            {...register('maxCapacity', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Min Capacity should be at least 1'
              },
              max: {
                value: 10,
                message: 'Max Capacity is 10'
              }
            })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input 
            type="number" 
            id="regularPrice" 
            disabled={isWorking}
            {...register('regularPrice', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Min Price should be at least 1'
              },
              max: {
                value: 1000,
                message: 'Max Price is 1000'
              }
            })}
        />
         {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input 
            type="number" 
            id="discount" 
            disabled={isWorking}
            defaultValue={0} 
            {...register('discount', {
              required: 'This field is required',
              validate: (value) => {
                return +value <= +getValues().regularPrice || 'Discount should be less than regular price'
              },
            })}
        />
         {errors?.discount?.message && (
          <Error>{errors.discount.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea 
            type="number" 
            id="description" 
            disabled={isWorking}
            defaultValue="" 
            {...register('description', {
              required: 'This field is required',
            })}
        />
         {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor='image'>Cabin photo</Label>
        <FileInput 
            id='image' 
            accept='image/*'
            type='file'
            {...register('image', {
              required: isEditSession ? false : 'This field is required',
            })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;