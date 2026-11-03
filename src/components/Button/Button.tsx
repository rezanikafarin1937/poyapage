import {ComponentProps} from "react";
import styles from "./button.module.scss";

type TVariant =  "primary" | "secondary" | "noColor" | "simple";

type TButton = ComponentProps<"button"> & {
    variant ?:TVariant
}

const Button = ({children,variant ="primary" ,...rest} : TButton) => {
  return (
    <button  {...rest} className={`${styles[variant]} ${styles.btn}`}>
      {children}
    </button>
  )
}

export default Button
