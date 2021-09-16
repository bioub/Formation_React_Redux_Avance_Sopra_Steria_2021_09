import './TopBar.css';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import { withThemeColor } from '../../hocs/withThemeColor';

export function TopBar({ themeColor }) {
  return (
    <div className="TopBar">
      <AppBar position="static" color={themeColor.color}>
        <Toolbar className="TopBar-Toolbar">
          <Link component={RouterLink} to="/" color="inherit">
            <Typography variant="h6" color="inherit">
              MyApp
            </Typography>
          </Link>
          <Link component={RouterLink} to="/todos" color="inherit">
            Todos
          </Link>
          <Link component={RouterLink} to="/users" color="inherit">
            Users
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withThemeColor(TopBar);
