// dependencies
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledCountdown = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #207070;
    letter-spacing: 1px;
    margin-right: 2rem;
    padding-bottom: 1rem;
    align-self: flex-end;
`;

const Countdown = ({ handleCancel }) => {
    // set up ref for setTimeout
    const Ref = useRef(null);
    // set up state
    const [timer, setTimer] = useState("5:00");

    const getTimeRemaining = (e) => {
        // calculate time remaining for countdown clock
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);

        return { total, minutes, seconds };
    };

    const startTimer = (e) => {
        // set up timer, start counting
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update timer
            setTimer(minutes + ":" + (seconds > 9 ? seconds : "0" + seconds));
        }

        if (total === 0) {
            handleCancel();
        }
    };

    const clearTimer = (e) => {
        // reset timer
        setTimer("5:00");

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        // calculate finish time for 5 minutes
        let deadline = new Date();

        deadline.setMinutes(deadline.getMinutes() + 5);
        return deadline;
    };

    useEffect(() => {
        // when component mounts, start timer
        clearTimer(getDeadTime());

        return function cleanup() {
            clearInterval(Ref.current);
        };
    }, []);

    return <StyledCountdown>Time Remaining: {timer}</StyledCountdown>;
};

export default Countdown;
