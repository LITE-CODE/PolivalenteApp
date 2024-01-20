import react from "react";

import { OptionsContainer, OptionButton, OptionText } from './styles'; 
const Options = ({options, setOptions}) => {

    const handleOptions = (name) => {
        setOptions(options.map((x) => x.name == name ? { ...x, select: true} : { ...x, select: false}));
    }

    return (
        <OptionsContainer>
            {
                options.map(({name, select}, index) => {
                    return (
                        <OptionButton select={select} key={index} onPress={() => handleOptions(name)}>
                            <OptionText select={select} key={index}>{name}</OptionText>
                        </OptionButton>
                    )
                })
            }
        </OptionsContainer>
    )
}

export default Options