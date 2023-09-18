"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {Moon, Sun} from "lucide-react";
import Link from "next/link";
import {SignedIn, SignedOut, SignInButton, SignOutButton, useAuth, UserButton} from "@clerk/nextjs";

const Header = () => {
    const {isLoaded, userId, sessionId, getToken} = useAuth();

    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={"w-screen h-12 bg-cyan-950 flex items-center"}>
            <div className={"max-w-7xl w-full container flex justify-between items-center"}>
                <Button aria-label={"Toggle Theme"} color={theme === 'dark' ? "danger" : "primary"} variant="bordered"
                        size={"sm"}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Sun className={"h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"}/>
                    <Moon
                        className={"absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 light:text-emerald-600"}/>
                    <span className={"sr-only"}>Toggle Theme</span>
                </Button>
                <SignedOut>
                    <div className={"space-x-6"}>
                        <Link href={'/signIn'}>sign in</Link>
                        <Link href={'/signUp'}>sign up</Link>
                        <SignInButton mode={"modal"}>
                            <Button aria-label={"Sign out"}
                                    color={theme === 'dark' ? "danger" : "primary"}
                                    variant="bordered"
                                    size={"sm"}>Sign In - Modal
                            </Button>
                        </SignInButton>
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className={'flex gap-2 items-center'}>
                        <UserButton afterSignOutUrl="/"/>
                        <Link href={"/profile"}>Profile</Link>
                        <SignOutButton><Button aria-label={"Sign out"}
                                               color={theme === 'dark' ? "danger" : "primary"}
                                               variant="bordered"
                                               size={"sm"}>Sign Out
                        </Button>
                        </SignOutButton>
                    </div>
                </SignedIn>
            </div>
        </div>
    )
};

export default Header;