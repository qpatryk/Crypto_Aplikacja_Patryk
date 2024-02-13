import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        currency: "",
    });
    const [currencies, setCurrencies] = useState([]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const getData = () => {
        axios.get("https://api.coinbase.com/v2/currencies").then((res) => {
            const { data } = res;
            const currencies = data.data;
            setCurrencies(currencies);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "/";
    }

    useEffect(getData, []);

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    width: "350px",
                    margin: "0 auto",
                    padding: "1em",
                }}
            >
                <TextField
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Surname"
                    placeholder="Surname"
                    name="surname"
                    value={userData.surname}
                    onChange={handleChange}
                />
                <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                        value={userData.currency}
                        label="Currency"
                        name="currency"
                        onChange={handleChange}
                    >
                        {currencies.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.id} - {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Home;