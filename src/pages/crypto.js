import axios from "axios";
import { useEffect, useState } from "react"

const Crypto = () => {
    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
    const getCryptoCurrencies = () => {
        axios.get("https://api.coinbase.com/v2/currencies/crypto").then((res) => {
            const { data } = res;
            const currencies = data.data;
            setCryptoCurrencies(currencies);
        });
    }
    useEffect(getCryptoCurrencies, []);
    useEffect(() => {
        const temp = localStorage.getItem("userData");
        if (!temp) {
            window.location.href = "/";
        }
    }, [])
    return (
        <div><table>
            <thead>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        code
                    </th>
                </tr>
            </thead>
            <tbody>
                {cryptoCurrencies.map(currency => (
                    <tr key={currency.asset_id}>
                        <td>
                            {currency.name}
                        </td>
                        <td style={{
                            color: currency.color,
                        }}>
                            {currency.code}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    )
}

export default Crypto;