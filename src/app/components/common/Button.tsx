import { Link, Pathnames } from "@/i18n/routing";


interface ButtonInterface {
  type: string;
  path?: Pathnames;
  label?: string;
  icon?: string;
  iconPosition?: string;
  color?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
}

function Button({ type, path, label, icon, iconPosition, color, size, className, onClick }: ButtonInterface) : React.ReactElement {
  return type === 'link' ? <Link className={`btn btn-${color} btn-${size} ${className}`} href={path as Pathnames}>
    {(iconPosition !== 'after' && icon) && <i className={`fa-solid fa-${icon}`}></i>}
    <span>{label}</span>
    {(iconPosition === 'after' && icon) && <i className={`fa-solid fa-${icon}`}></i>}
  </Link> :
  <button type="button" className={`btn btn-${color} btn-${size}`} onClick={onClick}>
    {(iconPosition !== 'after' && icon) && <i className={`fa-solid fa-${icon}`}></i>}
      <span>{label}</span>
    {(iconPosition === 'after' && icon) && <i className={`fa-solid fa-${icon}`}></i>}
  </button>
  
}

export default Button;