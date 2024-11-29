import { ReactElement } from "react";

interface ButtonProps {
	variant: "primary" | "secondary";
	text: string;
	startIcon?: ReactElement;
	onClick?: () => void,
	fullWidth?: boolean,
	loading?: boolean,
}

const variantClasses = {
	primary: "bg-purple-600 text-white",
	secondary: "bg-purple-200 text-purple-600 font-light ",
};

const defaultStyles = "px-4 py-2 rounded-md flex items-center";

export function Button({onClick, variant, text, startIcon, fullWidth, loading }: ButtonProps) {
	return (
		<button onClick={onClick} className={`${variantClasses[variant]} ${defaultStyles} ${fullWidth? "w-full flex justify-center items-center" : ""}
		${loading ? "opacity-45":""}`} disabled={loading}>
			<div className="pr-2">{startIcon}</div>
			{text}
		</button>
	);
}
