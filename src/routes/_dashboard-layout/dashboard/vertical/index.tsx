import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard-layout/dashboard/vertical/')({
    loader: () => {
        throw redirect({ to: '/dashboard/vertical/1' })
    },
    component: () => {
        const navigate = useNavigate()
        navigate({ to: '/dashboard/vertical/1' })
        return <>You are not supposed to be here</>
    },
})
