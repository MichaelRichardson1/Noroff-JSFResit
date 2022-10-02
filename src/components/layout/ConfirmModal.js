import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { displayTime } from "../../constants/modal";

function FormModal() {
	const [open, setOpen] = useState(false);	
	const [timeoutId, setTimeoutId] = useState(undefined);

	const handleClose = () => {
		setOpen(false);		
		clearTimeout(timeoutId);
	};

	const handleOpen = () => {
		setOpen(true);		
		setTimeoutId(
			setTimeout(() => {				
				handleClose();
			}, displayTime)
		);
	};

	return (
		<>
			<Button variant="dark" onClick={handleOpen} style={{marginTop: 10}} >
				Submit
			</Button>

			<Modal show={open} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Form Status</Modal.Title>
				</Modal.Header>
				<Modal.Body>Submitted Successfully! This box will close after {displayTime / 2000} seconds</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default FormModal;
