import { Fragment, useEffect, useRef } from "react";

const EditTodo = ({ description, active, onChangeDescription }) => {
	const editActiveRef = useRef(null);

	useEffect(() => {
		if (active) {
			editActiveRef.current.focus();
		}
	}, [active]);

	const updateTodo = async (e) => {
		e.preventDefault();
		onChangeDescription(e.target.value);
	};

	return (
		<Fragment>
			<input
				type="text"
				className="edit-item text-secondary col"
				onChange={(e) => updateTodo(e)}
				ref={editActiveRef}
				autoFocus
				value={description}
			/>
		</Fragment>
	);
};

export default EditTodo;
