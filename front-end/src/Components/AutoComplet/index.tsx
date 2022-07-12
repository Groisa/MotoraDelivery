import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { FormFilde, Props} from "../FormField";
import { LoginGoogleScript } from "../LogingGoogleKey";

export function AutoCompleteField ( fieldProps : Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
    }
    const handleChange = () => {

    }
    return (
        <LoginGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
            >
                <FormFilde
                {...fieldProps}
                />
            </Autocomplete>
        </LoginGoogleScript>
    )
} 