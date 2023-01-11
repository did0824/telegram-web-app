import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

const App = () => {
    const showPopup = useShowPopup();
    const theme = useThemeParams();
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};

    return (
        <div className="App">
            <div>
                <p>initDataUnsafe</p>
                <p>{JSON.stringify(initDataUnsafe)}</p>
            </div>
            <div>
                <p>theme</p>
                <p>{JSON.stringify(theme)}</p>
            </div>
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
