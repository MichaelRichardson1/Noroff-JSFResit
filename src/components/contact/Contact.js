import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormModal from "../layout/ConfirmModal";
import Col from "react-bootstrap/esm/Col";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    phone: yup.string().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/).required("Please enter your contact number"),
    query: yup.string().required("An option must be selected"),
    message: yup.string().required("Please enter your message").min(5, "The message must be at least 5 characters")
});

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <Col>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name">Name</label>
            <input className="col-md-8 input" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <label for="phone number">Telephone Number</label>
            <input className="col-md-8 input"{...register("phone")} />
            {errors.phone && <span>{errors.phone.message}</span>}

            <label for="query type">Query Type</label>
            <select {...register("query")}/>
                <option value="enquiry">Enquiry</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="general-message">General Message</option>
            {errors.query && <span>{errors.query.message}</span>}

            <label for="message">Message</label>
            <textarea className="col-md-8 input" style={{height: 100}} {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <FormModal />
        </form>
        </Col>
    );
}

export default Contact;
