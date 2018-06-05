// JSX - JavaScript XML

const userApp = {
	title: 'Indecision App',
	subtitle: 'This is the subtitle',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		userApp.options.push(option);
		e.target.elements.option.value = '';
		render();
	}	
};

const removeAll = () => {
	userApp.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * userApp.options.length);
	const option = userApp.options[randomNum];
	alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
	<div>
		<h1>{userApp.title}</h1>
		{userApp.subtitle && <p>{userApp.subtitle}</p>}
		<p>{userApp.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
		<button disabled={userApp.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
		<button onClick={removeAll}>Remove All</button>
		<ol>
		 {
		 	userApp.options.map((option) => {
		 		return <li key={option}>Option: {option}</li>
		 	})
		 }
		</ol>
		<form onSubmit = {onFormSubmit}>
		 <input type="text" name="option" />
		 <button>Add Option</button>
		</form>
	</div>
);

  ReactDOM.render(template, appRoot);
}

render();





