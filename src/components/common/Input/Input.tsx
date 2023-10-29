import styles from './Input.module.css'

interface InputProps {
    placeholder: string
    value: string
    onChange: (event: any) => void
    suffix?: string | null
}
const Input = ({ placeholder, value, onChange, suffix = null }: InputProps) => {
    const inputClass = suffix !== null ? `${styles.inputStyle} ${styles.suffixActive}` : styles.inputStyle;

    return (
        <div className={styles.inputContainer}>
            <input
                className={inputClass}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span className={styles.suffixText}>{suffix || ""}</span>
        </div>
    )
}

export default Input