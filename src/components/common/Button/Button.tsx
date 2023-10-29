import styles from './Button.module.css'

interface ButtonProps {
    buttonText: string
    onClick: () => void
}

function Button({ buttonText,onClick }: ButtonProps) {
    return (
        <button className={styles.buttonStyle}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}

export default Button