import React, { useState } from "react";
import iconSprites from "../images/sprite.svg";
import shortid from "shortid";

const CreateNewList = ({ onAdd }) => {
	const [ list, setList ] = useState({
		id: shortid.generate(),
		title: ""
	});

	const handleChange = (event) => {
		const { value } = event.target;

		setList((prevList) => {
			return {
				...prevList,
				title: value
			};
		});
	};

	const submitNewList = (event) => {
		onAdd({ ...list });
		setList({ id: shortid.generate(), title: "" });
		event.preventDefault();
	};

	return (
		<React.Fragment>
			<li className="new-list__item">
				<form>
					<div className="new-list__link">
						<button
							onClick={submitNewList}
							className="new-list__btn-plus btn"
						>
							<svg className="new-list__icon">
								<use href={iconSprites + "#icon-circle-with-plus"} />
							</svg>
						</button>
						<input
							className="new-list__input"
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
