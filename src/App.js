import { useState, useMemo } from "react";
import { MainButton, useShowPopup, useThemeParams } from "@vkruglikov/react-telegram-web-app";

const App = () => {
    const showPopup = useShowPopup();
    const theme = useThemeParams();
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};
    const [optionList, setOptionList] = useState([]);

    const canSubmit = useMemo(() => {
        return initDataUnsafe?.user && optionList.length;
    }, [initDataUnsafe, optionList]);

    const giftList = [
        { name: "상품1", price: 1000 },
        { name: "상품2", price: 500 },
        { name: "상품3", price: 200 },
        { name: "상품4", price: 100 },
        { name: "상품5", price: 50 },
        { name: "상품6", price: 10 },
    ];

    return (
        <div
            className="App"
            // style={{ backgroundColor: theme[1].bg_color, color: theme[1].color }}
        >
            {JSON.stringify(theme)}
            <div>
                <p>
                    {initDataUnsafe?.user?.username ?? initDataUnsafe?.user?.last_name}님의 보유 포인트는 1000pt입니다!
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {giftList.map((item, idx) => (
                    <div key={idx}>
                        <p>{item.name}</p>
                        <img
                            alt="상품"
                            src="https://www.pngmart.com/files/17/Birthday-Gift-Box-PNG-File.png"
                            width={150}
                        />
                    </div>
                ))}
            </div>

            <MainButton
                text="교환하기"
                disable={!canSubmit}
                onClick={() => {
                    showPopup({
                        message: "Hello, I'am showPopup handle",
                    });
                }}
            />
        </div>
    );
};

export default App;
