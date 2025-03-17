import { useForm } from "react-hook-form"


const SignupForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   

    const handleClearClick = () => {
        reset();
    };

    const handleSubmitForm = (data) => {
        console.log(data);
    };

    console.log("errors", errors);

    return (
        <div>SignupForm
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label htmlFor="name">
                    Name
                    <input type="text" 
                    name="name" id="" 
                    {...register("name", { required: true })}/>
                </label>
                <label htmlFor="age">
                    Age
                    <input type="number" 
                    name="age" id="" 
                    {...register("age", { required: true })}/>
                </label>
                <label htmlFor="address">
                    Address
                    <input type="text" 
                    name="address" id=""
                    {...register("address", { required: true })}/>
                </label>
                <label htmlFor="zipcode">
                    Zipcode
                    <input type="number" 
                    name="zipcode" id=""
                    {...register("zipcode", { required: true })}/> 
                </label>
                <label htmlFor="phone">
                    Phone
                    <input type="text" 
                    name="phone" id=""
                    {...register("phone", { required: true })}/> 
                </label>
                <div>
                    <button type='button' onClick={handleClearClick}>Clear</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
      )
}  

export default SignupForm