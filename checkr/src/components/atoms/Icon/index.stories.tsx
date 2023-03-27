import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Icon from ".";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default{
    title:'Icon',
    component:Icon
}
export const BackIcon = () =><Icon> <FontAwesomeIcon icon={faChevronLeft as IconProp} /> </Icon>
export const ForwardIcon = () =><Icon> <FontAwesomeIcon icon={faChevronRight as IconProp} /> </Icon>