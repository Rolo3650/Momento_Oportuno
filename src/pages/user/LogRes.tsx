import { LayoutOne } from '../../containers/layout/LayoutOne';
import { WellcomeTwo } from '../../containers/modules/wellcome/WellcomeTwo';
import { CardLogRes } from '../../components/module/cards/CardLogReg';
import { useAppContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogRes = () => {
  const navigateTo = useNavigate();
  const { state } = useAppContext();

  useEffect(() => {
    if (state?.userState?.token && state?.userState?.token != '') {
        navigateTo('/panel/create');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.userState]);

  return (
    <LayoutOne>
      <WellcomeTwo>
        <CardLogRes />
      </WellcomeTwo>
    </LayoutOne>
  );
};

export { LogRes };
