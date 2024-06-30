import "easymde/dist/easymde.min.css";
import './Main.css'
import {Button, Container, Group, TextInput} from '@mantine/core';
import {useForm} from "@mantine/form";
import { useContext } from "react";
import { MyContext } from "../../context/context";

// position: InsertPosition, text: string
const Header = () => {
    
    const context = useContext(MyContext);

    if (!context) {
      throw new Error('Not  Context Header');
    }
    // Переддлеать этот бред 
    const { setShowDiv } = context;

    const SearchNote = useForm({
        mode: 'uncontrolled',
        initialValues: {
            search: 'search'
        }
    })

    const handleSearch = () => {
        SearchNote.setValues({
            search: 'search',
        })
    }

    const handleCreateNote = () => {
        setShowDiv(true)
    }

    return (
        <Container fluid >
            <div className="navBar"
            >
                <Button
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    onClick={() => handleCreateNote()}
                >
                    Создать заметку
                </Button>
                <Group >
                    <TextInput
                        placeholder="search"
                        key={SearchNote.key('search')}
                        {...SearchNote.getInputProps('search')}
                    />
                    <Button
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                        onClick={() => handleSearch()}
                    >
                        Поиск
                    </Button>
                </Group>
            </div>
        </Container>
    )
}

export default Header;