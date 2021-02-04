import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { server } from '../../../config'
import {datafacts} from '../../../data'

const fact = ({ fact }) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      <Meta title={fact.type} />
      <h1>{fact.text}</h1>
      <br />
      <Link href='/'>Go Back</Link> 
      
    </>
  )
}

export const getStaticProps = async (context) => {

  const res = await fetch(`${server}/api/facts/${context.params.id}`)
  const fact = await res.json()

  return { props: { fact, datafacts } }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/facts`)
  const facts = await res.json()

  const ids = facts.map((fact) => fact._id)

  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return { paths, datafacts, fallback: false }
}

export default fact
