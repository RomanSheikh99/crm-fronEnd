import Header from "../Shared/Header";

const AdminLayout = ({ children }) => {
    return (
        <div>
             <Header> </Header>
             { children }
        </div>
    );
};

export default AdminLayout;