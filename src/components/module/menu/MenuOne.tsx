import React, { ReactNode } from 'react';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';

interface Props {
  children: ReactNode;
  title: string;
  color: string;
  position: {
    vertical: 'center' | 'bottom' | 'top' | number;
    horizontal: 'center' | 'right' | 'left' | number;
  };
  anchor: {
    vertical: 'center' | 'bottom' | 'top' | number;
    horizontal: 'center' | 'right' | 'left' | number;
  };
  icon: {
    link: string | undefined;
    color: string | undefined;
    size: string | undefined;
  };
}

const MenuOne: React.FC<Props> = ({
  children,
  title,
  color,
  position,
  anchor,
  icon,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-header">
      <Link
        component="button"
        color={color}
        underline="none"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        onMouseOver={handleClick}
      >
        {title}
        &nbsp;
        <span style={{ color: icon?.color, fontSize: icon?.size }}>
          <img src={icon?.link} alt={icon?.link} />
        </span>
      </Link>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchor}
        transformOrigin={position}
      >
        {children}
      </Menu>
    </div>
  );
};

export { MenuOne };
