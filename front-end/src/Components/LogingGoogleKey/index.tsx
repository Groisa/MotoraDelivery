import { useLoadScript } from "@react-google-maps/api";
import { Alert } from "react-bootstrap";

type Props = {
  children: JSX.Element
}
const libraries: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] = ['places']
export function LoadGoogleScript( { children }: Props) {
    const {loadError, isLoaded} = useLoadScript({
        googleMapsApiKey:'AIzaSyALlCd2X12quqEOjlH2Dqj98vIMvuWVxAQ',
        libraries
    })
    if (loadError) {
        return <Alert variant="danger">Falha ao carregar o Google. Recarregue a página.</Alert>
      }
      if(!isLoaded) {
        return <Alert variant="danger">Carregando....</Alert>
      }
    return children
}