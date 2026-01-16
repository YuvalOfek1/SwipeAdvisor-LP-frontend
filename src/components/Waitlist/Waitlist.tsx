import type { FormEvent } from 'react'
import { useState } from 'react'
import styles from './Waitlist.module.css'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../../queries/users/users'
import { toast } from 'react-toastify'



const Waitlist = () => {
    const createUserMutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            console.log("dfgdgdfgdfgfdgdfgdfg")
            toast.success('User successfully added to waitlist')
        },
        onError: (error: any) => {
                const status = error.status
                const message = error?.response?.data?.message ?? error?.message ?? String(error)

                if (status === 409) {
                    toast.info('You are already on the waitlist.')
                } else if (status === 500) {
                    toast.error('Server error. Please try again later.')
                } else {
                    toast.error(`Error adding user: ${message}`)
                }
        },
    })
    
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        if (!email) return

        setSubmitting(true)
        try {
            await createUserMutation.mutateAsync(email as string)
        } catch (e) {
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section className={styles.waitlist} id="waitlist">
        <div className={styles.container}>
            <div className={styles.card}>
            <div>
                <h2 className={styles.title}>Join the Swipe Advisor waitlist</h2>
                <p>
                Get early access updates, onboarding options, and launch details. No spam - only the
                essentials.
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="waitlist-email">
                Work email address
                </label>
                <div className={styles.inputRow}>
                <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required/>
                    <button className="btn btnPrimary" type="submit" disabled={submitting}>
                        {submitting ? 'Joining…' : 'Join waitlist'}
                    </button>
                </div>
                <span className={styles.helper}>We’ll only send launch updates.</span>
            </form>
            </div>
        </div>
        </section>
    )
}

export default Waitlist
