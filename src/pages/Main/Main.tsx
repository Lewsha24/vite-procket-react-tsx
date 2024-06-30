import './Main.css'
import {Container, Grid} from "@mantine/core";
import React, {useCallback, useMemo, useState} from "react";
import SimpleMdeReact from "react-simplemde-editor";
import SimpleMdeToCodemirrorEvents from "react-simplemde-editor";
import LeftPanelNote from "../../layout/LeftPanelNote/LeftPanelNote";

export function Main() {

    const [value, setValue] = useState("Initial value");

    const onChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    // Make sure to always `useMemo` all the `options` and `events` props to ensure best performance!
    const events = useMemo(() => {
        return {
            focus: () => console.log(value),
        } as SimpleMdeToCodemirrorEvents;
    }, []);

  return (
    <>
        <Container fluid>
            <Grid>
                <Grid.Col span={3}>
                    <LeftPanelNote/>
                </Grid.Col>
                <Grid.Col span={9}>
                    <SimpleMdeReact events={events} value={value} onChange={onChange} />
                </Grid.Col>
            </Grid>
        </Container>
    </>
  )
}
// Лучше не делать такие функции
// Так как я могу дать любое название этой функции при импорте

// export default Button