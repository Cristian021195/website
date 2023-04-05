interface IProps{
    width:number,
    height:number
}
export const MenuIcon = ({height=20, width=20}:IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 50 50"
    >
      <path fill="#EBC8A7" d="M17 7h28l-2 7H15l2-7z"></path>
      <path fill="#F2B9B9" d="M11 22h28l-2 7H9l2-7z"></path>
      <path fill="#90CAF9" d="M5 37.273h28l-2 7H3l2-7z"></path>
    </svg>
  );
} 