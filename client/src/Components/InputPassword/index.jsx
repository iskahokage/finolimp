import './style.scss'
import React from 'react';
import {Button, Form} from "react-bootstrap";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function InputPassword({text, onChange, className}){
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return(
        <div>
            <Form.Label>{text}</Form.Label>
            <div className="inputWrapper mb-4">
                <Form.Control type={values.showPassword ? "text" : "password"}
                              placeholder="Введите пароль"
                              className={className}
                              onInput={handlePasswordChange("password")}
                              // onChange={onChange}
                              value={values.password}
                              // ref={ref}
                              // {...prop}
                />
                <Button variant="link-secondary" className="iconBtn" type="button"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                </Button>
            </div>
        </div>
    )
}

export default InputPassword