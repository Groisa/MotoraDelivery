import { Form, FormControlProps } from "react-bootstrap"
import { IMaskInput } from "react-imask"

type Props = {
    controlId: string
    label?: string
    error?: string
    mask?: { mask: string }[]
    onAccept?: (value: unknown) =>void
} & FormControlProps

export function FormFilde({ controlId, label, error, mask, onAccept , ...inputProps }: Props) {
    return (
        <Form.Group className='mb-3' controlId={controlId}>
            {label && <Form.Label className='mb-1'>{label}</Form.Label>}
            {mask ? (
                <Form.Control className="p-2"
                {...inputProps}
                as={IMaskInput}
                mask={mask}
                onAccept={onAccept}
                />
            ) :
                <Form.Control className="p-2" {...inputProps} />
            }
            <Form.Control.Feedback type='invalid'>
                {error}
            </Form.Control.Feedback>
        </Form.Group>

    )
}