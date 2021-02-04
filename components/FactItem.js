import Link from 'next/link'
import factStyles from '../styles/Fact.module.css'

const FactItem = ({ fact }) => {
    return (
        <Link href={`/fact/${fact._id}`} >
            <a className={factStyles.card}>
                <h3>{fact.text} &rarr;</h3>
            </a>
        </Link>
    )
}

export default FactItem
