import AntDesign from 'react-native-vector-icons/AntDesign'
import React, {useState, useEffect} from 'react'

import { Container, Option, OptionText } from './styles'

const SelectClass = (props) => {

    const matters = props.value
    const [selects, setSelects] = useState([])
    if (!props?.max) props.max == 100;

    const setSelect = (x) => {
        if (!selects.includes(x)) {
            var newArray = [...new Set([...selects])]
            if (newArray.length > (props.max-1) ) newArray = selects.slice((props.max * -1)+1);
            newArray = props.max == 1 ? [x] : [...newArray, x]
            setSelects(newArray)
            if (props.onUpdate) props?.onUpdate(newArray)
        } else {
            var newArray = selects.filter(element => element != x)
            setSelects(newArray)
            if (props.onUpdate) props?.onUpdate(newArray)

        }

    }
  
    return (
    <Container>
        {matters.map((x, i) => (
                <Option key={i} select={selects.includes(x)} onPress={() => setSelect(x)}>
                  <OptionText select={selects.includes(x)} >{x}</OptionText>
                  {selects.includes(x) ? <AntDesign onPress={() => setSelect(x)} name="closecircle" size={17} color="#363636" /> : <></>}
                </Option>
        ))}
    </Container>
  )
}

export default SelectClass