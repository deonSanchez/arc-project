import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

type CardNavProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  route: string;
};

const CardNav = ({
  title,
  description,
  icon,
  route,
}: CardNavProps): JSX.Element => {
  return (
    <Card sx={{ margin: 1.5 }}>
      <CardActionArea component={Link} to={route}>
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item sx={{ margin: 2 }}>
              {icon}
            </Grid>
            <Grid item xs>
              <Typography variant="h5" pb={1}>
                {title}
              </Typography>
              <Typography>{description}</Typography>
            </Grid>
            <Grid item>
              <BsChevronRight size={21} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardNav;
