type Props = {
  onClick: void;
  label: string;
};
export default function Button(onClick: Props, label: Props) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
