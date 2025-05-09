import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';
import { useEffect } from 'react';

const USER_DATA = 'userData';

const MyInfo = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};

            if (userData) {
                setValue('name', userData.name || '');
                setValue('email', userData.email || '');
                setValue('age', userData.age || '');
            }   
        } catch (error) {
            console.error('Error parsing user data from localStorage', error);
        }
    }, [setValue]);

    const handleFormSubmit = (data) => {
        console.log('Form submitted', data);
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
        } catch (error) {
            console.error('Error parsing user data from localStorage', error);
        }
        
    }

    console.log(errors);

    return (
        <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formContainer}>
                <label htmlFor="name" className={styles.label}>
                    Name
                    <input type="text" 
                    name="name" id="" 
                    {...register("name", { required: true })} className={styles.input}/>
                </label>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="email" 
                    name="email" id="" 
                    {...register("email", { required: true })} className={styles.input}/>
                </label>
                <label htmlFor="age" className={styles.label}>
                    Age
                    <input type="number" 
                    name="age" id="" 
                    {...register("age", { required: true, min: 1, max: 100, valueAsNumber: true })} 
                    className={styles.input}/>
                </label>
                <button type="submit" className={styles.submitBtn}>Save</button>
        </form>
        </div>
    );
}

export default MyInfo;