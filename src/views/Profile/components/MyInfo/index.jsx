import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';

const MyInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = () => {
        console.log('Form submitted');
    }

    return (
        <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formContainer}>
                <label htmlFor="name">
                    Name
                    <input type="text" 
                    name="name" id="" 
                    {...register("name", { required: true })}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" 
                    name="email" id="" 
                    {...register("email", { required: true })}/>
                </label>
                <label htmlFor="age">
                    Age
                    <input type="age" 
                    name="age" id="" 
                    {...register("age", { required: true })}/>
                </label>
        </form>
        </div>
    );
}

export default MyInfo;