import type { FormEvent } from 'react'
import styles from './Waitlist.module.css'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../../queries/users/users'



const Waitlist = () => {
    const createUserMutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            console.log("User successfully added to waitlist")
        },
        onError: (error) => {
            console.error("Error adding user to waitlist:", error)
        }
    })
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        createUserMutation.mutate(email as string)
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
                    required
                />
                <button className="btn btnPrimary" type="submit">
                    Join waitlist
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
