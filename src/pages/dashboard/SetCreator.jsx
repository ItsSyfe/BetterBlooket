import { useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import { setActivity } from "../../utils/discordRPC";
function SetCreator() {
    useEffect(() => {
        setActivity({
            state: "Set Creator",
            timestampStart: Date.now(),
        });
    }, []);
    return (<>
        <Sidebar>
            set creator
        </Sidebar>
    </>);
}
export default SetCreator;