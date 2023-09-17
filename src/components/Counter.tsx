'use client'
import React, {useState} from 'react';
import AnimatedNumber from "@/components/animated-number";
import {Button} from "@nextui-org/react";

const Counter = () => {
    let [value, setValue] = useState(1000);

    return (
        <div className={"flex gap-10 justify-center items-center py-4"}>
            <Button color={"warning"} variant={"ghost"} onClick={() => setValue(value - 100)}>-100</Button>

            <AnimatedNumber value={value} />

            <Button color={"warning"} variant={"ghost"} onClick={() => setValue(value + 100)}>+100</Button>
        </div>
    );
};

export default Counter;