import "./label-styles.scss";
interface LabelProps {
  size: "lg" | "md" | "sm";
  text: string;
  required: boolean;
  htmlFor: string;
}

const Label = ({ text, required, htmlFor,size }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`label label__${size}`}>
      {text}
      {required ? <span className="label__required">*</span> : ""}
    </label>
  );
};

export default Label;
