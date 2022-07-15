import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { FormFilde } from "../../Components/FormField";
import * as yup from 'yup'
import { ButtonFormUser } from "../../Components/StyledComponets";
import { EstimatePrice } from "./estimeprice";
import styled from "styled-components";
import { AutoCompleteField } from "../../Components/AutoComplet";
import { Address } from "../../Entites/Address";

type FormValues = {
    AddresInitial: Address | null
    AddresFinal: Address | null
    Description: string
}
export function DataOrder() {
    const formik = useFormik<FormValues>({
        initialValues: {
            AddresInitial: null,
            AddresFinal: null,
            Description: '',
        },
        validationSchema: yup.object().shape({
            Description: yup.string().required('Preencha a descrição'),
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <AutoCompleteField
                controlId="AddresInitial"
                label="Endereço de retirada"
                placeholder="Digite o endereço de retirada"
                {...formik.getFieldProps('AddresInitial')}
                error={formik.errors['AddresInitial']}
                isInvalid={formik.touched['AddresInitial'] && !!formik.errors['AddresInitial']}
                isValid={formik.touched['AddresInitial'] && !formik.errors['AddresInitial']}
                onChange={(address) => formik.setFieldValue('AddresInitial', address)}
            />
            <AutoCompleteField
                controlId="AddresFinal"
                label="Endereço de entrega"
                placeholder="Digite o endereço de entrega"
                {...formik.getFieldProps('AddresFinal')}
                error={formik.errors['AddresFinal']}
                isInvalid={formik.touched['AddresFinal'] && !!formik.errors['AddresFinal']}
                isValid={formik.touched['AddresFinal'] && !formik.errors['AddresFinal']}
                onChange={(address) => formik.setFieldValue('AddresFinal', address)}
            />
            <FormFilde
                controlId="Description"
                label="insira instruções para o motoboy"
                placeholder="Digite as instruções"
                {...formik.getFieldProps('Description')}
                error={formik.errors['Description']}
                isInvalid={formik.touched['Description'] && !!formik.errors['Description']}
                isValid={formik.touched['Description'] && !formik.errors['Description']}
            />
            <ButtonFormUser
                disabled={formik.isSubmitting || formik.isValidating}
                type="submit"
            >Calcular preço
            </ButtonFormUser>
            <EstimatePriceStyled>
                <EstimatePrice />
            </EstimatePriceStyled>
        </Form>
    )
}
const EstimatePriceStyled = styled.div`
    width: 100%;
    display: grid; 
    align-items: center;
    justify-content: center;
    padding-top: 15px;
`