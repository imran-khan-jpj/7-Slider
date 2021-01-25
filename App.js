import {useState, useEffect} from 'react';
import data from './data';

const App = () => {

	const reviews = data;
	const [value, setValue] = useState(0);

	const {name, image, title, quote} = reviews[value];

	useEffect(() => {
		const myTime = setInterval(() => {
			if(value === (data.length - 1)){
				return setValue(0);
			}
			setValue(value + 1);
		}, 3000);

		return () => clearInterval(myTime);
	}, [value])


	return (
		<div className="container-fluid">
			<div className="row border text-center justify-content-center mt-5">
				<div className="col-3 border mt-4">
					<h1><span style={{color : '#ba5d2c'}}>/</span> Reviews</h1>
				</div>
			</div>
			<div className="row border">
			<div className="col-2 offset-1 d-flex align-items-center">
					<div className="align-items-center"><button className="btn btn-dark" onClick={() => setValue(value === 0 ? data.length - 1 : value - 1)}>{'<'}</button></div>
			</div>
			<div className="col-6 text-center">
				<div>
					<img src={image} alt="myImage" className="person-img" />
					<h2>{name}</h2>
					<p>{title}</p>
					<p>{quote}</p>
				</div>				
			</div>
			<div className="col-2 offset-1 d-flex align-items-center">
				<div><button className="btn btn-dark" onClick={() => setValue(value === data.length - 1 ? 0 : value + 1)}>{'>'}</button></div>
			</div>
			</div>
		</div>
	)
}

export default App;