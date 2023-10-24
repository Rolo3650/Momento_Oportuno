import { LayoutOne } from '../../containers/layout/LayoutOne';
import { WellcomeTwo } from '../../containers/modules/wellcome/WellcomeTwo';
import { CardLogRes } from "../../components/module/cards/CardLogReg";

const LogRes = () => {
    return (
        <LayoutOne>
            <WellcomeTwo>
                <CardLogRes />
            </WellcomeTwo>
        </LayoutOne>
    );
};

export {LogRes};