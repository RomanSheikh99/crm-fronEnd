import { useSelector } from "react-redux";
import AdminLayout from "../Layout/AdminLayout";

const Marketers = () => {
    const state = useSelector((state) => state);

    return (
        <AdminLayout>
            <div className={state.theme == "DARK" ? 'dark': 'light'}>
                <h1>create a user</h1>
            </div>
        </AdminLayout>
    );
};

export default Marketers;