import WelcomeMessage from "@/components/WelcomeMessage";
import styles from "./dashboard.module.scss";

const page = () => {

    return (
        <div className={styles.container}>
            <h1>
                This is dashboard page
            </h1>
            <WelcomeMessage />
        </div>
    );
};

export default page;