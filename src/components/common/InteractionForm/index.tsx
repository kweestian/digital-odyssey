import { DropzoneOptions } from 'react-dropzone';
import AttachmentField from './components/AttachmentField';
import InputField from './components/InputField';

type FieldProps =
  | {
      fieldType: 'attachment';
      onChange?: DropzoneOptions['onDrop'];
      id?: undefined;
      value?: string | null;
    }
  | {
      fieldType: 'text';
      onChange: (e: React.SyntheticEvent<HTMLFormElement>) => void;
      id: string;
      value?: string | null;
    };

type Props = { isLoading: boolean; label: string } & FieldProps;

const FormField = ({ fieldType, onChange, id, label, value, isLoading }: Props) => {
  if (fieldType === 'attachment' && onChange) {
    return <AttachmentField onDrop={onChange} value={value} label={label} isMutating={isLoading} />;
  }

  if (fieldType === 'text') {
    return (
      <form onSubmit={onChange}>
        <InputField label={label} id={id} value={value} isLoading={isLoading} />
      </form>
    );
  }
  return null;
};

export default FormField;
