import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { MdDarkMode } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="fixed bottom-0 right-0 m-5 cursor-pointer z-50"
        >
            {theme === "dark" ? <BsBrightnessHigh /> : <MdDarkMode />}
        </Button>
    );
};

export default ThemeToggle;