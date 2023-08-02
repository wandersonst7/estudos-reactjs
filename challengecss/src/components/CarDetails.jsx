import styles from './CarDetails.module.css'

const CarDetails = ({brand, color, km}) => {
  return (
    <div className={styles.containerCarDetails}>
        <ul>
            <li><strong>Marca:</strong> {brand}</li>
            <li><strong>Cor:</strong> {color}</li>
            <li><strong>KM:</strong> {km}</li>
        </ul>
    </div>
  )
}

export default CarDetails