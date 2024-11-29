import { useRef } from "react";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const  Signin = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response =  await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex
    justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="flex justify-center mb-1 pt-4">
              <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true} />
            </div>
        </div>
    </div>
}