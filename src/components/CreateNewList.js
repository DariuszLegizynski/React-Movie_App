import React, { useState } from "react";
import iconSprites from "../images/sprite.svg";
import shortid from "shortid";

const CreateNewList = ({ onAdd }) => {
	const [ list, setList ] = useState({
		id: shortid.generate(),
		title: ""
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setList((prevList) => {
			return {
				...prevList,
				[name]: value
			};
		});
	};

	const submitNewList = (event) => {
		//below I should add the id: shortId.generate();
		onAdd({ id: shortid.generate(), ...list });
		setList({ title: "" });
		event.preventDefault();
	};

	return (
		<React.Fragment>
			<li className="side-nav__item">
				<form>
					<div className="side-nav__link">
						<button
							onClick={submitNewList}
							className="side-nav__btn-plus btn"
						>
							<svg className="side-nav__icon">
								<use href={iconSprites + "#icon-circle-with-plus"} />
							</svg>
						</button>
						<input
							className="side-nav__input"
							name="title"
							value={list.title}
							onChange={handleChange}
							placeholder="New List"
						/>
					</div>
				</form>
			</li>
		</React.Fragment>
	);
};

export default CreateNewList;
