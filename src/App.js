import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

const App = () => {
    const showPopup = useShowPopup();
    const initData = window.Telegram.WebApp.initData || "";
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};

    return (
        <div className="App">
            <button onClick={() => console.log(initData)}>initData</button>
            <button onClick={() => console.log(initDataUnsafe)}>initDataUnsafe</button>
            <MainButton
                text="SHOW POPUP"
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
