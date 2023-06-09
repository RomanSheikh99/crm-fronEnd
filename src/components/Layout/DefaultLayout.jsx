import Header from "../Shared/Header";

const DefaultLayout = ({ children }) => {
    return (
        <div>
             <Header> </Header>
             { children }
        </div>
    );
};

export default DefaultLayout;