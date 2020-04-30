import React, { Component, useState } from "react";

const NewCounter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>I'm in New Counter - {counter}!</h1>

			<button onClick={() => setCounter(counter + 1)}>Click Me!</button>
			<button onClick={showHellow}>Click Me!</button>
		</div>
	);
};

const showHellow = () => {
    alert('hello');
}

export default NewCounter;
