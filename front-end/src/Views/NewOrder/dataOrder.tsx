import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { FormFilde } from "../../Components/FormField";
import * as yup from 'yup'
import { ButtonFormUser } from "../../Components/StyledComponets";
import { EstimatePrice } from "./estimeprice";
import styled from "styled-components";
import { AutoCompleteField } from "../../Components/AutoComplet";


export function DataOrder() {
    const formik = useFormik({
        initialValues: {
            AddresInitial: '',
            AddresFinal: '',
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
            />
            <AutoCompleteField
                controlId="AddresFinal"
                label="Endereço de entrega"
                placeholder="Digite o endereço de entrega"
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