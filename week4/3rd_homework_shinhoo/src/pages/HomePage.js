import { useEffect } from "react";
import { useLocalStorage } from "../service/AuthService";
import { useParams } from "react-router-dom";
import "./styles/Homepage.css"
import { useNavigate } from "react-router-dom";

const pageContent = ["Homepage", "People", "Game"];

function HomePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const auth = useLocalStorage("auth", null);
    useEffect(() => {
        console.log(auth[0]);
        if (!auth[0]) {
            alert("로그인 하세요.");
            navigate("/login");
        }
    })

    return(<>
        <h1 className="page-content">{pageContent[id]}</h1>
    </>)
}

export default HomePage;