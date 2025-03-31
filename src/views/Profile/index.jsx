import { Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import styles from './Profile.module.css';

const Profile = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleTabCLick = (tab) => {
        navigate(`/profile/${tab}`);
    }

    return (
        <div>
            <Link to="/" className={styles.homeLink}>Inicio</Link>
            <div className={styles.tabsContainer}>
                <span className={`${styles.tab} ${pathname.includes('my-info') ? styles.active : '' }`}
                    onClick={() => handleTabCLick('my-info')}>Mi informaci&oacute;n</span>
                <span className={`${styles.tab} ${pathname.includes('liked-events') ? styles.active : '' }`}
                    onClick={() => handleTabCLick('liked-events')}>Eventos Favoritos</span>
            </div>

            <Outlet />
        </div>
    )
}

export default Profile;