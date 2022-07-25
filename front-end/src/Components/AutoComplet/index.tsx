import { Autocomplete } from "@react-google-maps/api";
import { FormFilde, Props } from "../FormField";
import { LoadGoogleScript } from "../LogingGoogleKey";

export function AutoCompleteField(formProps: Props) {
    return (
        <LoadGoogleScript>
            <Autocomplete>
                <FormFilde
                    {...formProps}
                />
            </Autocomplete>
        </LoadGoogleScript>
    )
} 