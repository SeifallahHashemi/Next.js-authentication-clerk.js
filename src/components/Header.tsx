"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {Moon, Sun} from "lucide-react";

const Header = () => {

    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={"fixed top-4 right-4"}>
            <Button aria-label={"Toggle Theme"} color={theme === 'dark' ? "danger" : "primary"} variant="bordered" size={"sm"}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className={"h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}/>
                <Moon
                    className={"absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 light:text-emerald-600"}/>
                <span className={"sr-only"}>Toggle Theme</span>
            </Button>
        </div>
    )
};

export default Header;