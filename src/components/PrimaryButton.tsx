interface PrimaryButtonProps {
  name: string;
}

function PrimaryButton({ name }: PrimaryButtonProps) {
  return (
    <button className="bg-cyan my-6 py-2 text-white w-full rounded-lg ">
      <p className="text-xxs font-bold m-1"> {name}</p>
    </button>
  );
}

export default PrimaryButton;
