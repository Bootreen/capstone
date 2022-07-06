import { Group, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ inputGroupOptions }) => {
  const { label, ...inputOptions } = inputGroupOptions;

  return (
    <Group>
      <Input {...inputOptions}/>
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
};

export default FormInput;