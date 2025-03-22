import styles from './Error404.module.css';
import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();

    return (
        <div className={styles.container}>
        <h3 className={styles.title}>Ops!!!</h3>
        <p className={styles.description}>No hemos encontrado la ruta que buscas.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
};

export default Error404;