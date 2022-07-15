
import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../Entites/Address";
import { FormFilde, Props} from "../FormField";
import { LoginGoogleScript } from "../LogingGoogleKey";

type PropsAutoComplet = {
    value: null | Address
    onChange: (address: null | Address) => void
} & Omit<Props, 'value' | 'onChange'>


export function AutoCompleteField ({value, onChange, ...fieldProps }: PropsAutoComplet) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
    }
    const handleChange = () => {
        const place = autocompleteRef.current?.getPlace()
        if(place && place.formatted_address && place.geometry?.location) {
            const address : Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    return (
        <LoginGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
            >
                <FormFilde
                {...fieldProps}
                onChange={() => onChange(null)}
                defaultValue={value?.address || ''}
                />
            </Autocomplete>
        </LoginGoogleScript>
    )
} 