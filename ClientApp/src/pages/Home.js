import React from "react";
import logoImg from "../img/logo.jpg";
import { Card,  Logo } from "../components/AuthForm";
import 'bootstrap/dist/css/bootstrap.css';

function Home(props) {
    return (
        <Card>
            <Logo src={logoImg} />
            <ul>
                <li>Save time.</li>
                <li>Simplify the contract process.</li>
                <li>Identify and manage risk.</li>
                <li>Enhance the standardization of the contract process.</li>
                <li>Paper free contracts.</li>
            </ul>

            Version 1.0.0.8
        </Card>

    );
}

export default Home;