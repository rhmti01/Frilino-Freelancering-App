import { Button } from "@heroui/button";
import { useTheme } from "../context/ThemeSwitchContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onPress={toggleTheme}
      className="p-2 hover:ring-1 ring-secondary-200 rounded-2xl shadow-sm
       shadow-secondary-300 hover:bg-secondary-100 duration-200
        cursor-pointer dark:text-secondary-300 dark:shadow-dark-600
        dark:bg-dark-800 dark:hover:bg-dark-900 dark:ring-dark-600 hover:shadow-md "
    >
      <svg
        className={` ${theme === "dark" ? "block" : "hidden"} dark:stroke-secondary-200 size-6.5 cursor-pointer `}
        id="light"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
      <svg
        className={` ${theme === "dark" ? "hidden" : "block"} size-6 cursor-pointer stroke-secondary-700`}
        id="dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </Button>
  );
}

export default ThemeSwitch;
