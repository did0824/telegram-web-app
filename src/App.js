import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

const App = () => {
    const showPopup = useShowPopup();
    const theme = useThemeParams();
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};

    return (
        <div className="App">
            <button onClick={() => window.alert(initDataUnsafe)}>initDataUnsafe</button>
            <button onClick={() => window.alert(theme)}>theme</button>
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
