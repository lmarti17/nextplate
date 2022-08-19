import styles from './Button.module.scss'

interface iButtonProps {
  children: string
}

export default function Button(props: iButtonProps) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.submit}
    >
      {props.children}
    </button>
  )
}
