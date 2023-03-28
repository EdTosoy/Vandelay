interface FormInputProps {
  label: string;
  placeholder: string;
}
function FormInput({ label, placeholder }: FormInputProps) {
  return (
    <div className="grid text-left my-4">
      <p className="ml-2 text-sm mb-1 text-gray900">{label}</p>
      <div className="p-3 border border-gray150  rounded-2xl ">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full mx-2 text-sm"
        />
      </div>
    </div>
  );
}

export default FormInput;
