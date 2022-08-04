import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { FormFilde, Props } from "../FormField";
import { LoadGoogleScript } from "../LogingGoogleKey";

export function AutoCompleteField(formProps: Props) {
    const autoCompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autoCompleteRef.current = autocomplete
    }
    const handleChange = () => {
        console.log(autoCompleteRef.current?.getPlace())
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
            >
                <FormFilde
                    {...formProps}
                />
            </Autocomplete>
        </LoadGoogleScript>
    )
} 