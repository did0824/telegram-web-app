import { useState, useMemo } from "react";
import { MainButton, useShowPopup, useThemeParams } from "@vkruglikov/react-telegram-web-app";

const App = () => {
    const showPopup = useShowPopup();
    const theme = useThemeParams();
    const initDataUnsafe = useMemo(() => {
        return window.Telegram.WebApp.initDataUnsafe || {};
    }, []);

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

    window.Telegram.WebApp.setBackgroundColor("bg_color");

    return (
        <>
            <p>{JSON.stringify(theme)}</p>
            <div className="App" style={{ backgroundColor: theme[1].bg_color, color: theme[1].text_color }}>
                <p>
                    {initDataUnsafe?.user?.username ?? initDataUnsafe?.user?.last_name}님의 보유 포인트는 1000pt입니다!
                </p>

                <div className="grid grid-cols-2 gap-1">
                    {giftList.map((item, idx) => (
                        <div className="flex flex-col items-center" key={idx}>
                            <p>{item.name}</p>
                            <img
                                alt="상품"
                                src="https://www.pngmart.com/files/17/Birthday-Gift-Box-PNG-File.png"
                                width={150}
                            />
                            <p>{new Intl.NumberFormat().format(item.price)}pt</p>
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
        </>
    );
};

export default App;
