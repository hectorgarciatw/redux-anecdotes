import { useSelector } from "react-redux";

const Notification = () => {
    const notification = useSelector((state) => state.notifications);

    const style = {
        border: "solid",
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        display: notification ? "" : "none",
    };

    return <div style={style}>{notification}</div>;
};

export default Notification;
