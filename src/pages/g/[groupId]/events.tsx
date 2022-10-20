import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Loading from '../../../components/Loading'
import NavBar from '../../../components/NavBar'
import { trpc } from '../../../utils/trpc'

const GroupEvents: NextPage = () => {
  const session = useSession({ required: true })

  if (session.status === 'loading') return <Loading />

  return (
    <main>
      <NavBar session={session.data} />
    </main>
  )
}

export default GroupEvents