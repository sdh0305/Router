import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
    const [data, setData] = useState();

    const fetch = () => {
        axios.get('https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=JLBr5npPhV').then((res: any) => setData(res));

        console.log(data);
    };

    useEffect(() => {
        fetch();
    }, []);

    return null;
}

export default Test;