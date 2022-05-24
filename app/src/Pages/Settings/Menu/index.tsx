import { Grid } from "@mui/material";

import { MdPayment } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import CardNav from "Components/CardNav";

const Menu = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item xs>
        <CardNav
          title="Account"
          description="User action information related to passwords and profile information"
          icon={<FiUser size={26} />}
          route="account"
        />
        <CardNav
          title="Billing"
          description="User billing information regarding subscription, payment and
                  promos"
          icon={<MdPayment size={26} />}
          route="billing"
        />
      </Grid>
    </Grid>
  );
};

export default Menu;
