import * as React from "react";
import { useState } from "react";

type ListComponentProps = {
	createSomething: () => void;
	readSomething: () => void;
	updateSomething: () => void;
	destroySomething: () => void;
};

type ButtonProps = {
	text: string;
	onClick: () => void;
};

const ListComponent = ({ createSomething, readSomething, updateSomething, destroySomething }: ListComponentProps) => {
	const [lastClickedButton, setLastClickedButton] = useState<string>("");

	const handleButtonClick = (text: string, buttonOnClick: () => void) => {
		setLastClickedButton(text);
		buttonOnClick();
	};

	const renderButton = (text: string, buttonOnClick: () => void) => (
		<li key={text}>
			<button onClick={() => handleButtonClick(text, buttonOnClick)} className='my-button'>
				{text}
			</button>
		</li>
	);

	const buttons: ButtonProps[] = [
		{ text: "Create", onClick: createSomething },
		{ text: "Read", onClick: readSomething },
		{ text: "Update", onClick: updateSomething },
		{ text: "Destroy", onClick: destroySomething },
	];

	return (
		<div>
			<h1>The last clicked button is {lastClickedButton}</h1>
			<ul>{buttons.map((button) => renderButton(button.text, button.onClick))}</ul>
		</div>
	);
};

export default ListComponent;
